import { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefSection = () => {
    
    const [datas,setDatas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    }, []);
    
    return (
        <div className='bg-blue-400 p-4 my-4 rounded-xl'>
        <h1 className='font-bold text-3xl text-center my-8'>Chef Section</h1> 
        {<h2>Chef: {datas.length}</h2>}           
        <div className="grid gap-5  grid-cols-1 md:grid-cols-3">
        {/* {datas.map(data=><ChefCard key={data.id} props={data}></ChefCard>)} */}
        {datas.map(data=><ChefCard key={data.id} props={data}></ChefCard>)}
        </div>
        </div>
    );
};

export default ChefSection;