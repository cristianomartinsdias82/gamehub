export interface GetPagedTitlesResponse {
  count: number
  next: string
  previous: string
  results: Game[]
}

interface Game {
  id: string //number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Rating[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: AddedByStatus
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating: EsrbRating
  parent_platforms: GamingPlatform[]
}

interface Rating {
  id: number
  title: string
  count: number
  percent: number
}

interface AddedByStatus {
  yet: number
  owned: number
  beaten: number
  toplay: number
  dropped: number
  playing: number
}

interface EsrbRating {
  id: number
  slug: string
  name: string
}

interface GamingPlatform {
  platform: {id: number, slug: string, name: string},
  released_at: string
  requirements: Requirements
}

interface Requirements {
  minimum: string
  recommended: string
}
