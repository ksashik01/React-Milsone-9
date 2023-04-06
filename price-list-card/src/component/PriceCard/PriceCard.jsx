
import React from 'react';
import Feature from '../Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-green-500 mt-5 rounded-md p-5 m-5 flex flex-col '>

            <h2 className='text-center' >
             <span className='text-5xl font-extrabold text-purple-500'>{price.price}</span>
             <span className='text-white font-bold'>/mon</span>
            </h2>

          <h2 className='text-xl font-bold text-white text-center mt-4'> {price.name} </h2>

          <p className='font-bold text-white underline mt-4'>Features:</p>

          <div className=' '>
          {

            price.features.map ((featur,idx) => 
            
            <Feature 
            
            featur={featur}
            
            key ={idx}>

          

            </Feature>)

          }


</div>
     <button className='w-full rounded-md mt-auto'>Buy Now</button>
            
        </div>
    );
};

export default PriceCard;