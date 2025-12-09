// Kanye West Music Data

export type Album = {
  id: string;
  title: string;
  year: number;
  artworkUrl: string;
  songs: AlbumSong[];
};

export type AlbumSong = {
  title: string;
  artists: string[];
};

export type Song = {
  id: string;
  rank: number;
  title: string;
  artist: string;
  album: string;
  image: string;
  previewUrl?: string;
  metrics: {
    lastWeek: number;
    peak: number;
    weeks: number;
  };
  change: 'up' | 'down' | 'same';
};

export const albums: Album[] = [
  {
    id: 'the-college-dropout',
    title: 'The College Dropout',
    year: 2004,
    artworkUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg',
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
];

// Convert album data to the Song format used by the ranking system
export function getSongsFromAlbums(albumList: Album[] = albums): Song[] {
  const songs: Song[] = [];
  let songIndex = 0;

  albumList.forEach((album) => {
    album.songs.forEach((song) => {
      songIndex++;
      songs.push({
        id: `${album.id}-${songIndex}`,
        rank: songIndex,
        title: song.title,
        artist: song.artists.join(', '),
        album: album.title,
        image: album.artworkUrl,
        metrics: {
          lastWeek: songIndex,
          peak: songIndex,
          weeks: 1,
        },
        change: 'same',
      });
    });
  });

  return songs;
}

// Export default songs for the ranking system
export const kanyeSongs = getSongsFromAlbums();

