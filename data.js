/**
 * Ticketz — Data Architecture Layer
 * Semarang Cinema Pricing, Movie Catalog, & Transparency Metadata
 */

export const SEMARANG_CINEMAS = [
  {
    id: 'xxi-paragon',
    name: 'Cinema XXI Paragon',
    shortName: 'XXI Paragon',
    chain: 'XXI',
    location: 'Pollux Paragon Mall, Lt. 3',
    address: 'Jl. Pemuda No. 118, Sekayu, Semarang Tengah',
    city: 'Semarang',
    distanceKm: 1.2,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+Paragon+Semarang',
    formats: ['Regular 2D', 'Premiere'],
    pricing: {
      'Regular 2D': {
        weekday: 35000,   // Mon - Thu
        friday: 40000,    // Fri
        weekend: 50000    // Sat - Sun & Holiday
      },
      'Premiere': {
        weekday: 60000,
        friday: 80000,
        weekend: 100000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web & App',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-14T10:30:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'xxi-dp-mall',
    name: 'Cinema XXI DP Mall',
    shortName: 'XXI DP Mall',
    chain: 'XXI',
    location: 'DP Mall, Lt. 2',
    address: 'Jl. Pemuda No. 150, Sekayu, Semarang Tengah',
    city: 'Semarang',
    distanceKm: 0.8,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+DP+Mall+Semarang',
    formats: ['Regular 2D', 'Premiere'],
    pricing: {
      'Regular 2D': {
        weekday: 35000,
        friday: 40000,
        weekend: 50000
      },
      'Premiere': {
        weekday: 60000,
        friday: 80000,
        weekend: 100000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web & App',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-14T10:30:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'xxi-queen-city',
    name: 'Cinema XXI Queen City',
    shortName: 'XXI Queen City',
    chain: 'XXI',
    location: 'Queen City Mall, Lt. 3',
    address: 'Jl. Pemuda No. 27-31, Kranggan, Semarang Tengah',
    city: 'Semarang',
    distanceKm: 1.8,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+Queen+City+Semarang',
    formats: ['Regular 2D', 'Premiere'],
    pricing: {
      'Regular 2D': {
        weekday: 35000,
        friday: 40000,
        weekend: 50000
      },
      'Premiere': {
        weekday: 60000,
        friday: 80000,
        weekend: 100000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-14T09:15:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'xxi-citraland',
    name: 'Cinema XXI Citra Land',
    shortName: 'XXI Citra Land',
    chain: 'XXI',
    location: 'Mal Citra Land, Lt. 3',
    address: 'Simpang Lima, Jl. Anggrek I No. 1, Semarang',
    city: 'Semarang',
    distanceKm: 2.4,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+Citra+Land+Semarang',
    formats: ['Regular 2D'],
    pricing: {
      'Regular 2D': {
        weekday: 35000,
        friday: 40000,
        weekend: 50000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-14T09:15:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'xxi-transmart-setiabudi',
    name: 'Cinema XXI Transmart Setiabudi',
    shortName: 'XXI Transmart Setiabudi',
    chain: 'XXI',
    location: 'Transmart Setiabudi, Lt. 3',
    address: 'Jl. Srondol Kulon, Banyumanik, Semarang',
    city: 'Semarang',
    distanceKm: 8.5,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+Transmart+Setiabudi+Semarang',
    formats: ['Regular 2D'],
    pricing: {
      'Regular 2D': {
        weekday: 30000,
        friday: 35000,
        weekend: 45000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-14T11:00:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'xxi-transmart-majapahit',
    name: 'Cinema XXI Transmart Majapahit',
    shortName: 'XXI Transmart Majapahit',
    chain: 'XXI',
    location: 'Transmart Majapahit, Lt. 5',
    address: 'Jl. Brigjen Sudiarto No. 761, Plamongan Sari, Pedurungan, Semarang',
    city: 'Semarang',
    distanceKm: 7.1,
    googleMapsUrl: 'https://maps.google.com/?q=Cinema+XXI+Transmart+Majapahit+Semarang',
    formats: ['Regular 2D'],
    pricing: {
      'Regular 2D': {
        weekday: 35000,
        friday: 40000,
        weekend: 50000
      }
    },
    verification: {
      sourceName: '21Cineplex Official Web & App',
      sourceUrl: 'https://m.21cineplex.com/gui.list_theater?city_id=20',
      lastChecked: '2026-08-25T10:00:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'cinepolis-java-supermall',
    name: 'Cinepolis Java Supermall',
    shortName: 'Cinepolis Java Mall',
    chain: 'Cinepolis',
    location: 'Java Supermall, Lt. 3',
    address: 'Jl. MT Haryono No. 992-994, Peterongan, Semarang Selatan',
    city: 'Semarang',
    distanceKm: 3.8,
    googleMapsUrl: 'https://maps.google.com/?q=Cinepolis+Java+Supermall+Semarang',
    formats: ['Regular 2D', 'VIP'],
    pricing: {
      'Regular 2D': {
        weekday: 30000,
        friday: 35000,
        weekend: 45000
      },
      'VIP': {
        weekday: 60000,
        friday: 70000,
        weekend: 85000
      }
    },
    verification: {
      sourceName: 'Cinepolis Official Mobile App',
      sourceUrl: 'https://cinepolis.co.id/schedule.aspx?cid=SMGJV',
      lastChecked: '2026-08-14T10:00:00Z',
      status: 'verified',
      confidence: 'High'
    }
  },
  {
    id: 'cinepolis-uptown-bsb',
    name: 'Cinepolis Uptown Mall BSB City',
    shortName: 'Cinepolis BSB Uptown',
    chain: 'Cinepolis',
    location: 'Uptown Mall BSB City, Lt. 2',
    address: 'Jl. RM. Hadisubeno Sosrowardoyo, Pesantren, Mijen, Semarang',
    city: 'Semarang',
    distanceKm: 14.2,
    googleMapsUrl: 'https://maps.google.com/?q=Cinepolis+Uptown+Mall+BSB+City+Semarang',
    formats: ['Regular 2D', 'Macro XE'],
    pricing: {
      'Regular 2D': {
        weekday: 30000,
        friday: 35000,
        weekend: 45000
      },
      'Macro XE': {
        weekday: 40000,
        friday: 45000,
        weekend: 55000
      }
    },
    verification: {
      sourceName: 'Cinepolis Official Web',
      sourceUrl: 'https://cinepolis.co.id/schedule.aspx?cid=SMGUP',
      lastChecked: '2026-08-14T10:00:00Z',
      status: 'verified',
      confidence: 'High'
    }
  }
];

export const ALL_CINEMA_IDS = [
  'xxi-paragon',
  'xxi-dp-mall',
  'xxi-queen-city',
  'xxi-citraland',
  'xxi-transmart-setiabudi',
  'xxi-transmart-majapahit',
  'cinepolis-java-supermall',
  'cinepolis-uptown-bsb'
];

export const MOVIES_CATALOG = [
  {
    id: 'all',
    title: 'All Movies (General Ticket Rate)',
    genre: 'General Cinema Schedule',
    duration: 'N/A',
    rating: 'SU',
    posterBg: 'linear-gradient(135deg, #1A2954, #8B0000)',
    description: 'Compare standard ticket prices across all cinemas regardless of movie selection.',
    cinemaIds: ALL_CINEMA_IDS
  },
  {
    id: 'spiderman-brand-new-day',
    title: 'Spider-Man: Brand New Day',
    genre: 'Action, Sci-Fi, Adventure',
    duration: '142 mins',
    rating: '13+',
    posterBg: 'linear-gradient(135deg, #b71c1c, #0d47a1)',
    description: 'Peter Parker navigates a new era of challenges in New York City as new allies and unexpected villains emerge.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-queen-city', 'xxi-citraland', 'xxi-transmart-majapahit', 'cinepolis-java-supermall', 'cinepolis-uptown-bsb']
  },
  {
    id: 'insidious-out-of-further',
    title: 'Insidious: Out of the Further',
    genre: 'Horror, Mystery, Thriller',
    duration: '115 mins',
    rating: '17+',
    posterBg: 'linear-gradient(135deg, #1a237e, #263238)',
    description: 'Investigators venture back into the terrifying red door realm to stop an ancient entity terrorizing a family.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-queen-city', 'xxi-citraland', 'xxi-transmart-setiabudi', 'xxi-transmart-majapahit', 'cinepolis-java-supermall', 'cinepolis-uptown-bsb']
  },
  {
    id: 'ayah-aku-mau-cerita',
    title: 'Ayah, Aku Mau Cerita!',
    genre: 'Drama, Family',
    duration: '108 mins',
    rating: 'SU',
    posterBg: 'linear-gradient(135deg, #e67e22, #795548)',
    description: 'An emotional family story following a daughter attempting to reconnect with her estranged father through shared memories.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-queen-city', 'xxi-transmart-setiabudi', 'cinepolis-java-supermall']
  },
  {
    id: 'harusnya-horror',
    title: 'Harusnya Horror',
    genre: 'Horror, Comedy',
    duration: '102 mins',
    rating: '13+',
    posterBg: 'linear-gradient(135deg, #4a148c, #880e4f)',
    description: 'A film crew attempts to make the scariest movie of the year, but real paranormal encounters turn set chaos into hilarious terror.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-queen-city', 'xxi-citraland', 'xxi-transmart-setiabudi', 'xxi-transmart-majapahit']
  },
  {
    id: 'mutiny',
    title: 'Mutiny',
    genre: 'Action, Thriller',
    duration: '124 mins',
    rating: '17+',
    posterBg: 'linear-gradient(135deg, #37474f, #bf360c)',
    description: 'After his billionaire boss is murdered, an ex-special forces officer is framed and forced to uncover an international conspiracy.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-queen-city', 'xxi-transmart-majapahit', 'cinepolis-uptown-bsb']
  },
  {
    id: 'paw-patrol-dino-movie',
    title: 'PAW Patrol: The Dino Movie',
    genre: 'Animation, Family, Adventure',
    duration: '88 mins',
    rating: 'SU',
    posterBg: 'linear-gradient(135deg, #0288d1, #2e7d32)',
    description: 'Ryder and the heroic pups journey to Dino Wilds to rescue dinosaurs when a greedy mayor attempts to capture prehistoric pets.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'xxi-citraland', 'xxi-transmart-majapahit', 'cinepolis-uptown-bsb']
  },
  {
    id: 'the-end-of-oak-street',
    title: 'The End of Oak Street',
    genre: 'Mystery, Thriller',
    duration: '110 mins',
    rating: '13+',
    posterBg: 'linear-gradient(135deg, #212121, #455a64)',
    description: 'A quiet suburban street hides a dark secret when a series of mysterious disappearances prompts a local detective to investigate.',
    cinemaIds: ['xxi-dp-mall', 'cinepolis-java-supermall']
  },
  {
    id: 'dear-you',
    title: 'Dear You',
    genre: 'Romance, Drama',
    duration: '116 mins',
    rating: '13+',
    posterBg: 'linear-gradient(135deg, #c2185b, #ad1457)',
    description: 'Two pen pals who have exchanged letters for a decade finally arrange to meet in person, uncovering unexpected truths.',
    cinemaIds: ['xxi-paragon', 'xxi-dp-mall', 'cinepolis-java-supermall']
  },
  {
    id: 'dan-bandung',
    title: 'Dan Bandung',
    genre: 'Drama, Romance',
    duration: '114 mins',
    rating: '13+',
    posterBg: 'linear-gradient(135deg, #00695c, #2e7d32)',
    description: 'A poignant romance set against the nostalgic backdrop of Bandung, exploring lost love and second chances.',
    cinemaIds: ['xxi-queen-city', 'xxi-transmart-setiabudi', 'cinepolis-java-supermall']
  }
];

// Active Movie Catalog Memory Store & Cache Metadata
let activeMovieCatalog = [...MOVIES_CATALOG];
let lastMovieCatalogUpdate = new Date('2026-09-08T06:00:00Z');
let isCatalogLive = false;

/**
 * Asynchronous Movie Catalog Service Layer
 * Fetches latest movies from live cache/endpoint with seamless fallback to MOVIES_CATALOG
 */
export async function fetchMovieCatalog(selectedCinemaIds = []) {
  // Simulate network latency for API readiness (e.g. 120ms)
  await new Promise(resolve => setTimeout(resolve, 120));

  try {
    const res = await fetch('./movies-latest.json').catch(() => null);
    if (res && res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.movies) && data.movies.length > 0) {
        activeMovieCatalog = data.movies;
        lastMovieCatalogUpdate = new Date(data.lastUpdated || Date.now());
        isCatalogLive = true;
      }
    } else {
      const cached = localStorage.getItem('ticketz_movies_cache');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.movies) && parsed.movies.length > 0) {
          activeMovieCatalog = parsed.movies;
          lastMovieCatalogUpdate = new Date(parsed.lastUpdated || Date.now());
          isCatalogLive = true;
        }
      }
    }
  } catch (err) {
    console.warn('Ticketz Movie Service: Using fallback catalog.', err);
    activeMovieCatalog = [...MOVIES_CATALOG];
    isCatalogLive = false;
  }

  const filteredMovies = activeMovieCatalog.filter(movie => {
    if (movie.id === 'all') return true;
    if (!movie.cinemaIds) return true;
    if (!selectedCinemaIds || selectedCinemaIds.length === 0) return true;
    return movie.cinemaIds.some(cid => selectedCinemaIds.includes(cid));
  });

  return {
    movies: filteredMovies,
    allMovies: activeMovieCatalog,
    freshness: getMovieDataFreshness()
  };
}

/**
 * Get current Movie Data Freshness Status metadata
 */
export function getMovieDataFreshness() {
  const timeFormatted = lastMovieCatalogUpdate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  return {
    lastUpdated: lastMovieCatalogUpdate,
    isLive: isCatalogLive,
    label: isCatalogLive ? `Auto-synced: ${timeFormatted}` : 'Verified Catalog'
  };
}


export const TICKET_FORMATS = [
  { id: 'Regular 2D', label: 'Regular 2D', icon: 'film' },
  { id: 'Premiere', label: 'The Premiere (XXI)', icon: 'crown' },
  { id: 'VIP', label: 'Cinepolis VIP', icon: 'sparkles' },
  { id: 'Macro XE', label: 'Macro XE (Cinepolis)', icon: 'tv' }
];

export const HOLIDAYS_2026 = [
  '2026-01-01', // New Year
  '2026-03-20', // Nyepi
  '2026-03-31', // Idul Fitri
  '2026-04-01', // Idul Fitri
  '2026-05-01', // Labor Day
  '2026-05-14', // Ascension Day
  '2026-05-31', // Waisak
  '2026-06-01', // Pancasila Day
  '2026-06-16', // Idul Adha
  '2026-07-07', // Islamic New Year
  '2026-08-17', // Independence Day
  '2026-09-15', // Prophet Birthday
  '2026-12-25'  // Christmas
];

/**
 * Helper to compute price tier for a given date object
 */
export function getDayTier(dateObj) {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const dateStr = `${year}-${month}-${day}`;

  // Check if explicit holiday
  if (HOLIDAYS_2026.includes(dateStr)) {
    return { tier: 'weekend', label: 'Public Holiday Rate', isSpecial: true };
  }

  const dayOfWeek = dateObj.getDay(); // 0 = Sun, 1 = Mon, ... 5 = Fri, 6 = Sat
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return { tier: 'weekend', label: 'Weekend Rate (Sat-Sun)', isSpecial: false };
  } else if (dayOfWeek === 5) {
    return { tier: 'friday', label: 'Friday Special Rate', isSpecial: false };
  } else {
    return { tier: 'weekday', label: 'Weekday Rate (Mon-Thu)', isSpecial: false };
  }
}

/**
 * Format currency in Indonesian Rupiah (Rp)
 */
export function formatRupiah(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return 'N/A';
  return 'Rp ' + amount.toLocaleString('id-ID');
}
