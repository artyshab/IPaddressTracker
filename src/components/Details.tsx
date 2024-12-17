import { useEffect, useState } from 'react';
import '../design/details-design/Details.scss';
import axios from 'axios';

type DetailsProps = {
    ipAddress: string;
};

export default function Details({ ipAddress }: DetailsProps) {
    const API_KEY = "at_ZE2sMEUwtfVC69rN0ztTdhJgZKExa";
    const [address, setAddress] = useState<any>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
                setAddress(res.data);
                console.log(res.data)
            } catch (error) {
                console.log("ERROR", error);
            }
        };

        if (ipAddress) {
            getData(); 
        }
    }, [ipAddress]); 

    return (
        <div className="details-wrapper">
            {address ? (
                <>
                    <div>
                        <h1>IP ADDRESS</h1>
                        <p>{address.ip}</p>
                    </div>
                    <div className="border"></div>
                    <div>
                        <h1>LOCATION</h1>
                        <p>{address.location.city}</p>
                    </div>
                    <div className="border"></div>
                    <div>
                        <h1>TIMEZONE</h1>
                        <p>{address.location.timezone}</p>
                    </div>
                    <div className="border"></div>
                    <div>
                        <h1>ISP</h1>
                        <p>{address.isp}</p>
                    </div>
                    
                </>
            ) : (
                <div className="loader"></div>
            )}
        </div>
    );
}
