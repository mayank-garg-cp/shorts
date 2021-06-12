import React, { lazy, useEffect, useState, Suspense } from "react";
import { Switch, Route, Router ,Redirect } from "react-router-dom";
import './App.css';
import Crousal from './Components/Shorts/Short'
import ChannelList from './Components/Channel/ChannelList';
import Home from './Components/Home/Home';
import { withRouter } from "react-router-dom";
import channelArray from './ChannelList';

function App(props) {
  const [newChannel, setNewChannel] = useState(channelArray.channelList)
  const [cardList, setCardList] = useState({});
  
  const handleCardList=(channel)=>{ 
    // if(!channel.isSubScribe)
    // {
    //   alert('Please SubScribe to the channel');
    //   return
    // }
    if(channel!=undefined && channel!=null)
    setCardList({...channel});
    props.history.push("/shorts")
  }
  const addCard =(channelId,obj)=>{
    setNewChannel(
      newChannel.map(channel => 
        channel.id === channelId .id
          ? {...channel, cardsData : [...channel.cardsData,obj]} 
          :  channel 
    ));

    setCardList({...cardList,cardsData : [...cardList.cardsData,obj]})
  }

  return (
    <div className="App">
    <Suspense fallback={<></>}>
          <Switch>
           <Route exact path="/channel" component={()=><ChannelList handleCardList={handleCardList} setNewChannel={setNewChannel} newChannel={newChannel}/>} />
            <Route exact path="/shorts" component={()=><Crousal cardList ={cardList} addCardhandler={addCard}/>} />
            <Route exact path="/" component={()=><Home/>} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
    </div>
  );
}

export default withRouter(App);

