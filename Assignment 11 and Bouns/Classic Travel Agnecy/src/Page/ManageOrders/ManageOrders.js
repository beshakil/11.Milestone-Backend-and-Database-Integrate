import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import './ManageOrders.css'

const ManageOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() =>
        fetch('https://spooky-dungeon-32470.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
        , [])
    const handleDelete = id => {
        fetch(`https://spooky-dungeon-32470.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Cancel Booking Request')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }

            })
    }

    const [admin, setAdmin] = useState()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setAdmin(data.password)
        console.log(admin);
        reset()
    }
    return (

        <div className="container">
            <div className="text-center">
                <h1 className='pb-4 pt-4'>Manage ALL <span className="span">Users Order</span></h1>
            </div>
            {

                user.displayName && <div>
                    <div className="text-center justify-content-between ">
                        <h5 className='mt-3'>To get access of admin please provide the password:</h5>
                        <h5 className='mt-3'> Password: admin123</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control password" {...register("password")} placeholder="Enter admin password To get booking cancel access" />
                            <input className="btn btn-primary mt-3" type="submit" />
                        </form>
                    </div>

                    <table className="table table-hover">
                        <thead>
                            <tr className="">
                                <th scope="col">Package Name</th>
                                <th scope="col">Your Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cancel Booking</th>
                            </tr>
                        </thead>
                        {orders.map((service) => (
                            <tbody key={service._id}>
                                <tr className="">
                                    <td>{service.location}</td>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td><button className="btn btn-success">Pending</button></td>
                                    <td>
                                        {
                                            admin === 'admin123' && <button onClick={() => handleDelete(service._id)} className="btn btn-danger">Cancel Booking</button>
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            }
        </div>
    );
};

export default ManageOrder;


