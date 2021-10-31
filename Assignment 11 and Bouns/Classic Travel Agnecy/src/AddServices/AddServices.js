import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://spooky-dungeon-32470.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Tour service added successfully')
                    reset();
                }
            })
    }

    return (
        <div>
            <div className="text-center">
                <h1 className='pb-4 pt-4'>Add New <span className="span">Tour Services</span></h1>
            </div>
            <form className="addService pb-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" {...register("name", { required: true })} placeholder="Location Name" /> <br></br>
                <input className="form-control" type="number" {...register("price", { required: true })} placeholder="Booking Price" /> <br></br>

                <textarea className="form-control" {...register("description", { required: true })} placeholder="Details Description" /> <br></br>

                <input className="form-control" type="number" {...register("time")} placeholder="Time Duration" /><br></br>
                <input className="form-control" {...register("image")} placeholder="Image Url link" /><br></br>
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>

    );
};

export default AddServices;