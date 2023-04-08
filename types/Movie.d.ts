export type MovieDetailParams = {
  movie_id: string;
}

export type MovieDetailRes = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsCollection;
  budget?: 460000000;
  credits?: Credits;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  keywords?: Keywords;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  reviews?: Reviews;
  runtime?: number;
  spoken_languages?: SpokenLanguages[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export type Reviews = {
  page?: number;
  results?: Review[]
  total_pages?: number;
  total_results?: number;
}

type Review = {
  author?: string;
  author_details?: AuthorDetails;
  content?: string;
  created_at?: string;
  id?: string;
  updated_at?: string;
  url?: string;
}

type AuthorDetails = {
  name?: string;
  username?: string;
  avatar_path?: string | null;
  rating?: integer | null;
}

export type Keywords = {
  keywords?: Keyword[];
}

type Keyword = {
  id?: number;
  name?: string;
}

type Credits = {
  crew?: Crew[]
  cast?: Cast[]
}

export type Cast = {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

type Crew = {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  credit_id?: string;
  department?: string;
  job: string;
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