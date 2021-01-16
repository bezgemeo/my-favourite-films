export interface IFilm {
  urlPoster: string;
  title: string;
  year: string;
  rating: string;
  directors: Array<{ name: string; id: string; }>;
  countries: string[];
  idIMDB: string;
  trailers: Array<{
    quality: string;
    videoURL: string;
  }>;
}
