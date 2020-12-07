export interface HotelAmenities {
  id: number
  guestRoom?: number
  bedRoom?: number
  wifiAvailability?: boolean
  parkingAvailability?: boolean
  poolAvailability?: boolean
  airCondition: boolean
  extraBedFacility: boolean
}

export interface HotelImage {
  id: number
  url: string
  thumbUrl: string
}

export interface HotelLocation {
  id: number
  lat: number
  lng: number
  formattedAddress: string
  zipcode: string
  city: string
  stateLong: string
  stateShort: string
  countryLong: string
  countryShort: string
}

export interface HotelAttributes {
  id?: number
  agentId?: number
  title: string
  slug?: string
  content?: string
  status: 'public' | 'unpublic'
  price: number
  isNegotiable: boolean
  propertyType: string
  condition: string
  rating: number
  ratingCount: number
  contactNumber: string
  amenities: HotelAmenities[]
  name: string
  createdAt?: Date
  updatedAt?: Date
}
