
import { useState } from 'react';
import Draggable from 'react-draggable'
const Text = ()=>{
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double-Click to Edit...");
    return(
        <Draggable>
        {
            editMode? (<input onDoubleClick={(e)=>setEditMode(false)}  value={val} onChange={(e)=> setVal(e.target.value)}/>) : (<h2 onDoubleClick={(e)=>{setEditMode(true)}} style={{}}>{val}</h2>)
        }
        </Draggable>
    );
}
export default Text;