import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../design/map-design/Map.scss';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

type LocationProps = {
    ipAddress: string;
};

type Location = {
    lat: number;
    lng: number;
};

export default function Map({ ipAddress }: LocationProps) {
    const API_KEY = "at_ZE2sMEUwtfVC69rN0ztTdhJgZKExa";
    const [location, setLocation] = useState<Location | null>(null);
    const [position, setPosition] = useState<[number, number]>([0, 0]);
    const mapRef = useRef<any>();
   

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
                setLocation(res.data.location);
                console.log(res.data);
                setPosition([res.data.location.lat, res.data.location.lng])
            } catch (error) {
                console.log("ERROR", error);
            }
        };

        if (ipAddress) {
            getData(); 
        }

        
    }, [ipAddress]); 

    useEffect(() => {
        
        mapRef?.current?.setView(position);
    }, [position])
   
    if (!location) {
        return <p>Loading...</p>;
    }

     

    return (
        <div className="map-container">
            <MapContainer 
                center={position} 
                zoom={13} 
                scrollWheelZoom={true} 
                style={{ height: "70vh", width: "100%" }}
                ref={mapRef}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

