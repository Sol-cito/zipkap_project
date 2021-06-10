import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      lat: 37.53737015227561,
      lng: 127.00954267032773,
      zoom: 14,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    return (
      <div>
        <MapContainer
          style={{ height: "400px" }}
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}
export default Maps;
