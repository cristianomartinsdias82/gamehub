interface OrderingOption {
  id: string
  caption: string
}

export const SortedOrderingOptions: OrderingOption[] = [
  { id: '', caption: 'Relevance' },
  { id: '-added', caption: 'Date added' },
  { id: 'name', caption: 'Name' },
  { id: '-released', caption: 'Released date' },
  { id: '-metacritic', caption: 'Popularity' },
  { id: '-rating', caption: 'Average rating' }
];