import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

function MyMap(props) {
  const lat = props.empresa.latitude
  const lgt = props.empresa.longitude
  return (
    <>
    <Flex w={'full'} justify={'center'} align={'center'} alignItems={'center'} h={[20,20,20,40]}> 
      <Heading color={'#825221'}>Onde estamos?</Heading>
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