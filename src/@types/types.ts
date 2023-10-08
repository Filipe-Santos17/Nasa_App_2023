import { LocationObject } from 'expo-location';

export type typeLinkData = {
  src: string, 
  country: string, 
  day_range: number, 
  date: string
}

export type typeMapNasaDataApi = {
  country_id: string
  latitude: number
  longitude: number
  bright_ti4: number
  scan: number
  track: string
  acq_date: number
  acq_time: string
  satellite: string
  instrument: string
  confidence: string
  version: string
  bright_ti5: number
  frp: number
  daynight: "N" | "D"
}