import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({ property }) => {
    console.log(property);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={property.image} alt={property.estate_title} className="h-52 w-full object-cover" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="card-title">{property.estate_title}</h2>
                    <div className={`badge ${property.status === 'rent' ? 'badge-success' : 'badge-info'}`}>
                        {property.status.toUpperCase()}
                    </div>
                </div>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm mt-1">{property.description}</p>
                <div className="mt-2 text-sm">
                    <strong>Area:</strong> {property.area}
                </div>
                <div className="text-sm">
                    <strong>Facilities:</strong> {property.facilities.join(', ')}
                </div>
                <div className="mt-3 font-semibold text-lg text-primary">
                    {property.price}
                </div>
                <div className="divider"></div>
                <div className="card-actions justify-end mt-4">
                    <Link className="btn btn-sm btn-outline btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Estate;