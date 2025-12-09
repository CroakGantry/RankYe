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
  previewUrl?: string;
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
      { title: "We Don't Care", artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/39/f2/af39f216-5131-7d4e-b236-9522f48297e6/mzaf_18332655755765119976.plus.aac.p.m4a' },
      { title: 'Graduation Day', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/a7/24/32a72420-7686-edf2-9229-3c08e2677b57/mzaf_897068134996415269.plus.aac.p.m4a' },
      { title: 'All Falls Down', artists: ['Kanye West', 'Syleena Johnson'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/a1/3b/47a13ba2-6f63-ced7-24f0-0c3307ee6218/mzaf_6552050600916041999.plus.aac.p.m4a' },
      { title: "I'll Fly Away", artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/70/77/b9/7077b9ab-f247-c41e-f5ec-44d6c8bba0cf/mzaf_17540512251291792542.plus.aac.p.m4a' },
      { title: 'Spaceship', artists: ['Kanye West', 'GLC', 'Consequence'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a5/7b/10/a57b1031-77dd-7819-896e-6f3c75717a0c/mzaf_13082274465397725169.plus.aac.p.m4a' },
      { title: 'Jesus Walks', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9b/76/ed/9b76ed0f-c860-ad5a-af24-96333cd6d3cf/mzaf_8891252582474583741.plus.aac.p.m4a' },
      { title: 'Never Let Me Down', artists: ['Kanye West', 'Jay-Z', 'J. Ivy'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5c/84/eb/5c84ebd9-793a-ef14-2a3a-d20ffaf5cffc/mzaf_15630759113151080944.plus.aac.p.m4a' },
      { title: 'Get Em High', artists: ['Kanye West', 'Talib Kweli', 'Common'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8e/3b/80/8e3b80e5-cadb-393a-3468-c95618fcbab7/mzaf_2057243328521234991.plus.aac.p.m4a' },
      { title: 'The New Workout Plan', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/89/07/c7/8907c773-9ca4-bbf8-47da-65b8bf617cb6/mzaf_5441431105324883566.plus.aac.p.m4a' },
      { title: 'Slow Jamz', artists: ['Kanye West', 'Twista', 'Jamie Foxx'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f0/22/e4/f022e4ee-6689-daee-4fc2-de65165b83b8/mzaf_17828723120120514982.plus.aac.p.m4a' },
      { title: 'Breathe In Breathe Out', artists: ['Kanye West', 'Ludacris'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5f/c3/4e/5fc34e95-25c0-9698-82a9-73c17ff85bbc/mzaf_5307232279193385551.plus.aac.p.m4a' },
      { title: 'School Spirit', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0c/77/25/0c77259e-a094-af36-b549-43e70c09decd/mzaf_15569243338900217015.plus.aac.p.m4a' },
      { title: 'Two Words', artists: ['Kanye West', 'Mos Def', 'Freeway', 'The Boys Choir of Harlem'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bf/45/2a/bf452a67-2398-b7fe-366d-9821b2ac64f9/mzaf_8755689036498457415.plus.aac.p.m4a' },
      { title: 'Through the Wire', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2d/5c/ea/2d5cea77-a56f-50ec-c6dc-f74a04d832dd/mzaf_822615455610190516.plus.aac.p.m4a' },
      { title: 'Family Business', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c0/6d/90/c06d90cd-b8bd-ea50-bbcf-ad81a8b65553/mzaf_3107251434598868986.plus.aac.p.m4a' },
      { title: 'Last Call', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0a/45/18/0a451885-d777-d767-0295-fccf680fa8da/mzaf_17954059643550762758.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'late-registration',
    title: 'Late Registration',
    year: 2005,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/00/68/13/006813b3-9ca1-2e6f-98df-4ef78cd6cb49/06UMGIM20452.rgb.jpg/1200x630bf-60.jpg',
    songs: [
      { title: 'Wake Up Mr. West', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/45/d4/d2/45d4d299-3b87-be04-87e2-1091033dacbe/mzaf_15206813499622057975.plus.aac.p.m4a' },
      { title: "Heard 'Em Say", artists: ['Kanye West', 'Adam Levine'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ee/ac/ae/eeacaeb1-2323-aece-f0a0-785dd97e23d2/mzaf_11505090353784970353.plus.aac.p.m4a' },
      { title: 'Touch the Sky', artists: ['Kanye West', 'Lupe Fiasco'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ec/72/00/ec72002a-713f-f1eb-8ddb-30d2e66a631c/mzaf_14256312986443673368.plus.aac.p.m4a' },
      { title: 'Gold Digger', artists: ['Kanye West', 'Jamie Foxx'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3e/3d/10/3e3d10bb-41c8-cf98-e7de-126cf72b186a/mzaf_14398557118566661017.plus.aac.p.m4a' },
      { title: 'Drive Slow', artists: ['Kanye West', 'Paul Wall', 'GLC'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f0/38/6a/f0386a68-b8ce-7260-dd9c-0c20d98c1d8d/mzaf_6738112531400977163.plus.aac.p.m4a' },
      { title: 'My Way Home', artists: ['Kanye West', 'Common'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fc/cc/0d/fccc0d50-5088-dad8-7907-c229643a23d1/mzaf_12255063846280580161.plus.aac.p.m4a' },
      { title: 'Crack Music', artists: ['Kanye West', 'The Game'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3a/72/98/3a7298ed-937e-2f81-5f8a-a1c3e8473200/mzaf_13621358628498672369.plus.aac.p.m4a' },
      { title: 'Roses', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e9/d3/09/e9d309c3-3d0a-ab47-1861-af0301e5e836/mzaf_2744104127735874041.plus.aac.p.m4a' },
      { title: 'Bring Me Down (feat. Brandy)', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/9e/a4/409ea40c-11b8-c500-0393-f659b7633cb1/mzaf_17353997097647663003.plus.aac.p.m4a' },
      { title: 'Addiction', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/de/f4/cbdef40e-2976-d699-44c5-f6738422d4bb/mzaf_2396892204349104861.plus.aac.p.m4a' },
      { title: 'Diamonds from Sierra Leone (Remix)', artists: ['Kanye West', 'Jay-Z'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e3/c4/a6/e3c4a607-d3b5-1541-d226-07f4dd0a82e7/mzaf_17529827675782068268.plus.aac.p.m4a' },
      { title: 'We Major', artists: ['Kanye West', 'Nas', 'Really Doe'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0e/ab/20/0eab20c5-b17e-f115-ecb8-4066b057b7eb/mzaf_6356242491650330880.plus.aac.p.m4a' },
      { title: 'Hey Mama', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/30/66/60/306660bc-c4cf-67c1-ca08-ceb8925cdbe4/mzaf_6257799110454169707.plus.aac.p.m4a' },
      { title: 'Celebration', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8e/b0/db/8eb0db7b-a770-36de-9d06-38eb547f617a/mzaf_6973343969806159673.plus.aac.p.m4a' },
      { title: 'Gone', artists: ['Kanye West', 'Consequence', "Cam'ron"], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/a9/92/49a992bc-601a-79c8-525d-740488940021/mzaf_11028754531877097097.plus.aac.p.m4a' },
      { title: 'Diamonds from Sierra Leone (bonus track)', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e3/c4/a6/e3c4a607-d3b5-1541-d226-07f4dd0a82e7/mzaf_17529827675782068268.plus.aac.p.m4a' },
      { title: 'Late', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a8/75/03/a8750323-d331-7742-1055-fc1ebadfb71d/mzaf_16592034089785789189.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation',
    year: 2007,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/1200x630bb.jpg',
    songs: [
      { title: 'Good Morning', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/09/59/cb0959cd-fcc5-66a3-c293-ed58a7ad9c43/mzaf_7396332483720740039.plus.aac.p.m4a' },
      { title: 'Champion', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c6/b0/c4/c6b0c48e-ee0d-adaf-2de2-2eb3030e207c/mzaf_12936690838015566050.plus.aac.p.m4a' },
      { title: 'Stronger', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/96/f2/25/96f225f2-cd07-3639-4133-0910aa9725c0/mzaf_13857358519708863745.plus.aac.p.m4a' },
      { title: 'I Wonder', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/03/f4/d5/03f4d5de-1c09-33eb-7852-279a71ac989f/mzaf_15614695934438135653.plus.aac.p.m4a' },
      { title: 'Good Life', artists: ['Kanye West', 'T-Pain'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/86/ee/43/86ee4336-6faf-b797-ea65-d5d7b50a1448/mzaf_2392976759773928581.plus.aac.p.m4a' },
      { title: "Can't Tell Me Nothing", artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/91/68/6d/91686d7a-3032-d619-bc96-6d47a638923e/mzaf_2195214387826453312.plus.aac.p.m4a' },
      { title: 'Barry Bonds', artists: ['Kanye West', 'Lil Wayne'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3e/69/70/3e6970d9-6046-a3a6-6ab9-d4293109d6bc/mzaf_18025088118585018750.plus.aac.p.m4a' },
      { title: 'Drunk and Hot Girls', artists: ['Kanye West', 'Mos Def'] },
      { title: 'Flashing Lights', artists: ['Kanye West', 'Dwele'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c3/c6/c6/c3c6c652-2f19-1511-c8e9-e9caf9b6b4ac/mzaf_8110172512846397285.plus.aac.p.m4a' },
      { title: 'Everything I Am', artists: ['Kanye West', 'scratches by DJ Premier'] },
      { title: 'The Glory', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cf/ee/44/cfee448d-dd18-4b41-4601-9dc79ec96cef/mzaf_1154119131438340276.plus.aac.p.m4a' },
      { title: 'Homecoming', artists: ['Kanye West', 'Chris Martin'] },
      { title: 'Big Brother', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/63/22/476322c7-71c7-5f1a-ed9a-fd54d32a11a3/mzaf_1148386998108314560.plus.aac.p.m4a' },
    ],
  },
  {
    id: '808s-heartbreak',
    title: '808s & Heartbreak',
    year: 2008,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/4d/75/2d/4d752db1-022d-f65d-40a1-a2390f01427a/13UAEIM26465.rgb.jpg/1200x630bf-60.jpg',
    songs: [
      { title: 'Say You Will', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0a/ed/5c/0aed5ce7-3ef4-68de-3cb1-5f79820b7ce9/mzaf_18015545892482611531.plus.aac.p.m4a' },
      { title: 'Welcome To Heartbreak', artists: ['Kanye West', 'Kid Cudi'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/59/de/7c/59de7cc9-6462-0026-927e-06085dc2ae0f/mzaf_2902844855744564971.plus.aac.p.m4a' },
      { title: 'Heartless', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c9/24/96/c9249688-ffdc-40c1-d56e-d84ee8537ed7/mzaf_15473080214798193650.plus.aac.p.m4a' },
      { title: 'Amazing', artists: ['Kanye West', 'Jeezy'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b5/3d/7c/b53d7c11-d7e5-6269-a058-06f91cda06b9/mzaf_12827925875558903313.plus.aac.p.m4a' },
      { title: 'Love Lockdown', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3f/9e/74/3f9e7404-f229-8b75-8089-799c28bba811/mzaf_3017237910608189459.plus.aac.p.m4a' },
      { title: 'Paranoid', artists: ['Kanye West', 'Mr Hudson'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c0/f5/cf/c0f5cf06-d0cb-5cf9-bfb4-f4c3486e9a7a/mzaf_12014007098702217849.plus.aac.p.m4a' },
      { title: 'RoboCop', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0e/36/a8/0e36a87e-be66-415b-cf64-2b0772dfac21/mzaf_8322170706811744124.plus.aac.p.m4a' },
      { title: 'Street Lights', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/1b/17/3c1b17b5-28a5-4879-64c1-9e0258b4d1d7/mzaf_11520606638434686052.plus.aac.p.m4a' },
      { title: 'Bad News', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e0/0d/e4/e00de445-13fc-7719-cd17-a33d67bf5670/mzaf_10670597154778294765.plus.aac.p.m4a' },
      { title: 'See You In My Nightmares', artists: ['Kanye West', 'Lil Wayne'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/83/88/bf/8388bf7d-c2d7-ea9e-25ba-420dbc2a84c2/mzaf_15753752393957475059.plus.aac.p.m4a' },
      { title: 'Coldest Winter', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3e/ab/39/3eab393c-93a1-da03-a482-c1f7fcbb3a6f/mzaf_5803532163468920618.plus.aac.p.m4a' },
      { title: 'Pinocchio Story', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/82/d5/bd/82d5bd9f-958c-d034-2c01-1fa30db9ef2c/mzaf_13995359647359087636.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'my-beautiful-dark-twisted-fantasy',
    title: 'My Beautiful Dark Twisted Fantasy',
    year: 2010,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/37/da/7c/37da7cc5-2b6f-9bb8-30ba-8a8c3be3e16a/00602527584973.rgb.jpg/1200x630bb.jpg',
    songs: [
      { title: 'Dark Fantasy', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f6/0a/6b/f60a6b14-d805-03f6-b912-981a2b3ca932/mzaf_2386471894255481337.plus.aac.p.m4a' },
      { title: 'Gorgeous', artists: ['Kanye West', 'Kid Cudi', 'Raekwon'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/11/e8/99/11e89949-076a-956e-8117-bdf2568c1c7b/mzaf_1299698505622948121.plus.aac.p.m4a' },
      { title: 'Power', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/36/a9/ad/36a9adb0-ee28-5025-d6a6-e5554fde9abf/mzaf_14422869930456825244.plus.aac.p.m4a' },
      { title: 'All of the Lights (Interlude)', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/10/58/bb/1058bbc8-8771-85d2-19a0-64b225d4ccd6/mzaf_15008276184889852591.plus.aac.p.m4a' },
      { title: 'All of the Lights', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f9/5d/69/f95d6913-4132-c0e4-ad52-4c751046c9e7/mzaf_1849241997696354507.plus.aac.p.m4a' },
      { title: 'Monster', artists: ['Kanye West', 'Jay-Z', 'Rick Ross', 'Nicki Minaj', 'Bon Iver'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/92/fc/4092fce7-d6be-69e2-4e16-a1fd64426c88/mzaf_8948386197541827675.plus.aac.p.m4a' },
      { title: 'So Appalled', artists: ['Kanye West', 'Swizz Beatz', 'Jay-Z', 'Pusha T', 'Cyhi the Prynce', 'RZA'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/48/48/b8/4848b8a8-8815-e21d-ac31-f1168a905cba/mzaf_1590644550675905531.plus.aac.p.m4a' },
      { title: 'Devil in a New Dress', artists: ['Kanye West', 'Rick Ross'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/99/51/21/99512123-3f87-de36-a302-01023f9be601/mzaf_15127288582389669472.plus.aac.p.m4a' },
      { title: 'Runaway', artists: ['Kanye West', 'Pusha T'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/eb/e4/40ebe4ff-4fc7-bf69-3ce1-2cf8da97fc94/mzaf_98592928812732269.plus.aac.p.m4a' },
      { title: 'Hell of a Life', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/06/29/3e/06293e10-f9aa-73d8-ca86-fbdcce76b5b4/mzaf_2567510567941739812.plus.aac.p.m4a' },
      { title: 'Blame Game', artists: ['Kanye West', 'John Legend'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9a/f7/c8/9af7c88e-f53c-8c2d-ef7c-65ee7cbfb52b/mzaf_18232769643711700368.plus.aac.p.m4a' },
      { title: 'Lost in the World', artists: ['Kanye West', 'Bon Iver'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/62/84/0662848f-fbd4-8db7-2ed8-d15280121ade/mzaf_1492693365258072590.plus.aac.p.m4a' },
      { title: 'Who Will Survive in America', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/83/df/97/83df9722-73a9-02b9-29b1-0f5c59c5960b/mzaf_16886874576173718332.plus.aac.p.m4a' },
      { title: 'See Me Now', artists: ['Kanye West', 'Beyoncé', 'Charlie Wilson', 'Big Sean'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/31/33/be/3133be2e-b9e1-c8b0-fcd1-93e757827b6e/mzaf_17428262940192123990.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'watch-the-throne',
    title: 'Watch the Throne',
    year: 2011,
    artworkUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b1/d0/32/b1d03292-7f4e-2304-df0f-1a690d44c6cc/11UMGIM20800.rgb.jpg/600x600bf-60.jpg',
    songs: [
      { title: 'No Church in the Wild', artists: ['Jay-Z', 'Kanye West', 'Frank Ocean', 'The-Dream'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7e/94/1a/7e941a73-e63e-4b55-6161-5115e91cc41f/mzaf_3639990812881067167.plus.aac.p.m4a' },
      { title: 'Lift Off', artists: ['Jay-Z', 'Kanye West', 'Beyoncé'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0b/7f/63/0b7f63af-799c-ace4-27d5-8128d5c87946/mzaf_422648536862783756.plus.aac.p.m4a' },
      { title: 'Niggas in Paris', artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/16/05/26/1605268b-83ce-6c22-1224-e999d0006a6d/mzaf_4723869812628029401.plus.aac.p.m4a' },
      { title: 'Otis', artists: ['Jay-Z', 'Kanye West', 'Otis Redding'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fa/1c/5a/fa1c5a36-f118-93f2-0635-ea995dc7a989/mzaf_6042612572591340778.plus.aac.p.m4a' },
      { title: 'Gotta Have It', artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fd/a5/d6/fda5d6c2-cedf-52b1-a638-088c2f1e3480/mzaf_1803821773150356074.plus.aac.p.m4a' },
      { title: 'New Day', artists: ['Jay-Z', 'Kanye West'] },
      { title: "That's My Bitch", artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/34/bd/0d34bda4-3d01-837c-e0d2-209c470714fc/mzaf_8103755092271473536.plus.aac.p.m4a' },
      { title: 'Welcome to the Jungle', artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/92/d5/87/92d5872d-f7e9-642f-2c13-c11da914f011/mzaf_7523024425323544965.plus.aac.p.m4a' },
      { title: 'Who Gon Stop Me', artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/d4/dc/40d4dc8a-4612-26f3-5285-da1986c00f43/mzaf_8201455075980047672.plus.aac.p.m4a' },
      { title: 'Murder to Excellence', artists: ['Jay-Z', 'Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/96/4a/c5/964ac5cb-1cae-8119-fa4c-4f7f7bcc2e7b/mzaf_1883176944426226185.plus.aac.p.m4a' },
      { title: 'Made in America', artists: ['Jay-Z', 'Kanye West', 'Frank Ocean'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/54/eb/e2/54ebe26d-8f65-8bcb-8715-e62a58ecf993/mzaf_3643183024923755902.plus.aac.p.m4a' },
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
      { title: 'I Am a God', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/00/92/b1/0092b198-5650-41c2-c5e7-5822487a20a9/mzaf_130702666960893818.plus.aac.p.m4a' },
      { title: 'New Slaves', artists: ['Kanye West'] },
      { title: 'Hold My Liquor', artists: ['Kanye West'] },
      { title: "I'm in It", artists: ['Kanye West'] },
      { title: 'Blood on the Leaves', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/15/31/3f/15313f3f-692a-c13b-7a78-159d76b238c3/mzaf_3983160890638646249.plus.aac.p.m4a' },
      { title: 'Guilt Trip', artists: ['Kanye West'] },
      { title: 'Send It Up', artists: ['Kanye West'] },
      { title: 'Bound 2', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/f1/f4/c7/f1f4c7e8-ac7c-0e62-b8cb-a935205f6cb4/mzaf_10884101853220442890.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'the-life-of-pablo',
    title: 'The Life of Pablo',
    year: 2016,
    artworkUrl: 'https://images.thebrag.com/cdn-cgi/image/fit=crop,width=1200,height=628/https://www.rollingstone.com/wp-content/uploads/2024/06/Kanye-West-The-Life-of-Pablo.jpeg?w=1000',
    songs: [
      { title: 'Ultralight Beam', artists: ['Kanye West', 'Chance the Rapper', 'Kirk Franklin', 'The-Dream', 'Kelly Price'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/86/43/57/864357d2-644e-b667-d593-6529647d35fe/mzaf_7014238347363551540.plus.aac.p.m4a' },
      { title: 'Father Stretch My Hands, Pt. 1', artists: ['Kanye West', 'Kid Cudi', 'Kelly Price'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5b/17/95/5b179505-5107-6e12-6064-fa0ae506ca6e/mzaf_15640701738569860552.plus.aac.p.m4a' },
      { title: 'Pt. 2', artists: ['Kanye West', 'Desiigner', 'Caroline Shaw'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/13/63/cb136306-af0a-25b1-a1f3-cd2b76ba7577/mzaf_4399923848830454035.plus.aac.p.m4a' },
      { title: 'Famous', artists: ['Kanye West', 'Rihanna', 'Swizz Beatz'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e2/3e/be/e23ebe22-0638-629f-92c7-c9e7e5be4d1d/mzaf_18057616916786103370.plus.aac.p.m4a' },
      { title: 'Feedback', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5d/bd/63/5dbd63ef-3fb8-2ed6-f2f4-e553b6d3cf10/mzaf_10691708980128550779.plus.aac.p.m4a' },
      { title: 'Low Lights', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/93/72/59/93725964-94c1-5030-cd4b-3a694b8ed2af/mzaf_9223065021806562024.plus.aac.p.m4a' },
      { title: 'Highlights', artists: ['Kanye West', 'Young Thug', 'The-Dream', 'El DeBarge', 'Kelly Price'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a0/87/76/a08776e7-4148-f34a-ac39-cc7fd4210d37/mzaf_14817056405066217033.plus.aac.p.m4a' },
      { title: 'Freestyle 4', artists: ['Kanye West', 'Desiigner'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/64/fe/de/64fede4d-9b78-7dfb-a7cf-4706f37868da/mzaf_15352901388148911701.plus.aac.p.m4a' },
      { title: 'I Love Kanye', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/7a/d7/c07ad7b5-c191-2b00-5325-d13e88ca4d59/mzaf_9251312885179127549.plus.aac.p.m4a' },
      { title: 'Waves', artists: ['Kanye West', 'Chris Brown', 'Kid Cudi'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f3/cb/2c/f3cb2ccf-f133-edbc-7f9f-c52cec3ab0b5/mzaf_16808533976575664410.plus.aac.p.m4a' },
      { title: 'FML', artists: ['Kanye West', 'the Weeknd', 'Caroline Shaw'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4a/5e/cc/4a5eccc2-8186-bc9f-09e0-9fa8fca8b5c8/mzaf_135493212053955671.plus.aac.p.m4a' },
      { title: 'Real Friends', artists: ['Kanye West', 'Ty Dolla Sign'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/71/55/99/71559917-f8f3-0e36-5474-3e596c3f68c5/mzaf_13053452597405297787.plus.aac.p.m4a' },
      { title: 'Wolves', artists: ['Kanye West', 'Vic Mensa', 'Sia', 'Caroline Shaw'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f6/a0/c8/f6a0c83d-80b8-68c7-23e3-2e35aef8d090/mzaf_6120090023513904545.plus.aac.p.m4a' },
      { title: "Frank's Track", artists: ['Kanye West', 'Frank Ocean'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/67/6d/95/676d9590-4982-769b-13a9-8ab8f397d15f/mzaf_4030678154577815642.plus.aac.p.m4a' },
      { title: 'Siiiiiiiiilver Surffffeeeeer Intermission', artists: ['Kanye West', 'Max B', 'French Montana'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e1/ea/50/e1ea5023-1908-f494-cbfd-8e7837d38c55/mzaf_15694040936246224450.plus.aac.p.m4a' },
      { title: '30 Hours', artists: ['Kanye West', 'André 3000'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1f/b6/dd/1fb6dd0c-44bb-26cf-c549-7028f7dae212/mzaf_6657933395032567805.plus.aac.p.m4a' },
      { title: 'No More Parties in LA', artists: ['Kanye West', 'Kendrick Lamar'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7b/0f/95/7b0f95ff-86fd-8a2b-6207-8a921ea9ddff/mzaf_4287131900367477538.plus.aac.p.m4a' },
      { title: 'Facts (Charlie Heat version)', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1f/9f/84/1f9f84d4-00f4-2261-102a-c11d156ef3c7/mzaf_17085731232043661892.plus.aac.p.m4a' },
      { title: 'Fade', artists: ['Kanye West', 'Post Malone', 'Ty Dolla Sign'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/02/2b/fb/022bfbf9-eda8-a7e9-5822-75640d90cc9f/mzaf_11170972660664771862.plus.aac.p.m4a' },
      { title: 'Saint Pablo', artists: ['Kanye West', 'Sampha'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5b/17/95/5b179505-5107-6e12-6064-fa0ae506ca6e/mzaf_15640701738569860552.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'ye',
    title: 'Ye',
    year: 2018,
    artworkUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F06%2Fkanye-west-ye-album-review-0.jpg?w=960&cbr=1&q=90&fit=max',
    songs: [
      { title: 'I Thought About Killing You', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1c/e3/0d/1ce30d21-b757-86a8-e059-a23661f632e4/mzaf_13530988176267727599.plus.aac.p.m4a' },
      { title: 'Yikes', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d4/90/b4/d490b454-bbcc-3fe4-58c8-704ba6c8ed24/mzaf_17614509433180130735.plus.aac.p.m4a' },
      { title: 'All Mine', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/10/16/c0/1016c090-e7b7-c5ac-0527-be15db7904b4/mzaf_11171094682676045100.plus.aac.p.m4a' },
      { title: "Wouldn't Leave", artists: ['Kanye West', 'PartyNextDoor'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/15/31/3f/15313f3f-692a-c13b-7a78-159d76b238c3/mzaf_3983160890638646249.plus.aac.p.m4a' },
      { title: 'No Mistakes', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8c/0d/85/8c0d85b8-1075-4742-996c-ecf5bda832fd/mzaf_66248582273071434.plus.aac.p.m4a' },
      { title: 'Ghost Town', artists: ['Kanye West', 'PartyNextDoor'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/00/92/b1/0092b198-5650-41c2-c5e7-5822487a20a9/mzaf_130702666960893818.plus.aac.p.m4a' },
      { title: 'Violent Crimes', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/d8/f2/cbd8f29f-5cf0-1400-7681-73cfdf98c7fc/mzaf_3601918958230938762.plus.aac.p.m4a' },
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
      { title: 'Every Hour', artists: ['Kanye West', 'Sunday Service Choir'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b8/05/a4/b805a4c2-e198-7a89-1d7b-3f229363d6ca/mzaf_10345086538408689593.plus.aac.p.m4a' },
      { title: 'Selah', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/2a/59/212a5910-d225-2cbb-6dec-aed90f21e04a/mzaf_16955241821807581541.plus.aac.p.m4a' },
      { title: 'Follow God', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/21/c7/4b/21c74b01-ce87-8f95-0885-9fdb81d815e1/mzaf_1620414057540558282.plus.aac.p.m4a' },
      { title: 'Closed on Sunday', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/df/32/71/df3271e3-9362-e402-9222-e2f62d7f8529/mzaf_265176585140669328.plus.aac.p.m4a' },
      { title: 'On God', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ee/98/da/ee98da32-686e-4521-334a-8210d7ad6fd9/mzaf_12894160637143907152.plus.aac.p.m4a' },
      { title: 'Everything We Need', artists: ['Kanye West', 'Ty Dolla Sign', 'Ant Clemons'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/63/ed/fe/63edfe50-9ef2-78e3-232c-733715b4116b/mzaf_8851920882175383511.plus.aac.p.m4a' },
      { title: 'Water', artists: ['Kanye West', 'Ant Clemons'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f6/37/75/f6377528-5b63-a489-45fe-0d81141dcdbc/mzaf_3143372643470453993.plus.aac.p.m4a' },
      { title: 'God Is', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ff/bf/33/ffbf3380-802c-0885-34cc-18dd74f0880e/mzaf_11567994669567692153.plus.aac.p.m4a' },
      { title: 'Hands On', artists: ['Kanye West', 'Fred Hammond'] },
      { title: 'Use This Gospel', artists: ['Kanye West', 'Clipse', 'Kenny G'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6c/26/ae/6c26ae6f-062c-5cf4-79d7-5c71203fb651/mzaf_14205287670151859979.plus.aac.p.m4a' },
      { title: 'Jesus Is Lord', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/78/50/bf/7850bf4e-6bd1-3204-055a-a50524e021f9/mzaf_10941342270133231088.plus.aac.p.m4a' },
    ],
  },
  {
    id: 'donda',
    title: 'Donda',
    year: 2021,
    artworkUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23000'/%3E%3C/svg%3E",
    songs: [
      { title: 'Donda Chant', artists: ['Kanye West'] },
      { title: 'Jail', artists: ['Kanye West', 'Jay-Z'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b6/0d/7e/b60d7e2b-64bc-cf0d-a5e6-45a34955f3c4/mzaf_4136485114443224164.plus.aac.p.m4a' },
      { title: 'God Breathed', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7a/4e/9b/7a4e9b1e-027d-e310-f826-cecd1463aca4/mzaf_6710457262695167625.plus.aac.p.m4a' },
      { title: 'Off the Grid', artists: ['Kanye West', 'Playboi Carti', 'Fivio Foreign'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/c6/c6/94c6c6bd-4830-b4e5-d089-9ba69b555197/mzaf_13085138761590314376.plus.aac.p.m4a' },
      { title: 'Hurricane', artists: ['Kanye West', 'the Weeknd', 'Lil Baby'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f2/6e/1a/f26e1a9d-05c2-3e08-7e8a-120d2548a9a2/mzaf_7958854607137187447.plus.aac.p.m4a' },
      { title: 'Praise God', artists: ['Kanye West', 'Travis Scott', 'Baby Keem'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f4/6d/c0/f46dc03d-f96f-cc56-eb5e-80807cf59d8c/mzaf_2152716061598621824.plus.aac.p.m4a' },
      { title: 'Jonah', artists: ['Kanye West', 'Vory', 'Lil Durk'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/81/c2/0d/81c20dde-912b-2f0e-a8a6-3b2b4cad78fe/mzaf_8490782354322470173.plus.aac.p.m4a' },
      { title: 'Ok Ok', artists: ['Kanye West', 'Lil Yachty', 'Rooga'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/92/97/a5/9297a599-43b6-a361-dc1b-eab2ab605014/mzaf_12688499364213956649.plus.aac.p.m4a' },
      { title: 'Junya', artists: ['Kanye West', 'Playboi Carti'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/7a/84/217a84ac-9d84-082b-7bfa-c4e4bb9d4aa4/mzaf_3676206018524457373.plus.aac.p.m4a' },
      { title: 'Believe What I Say', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7b/2c/40/7b2c4085-5a93-1ae6-79db-94118e0342e5/mzaf_17999535437570860772.plus.aac.p.m4a' },
      { title: '24', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/22/54/d8/2254d806-2cf7-a5af-e9b3-d8515e563ff5/mzaf_11585312186844738947.plus.aac.p.m4a' },
      { title: 'Remote Control', artists: ['Kanye West', 'Young Thug'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ae/d5/bb/aed5bbcc-d19c-83b6-dbb0-ba4560132d79/mzaf_17583644916546991846.plus.aac.p.m4a' },
      { title: 'Moon', artists: ['Kanye West', 'Don Toliver', 'Kid Cudi'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b8/60/28/b86028ff-19ad-d2c0-2b99-7ff587623889/mzaf_11405205832304808728.plus.aac.p.m4a' },
      { title: 'Heaven and Hell', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ec/9e/99/ec9e996e-f823-e9e6-f789-b7cb656900a6/mzaf_903931934490638679.plus.aac.p.m4a' },
      { title: 'Donda', artists: ['Kanye West', 'the World Famous Tony Williams'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/7a/ea/b17aea73-b8ba-a860-049e-604015489eff/mzaf_14783771240306959931.plus.aac.p.m4a' },
      { title: 'Keep My Spirit Alive', artists: ['Kanye West', 'Westside Gunn', 'Conway the Machine', "Royce da 5'9\""], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/d9/33/32d93305-0e67-ea7f-53f7-92b6b404f96d/mzaf_5278124158908618690.plus.aac.p.m4a' },
      { title: 'Jesus Lord', artists: ['Kanye West', 'Jay Electronica'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4a/72/87/4a728794-a925-27c7-2dad-5d9fcafe0496/mzaf_6674509124883684295.plus.aac.p.m4a' },
      { title: 'New Again', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/63/bc/f4/63bcf4f3-64d9-27b1-65d1-3509d9da88dd/mzaf_10902252135990146041.plus.aac.p.m4a' },
      { title: 'Tell the Vision', artists: ['Kanye West', 'Pop Smoke'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6f/f6/8f/6ff68f67-af43-ea8c-db89-5e0cc3143c52/mzaf_5411688162269837030.plus.aac.p.m4a' },
      { title: 'Lord I Need You', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b0/5b/c3/b05bc39f-0ee8-95a8-110a-976a1e424b1f/mzaf_16359340761705024977.plus.aac.p.m4a' },
      { title: 'Pure Souls', artists: ['Kanye West', 'Roddy Ricch', 'Shenseea'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/78/8f/89/788f8962-9f4e-16d4-3e10-b7fe6c0b889f/mzaf_8884808232015849162.plus.aac.p.m4a' },
      { title: 'Come to Life', artists: ['Kanye West'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/82/4d/ba/824dbae4-ca7b-01f2-80d4-62d6e1b25176/mzaf_6678085527928187172.plus.aac.p.m4a' },
      { title: 'No Child Left Behind', artists: ['Kanye West', 'Vory'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ed/df/8f/eddf8f05-17eb-500e-019d-3c0340c79189/mzaf_8260662900602089066.plus.aac.p.m4a' },
      { title: 'Jail pt 2', artists: ['Kanye West', 'DaBaby', 'Marilyn Manson'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8a/58/c4/8a58c44a-7b1b-f289-b636-ce85b0d0d358/mzaf_1784130617961790542.plus.aac.p.m4a' },
      { title: 'Ok Ok pt 2', artists: ['Kanye West', 'Shenseea', 'Rooga'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/54/cb/2354cb86-555d-93d2-b425-faaf48785388/mzaf_1157251278356687802.plus.aac.p.m4a' },
      { title: 'Junya pt 2', artists: ['Kanye West', 'Playboi Carti', 'Ty Dolla Sign'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/77/fc/83/77fc8362-cbea-4e47-02b5-b5764cf89a01/mzaf_11477650812213149126.plus.aac.p.m4a' },
      { title: 'Jesus Lord pt 2', artists: ['Kanye West', 'Jay Electronica', 'the Lox'], previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/46/ca/4a/46ca4a43-d7fc-690e-4f77-6200a0150bd6/mzaf_18335945361226069555.plus.aac.p.m4a' },
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
        previewUrl: song.previewUrl,
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
