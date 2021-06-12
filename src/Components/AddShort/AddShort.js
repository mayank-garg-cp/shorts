import React,{useState,useEffect} from 'react'
import './AddShort.css';
import Dictaphone from './Dictaphone';

function AddShort(props) {
    const [shortName, setShortName] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [img, setImg]=useState("");

    const submitNewShort=()=>{
       let id=Math.random();
        props.addCardhandler(props.channel,{id:id,title:shortName,content:shortDesc,imgUrl:img});
        props.addNewShortHandler(false);
    }

    return (
        <div>
             <div className="backgrop" />
            <div className="addShort">
                <h3>Add New Short <span onClick={()=>props.addNewShortHandler(false)}>&times;</span></h3>
                <div className="shortGroup">
                      Short's Name <br/>
                      <input value={shortName} onChange={(e)=>setShortName(e.target.value)} placeholder="Add Short's name..." />
                       Short's Image <br/>
                      <input value={img} onChange={(e)=>setImg(e.target.value)} placeholder="Add Image Url..." />
                </div>
                <br/>
                
                <Dictaphone setShortDesc={setShortDesc}/>
                Short's Description <br/>
                <textarea name="body" rows="4" cols="70"
                    onChange={(e)=>setShortDesc(e.target.value)}
                    defaultValue={shortDesc} 
                    placeholder="Add Desciption..."
                    className="shortDesc"
                    /> <br/>
               
                <div className="saveChannel">
                     <button className={"unSubscribe"} onClick={submitNewShort}disabled={shortName.length<=0 && shortDesc.length<=0}> Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddShort
