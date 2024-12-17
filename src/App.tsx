import  { useState } from 'react';
import Details from './components/Details';
import IPaddrress from './components/IPaddress';
import Map from './components/Map';

export default function App() {
    const [ipAddress, setIPaddress] = useState<string>("8.8.8.8"); // Default IP address

    const handleSearch = (newIpAddress: string) => {
        setIPaddress(newIpAddress);
    };

    return (
        <div className="app">
            <IPaddrress title="IP Address Tracker" onSearch={handleSearch} />
            <Details ipAddress={ipAddress} />
            <Map ipAddress={ipAddress}/>
        </div>
    );
}
