import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>
        fetch('https://spooky-dungeon-32470.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        , [])

    return (
        <div className="container pb-5">
            <div className="text-center pt-5">
                <h1 className='pb-4'>Our All <span className="span">Tour Services</span></h1>
            </div>
            <div className="row g-5">
                {
                    services.map((service => <ServiceContent
                        key={service._id}
                        service={service}>
                    </ServiceContent>))
                }
            </div>
        </div>
    );
};

export default Services;


