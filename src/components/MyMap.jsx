import React,{ Component } from "react";
import { MapContainer ,GeoJSON } from "react-leaflet";
import mapData from './../data/countries.json';
import "leaflet/dist/leaflet.css";
import "./MyMap.css";


class MyMap extends Component {

    
    state = { color: "#FFFF00"}

    color = ["green", "blue", "yellow", "orange", "grey"];

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


    onCountryClick = (event) => {
      console.log("Clicked");
    };

    changeCountryColor = (event)=> {
      event.target.setStyle({
        color: "green",
        fillColor: this.state.color,
        fillOpacity: 1,
      });
    }

    onEachCountry = (country, layer) => {
      const countryName = country.properties.ADMIN;
      console.log(countryName);
      layer.bindPopup(countryName);
      layer.options.fillOpacity = Math.random(); // 0-1 (0.1,0.2,0.3,0.4,0.5....1)
      // const colorIndex = Math.floor(Math.random()*this.color.length);
      // layer.options.fillColor = this.color[colorIndex];
      
      layer.on({
        click: this.changeCountryColor,
      });
    };

    colorChange = (event) => {
      this.setState({color:event.target.value})

    }

    render(){
    return(
    <div>
    <h1 style={{textAlign: "center"}}> MyMap</h1>
    <MapContainer style= {{height:"80vh"}} zoom={2} center={[20, 40]}>
        <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry}/>

    </MapContainer>
    
    <input 
    type="color"  
    value={this.state.color} 
    onChange={this.colorChange}/>
  </div> )
    };
}
export default MyMap;