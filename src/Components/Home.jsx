import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Home = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get("https://65da9e60bcc50200fcdd0bf7.mockapi.io/users")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className='row roW justify-content-space-evenly ps-0'>

            {data.map((item) => {
                return (
                    <Card item={item} />
                )
            })}
        </div>
    );
};

export default Home;