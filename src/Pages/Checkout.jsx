import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";


const Checkout = () => {
    const service = useLoaderData()
    const { title, _id, img, price } = service
    const { user } = useContext(AuthContext)
    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email

        const order = {
            coustomerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order);

        fetch('http://localhost:5000/checkouts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId)
                    alert('booked succesfully')
            })


    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>{title}</h1>
                <h2 className='text-center text-3xl'>Book Service: {title} </h2>
                <form onSubmit={handleCheckout}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span defaultValue={'$' + price} className="label-text">Due amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Checkout;