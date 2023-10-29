import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import CheckoutRow from "./CheckoutRow";


const AllCheckouts = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/checkouts?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    

    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert("deleted successfully")
                        const remaining = bookings.filter(booking =>  booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>your Bookings {bookings.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            bookings.map(booking => <CheckoutRow key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            ></CheckoutRow>)
                           }
                        </tbody>
                      

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCheckouts;