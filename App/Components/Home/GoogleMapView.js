import { View, Text, Dimensions } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, PlaceMarker} from 'react-native-maps'
import React, { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext'

export default function GoogleMapView() {

  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,

  })

  const {location, setLocation} = useContext(UserLocationContext)

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      })
    }
  }, [location])

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, 
        marginBottom: 10, fontWeight: "600",fontFamily:'raleway-bold' }}>
        Top Nearby Places
      </Text>
      <View style={{ borderRadius: 20, overflow: "hidden" }}>
    {location?    <MapView
          style={{
            width: Dimensions.get("screen").width * 0.89,
            height: Dimensions.get("screen").height * 0.23,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
            <Marker 
            title="You" 
            coordinate={mapRegion}
             />
           
        </MapView>:null} 
        
      </View>
     
    </View>
  )
}