export interface SearchParams {
  searchTerm?: string
  genreIds?: string[] | undefined
  platformIds?: string[] | undefined
  sortColumn?: string
  pageNumber: number
  pageSize: number
}