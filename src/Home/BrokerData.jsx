import React from 'react';
import { Link } from 'react-router-dom';

const BrokerData = ({ broker, NameSearch, AreaSearch }) => {
    const BrokerName = broker.Name;
    const BrokerArea = broker.Area_Name;
    const BrokerID = broker.ID;
    const Picture_URL = broker.Picture_URL;
    const phone = broker.Phone;

    return (
        <div className="card glass w-full">
            <figure>
                <img className='w-full h-80'
                    src={Picture_URL}
                    // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="car!" />
            </figure>
            <div className="card-body">
                <div className=" grid grid-cols-12">
                    <h2 className="card-title col-span-10">{BrokerName}</h2>
                    <p className='col-span-2'>ID: {BrokerID}</p>
                </div>
                <span>Area : {BrokerArea}</span>
                <span>Phone : {phone}</span>
                <div className="card-actions  justify-center">
                    <Link to={`/client/${BrokerID}`} className="btn btn-primary">More info</Link>
                </div>
            </div>
        </div>
    );
};

export default BrokerData;