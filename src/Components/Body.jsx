import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home.css'


const Body = ({ setId }) => {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [setId])
    const fetchData = async () => {
        await axios.get("https://65da9e60bcc50200fcdd0bf7.mockapi.io/users")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }
    const handleEdit = (id) => {
        setId(id)
        navigate(`/edit/${id}`);
        console.log(('edit clicked with id: ' + id));

    }
    const handleDelete = async (id) => {
        await axios.delete(`https://65da9e60bcc50200fcdd0bf7.mockapi.io/users/${id}`)
            .then(setData(data.filter((datas) => (datas.id !== id))))
            .catch((err) => console.error(err))
    }
    const handleCreate = () => {
        navigate('/create')
    }

    return (
        <div className='bg-white'>
            <div className=' pt-3 me-4 d-flex justify-content-end'>

                <button className='btn btn-success' onClick={handleCreate} type='button'>Create</button>
            </div>
            <div className='table-responsive mt-4 ms-2 me-2'>
                <table className='container-fluid table table-striped'>
                    <thead>
                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Edit</th>
                            <th >Delete</th>
                        </tr>

                    </thead>
                    <tbody className='color  '>
                        {data.map((item, index) => {
                            return (
                                <tr className='' key={index}>
                                    <td align='center' className='pt-6 '>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td align='center' className='button'><button className='btn btn-primary' onClick={() => { handleEdit(item.id) }} type="button">Edit</button></td>
                                    <td align='center' className='button'><button className='btn btn-danger' onClick={() => { handleDelete(item.id) }} type="button">Delete</button></td>
                                </tr>
                            )


                        })}
                    </tbody>
                </table>


            </div>


        </div>
    );
};

export default Body;