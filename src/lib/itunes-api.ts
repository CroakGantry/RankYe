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
  artistName: string,
  albumName?: string
): Promise<string | null> {
  const cacheKey = `${songTitle}-${artistName}-${albumName || ''}`.toLowerCase();
  
  // Check cache first
  if (previewCache.has(cacheKey)) {
    return previewCache.get(cacheKey) || null;
  }

  try {
    // Include album name for more accurate matching
    const searchTerm = encodeURIComponent(
      albumName 
        ? `${songTitle} ${artistName} ${albumName}`
        : `${songTitle} ${artistName}`
    );
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=10`
    );
    
    if (!response.ok) {
      console.warn(`iTunes API error: ${response.status}`);
      return null;
    }

    const data: iTunesResponse = await response.json();
    
    if (data.resultCount === 0) {
      return null;
    }

    // Normalize strings for comparison
    const normalizedTitle = songTitle.toLowerCase().trim();
    const normalizedArtist = artistName.toLowerCase().split(',')[0].trim(); // First artist
    const normalizedAlbum = albumName?.toLowerCase().trim();
    
    // Filter to only Kanye West results first (must have "kanye" in artist name)
    const kanyeResults = data.results.filter((result) => {
      const resultArtist = result.artistName.toLowerCase();
      return resultArtist.includes('kanye');
    });
    
    // If no Kanye results found, return null
    if (kanyeResults.length === 0) {
      return null;
    }
    
    // Score each Kanye result to find the best match
    const scoredResults = kanyeResults.map((result) => {
      let score = 0;
      const resultTitle = result.trackName.toLowerCase();
      const resultAlbum = result.collectionName.toLowerCase();
      
      // Title matching - remove common suffixes for comparison
      const cleanTitle = normalizedTitle.replace(/['']/g, "'");
      const cleanResultTitle = resultTitle.replace(/['']/g, "'");
      
      // Exact title match is worth the most
      if (cleanResultTitle === cleanTitle) {
        score += 100;
      } else if (cleanResultTitle.includes(cleanTitle) || cleanTitle.includes(cleanResultTitle.split('(')[0].trim())) {
        score += 60;
      } else if (cleanResultTitle.split('(')[0].trim() === cleanTitle || cleanTitle === cleanResultTitle.split('(')[0].trim()) {
        score += 80;
      }
      
      // Album match is important for disambiguation
      if (normalizedAlbum) {
        const cleanAlbum = normalizedAlbum.toLowerCase();
        const cleanResultAlbum = resultAlbum.split('(')[0].trim().toLowerCase();
        if (cleanResultAlbum.includes(cleanAlbum) || cleanAlbum.includes(cleanResultAlbum)) {
          score += 50;
        }
      }
      
      return { result, score };
    });
    
    // Sort by score descending
    scoredResults.sort((a, b) => b.score - a.score);
    
    // Only return if we have a reasonable match
    const bestMatch = scoredResults[0];
    if (bestMatch && bestMatch.score >= 60) {
      const previewUrl = bestMatch.result.previewUrl;
      if (previewUrl) {
        previewCache.set(cacheKey, previewUrl);
      }
      return previewUrl;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to fetch preview URL:', error);
    return null;
  }
}

/**
 * Batch fetch preview URLs for multiple songs
 */
export async function fetchPreviewUrls(
  songs: Array<{ id: string; title: string; artist: string; album?: string }>
): Promise<Map<string, string>> {
  const results = new Map<string, string>();
  
  // Fetch in parallel with a small delay between batches to avoid rate limiting
  const batchSize = 5;
  
  for (let i = 0; i < songs.length; i += batchSize) {
    const batch = songs.slice(i, i + batchSize);
    
    const promises = batch.map(async (song) => {
      const previewUrl = await fetchPreviewUrl(song.title, song.artist, song.album);
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

