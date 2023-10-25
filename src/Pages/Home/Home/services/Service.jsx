/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Service = ({ service }) => {
    const { title, img, price } = service

    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
                <figure><img className="h-72" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className=" flex items-center justify-between ">
                        <p className="text-left text-[#FF3811]">Price: ${price}</p>
                        <Link className=""><p><BsArrowRightCircleFill></BsArrowRightCircleFill></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;