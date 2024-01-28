// Map component
import 'leaflet/dist/leaflet.css';
import style from '../../styles/Home.module.css';

import { MapContainer, TileLayer } from 'react-leaflet';

function Map({ lat, lon }) {
    const position = [lat, lon];

    return (
        <MapContainer className={style.map} center={position} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="http://127.0.0.1:8000/tiles/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default Map;