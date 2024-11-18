import React, { useEffect, useState } from 'react';
import BrokerData from '../Home/BrokerData';

const Hooks = () => {

    const [broker, setBroker] = useState([]);

    useEffect(() => {
        fetch('/public/assets/data.json')
            .then(res => res.json())
            .then(data => setBroker(data)
            )
    }, [])
    // console.log(broker);

    return (
        <div className='w-11/12 mx-auto mt-10 grid md:grid-cols-3 gap-16'>
            {
                broker.map(broker => <BrokerData
                    // className='  Content   mx-auto'
                    broker={broker}
                    key={broker.ID}
                ></BrokerData>)
            }
        </div>
    );
};

export default Hooks;