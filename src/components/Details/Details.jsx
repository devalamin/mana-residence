import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Details = () => {

    const data = useLoaderData()
    const stringId = useParams()
    const id = parseInt(stringId?.id)
    // console.log(data, id);

    const detailsData = Array.isArray(data) ? data.find(item => item?.id === id) : null;
    console.log(detailsData);

    return (

        <div>
            <Navbar></Navbar>
            <div className="bg-gray-50 mt-10 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-7xl bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                       
                        <div className="w-full md:w-1/2">
                            <img
                                src={detailsData?.image}
                                alt={detailsData?.estate_title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                       
                        <div className="p-6 md:w-1/2 flex flex-col justify-between">
                            <h1 className="text-3xl font-bold text-gray-800">{detailsData?.estate_title}</h1>
                            <p className="text-lg text-gray-600 mt-2">{detailsData?.description}</p>
                            <div className="mt-4 flex items-center text-gray-800">
                                <span className="text-xl font-semibold">{`Price: ${detailsData?.price}`}</span>
                                <span className="ml-4 text-md badge badge-success text-white font-bold">{`Status: ${detailsData?.status}`}</span>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">Facilities</h3>
                                <ul className="list-disc ml-6 mt-2 text-gray-600">
                                    {detailsData?.facilities?.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">Details</h3>
                                <p className="text-gray-600 mt-2">{detailsData?.details}</p>
                            </div>
                            <div className="btn mt-6 btn-wide bg-success text-white">Book This Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;