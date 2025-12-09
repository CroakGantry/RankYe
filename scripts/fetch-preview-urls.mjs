#!/usr/bin/env node

/**
 * Script to fetch iTunes preview URLs for all songs
 * Run with: node scripts/fetch-preview-urls.mjs
 * 
 * This will output the songs data with preview URLs that you can copy into kanye-music.ts
 */

const albums = [
  {
    id: 'the-college-dropout',
    title: 'The College Dropout',
    songs: [
      { title: "We Don't Care", artists: ['Kanye West'] },
      { title: 'Graduation Day', artists: ['Kanye West'] },
      { title: 'All Falls Down', artists: ['Kanye West', 'Syleena Johnson'] },
      { title: "I'll Fly Away", artists: ['Kanye West'] },
      { title: 'Spaceship', artists: ['Kanye West', 'GLC', 'Consequence'] },
      { title: 'Jesus Walks', artists: ['Kanye West'] },
      { title: 'Never Let Me Down', artists: ['Kanye West', 'Jay-Z', 'J. Ivy'] },
      { title: 'Get Em High', artists: ['Kanye West', 'Talib Kweli', 'Common'] },
      { title: 'The New Workout Plan', artists: ['Kanye West'] },
      { title: 'Slow Jamz', artists: ['Kanye West', 'Twista', 'Jamie Foxx'] },
      { title: 'Breathe In Breathe Out', artists: ['Kanye West', 'Ludacris'] },
      { title: 'School Spirit', artists: ['Kanye West'] },
      { title: 'Two Words', artists: ['Kanye West', 'Mos Def', 'Freeway', 'The Boys Choir of Harlem'] },
      { title: 'Through the Wire', artists: ['Kanye West'] },
      { title: 'Family Business', artists: ['Kanye West'] },
      { title: 'Last Call', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'late-registration',
    title: 'Late Registration',
    songs: [
      { title: 'Wake Up Mr. West', artists: ['Kanye West'] },
      { title: "Heard 'Em Say", artists: ['Kanye West', 'Adam Levine'] },
      { title: 'Touch the Sky', artists: ['Kanye West', 'Lupe Fiasco'] },
      { title: 'Gold Digger', artists: ['Kanye West', 'Jamie Foxx'] },
      { title: 'Drive Slow', artists: ['Kanye West', 'Paul Wall', 'GLC'] },
      { title: 'My Way Home', artists: ['Kanye West', 'Common'] },
      { title: 'Crack Music', artists: ['Kanye West', 'The Game'] },
      { title: 'Roses', artists: ['Kanye West'] },
      { title: 'Bring Me Down (feat. Brandy)', artists: ['Kanye West'] },
      { title: 'Addiction', artists: ['Kanye West'] },
      { title: 'Diamonds from Sierra Leone (Remix)', artists: ['Kanye West', 'Jay-Z'] },
      { title: 'We Major', artists: ['Kanye West', 'Nas', 'Really Doe'] },
      { title: 'Hey Mama', artists: ['Kanye West'] },
      { title: 'Celebration', artists: ['Kanye West'] },
      { title: 'Gone', artists: ['Kanye West', 'Consequence', "Cam'ron"] },
      { title: 'Diamonds from Sierra Leone (bonus track)', artists: ['Kanye West'] },
      { title: 'Late', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation',
    songs: [
      { title: 'Good Morning', artists: ['Kanye West'] },
      { title: 'Champion', artists: ['Kanye West'] },
      { title: 'Stronger', artists: ['Kanye West'] },
      { title: 'I Wonder', artists: ['Kanye West'] },
      { title: 'Good Life', artists: ['Kanye West', 'T-Pain'] },
      { title: "Can't Tell Me Nothing", artists: ['Kanye West'] },
      { title: 'Barry Bonds', artists: ['Kanye West', 'Lil Wayne'] },
      { title: 'Drunk and Hot Girls', artists: ['Kanye West', 'Mos Def'] },
      { title: 'Flashing Lights', artists: ['Kanye West', 'Dwele'] },
      { title: 'Everything I Am', artists: ['Kanye West', 'scratches by DJ Premier'] },
      { title: 'The Glory', artists: ['Kanye West'] },
      { title: 'Homecoming', artists: ['Kanye West', 'Chris Martin'] },
      { title: 'Big Brother', artists: ['Kanye West'] },
    ],
  },
  {
    id: '808s-heartbreak',
    title: '808s & Heartbreak',
    songs: [
      { title: 'Say You Will', artists: ['Kanye West'] },
      { title: 'Welcome To Heartbreak', artists: ['Kanye West', 'Kid Cudi'] },
      { title: 'Heartless', artists: ['Kanye West'] },
      { title: 'Amazing', artists: ['Kanye West', 'Jeezy'] },
      { title: 'Love Lockdown', artists: ['Kanye West'] },
      { title: 'Paranoid', artists: ['Kanye West', 'Mr Hudson'] },
      { title: 'RoboCop', artists: ['Kanye West'] },
      { title: 'Street Lights', artists: ['Kanye West'] },
      { title: 'Bad News', artists: ['Kanye West'] },
      { title: 'See You In My Nightmares', artists: ['Kanye West', 'Lil Wayne'] },
      { title: 'Coldest Winter', artists: ['Kanye West'] },
      { title: 'Pinocchio Story', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'my-beautiful-dark-twisted-fantasy',
    title: 'My Beautiful Dark Twisted Fantasy',
    songs: [
      { title: 'Dark Fantasy', artists: ['Kanye West'] },
      { title: 'Gorgeous', artists: ['Kanye West', 'Kid Cudi', 'Raekwon'] },
      { title: 'Power', artists: ['Kanye West'] },
      { title: 'All of the Lights (Interlude)', artists: ['Kanye West'] },
      { title: 'All of the Lights', artists: ['Kanye West'] },
      { title: 'Monster', artists: ['Kanye West', 'Jay-Z', 'Rick Ross', 'Nicki Minaj', 'Bon Iver'] },
      { title: 'So Appalled', artists: ['Kanye West', 'Swizz Beatz', 'Jay-Z', 'Pusha T', 'Cyhi the Prynce', 'RZA'] },
      { title: 'Devil in a New Dress', artists: ['Kanye West', 'Rick Ross'] },
      { title: 'Runaway', artists: ['Kanye West', 'Pusha T'] },
      { title: 'Hell of a Life', artists: ['Kanye West'] },
      { title: 'Blame Game', artists: ['Kanye West', 'John Legend'] },
      { title: 'Lost in the World', artists: ['Kanye West', 'Bon Iver'] },
      { title: 'Who Will Survive in America', artists: ['Kanye West'] },
      { title: 'See Me Now', artists: ['Kanye West', 'Beyoncé', 'Charlie Wilson', 'Big Sean'] },
    ],
  },
  {
    id: 'watch-the-throne',
    title: 'Watch the Throne',
    songs: [
      { title: 'No Church in the Wild', artists: ['Jay-Z', 'Kanye West', 'Frank Ocean', 'The-Dream'] },
      { title: 'Lift Off', artists: ['Jay-Z', 'Kanye West', 'Beyoncé'] },
      { title: 'Niggas in Paris', artists: ['Jay-Z', 'Kanye West'] },
      { title: 'Otis', artists: ['Jay-Z', 'Kanye West', 'Otis Redding'] },
      { title: 'Gotta Have It', artists: ['Jay-Z', 'Kanye West'] },
      { title: 'New Day', artists: ['Jay-Z', 'Kanye West'] },
      { title: "That's My Bitch", artists: ['Jay-Z', 'Kanye West'] },
      { title: 'Welcome to the Jungle', artists: ['Jay-Z', 'Kanye West'] },
      { title: 'Who Gon Stop Me', artists: ['Jay-Z', 'Kanye West'] },
      { title: 'Murder to Excellence', artists: ['Jay-Z', 'Kanye West'] },
      { title: 'Made in America', artists: ['Jay-Z', 'Kanye West', 'Frank Ocean'] },
      { title: 'Why I Love You', artists: ['Jay-Z', 'Kanye West', 'Mr Hudson'] },
    ],
  },
  {
    id: 'yeezus',
    title: 'Yeezus',
    songs: [
      { title: 'On Sight', artists: ['Kanye West'] },
      { title: 'Black Skinhead', artists: ['Kanye West'] },
      { title: 'I Am a God', artists: ['Kanye West'] },
      { title: 'New Slaves', artists: ['Kanye West'] },
      { title: 'Hold My Liquor', artists: ['Kanye West'] },
      { title: "I'm in It", artists: ['Kanye West'] },
      { title: 'Blood on the Leaves', artists: ['Kanye West'] },
      { title: 'Guilt Trip', artists: ['Kanye West'] },
      { title: 'Send It Up', artists: ['Kanye West'] },
      { title: 'Bound 2', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'the-life-of-pablo',
    title: 'The Life of Pablo',
    songs: [
      { title: 'Ultralight Beam', artists: ['Kanye West', 'Chance the Rapper', 'Kirk Franklin', 'The-Dream', 'Kelly Price'] },
      { title: 'Father Stretch My Hands, Pt. 1', artists: ['Kanye West', 'Kid Cudi', 'Kelly Price'] },
      { title: 'Pt. 2', artists: ['Kanye West', 'Desiigner', 'Caroline Shaw'] },
      { title: 'Famous', artists: ['Kanye West', 'Rihanna', 'Swizz Beatz'] },
      { title: 'Feedback', artists: ['Kanye West'] },
      { title: 'Low Lights', artists: ['Kanye West'] },
      { title: 'Highlights', artists: ['Kanye West', 'Young Thug', 'The-Dream', 'El DeBarge', 'Kelly Price'] },
      { title: 'Freestyle 4', artists: ['Kanye West', 'Desiigner'] },
      { title: 'I Love Kanye', artists: ['Kanye West'] },
      { title: 'Waves', artists: ['Kanye West', 'Chris Brown', 'Kid Cudi'] },
      { title: 'FML', artists: ['Kanye West', 'the Weeknd', 'Caroline Shaw'] },
      { title: 'Real Friends', artists: ['Kanye West', 'Ty Dolla Sign'] },
      { title: 'Wolves', artists: ['Kanye West', 'Vic Mensa', 'Sia', 'Caroline Shaw'] },
      { title: "Frank's Track", artists: ['Kanye West', 'Frank Ocean'] },
      { title: 'Siiiiiiiiilver Surffffeeeeer Intermission', artists: ['Kanye West', 'Max B', 'French Montana'] },
      { title: '30 Hours', artists: ['Kanye West', 'André 3000'] },
      { title: 'No More Parties in LA', artists: ['Kanye West', 'Kendrick Lamar'] },
      { title: 'Facts (Charlie Heat version)', artists: ['Kanye West'] },
      { title: 'Fade', artists: ['Kanye West', 'Post Malone', 'Ty Dolla Sign'] },
      { title: 'Saint Pablo', artists: ['Kanye West', 'Sampha'] },
    ],
  },
  {
    id: 'ye',
    title: 'Ye',
    songs: [
      { title: 'I Thought About Killing You', artists: ['Kanye West'] },
      { title: 'Yikes', artists: ['Kanye West'] },
      { title: 'All Mine', artists: ['Kanye West'] },
      { title: "Wouldn't Leave", artists: ['Kanye West', 'PartyNextDoor'] },
      { title: 'No Mistakes', artists: ['Kanye West'] },
      { title: 'Ghost Town', artists: ['Kanye West', 'PartyNextDoor'] },
      { title: 'Violent Crimes', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'kids-see-ghosts',
    title: 'Kids See Ghosts',
    songs: [
      { title: 'Feel the Love', artists: ['Kid Cudi', 'Kanye West', 'Pusha T'] },
      { title: 'Fire', artists: ['Kid Cudi', 'Kanye West'] },
      { title: '4th Dimension', artists: ['Kid Cudi', 'Kanye West', 'Louis Prima'] },
      { title: 'Freeee (Ghost Town, Pt. 2)', artists: ['Kid Cudi', 'Kanye West', 'Ty Dolla Sign'] },
      { title: 'Reborn', artists: ['Kid Cudi', 'Kanye West'] },
      { title: 'Kids See Ghosts', artists: ['Kid Cudi', 'Kanye West', 'Yasiin Bey'] },
      { title: 'Cudi Montage', artists: ['Kid Cudi', 'Kanye West'] },
    ],
  },
  {
    id: 'jesus-is-king',
    title: 'Jesus Is King',
    songs: [
      { title: 'Every Hour', artists: ['Kanye West', 'Sunday Service Choir'] },
      { title: 'Selah', artists: ['Kanye West'] },
      { title: 'Follow God', artists: ['Kanye West'] },
      { title: 'Closed on Sunday', artists: ['Kanye West'] },
      { title: 'On God', artists: ['Kanye West'] },
      { title: 'Everything We Need', artists: ['Kanye West', 'Ty Dolla Sign', 'Ant Clemons'] },
      { title: 'Water', artists: ['Kanye West', 'Ant Clemons'] },
      { title: 'God Is', artists: ['Kanye West'] },
      { title: 'Hands On', artists: ['Kanye West', 'Fred Hammond'] },
      { title: 'Use This Gospel', artists: ['Kanye West', 'Clipse', 'Kenny G'] },
      { title: 'Jesus Is Lord', artists: ['Kanye West'] },
    ],
  },
  {
    id: 'donda',
    title: 'Donda',
    songs: [
      { title: 'Donda Chant', artists: ['Kanye West'] },
      { title: 'Jail', artists: ['Kanye West', 'Jay-Z'] },
      { title: 'God Breathed', artists: ['Kanye West'] },
      { title: 'Off the Grid', artists: ['Kanye West', 'Playboi Carti', 'Fivio Foreign'] },
      { title: 'Hurricane', artists: ['Kanye West', 'the Weeknd', 'Lil Baby'] },
      { title: 'Praise God', artists: ['Kanye West', 'Travis Scott', 'Baby Keem'] },
      { title: 'Jonah', artists: ['Kanye West', 'Vory', 'Lil Durk'] },
      { title: 'Ok Ok', artists: ['Kanye West', 'Lil Yachty', 'Rooga'] },
      { title: 'Junya', artists: ['Kanye West', 'Playboi Carti'] },
      { title: 'Believe What I Say', artists: ['Kanye West'] },
      { title: '24', artists: ['Kanye West'] },
      { title: 'Remote Control', artists: ['Kanye West', 'Young Thug'] },
      { title: 'Moon', artists: ['Kanye West', 'Don Toliver', 'Kid Cudi'] },
      { title: 'Heaven and Hell', artists: ['Kanye West'] },
      { title: 'Donda', artists: ['Kanye West', 'the World Famous Tony Williams'] },
      { title: 'Keep My Spirit Alive', artists: ['Kanye West', 'Westside Gunn', 'Conway the Machine', "Royce da 5'9\""] },
      { title: 'Jesus Lord', artists: ['Kanye West', 'Jay Electronica'] },
      { title: 'New Again', artists: ['Kanye West'] },
      { title: 'Tell the Vision', artists: ['Kanye West', 'Pop Smoke'] },
      { title: 'Lord I Need You', artists: ['Kanye West'] },
      { title: 'Pure Souls', artists: ['Kanye West', 'Roddy Ricch', 'Shenseea'] },
      { title: 'Come to Life', artists: ['Kanye West'] },
      { title: 'No Child Left Behind', artists: ['Kanye West', 'Vory'] },
      { title: 'Jail pt 2', artists: ['Kanye West', 'DaBaby', 'Marilyn Manson'] },
      { title: 'Ok Ok pt 2', artists: ['Kanye West', 'Shenseea', 'Rooga'] },
      { title: 'Junya pt 2', artists: ['Kanye West', 'Playboi Carti', 'Ty Dolla Sign'] },
      { title: 'Jesus Lord pt 2', artists: ['Kanye West', 'Jay Electronica', 'the Lox'] },
    ],
  },
];

// Clean title for search
function cleanTitle(title) {
  return title
    .replace(/\s*\(feat\.[^)]*\)/gi, '')
    .replace(/\s*\(ft\.[^)]*\)/gi, '')
    .replace(/\s*feat\.[^,]*/gi, '')
    .replace(/\s*ft\.[^,]*/gi, '')
    .trim();
}

// Fetch preview URL from iTunes
async function fetchPreviewUrl(songTitle, albumName) {
  const cleanedTitle = cleanTitle(songTitle);
  const searchTerm = encodeURIComponent(`${cleanedTitle} ${albumName}`);
  
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchTerm}&entity=song&limit=10`
    );
    
    if (!response.ok) {
      console.error(`  ❌ API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    
    if (data.resultCount === 0) {
      console.error(`  ❌ No results found`);
      return null;
    }

    // Filter to Kanye results
    const kanyeResults = data.results.filter(r => 
      r.artistName.toLowerCase().includes('kanye')
    );
    
    if (kanyeResults.length === 0) {
      console.error(`  ❌ No Kanye results found`);
      return null;
    }

    // Score results
    const normalizedTitle = cleanedTitle.toLowerCase();
    const normalizedAlbum = albumName.toLowerCase();
    
    const scoredResults = kanyeResults.map(result => {
      let score = 0;
      const resultTitle = result.trackName.toLowerCase();
      const resultAlbum = result.collectionName.toLowerCase();
      
      if (resultTitle === normalizedTitle) score += 100;
      else if (resultTitle.includes(normalizedTitle)) score += 60;
      
      if (resultAlbum.includes(normalizedAlbum) || normalizedAlbum.includes(resultAlbum.split('(')[0].trim())) {
        score += 50;
      }
      
      return { result, score };
    });
    
    scoredResults.sort((a, b) => b.score - a.score);
    
    const bestMatch = scoredResults[0];
    if (bestMatch && bestMatch.score >= 50 && bestMatch.result.previewUrl) {
      return bestMatch.result.previewUrl;
    }
    
    console.error(`  ❌ No good match (best score: ${bestMatch?.score || 0})`);
    return null;
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return null;
  }
}

// Delay helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function main() {
  console.log('🎵 Fetching iTunes preview URLs for all songs...\n');
  console.log('⏱️  Using 1.5s delay between requests to avoid rate limiting...\n');
  
  const results = [];
  let found = 0;
  let notFound = 0;
  let totalSongs = albums.reduce((acc, a) => acc + a.songs.length, 0);
  let processed = 0;
  
  for (const album of albums) {
    console.log(`\n📀 ${album.title}`);
    console.log('─'.repeat(40));
    
    const albumSongs = [];
    
    for (const song of album.songs) {
      processed++;
      process.stdout.write(`  [${processed}/${totalSongs}] "${song.title}"... `);
      
      const previewUrl = await fetchPreviewUrl(song.title, album.title);
      
      if (previewUrl) {
        console.log('✅');
        found++;
        albumSongs.push({
          ...song,
          previewUrl
        });
      } else {
        notFound++;
        albumSongs.push(song);
      }
      
      // Longer delay between requests to avoid rate limiting (1.5 seconds)
      await delay(1500);
    }
    
    results.push({
      ...album,
      songs: albumSongs
    });
    
    // Extra pause between albums
    console.log('  ⏸️  Pausing between albums...');
    await delay(3000);
  }
  
  console.log('\n' + '═'.repeat(50));
  console.log(`\n📊 Results: ${found} found, ${notFound} not found\n`);
  
  // Output the data in a format that can be copied into kanye-music.ts
  console.log('\n// Copy this into kanye-music.ts (songs arrays only):\n');
  
  for (const album of results) {
    console.log(`  // ${album.title}`);
    console.log(`  {`);
    console.log(`    id: '${album.id}',`);
    console.log(`    title: '${album.title}',`);
    console.log(`    songs: [`);
    for (const song of album.songs) {
      const artistsStr = song.artists.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ');
      if (song.previewUrl) {
        console.log(`      { title: '${song.title.replace(/'/g, "\\'")}', artists: [${artistsStr}], previewUrl: '${song.previewUrl}' },`);
      } else {
        console.log(`      { title: '${song.title.replace(/'/g, "\\'")}', artists: [${artistsStr}] },`);
      }
    }
    console.log(`    ],`);
    console.log(`  },`);
  }
}

main().catch(console.error);

