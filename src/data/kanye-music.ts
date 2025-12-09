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
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0d/73/b1/0d73b181-2716-f7a6-a340-0a3f81eacfb9/06UMGIM15686.rgb.jpg/600x600bf-60.jpg',
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
    year: 2005,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/00/68/13/006813b3-9ca1-2e6f-98df-4ef78cd6cb49/06UMGIM20452.rgb.jpg/1200x630bf-60.jpg',
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
    year: 2007,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/1200x630bb.jpg',
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
    year: 2008,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4d/75/2d/4d752db1-022d-f65d-40a1-a2390f01427a/13UAEIM26465.rgb.jpg/1200x630bf-60.jpg',
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
    year: 2010,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/37/da/7c/37da7cc5-2b6f-9bb8-30ba-8a8c3be3e16a/00602527584973.rgb.jpg/1200x630bb.jpg',
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
    year: 2011,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b1/d0/32/b1d03292-7f4e-2304-df0f-1a690d44c6cc/11UMGIM20800.rgb.jpg/600x600bf-60.jpg',
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
    year: 2013,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3c/56/e7/3c56e717-06a0-b67d-e694-9b6e6e43a5a8/13UAAIM08444.rgb.jpg/600x600bf-60.jpg',
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
    year: 2016,
    artworkUrl: 'https://images.thebrag.com/cdn-cgi/image/fit=crop,width=1200,height=628/https://www.rollingstone.com/wp-content/uploads/2024/06/Kanye-West-The-Life-of-Pablo.jpeg?w=1000',
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
    year: 2018,
    artworkUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fkanye-west-ye-album-review-0.jpg?w=960&cbr=1&q=90&fit=max',
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
    year: 2018,
    artworkUrl: 'https://townsquare.media/site/812/files/2018/06/kids-see-ghosts.jpg?w=780&q=75',
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
    year: 2019,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/21/fd/d3/21fdd3d4-0c00-53ef-3903-d0569c49a812/19UMGIM89397.rgb.jpg/600x600bf-60.jpg',
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
    year: 2021,
    artworkUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23000'/%3E%3C/svg%3E",
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

