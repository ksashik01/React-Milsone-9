

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const Friends = useLoaderData();

   


    return (
        <div>
            <h2>These are my friends:{Friends.length}</h2>
            <div>

{

Friends.map (friend => <Friend

key ={friend.id}
friend={friend}


>




</Friend>)


}






            </div>
        </div>
    );
};

export default Friends;