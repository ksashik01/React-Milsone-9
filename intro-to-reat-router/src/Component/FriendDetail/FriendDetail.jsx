
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {

    const friend = useLoaderData();
    console.log (friend)
    return (
        <div>
           <h1>Ecerthing About this Person Is</h1> 
           <h4>name:{friend.name}</h4>
        </div>
    );
};

export default FriendDetail;