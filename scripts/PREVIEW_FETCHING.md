# iTunes Preview URL Fetching Guide

This document explains how to fetch and store iTunes preview URLs for RankYe songs.

## Why Pre-Store Preview URLs?

Originally, the app fetched preview URLs from iTunes at runtime. This caused problems:

1. **CORS errors** - iTunes API blocks requests from localhost
2. **Rate limiting (429 errors)** - Too many requests get blocked
3. **Incorrect matches** - Some searches return wrong songs (covers, remixes)
4. **Unavailable albums** - Some albums (like Yeezus) aren't on iTunes

**Solution**: Pre-fetch all URLs once using a browser-based tool, then store them in `kanye-music.ts`.

---

## Quick Start

```bash
# Open the fetcher tool in your browser
open scripts/fetch-previews.html

# Click "Start Fetching" and wait for completion
# Click "Copy Output" and paste into kanye-music.ts
```

---

## The Browser-Based Fetcher Tool

The file `scripts/fetch-previews.html` is a standalone HTML page that fetches preview URLs directly from your browser (bypassing CORS issues).

### How to Use

1. **Open the file in your browser**:
   ```bash
   open scripts/fetch-previews.html
   ```

2. **Click "▶️ Start Fetching"** - The tool will:
   - Search iTunes for each song
   - Show progress with a visual progress bar
   - Log success ✅ or failure ❌ for each song
   - Use delays to avoid rate limiting

3. **Wait for completion** (~3-5 minutes for all albums)

4. **Click "📋 Copy Output"** to copy the generated code

5. **Paste into `src/data/kanye-music.ts`** - Merge the `previewUrl` properties into your existing album data

---

## Adding New Albums

To add a new album, edit the `albums` array in `fetch-previews.html` (around line 110):

```javascript
{
  id: 'new-album-id',
  title: 'New Album Name',
  songs: [
    { title: 'Song Title', artists: ['Kanye West'] },
    { title: 'Song with Feature', artists: ['Kanye West', 'Featured Artist'] },
    // Add all songs...
  ],
},
```

Then run the fetcher again.

---

## How the Matching Algorithm Works

The tool searches iTunes using: `{cleaned song title} {album name} Kanye`

### Title Cleaning

Featured artist info is stripped from titles for cleaner searches:

```javascript
function cleanTitle(title) {
  return title
    .replace(/\s*\(feat\.[^)]*\)/gi, '')  // Remove (feat. X)
    .replace(/\s*\(ft\.[^)]*\)/gi, '')    // Remove (ft. X)
    .replace(/\s*feat\.[^,]*/gi, '')      // Remove feat. X
    .replace(/\s*ft\.[^,]*/gi, '')        // Remove ft. X
    .trim();
}
```

### Scoring System

Results are scored to find the best match:

```javascript
// Exact title match = 100 points
// Partial title match = 60 points  
// Album name match = 50 points
// Minimum score required = 50 points
```

### Filtering

Only results from Kanye West or Kid Cudi are considered:

```javascript
const kanyeResults = data.results.filter(r => 
  r.artistName.toLowerCase().includes('kanye') ||
  r.artistName.toLowerCase().includes('kid cudi')
);
```

---

## Manual Search via Terminal

For individual songs or troubleshooting, use curl:

### Basic Search

```bash
curl -s "https://itunes.apple.com/search?term=Kanye+West+Stronger+Graduation&entity=song&limit=5" | \
  python3 -c "
import sys,json
d=json.load(sys.stdin)
for r in d.get('results',[]):
    print(f\"{r['trackName']} ({r['collectionName']}): {r.get('previewUrl','N/A')}\")
"
```

### Search for Collaboration Albums

For albums like Kids See Ghosts where the artist name is different:

```bash
curl -s "https://itunes.apple.com/search?term=Kids+See+Ghosts+Reborn&entity=song&limit=5" | \
  python3 -c "
import sys,json
d=json.load(sys.stdin)
for r in d.get('results',[]):
    print(f\"{r['trackName']} by {r['artistName']}: {r.get('previewUrl','N/A')}\")
"
```

### Search All Songs from an Album

```bash
for song in "Feel the Love" "Fire" "4th Dimension" "Reborn"; do
  echo "=== $song ==="
  curl -s "https://itunes.apple.com/search?term=Kids+See+Ghosts+$(echo $song | sed 's/ /+/g')&entity=song&limit=3" | \
    python3 -c "
import sys,json
d=json.load(sys.stdin)
for r in d.get('results',[]) if 'KIDS SEE GHOSTS' in r.get('artistName','').upper():
    print(f\"{r['trackName']}: {r.get('previewUrl','N/A')}\")
"
  sleep 1
done
```

---

## Known Issues & Solutions

### Issue: Collaboration Albums (e.g., Kids See Ghosts)

**Problem**: The artist on iTunes might be "KIDS SEE GHOSTS" instead of "Kanye West"

**Solution**: Search using the group name:
```bash
curl -s "https://itunes.apple.com/search?term=Kids+See+Ghosts+Feel+the+Love&entity=song&limit=5"
```

### Issue: Unavailable Albums (e.g., Yeezus)

**Problem**: Some albums aren't on iTunes in all regions

**Solution**: 
- Leave `previewUrl` off entirely for unavailable songs
- The app will show "Preview unavailable"
- Add a comment in the data file:
  ```typescript
  // Note: Yeezus is not available on iTunes, so no preview URLs
  ```

### Issue: Incorrect Matches

**Problem**: A preview plays the wrong song (cover, remix, or different track)

**Solution**:
1. Remove the `previewUrl` from that song in `kanye-music.ts`
2. Try searching manually with different terms
3. Or leave it without a preview

### Issue: Rate Limiting (429 errors)

**Problem**: Too many requests in a short time

**Solution**: 
- The browser tool has built-in delays (800ms between songs, 1.5s between albums)
- If you still hit limits, wait a few minutes and try again
- For manual curl commands, add `sleep 1` between requests

---

## Data File Format

In `src/data/kanye-music.ts`, songs with previews look like:

```typescript
{
  id: 'the-college-dropout',
  title: 'The College Dropout',
  year: 2004,
  artworkUrl: 'https://...',
  songs: [
    { 
      title: "We Don't Care", 
      artists: ['Kanye West'], 
      previewUrl: 'https://audio-ssl.itunes.apple.com/...' 
    },
    { 
      title: 'Jesus Walks', 
      artists: ['Kanye West'], 
      previewUrl: 'https://audio-ssl.itunes.apple.com/...' 
    },
    // Song without preview (unavailable on iTunes)
    { 
      title: 'Unavailable Song', 
      artists: ['Kanye West'] 
    },
  ],
},
```

---

## Complete Fetcher Tool Code

Below is the complete `fetch-previews.html` for reference. You can also copy this to create the file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iTunes Preview URL Fetcher</title>
  <style>
    * { box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #1a1a1a; 
      color: #fff; 
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    h1 { color: #f59e0b; }
    .progress { 
      background: #333; 
      padding: 15px; 
      border-radius: 8px; 
      margin: 20px 0;
    }
    .progress-bar {
      background: #333;
      border-radius: 4px;
      height: 20px;
      overflow: hidden;
      margin: 10px 0;
    }
    .progress-fill {
      background: linear-gradient(90deg, #f59e0b, #ef4444);
      height: 100%;
      transition: width 0.3s;
    }
    .stats { display: flex; gap: 20px; margin: 10px 0; }
    .stat { background: #333; padding: 10px 15px; border-radius: 6px; }
    .stat-value { font-size: 24px; font-weight: bold; color: #f59e0b; }
    button {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px 5px 10px 0;
    }
    button:hover { opacity: 0.9; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    #log {
      background: #0a0a0a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 15px;
      max-height: 300px;
      overflow-y: auto;
      font-family: monospace;
      font-size: 12px;
      white-space: pre-wrap;
    }
    #output {
      background: #0a0a0a;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 15px;
      max-height: 500px;
      overflow-y: auto;
      font-family: monospace;
      font-size: 11px;
      white-space: pre;
    }
    .success { color: #22c55e; }
    .error { color: #ef4444; }
    .album-header { color: #f59e0b; font-weight: bold; margin-top: 10px; }
  </style>
</head>
<body>
  <h1>🎵 iTunes Preview URL Fetcher</h1>
  <p>This tool fetches preview URLs from iTunes. Open in browser and click Start.</p>
  
  <div class="progress">
    <div>Progress: <span id="current">0</span> / <span id="total">0</span></div>
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill" style="width: 0%"></div>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="stat-value" id="foundCount">0</div>
        <div>Found</div>
      </div>
      <div class="stat">
        <div class="stat-value" id="notFoundCount">0</div>
        <div>Not Found</div>
      </div>
    </div>
  </div>
  
  <button id="startBtn" onclick="startFetching()">▶️ Start Fetching</button>
  <button id="copyBtn" onclick="copyOutput()" disabled>📋 Copy Output</button>
  
  <h3>Log:</h3>
  <div id="log"></div>
  
  <h3>Output (copy this to kanye-music.ts):</h3>
  <div id="output"></div>

  <script>
// ============================================
// ALBUM DATA - Edit this array to add albums
// ============================================
const albums = [
  {
    id: 'example-album',
    title: 'Example Album',
    songs: [
      { title: 'Song Name', artists: ['Kanye West'] },
      { title: 'Song with Feature', artists: ['Kanye West', 'Jay-Z'] },
    ],
  },
  // Add more albums here...
];

// ============================================
// FETCHER LOGIC - Usually no need to edit
// ============================================
let found = 0;
let notFound = 0;
let current = 0;
let total = albums.reduce((acc, a) => acc + a.songs.length, 0);
let results = [];
let isRunning = false;

function log(msg, type = '') {
  const logEl = document.getElementById('log');
  const span = document.createElement('span');
  span.className = type;
  span.textContent = msg + '\n';
  logEl.appendChild(span);
  logEl.scrollTop = logEl.scrollHeight;
}

function updateProgress() {
  document.getElementById('current').textContent = current;
  document.getElementById('total').textContent = total;
  document.getElementById('foundCount').textContent = found;
  document.getElementById('notFoundCount').textContent = notFound;
  document.getElementById('progressFill').style.width = `${(current / total) * 100}%`;
}

function cleanTitle(title) {
  return title
    .replace(/\s*\(feat\.[^)]*\)/gi, '')
    .replace(/\s*\(ft\.[^)]*\)/gi, '')
    .replace(/\s*feat\.[^,]*/gi, '')
    .replace(/\s*ft\.[^,]*/gi, '')
    .trim();
}

async function fetchPreviewUrl(songTitle, albumName) {
  const cleanedTitle = cleanTitle(songTitle);
  const searchTerm = encodeURIComponent(`${cleanedTitle} ${albumName} Kanye`);
  
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=15`
    );
    
    if (!response.ok) {
      return { error: `API error: ${response.status}` };
    }

    const data = await response.json();
    
    if (data.resultCount === 0) {
      return { error: 'No results' };
    }

    // Filter to only Kanye/Kid Cudi results
    const kanyeResults = data.results.filter(r => 
      r.artistName.toLowerCase().includes('kanye') ||
      r.artistName.toLowerCase().includes('kid cudi') ||
      r.artistName.toLowerCase().includes('kids see ghosts')
    );
    
    if (kanyeResults.length === 0) {
      return { error: 'No Kanye results' };
    }

    const normalizedTitle = cleanedTitle.toLowerCase();
    const normalizedAlbum = albumName.toLowerCase();
    
    // Score each result
    const scoredResults = kanyeResults.map(result => {
      let score = 0;
      const resultTitle = result.trackName.toLowerCase().replace(/['']/g, "'");
      const resultAlbum = result.collectionName.toLowerCase();
      
      if (resultTitle === normalizedTitle) score += 100;
      else if (resultTitle.includes(normalizedTitle) || 
               normalizedTitle.includes(resultTitle.split('(')[0].trim())) score += 60;
      
      if (resultAlbum.includes(normalizedAlbum) || 
          normalizedAlbum.includes(resultAlbum.split('(')[0].trim())) {
        score += 50;
      }
      
      return { result, score };
    });
    
    scoredResults.sort((a, b) => b.score - a.score);
    
    const bestMatch = scoredResults[0];
    if (bestMatch && bestMatch.score >= 50 && bestMatch.result.previewUrl) {
      return { url: bestMatch.result.previewUrl };
    }
    
    return { error: `Low score: ${bestMatch?.score || 0}` };
  } catch (error) {
    return { error: error.message };
  }
}

function generateOutput() {
  let output = '// Paste this into your albums array in kanye-music.ts\n\n';
  
  for (const album of results) {
    output += `  {\n`;
    output += `    id: '${album.id}',\n`;
    output += `    title: '${album.title}',\n`;
    output += `    year: ${album.year || 2000},\n`;
    output += `    artworkUrl: '...', // Keep your existing artworkUrl\n`;
    output += `    songs: [\n`;
    
    for (const song of album.songs) {
      const artistsStr = song.artists.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ');
      const titleStr = song.title.replace(/'/g, "\\'");
      
      if (song.previewUrl) {
        output += `      { title: '${titleStr}', artists: [${artistsStr}], previewUrl: '${song.previewUrl}' },\n`;
      } else {
        output += `      { title: '${titleStr}', artists: [${artistsStr}] },\n`;
      }
    }
    
    output += `    ],\n`;
    output += `  },\n`;
  }
  
  document.getElementById('output').textContent = output;
}

async function startFetching() {
  if (isRunning) return;
  isRunning = true;
  
  document.getElementById('startBtn').disabled = true;
  document.getElementById('log').innerHTML = '';
  document.getElementById('output').textContent = '';
  
  found = 0;
  notFound = 0;
  current = 0;
  results = [];
  
  updateProgress();
  
  log('🎵 Starting iTunes preview URL fetch...');
  log('⏱️  Using 800ms delay between requests\n');
  
  for (const album of albums) {
    log(`📀 ${album.title}`, 'album-header');
    
    const albumSongs = [];
    
    for (const song of album.songs) {
      current++;
      
      const result = await fetchPreviewUrl(song.title, album.title);
      
      if (result.url) {
        log(`  ✅ ${song.title}`, 'success');
        found++;
        albumSongs.push({ ...song, previewUrl: result.url });
      } else {
        log(`  ❌ ${song.title} (${result.error})`, 'error');
        notFound++;
        albumSongs.push(song);
      }
      
      updateProgress();
      
      // Delay between requests (800ms)
      await new Promise(r => setTimeout(r, 800));
    }
    
    results.push({ ...album, songs: albumSongs });
    
    // Extra pause between albums (1.5s)
    await new Promise(r => setTimeout(r, 1500));
  }
  
  log(`\n✨ Done! Found ${found}, Not found ${notFound}`);
  
  generateOutput();
  
  document.getElementById('copyBtn').disabled = false;
  document.getElementById('startBtn').disabled = false;
  isRunning = false;
}

function copyOutput() {
  const output = document.getElementById('output').textContent;
  navigator.clipboard.writeText(output).then(() => {
    alert('Copied to clipboard!');
  });
}

document.getElementById('total').textContent = total;
  </script>
</body>
</html>
```

---

## Current Coverage (as of last update)

| Album | Songs with Previews | Notes |
|-------|---------------------|-------|
| The College Dropout | 16/16 ✅ | |
| Late Registration | 17/17 ✅ | |
| Graduation | 10/13 | 3 unavailable |
| 808s & Heartbreak | 12/12 ✅ | |
| My Beautiful Dark Twisted Fantasy | 14/14 ✅ | |
| Watch the Throne | 10/12 | 2 unavailable |
| Yeezus | 0/10 ❌ | Not on iTunes |
| The Life of Pablo | 20/20 ✅ | |
| Ye | 7/7 ✅ | |
| Kids See Ghosts | 7/7 ✅ | Search as "Kids See Ghosts" |
| Jesus Is King | 10/11 | 1 unavailable |
| Donda | 26/27 | 1 unavailable |

**Total: ~149 out of 166 songs have working previews**

---

## File Structure

```
scripts/
├── fetch-previews.html      # Browser-based fetching tool
├── PREVIEW_FETCHING.md      # This documentation
└── fetch-preview-urls.mjs   # (Legacy) Node.js script - doesn't work due to CORS

src/data/
└── kanye-music.ts           # Song data with previewUrl properties
```

