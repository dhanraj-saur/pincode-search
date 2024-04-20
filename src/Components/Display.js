import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import searchIcon from '../Image/search.png'

const Display = () => {
    const [data, setData] = useState([]);

    const [search, setSearch] = useState('')

    const [filterTerm, setFilteredTerm] = useState([])




    // get parametrs from url ex:- display/57676(pinCode)
    const { pinCode } = useParams()

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;

        setSearch(searchTerm)

        const filteredItems = data.filter((item) =>
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        console.log(filteredItems);
        setFilteredTerm(filteredItems)
    }


    const fetchData = () => {
        const url = `https://api.postalpincode.in/pincode/${pinCode}`;

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data[0].PostOffice);
                console.log(data);

            });
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div>
            <div className='search'>
                <img src={searchIcon} alt='searchIcon' width={20} height={20} />
                <input type='search' placeholder='filter' value={search} onChange={handleInputChange} />
            </div>
            <div className='details'>

                {data?.map((item, index) => (

                    <div key={index} >
                        <div className='data'>
                            <p>Name : {item?.Name}</p>
                            <p>Branch Type : {item?.BranchType}</p>
                            <p>Delivery Status : {item?.DeliveryStatus}</p>
                            <p>District : {item?.District}</p>
                            <p>State : {item?.State}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Display