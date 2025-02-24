interface OrderingOption {
  id: string
  caption: string
  order: number
}

export const SortedOrderingOptions: OrderingOption[] = [
  { id: 'rating', caption: 'Relevance', order: 1 },
  { id: 'name', caption: 'Name (ascending)', order: 2 },
  { id: '-name', caption: 'Name (descending)', order: 3 },
  { id: 'added', caption: 'Date added (ascending)', order: 4 },
  { id: '-added', caption: 'Date added (descending)', order: 5 },
  { id: 'released', caption: 'Released date (ascending)', order: 6 },
  { id: '-released', caption: 'Released date (descending)', order: 7 }
].sort((it1,it2) => it1.order + it2.order);