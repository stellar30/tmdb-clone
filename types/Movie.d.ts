export type MoviedetailRes = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsCollection;
  budget?: 460000000,
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguages[],
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

type SpokenLanguages = {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

type ProductionCountries = {
  iso_3166_1?: string;
  name?: string;
}

type ProductionCompanies = {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

type BelongsCollection = {
  id?: number;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
}

type Genre = {
  id?: number;
  name?: string;
}