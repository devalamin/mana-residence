import React, { use } from 'react';
import Estate from './Estate';

const Estates = ({ estatePromise }) => {

    const data = use(estatePromise)


    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Available Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(property => (
                    <Estate key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};


export default Estates;