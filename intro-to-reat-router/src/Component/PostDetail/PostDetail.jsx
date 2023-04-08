import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {

    const post =useLoaderData();
    const {id, title, userId, body} =post;
    const navigate = useNavigate();

    const handleGoBack =() =>{


        navigate(-1)

    }




    return (
        <div>
            <h3>Details About Your Post of:{id}</h3>
            <h4>{title}</h4>
            <button onClick={handleGoBack}>Go Back</button>
           
        </div>
    );
};

export default PostDetail;