import React from "react";

function Channel(props) {
  let { channel } = props;
  let colors = ["#76D2DE", "#57B89B", "#CFFF47"];

  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="tile" style={{ backgroundColor: `${""}` }} onClick={()=>props.handleCardList(channel)}>
      <div>
        {channel.title}
        <p className="description">{channel.content}</p>
      </div>
      {true &&(
      <button className={!channel.isSubScribe?"subscribe":"unSubscribe"}>{!channel.isSubScribe?"Subscribe":"Subscribed"}</button>
      )}
    </div>
  );
}

export default Channel;
