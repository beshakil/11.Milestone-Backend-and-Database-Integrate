import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceContent.css'

const ServiceContent = ({ service }) => {
    const { _id, image, name, description } = service;

    return (

        <div className="col-lg-4 col-sm-6 col-12 gx-5">
            <div className="service pb-3">
                <div className="pt-2">
                    <div className="p-3">
                        <img className="image img-fluid rounded" src={image} alt="" />
                    </div>

                    <h4 className="text-center" >{name}</h4>
                    <p className="ps-3 pe-3" >{description.slice(0, 175)}</p>

                    <div className="text-center">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ServiceContent;


