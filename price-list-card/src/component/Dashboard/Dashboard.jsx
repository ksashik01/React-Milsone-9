
import React from 'react';
import { createRoot } from 'react-dom/client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {

    const marksArray =[
        {
            id: 1,
            name:"student 1",
            physics :75,
            bangla:85,
            math:20


        },
        {
            id: 2,
            name:"student 2",
            physics :155,
            bangla:185,
            math:20


        },


        {
            id: 3,
            name:"student 3",
            physics :720,
            bangla:820,
            math:202


        },


        {
            id: 4,
            name:"student 4",
            physics :750,
            bangla:805,
            math:200


        }



    ]



    return (
        <div className='mb-10'>
            <LineChart width={1000} height={400} data ={marksArray}
            
            
            
            
            
            >

<Line dataKey="bangla"></Line>
<Line dataKey="physics"></Line>
<Line dataKey="math"></Line>
<YAxis></YAxis>
<CartesianGrid></CartesianGrid>


            </LineChart>
            


        </div>
    );
};

export default Dashboard;