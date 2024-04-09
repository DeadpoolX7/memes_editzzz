import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {Button } from 'react-bootstrap'
import { createRef, useState } from "react";
import Text from '../components/Text'
import {exportComponentAsJPEG} from 'react-component-export-image'
const Edit = ()=>{
    const [params] = useSearchParams();
    const [count,  setCount] = useState(0);
    const addText = ()=>{
    setCount(count+1);
}
    const memeRef = createRef();
    return(
        <>
        <div style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '100vh', }}>

        <div  ref={memeRef} 
        style={{ width: '400px' ,border:"1px solid"}}
        className="container">
            <img  src={params.get("url")} alt={params.get("name")}  style={{ width: '250px',margin:"0px"}}  />
            {
                Array(count).fill(0).map((e,index)=><Text key={index}/>)
            }
        </div>

        <div style={{display:"grid",gap:"5px",placeContent:"center"}}>
            <Button style={{width:"10rem",}} onClick={addText}>Add Text</Button>
            <Button style={{width:"10rem",}} variant="success" onClick={(e)=>{exportComponentAsJPEG(memeRef)}}>Download</Button>
        </div>
        </div>
        </>
    );
}
export default Edit;