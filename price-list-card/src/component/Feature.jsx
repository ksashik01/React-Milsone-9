import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({featur}) => {
    return (
        <div className='flex items-center '>
        <CheckCircleIcon className="h-6 w-6 text-blue-500" />

        <span className='p-2'>{featur}</span>
      
            
        </div>

       
    );
};

export default Feature;