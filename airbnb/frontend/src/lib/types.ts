export interface IListingCard {
  title: string
  description: string
  imageUri: string
  city: string
  roomType: string
  reviewsCount: number
  reviewsAverage: number | null
  price: number
}
