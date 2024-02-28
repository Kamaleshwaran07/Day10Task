import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../edit.css'
const Edit = ({ id }) => {
  const navigate = useNavigate()
  const [editData, setEditData] = useState({
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
    await axios.get(`https://65da9e60bcc50200fcdd0bf7.mockapi.io/users/${id}`)
      .then(res => setEditData(res.data))
      .catch((err) => console.error(err))
  }
  const handlechange = (e) => {
    const { name, value } = e.target
    setEditData((preData) => ({
      ...preData, [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    // await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, editData)
    await axios.put(`https://65da9e60bcc50200fcdd0bf7.mockapi.io/users/${id}`, editData)
      .then((res) => console.log(res.data))
      .catch(error => console.error(error))
    navigate('/body')
  }

  return (
    <div className='body ' id='form'>
      <div className='containeR mt-3 d-flex justify-content-center'  >
        <form className='row ' onSubmit={handleSubmit} >
          <div className='fs-4 edit'>Edit Form</div>

          <div className='col-12 form-floating'>
            <input type='text' className='form-text form-control' id='floatingInput' value={editData.name} name='name' placeholder='Name' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>Name</label>
          </div>
          <div className='col-12 form-floating'>

            <input type='text' className='form-text form-control' value={editData.email} name='email' placeholder='E-mail' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>E-mail</label>

          </div>
          <div className='col-12  form-floating'>

            <input type='text' className='form-text form-control' id='floatingInput' value={editData.address_street} placeholder='Street' name='address.street' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>Street</label>

          </div>
          <div className='col-12 form-floating'>

            <input type='text' className='form-text form-control' id='floatingInput' value={editData.address_city} placeholder='City' name='address.city' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>City</label>

          </div>
          <div className='col-12 form-floating'>

            <input type='text' className='form-text form-control' id='floatingInput' value={editData.address_zipcode} placeholder='Pincode' name='address.zipcode' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>Pincode</label>

          </div>
          <div className='col-12 form-floating'>

            <input type='text' className='form-text form-control' id='floatingInput' value={editData.phone} name='phone' placeholder='Phone' onChange={handlechange} />

            <label className='ms-2' for='floatingInput'>Phone</label>
          </div>
          <div className='col-12 form-floating'>

            <input type='text' className='form-text form-control' id='floatingInput' value={editData.company_name} placeholder='Company Name' name='company_name' onChange={handlechange} />
            <label className='ms-2' for='floatingInput'>Company Name</label>

          </div>
          <div className='col-12 mt-4'>

            <button className='btn btn-update btn-primary' type='submit'>Update</button>
          </div>
        </form>
      </div>

    </div>

  );
};

export default Edit;