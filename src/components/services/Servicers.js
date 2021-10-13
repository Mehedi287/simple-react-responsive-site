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
        <>
            <h2 className="mt-4 text-success">Our Services</h2>
            <div className="services">
                {
                    service.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
            <hr className="m-5 mt-5" />
        </>
    );
};

export default Servicers;