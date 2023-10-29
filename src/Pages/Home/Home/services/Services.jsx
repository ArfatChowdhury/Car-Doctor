import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";


const Services = () => {
    const [Services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
        console.log(Services);
    }, [])
    return (
        <div className="my-6 text-center">
            <h1 className="text-xl font-bold text-[#FF3811]">Service</h1>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p  className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomizes <br /> words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 my-10">

                {
                    Services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;