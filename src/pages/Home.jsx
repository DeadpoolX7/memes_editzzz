import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { MemeTemplates } from "../api/memes";
const Home = ()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        MemeTemplates()
        .then(r=>setData(r.data.memes)),
        ((e)=>console.log(e))
    },[])
    console.log(data)
    return(
        <div className="row">
        {
            data.map(el => <MemeCard key={el.id} img={el.url} title={el.name} />)
        }

        </div>
    );
}
export default Home;