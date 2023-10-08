import MapView, { Marker } from "react-native-maps"
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject } from "expo-location"
import { Text } from "react-native"
import { useEffect, useState } from "react"
import { MapContainer } from "./style"
import { typeLinkData, typeMapNasaDataApi } from "src/@types/types"
import Papa from 'papaparse';

export default function PageMap() {

  const now = new Date()

  const [userCurrentPosition, setUserCurrentPosition] = useState<LocationObject | null>(null)
  const [pointsOfFire, setPointsOfFire] = useState<typeMapNasaDataApi[] | null>(null)

  async function requestLocationPermission() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const userPosition = await getCurrentPositionAsync()
      setUserCurrentPosition(userPosition)
    }
  }

  function createLinkData({ src, country = 'BRA', day_range = 1, date }: typeLinkData) {
    const key = '2c0a7ed1b048e04f60f2929d8eedf5e6'

    return `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${key}/${src}/${country}/${day_range}/${date}`
  }

  async function requestDataPointsOfFireAsync() {
    try {
      const objDataForNasa: typeLinkData = {
        src: 'VIIRS_SNPP_NRT',
        country: 'BRA',
        day_range: 1,
        date: `${now.getFullYear}-${now.getMonth}-${now.getDate}`
      }

      // const getDataApiNasa: Promise<typeMapNasaDataApi> = await fetch(createLinkData(objDataForNasa), {
      //   method: 'GET'
      // })

      //const dataTextApiNasa = await getDataApiNasa.text()

      // Papa.parse(dataTextApiNasa, {
      //   complete: (result) => {
      //     console.warn(result)
      //     setPointsOfFire(result.data.slice(1)); // Assuming the first row contains headers
      //   },
      //   header: true, // Treat the first row as headers
      // });

      //setPointsOfFire(getDataApiNasa)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    requestLocationPermission()
  }, [])

  // useEffect(() => {
  //   requestDataPointsOfFireAsync()
  // }, [])

  // if (pointsOfFire === null) {
  //   return null
  // }

  return (
    <MapContainer>
      {userCurrentPosition ? (
        <MapView
          style={{ flex: 1, width: '100%' }}
          initialRegion={{
            latitude: userCurrentPosition.coords.latitude,
            longitude: userCurrentPosition.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {/* <Marker /> */}
        </MapView>
      ) : (
        <MapView />
      )}
    </MapContainer>
  )
}
