import React,{useState} from 'react'
import './Channel.css';
import Channel from './Channel';



function AddChannel(props) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

const submitChannel=()=>{
    let id=props.newChannel.length+1;
    props.setNewChannel([...props.newChannel,{id:id,title:name,content:desc,isSubScribe:false,cardsData:[]}])
    props.showIsAdding(false);
}
    return (
        <div>
            <div className="backgrop" />
            <div className="addChannel">
                <h3>Add New Channel <span onClick={()=>props.showIsAdding(false)}>&times;</span></h3>

                 Channel Name 
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Add Channel name..." />
                Description
                <input value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Add Desciption..."/><br/>

                <div className="saveChannel">
                     <button className={"unSubscribe"} onClick={submitChannel}disabled={name.length<=0 && desc.length<=0}> Save</button>
                </div>
            </div>
        </div>
    )
}
  


function ChannelList(props) {   
      const [isAdding, setIsAdding] = useState(false);
    return (
        <div>
            {isAdding &&(
                <AddChannel newChannel={props.newChannel} setNewChannel={props.setNewChannel} showIsAdding={()=>setIsAdding(false)}/>
            )}
           <div className="header">
                <h3 style={{ 'text-align': 'center', "fontSize":"26px" }}>
                    Channel
                </h3>
            </div> 
            <div className="channelList">
            {props.newChannel.map((channel)=>{ 
                return(
                <Channel channel={channel} key={channel.id} {...props}/>
            )})}
            </div>
            <div className="addMore" onClick={()=>setIsAdding(true)}>+</div>
        </div>
    )
}

export default ChannelList;





