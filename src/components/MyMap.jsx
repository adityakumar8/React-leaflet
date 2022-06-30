import React,{ Component } from "react";
import { MapContainer ,GeoJSON } from "react-leaflet";
import mapData from './../data/countries.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";


class MyMap extends Component {

    
    state = { }
    componentDidMount() {
      console.log(mapData);
    }

    countryStyle = {
        fillColor: "blue",
        fillOpacity: 1,
        color: "black",
        weight: 2,
        // dashArray: 5,
    };

    onEachCountry = (country, layer) => {
      const countryName = country.properties.ADMIN;
      console.log(countryName);
      layer.bindPopup(countryName);
      
      layer.on({
        mouseover: (event)=> {
          event.target.setStyle({
            color: "green",
            fillColor: "yellow",
            fillOpacity: 0.5,
          });
        }
      })
    }

    render(){
    return(
    <div>
    <h1 style={{textAlign: "center"}}> MyMap</h1>
    <MapContainer style= {{height:"80vh"}} zoom={2} center={[20, 40]}>
        <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry}/>

    </MapContainer>
    
  </div> )
    }
}
export default MyMap;