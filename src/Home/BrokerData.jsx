import React from 'react';

const BrokerData = ({ broker, NameSearch, AreaSearch }) => {
    const BrokerName = broker.Name;
    const BrokerArea = broker.Area_Name;
    const BrokerID = broker.ID;
    const Picture_URL = broker.Picture_URL;

    // console.log(brokerDatas);

    // console.log(BrokerName, BrokerArea);


    // const filteredBrokers = [broker].filter(Broker =>
    //     Broker.Name.toLowerCase().includes(NameSearch.toLowerCase()) &&
    //     Broker.Area.toLowerCase().includes(AreaSearch.toLowerCase())
    // );

    // console.log(BrokerName, NameSearch, AreaSearch);



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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More info</button>
                </div>
            </div>
        </div>
    );
};

export default BrokerData;