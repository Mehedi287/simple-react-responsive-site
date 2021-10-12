import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import "./services.css"

const Servicers = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="services">
            {
                service.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Servicers;