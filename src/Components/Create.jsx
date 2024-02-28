import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../edit.css'


const Create = ({ id }) => {
    const navigate = useNavigate()
    const [newData, setNewData] = useState({
        name: '',
        email: '',
        phone: '',
        address_street: '',
        address_city: '',
        address_zipcode: '',
        company_name: '',
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.get(`https://65da9e60bcc50200fcdd0bf7.mockapi.io/users/`)
            .then(res => setNewData(res.data))
            .catch((err) => console.error(err))
    }
    const handlechange = (e) => {
        const { name, value } = e.target
        setNewData((preData) => ({
            ...preData, [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, editData)
        await axios.post(`https://65da9e60bcc50200fcdd0bf7.mockapi.io/users/`, newData)
            .then((res) => console.log(res.data))
            .catch(error => console.error(error))
        navigate('/body')
    }

    return (
        <div className='body ' id='form'>
            <div className='containeR mt-3 d-flex justify-content-center'  >

                <form className='row ' onSubmit={handleSubmit} >
                    <div className='fs-4 edit'>Create Form</div>

                    <div className='col-12 form-floating'>
                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.name} name='name' placeholder='Name' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>Name</label>
                    </div>
                    <div className='col-12 form-floating'>

                        <input type='text' className='form-text form-control' value={newData.email} name='email' placeholder='E-mail' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>E-mail</label>

                    </div>
                    <div className='col-12  form-floating'>

                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.address_street} placeholder='Street' name='address.street' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>Street</label>

                    </div>
                    <div className='col-12 form-floating'>

                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.address_city} placeholder='City' name='address.city' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>City</label>

                    </div>
                    <div className='col-12 form-floating'>

                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.address_zipcode} placeholder='Pincode' name='address.zipcode' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>Pincode</label>

                    </div>
                    <div className='col-12 form-floating'>

                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.phone} name='phone' placeholder='Phone' onChange={handlechange} />

                        <label className='ms-2' for='floatingInput'>Phone</label>
                    </div>
                    <div className='col-12 form-floating'>

                        <input type='text' className='form-text form-control' id='floatingInput' value={newData.company_name} placeholder='Company Name' name='company_name' onChange={handlechange} />
                        <label className='ms-2' for='floatingInput'>Company Name</label>

                    </div>
                    <div className='col-12 mt-4'>

                        <button className='btn btn-update btn-success' type='submit'>Create</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Create;