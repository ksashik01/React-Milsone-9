

import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon } from '@heroicons/react/24/solid'




const routes = [
{
id:1,
name:'Home',

},

{
    id:2,
    name:'About',
    
    },

    
    {
        id:1,
        name:'Contact',
        
        },

        
        {
            id:1,
            name:'Service',
            
            },
            

]





const Navbar = () => {

    const [open, setOpen] = useState (false)


    return (
        <nav>
        <div onClick={() => setOpen(!open) }>

            <span>{open === true? 'open': 'close'}</span>

        <Bars3Icon className="h-8 w-8 text-blue-500" />

        </div>

        <ul className='md:flex'>
        {


       routes.map (route => <Link
       
        key ={route.id}
        route = {route}
       >
      
       
       
       
       </Link>)



        }

    </ul>


        </nav>
    );
};

export default Navbar;