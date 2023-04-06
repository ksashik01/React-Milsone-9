
import React, { useEffect, useState } from 'react';
import PriceCard from '../../PriceCard/PriceCard';

const PriceList = () => {


const [prices ,setPrices ] = useState ([]);


useEffect (() => {


fetch ('prices.json')
.then (res => res.json())
.then (data =>setPrices(data) );




} , [])




    return (
        <div>
<h1 className=''>Our Price Lis: </h1>
<div className='grid md:grid-cols-3 gap-3 mx-20'>

            {
            prices.map (price =>
            <PriceCard price= {price} > 

            </PriceCard> ) }
                    
</div>


        </div>
    );
};

export default PriceList;

