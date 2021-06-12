import React from "react";
import AddShort from "../AddShort/AddShort";
import "./Short.css";
import { withRouter } from "react-router-dom";
import logo from '../../Assets/logo.png';

const Card = (props) => (
  <div className="card">
    {props.title != "none" ? (
      <div>
         {props.imgUrl!="" && props.imgUrl!==undefined &&( 
          <img
              src={props.imgUrl}
              className="card_img"
              alt={props.alt || "Image"}
            />
         )}
          <div className="card-content">
              <h2>{props.title}</h2>
              <div>{props.content}</div>
          </div>
      </div>
    ) : (
      <div className="emptyCard" onClick={()=>props.addNewShortHandler(true)}>
        +
      </div>
    )}
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards && props.cards.length>0 &&props.cards.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
    <Card title={"none"} addNewShortHandler={props.addNewShortHandler}/>
  </div>
);

 class Crousal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showAddShort:false
    };
  }

  addNewShortHandler=(flag)=>{
    this.setState({showAddShort:flag})
  }
  render() {   
    // const cardsData = [
    //   {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
    //   {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200'},
    //   {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199'},
    // ]
    return (
      <div className="container">

        <div className="headerShort">
          <button className="backButton" onClick={()=>this.props.history.push("/channel")}><img src="https://cp-assets-public.s3.ap-south-1.amazonaws.com/classplus-websites/dpt/backArrow.svg" alt="" /></button>
          <img src={logo} className="logo"/>
          {/* <h1 style={{ "text-align": "center" }}>Shorts </h1> */}
        </div>


        <CardContainer cards={this.props.cardList.cardsData && this.props.cardList.cardsData.length>0 && this.props.cardList.cardsData}  showAddShort={this.state.showAddShort} addNewShortHandler={this.addNewShortHandler}/>
        
        {this.state.showAddShort &&(
           <AddShort  addNewShortHandler={this.addNewShortHandler} addCardhandler={this.props.addCardhandler}    channel={this.props.cardList}/>
        )}

      </div>
    );
  }
}

export default  withRouter(Crousal)