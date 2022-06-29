import React,{ Component } from "react";
import { MapContainer ,GeoJSON } from "react-leaflet";
import mapData from './../data/countries.json';
import "leaflet/dist/leaflet.css"


class MyMap extends Component {

    
    state = { }
    componentDidMount() {
      console.log(mapData);
    }
    render(){
    return(
    <div>
    <h1 style={{textAlign: "center"}}> MyMap</h1>
    <MapContainer style= {{height:"80vh"}} zoom={2} center={[20, 100]}>
        <GeoJSON data={mapData.features}/>

    </MapContainer>
    
  </div> )
    }
}
export default MyMap;