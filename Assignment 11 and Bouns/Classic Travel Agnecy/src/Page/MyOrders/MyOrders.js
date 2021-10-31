import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrder.css'

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
    const myOrder = orders?.filter(item => item.email === user.email)

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
    return (
        <div className="container">
            <div>
                <div className="text-center">
                    <h1 className='pb-4 pt-4'>My <span className="span">Order</span></h1>
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
                    {
                        myOrder.map((service) => (
                            <tbody key={service._id}>
                                <tr className="">
                                    <td>{service.location}</td>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td><button className="btn btn-success">Pending</button></td>
                                    <td><button onClick={() => handleDelete(service._id)} className="btn btn-danger">Cancel Booking</button></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;