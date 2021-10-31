import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {

    const { serviceId } = useParams();

    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://spooky-dungeon-32470.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            // .then(data => setService(data))
            .then(data => setService(data))

    }, [])

    return (
        <div className="pt-3 container">
            <div className="row mt-5 service p-5 mb-5 mt-5">
                <div className="col-lg-6">
                    <img className="image img-fluid" src={service?.image} alt="" />
                </div>
                <div className="col-lg-6">
                    <h3 className="pt-2 text-center" >{service?.name}</h3>
                    <h5>Booking Price: {service?.price}$</h5>
                    <p className="px-3">{service?.description}</p>
                    <h5 className="">Tour Time: {service?.time} to 7 days</h5>

                    <div className="pt-3">
                        <Link to={`/order/${service?._id}`}>
                            <button className="btn btn-warning">Book Request Now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Details;






