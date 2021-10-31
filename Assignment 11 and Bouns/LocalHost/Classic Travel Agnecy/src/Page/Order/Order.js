import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Order.css'

const Order = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour service Book Now Successfully')
                    reset();
                }
            })
    }

    const { serviceId } = useParams();

    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])


    return (
        <div className="container">

            <div className="row mt-5 service p-5 mb-5">
                <div className="col-lg-6">
                    <div className="text-center">
                        <h1 className='pb-4'>Book Your <span className="span">Tour Services</span></h1>
                    </div>
                    <form className="addService" onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control" defaultValue={service.name} {...register("location", { required: true })} placeholder="Service Name" /> <br></br>

                        <input className="form-control" defaultValue={user.displayName} {...register("name", { required: true })} placeholder="Your Name" /> <br></br>

                        <input className="form-control" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Your Email" /> <br></br>

                        <input className="form-control" {...register("address", { required: true })} placeholder="Your Address" /> <br></br>

                        <input className="form-control" {...register("city", { required: true })} placeholder="City" /> <br></br>

                        <input className="form-control" {...register("number", { required: true })} placeholder="Mobile Number" /> <br></br>

                        <input className="form-control" {...register("date", { required: true })} placeholder="Date" /> <br></br>

                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
                <div className="col-lg-6">
                    <img className="image img-fluid" src={service.image} alt="" />
                    <h3 className="pt-2 text-center" >{service.name}</h3>
                    <h5>Booking Price: {service.price}$</h5>
                    <p className="">{service.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Order;