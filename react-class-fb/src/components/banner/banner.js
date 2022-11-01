import React, {Component} from "react";
import './banner.css';
import {FaBell, FaComment, FaCommentDots, FaFacebook, FaFacebookMessenger, FaFlag, FaGamepad, FaHome,FaHospital,FaLayerGroup,FaNewspaper,FaPlayCircle,FaSave,FaShare,FaSmile,FaStore, FaSwatchbook, FaTag, FaThumbsUp, FaUser, FaUserFriends} from 'react-icons/fa';

class Feed extends Component {
    render(){
    return (
        <div className="fb">
             <div className='banner'>
      <div className='container'>
        <div className='flex-banner'>
          <div className='first-list'>
            <div className='features'>
              <h2>{<FaHospital/>}</h2>
              <h5>{"covid 19 info center"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaUserFriends/>}</h2>
              <h5>{"friends"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaSwatchbook/>}</h2>
              <h5>{"watch"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaLayerGroup/>}</h2>
              <h5>{"groups"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaShare/>}</h2>
              <h5>{"marketplace"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaSave/>}</h2>
              <h5>{"saved"}</h5>
            </div>
            <div className='features'>
              <h2>{<FaFlag/>}</h2>
              <h5>{"pages"}</h5>
            </div>
            <div className='features'>
            <h2>{<FaNewspaper/>}</h2>
              <h5>{"news"}</h5>
            </div>
            
          </div>
          <div className='feed'>
            <div className='feed-1'>
              <div className='feed-head'>
                <h5>{'stories'}</h5>
                {/* <h5>{'reels'}</h5>               */}
              </div>
              <div className='whats-up'>
                <div className='input'>
                  {/* <h5>{<FaSmile/>}</h5>*/}
                  <span><p>Whats on tour mind ?</p></span>    
                </div>  
                <div className='upload'>
                  <div><h5>Photo's</h5></div>
                  <div><h5>Video's</h5></div>
                  <div><h5>Activity</h5></div>
                </div>                            
              </div>
              <div className='feed-img'>
                <div className='profile-1'>
                  <div>
                    <h4>Naruto</h4>
                    <p>{"2 Mins ago"}</p>
                  </div>
                  <div className='tag'>{<FaTag/>}</div>
                </div>
                <div className='post-1'> <img src={require('./image/image.jpg')} className='naruto'/></div>
                <div className='like-1'>
                  <span><button><span>{<FaThumbsUp/>}</span>Like</button></span>
                  <span><button><span>{<FaComment/>}</span>Comment</button></span>
                  <span><button><span>{<FaShare/>}</span>Share</button></span>
                </div>
              </div>
              <div className='feed-img'>
                <div className='profile-1'>
                  <div>
                    <h4>Vijay</h4>
                    <p>{"7 Mins ago"}</p>
                  </div>
                  <div className='tag'>{<FaTag/>}</div>
                </div>
                <div className='post-1'> <img src={require('./image/download.jpg')} className='naruto'/></div>
                <div className='like-1'>
                  <span><button><span>{<FaThumbsUp/>}</span>Like</button></span>
                  <span><button><span>{<FaComment/>}</span>Comment</button></span>
                  <span><button><span>{<FaShare/>}</span>Share</button></span>
                </div>
              </div>              
            </div>
          </div>
          <div className='chat'>
              <h4>Chat box</h4>
            <div className='chat-1'>
              <h5>prem</h5>
            </div>
            <div className='chat-1'>
              <h5>faizal</h5>
            </div>
            <div className='chat-1'>
              <h5>karthi</h5>
            </div>
            <div className='chat-1'>
              <h5>rajini</h5>
            </div>
            <div className='chat-1'>
              <h5>ravi</h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
}
export default Feed