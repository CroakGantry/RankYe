// iTunes Search API utility for fetching song preview URLs

export type iTunesSearchResult = {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
  artworkUrl100: string;
};

type iTunesResponse = {
  resultCount: number;
  results: iTunesSearchResult[];
};

// Cache for preview URLs to avoid repeated API calls
const previewCache = new Map<string, string>();

/**
 * Search iTunes for a song and return the preview URL
 */
export async function fetchPreviewUrl(
  songTitle: string,
  artistName: string
): Promise<string | null> {
  const cacheKey = `${songTitle}-${artistName}`.toLowerCase();
  
  // Check cache first
  if (previewCache.has(cacheKey)) {
    return previewCache.get(cacheKey) || null;
  }

  try {
    const searchTerm = encodeURIComponent(`${songTitle} ${artistName}`);
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=5`
    );
    
    if (!response.ok) {
      console.warn(`iTunes API error: ${response.status}`);
      return null;
    }

    const data: iTunesResponse = await response.json();
    
    if (data.resultCount === 0) {
      return null;
    }

    // Find the best match - prefer exact title match
    const normalizedTitle = songTitle.toLowerCase();
    const normalizedArtist = artistName.toLowerCase();
    
    const bestMatch = data.results.find(
      (result) =>
        result.trackName.toLowerCase().includes(normalizedTitle) ||
        normalizedTitle.includes(result.trackName.toLowerCase())
    ) || data.results.find(
      (result) =>
        result.artistName.toLowerCase().includes(normalizedArtist)
    ) || data.results[0];

    const previewUrl = bestMatch?.previewUrl || null;
    
    // Cache the result
    if (previewUrl) {
      previewCache.set(cacheKey, previewUrl);
    }

    return previewUrl;
  } catch (error) {
    console.error('Failed to fetch preview URL:', error);
    return null;
  }
}

/**
 * Batch fetch preview URLs for multiple songs
 */
export async function fetchPreviewUrls(
  songs: Array<{ id: string; title: string; artist: string }>
): Promise<Map<string, string>> {
  const results = new Map<string, string>();
  
  // Fetch in parallel with a small delay between batches to avoid rate limiting
  const batchSize = 5;
  
  for (let i = 0; i < songs.length; i += batchSize) {
    const batch = songs.slice(i, i + batchSize);
    
    const promises = batch.map(async (song) => {
      const previewUrl = await fetchPreviewUrl(song.title, song.artist);
      if (previewUrl) {
        results.set(song.id, previewUrl);
      }
    });
    
    await Promise.all(promises);
    
    // Small delay between batches to be nice to the API
    if (i + batchSize < songs.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return results;
}

/**
 * Clear the preview URL cache
 */
export function clearPreviewCache(): void {
  previewCache.clear();
}

