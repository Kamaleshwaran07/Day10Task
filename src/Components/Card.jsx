import React from 'react';
import '../index.css'
const Card = ({ item }) => {
    return (

        <div key={item.id} className='col-xxl-3 col-lg-4 col-md-4 mb-4 m-2'>

            <div className='card'>

                <img src="https://cdn.discordapp.com/attachments/1018124413176135700/1211569392383565824/Yuniverse_create_an_image_showing_a_creative_person_in_an_AI_Te_45ae5483-79e6-4079-ab93-9d7b91e561d7.png?ex=65eeaced&is=65dc37ed&hm=fea02e2a074a952114b7bb76da2b00ac76b9459bb29bffc33ca73bfc617d9226&" width={"210px"} height={"310px"} className='picture card-img-top' alt="image" />
                <div className='container'>
                    <p><span className='fs-5 fw-bold key'>Name:</span> <span className='fs-5 fw-bold item'>{item.name}</span></p>
                    <p><span className='fs-5 fw-bold key'>Email:</span> <span className='text-lowercase item'>{item.email}</span></p>
                    <p><span className='fs-5 fw-bold key'>Phone:</span> <span className='fs-5 fw-bold item'>{item.phone}</span></p>
                    <h5><span className='fs-5 fw-bold key'>Company:</span> <span className='fs-5 fw-bold item'>{item.company_name}</span></h5>
                    <p><span className='fs-5 fw-bold key'>Address: </span> <span className='fs-5 item'>{item.address_no}, {item.address_street},
                        <br />
                        {item.address_city}
                        -{item.address_zipcode}</span></p>
                    <div className='mb-2 mt-0'><img src='https://cdn.discordapp.com/attachments/1018124413176135700/1211683307046182932/instagram.png?ex=65ef1704&is=65dca204&hm=1433f53a46e08885eee289bcdb67f07ff8f84b95e6a63ae8fc65b29355ef2250&' width={"20em"} alt='insta'></img><span className='ms-1'>@{item.username}</span></div>
                </div>

            </div>
        </div>

    );
};

export default Card;