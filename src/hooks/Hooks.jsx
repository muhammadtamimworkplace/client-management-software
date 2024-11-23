import { useState, useEffect } from 'react';
import BrokerData from '../Home/BrokerData';

const Hooks = ({ AreaSearch, NameSearch }) => {
    const [brokers, setBroker] = useState([]);
    const [filterData, setFilterData] = useState([]); // Store filtered data

    useEffect(() => {
        fetch('/public/assets/data.json')
            .then(res => res.json())
            .then(data => setBroker(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        let filteredCollactions = brokers;

        // Filter by Name if NameSearch is provided
        if ((NameSearch && AreaSearch || NameSearch | AreaSearch) !== '') {
            filteredCollactions = filteredCollactions.filter(broker =>
                broker.Name && typeof broker.Name === 'string' && broker.Name.toLowerCase().includes(NameSearch.toLowerCase())
                &&
                broker.Area_Name && typeof broker.Area_Name === 'string' && broker.Area_Name.toLowerCase().includes(AreaSearch.toLowerCase())
            );
        }

        // Update the filterData state with the final filtered data
        setFilterData(filteredCollactions);
    }, [NameSearch, AreaSearch]);  // Trigger when NameSearch, AreaSearch change


    // console.log(filterData);

    return (
        <div className='w-11/12 mx-auto mt-10 grid md:grid-cols-3 gap-16'>
            {
                filterData.map(broker => <BrokerData
                    broker={broker}
                    key={broker.ID}
                ></BrokerData>)
            }
        </div>
    );
};

export default Hooks;