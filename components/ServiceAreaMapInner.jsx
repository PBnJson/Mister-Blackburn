'use client';
import {MapContainer,TileLayer,Circle,CircleMarker,Popup} from 'react-leaflet';

export default function ServiceAreaMapInner({center,radius}){
  return <MapContainer center={center} zoom={9} scrollWheelZoom={false} className="service-map-leaflet">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Circle
      center={center}
      radius={radius}
      pathOptions={{color:'#96475c',fillColor:'#c77e92',fillOpacity:0.22,weight:2}}
    />
    <CircleMarker
      center={center}
      radius={7}
      pathOptions={{color:'#96475c',fillColor:'#451a2e',fillOpacity:1,weight:2}}
    >
      <Popup>
        <strong>Mesquite, TX</strong><br/>
        Home base · 40-mile service radius
      </Popup>
    </CircleMarker>
  </MapContainer>;
}
