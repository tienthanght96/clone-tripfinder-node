export interface LocationImage {
  id: number
  url: string
}

export interface LocationAttributes {
  city: string
  countryLong: string
  countryShort: string
  formattedAddress: string
  id: number
  lat: string | number
  lng: string | number
  locationImage: LocationImage
  numberOfPost: number
  stateLong: string
  stateShort: string
  zipcode: string | number
}
