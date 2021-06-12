import React,{useEffect} from 'react'
import './Home.css';
import logo from '../../Assets/logo.png'
import { withRouter } from "react-router-dom";
function Home(props) {
    // useEffect(() => {
    //     let timer1 = setTimeout(() => props.history.push("/channel"), 3 * 1000);
    //     return () => {
    //       clearTimeout(timer1);
    //     }
    //   }, [])
    return (
        <div>
            <div className="homePage" onClick={()=>props.history.push("/channel")}>
          <img src={logo} className="homePageLogo" />
        </div>
        <div className="footer">
            Mayank Garg
            </div>
        </div>
    )
}

export default withRouter(Home)
