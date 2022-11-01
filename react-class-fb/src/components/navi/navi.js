import React,{Component} from "react";
import './navi.css';
import {FaBell, FaComment, FaCommentDots, FaFacebook, FaFacebookMessenger, FaFlag, FaGamepad, FaHome,FaHospital,FaLayerGroup,FaNewspaper,FaPlayCircle,FaSave,FaShare,FaSmile,FaStore, FaSwatchbook, FaTag, FaThumbsUp, FaUser, FaUserFriends} from 'react-icons/fa';

class Navi extends Component {
   render(){
    return (
        <div className="fb">
            <div className='header'>
      <div className='container'>
        <div className='navi'>
          <div className='logo'>
            <a href=''>{< FaFacebook />}</a>
            <p className='search'>{"search facebook"}</p>
          </div>
          <div className='c-icon'>
            <ul>
              <li>{<FaHome/>}</li>
              <li>{<FaPlayCircle/>}</li>
              <li>{<FaStore/>}</li>
              <li>{<FaUser/>}</li>
              <li>{<FaGamepad/>}</li>
            </ul>
          </div>
          <div className='l-icon'>
            <ul>
              <li>{<FaCommentDots/>}</li>
              <li>{<FaFacebookMessenger/>}</li>
              <li>{<FaBell/>}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>        
    )
}
}
export default Navi