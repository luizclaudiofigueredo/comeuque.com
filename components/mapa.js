import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Text } from '@chakra-ui/react';

function Mapa() {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoia2FsbGFyaW8iLCJhIjoiY2w2YXBoc291MXFpMzNvbjM1bzB6em55MiJ9.Cyi-lwLrpwX5mx9SZFOTDA'
  });
  return(
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: ['400px'],
        width: '100%'
      }}
    >
      <Text>Mapas</Text>
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-17' }}>
        <Feature coordinates={[-22.6105485,-43.7130127]}/>
        <ZoomControl />
      </Layer>
    </Map>
  )
}

export default Mapa