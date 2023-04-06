

import React, { useState } from 'react';
import Link from './Link';
import { Bars3Icon,XMarkIcon
} from '@heroicons/react/24/solid'




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
        <nav className="bg-slate-800" >
        <div  onClick={() => setOpen(!open) } className='md:hidden' >
            
            <span>{
            
            open === true? 
            
            <Bars3Icon className="h-8 w-8 text-blue-500" />
            
            : <XMarkIcon className="h-8 w-8 text-blue-500" />


              }
              </span>

      

        </div>

        <ul className={`md:flex absolute md:static bg-slate-800 ${ open ? '-top-48': 'top-6'  }  `}>

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