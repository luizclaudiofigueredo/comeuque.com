import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

function MyMap() {
  const lat = -22.6106654;
  const lgt = -43.7109632;
  return (
    <>
    <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={[20,20,20,40]}> 
      <Text fontSize={24} color={'#825221'} fontWeight={'bold'}>Onde nos encontrar</Text>
    </Flex>    
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2FsbGFyaW8iLCJhIjoiY2w2YXBoc291MXFpMzNvbjM1bzB6em55MiJ9.Cyi-lwLrpwX5mx9SZFOTDA"
        style={{
            height: '500px',
            width: '100%'
          }}        
        initialViewState={{
          longitude: lgt,
          latitude: lat,
          zoom: 17.0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"       
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <Marker longitude={lgt} latitude={lat} />
        <FullscreenControl />
        <NavigationControl />
      </Map>
    </div>
    </>
  );
}
export default MyMap;