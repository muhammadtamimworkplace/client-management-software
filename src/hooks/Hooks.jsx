import React, { useEffect, useState } from 'react';
import BrokerData from '../Home/BrokerData';

const Hooks = ({ AreaSearch, NameSearch }) => {
    // console.log(props);

    const [brokers, setBroker] = useState([]);

    useEffect(() => {
        fetch('/public/assets/data.json')
            .then(res => res.json())
            .then(data => setBroker(data)
            )
    }, [])

    // const filteredBrokers = brokers.filter(broker =>
    //     broker.Name.includes('a') &&
    //     broker.Area.includes('')
    // );

    const filteredByName = brokers.filter(broker =>
        broker.Name && typeof broker.Name === 'string' && broker.Name.toLowerCase().includes('Tamim'.toLowerCase())
    );
    const bothFilter = filteredByName.filter(broker =>
        broker.Name && typeof broker.Area_Name === 'string' && broker.Area_Name.toLowerCase().includes('DhanMondi'.toLowerCase())
    )
    console.log(bothFilter);


    return (
        <div className='w-11/12 mx-auto mt-10 grid md:grid-cols-3 gap-16'>
            {
                brokers.map(broker => <BrokerData
                    // className='  Content   mx-auto'
                    broker={broker}
                    AreaSearch={AreaSearch}
                    NameSearch={NameSearch}
                    key={broker.ID}
                ></BrokerData>)
            }
        </div>
    );
};

export default Hooks;