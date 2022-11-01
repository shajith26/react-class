import React,{Components} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navi from './components/navi/navi';
import Feed from './components/banner/banner';


// class Facebook extends Components {
//   render(){
//     return (
//       <div className='fb'>
//         <div className='navbar'><Navi /></div>
//         <div className='banner'><Feed /> </div>
//       </div>
//     )
//   }
// }
class Shajith extends Components {
  render(){
    return(
      <div>shajith</div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shajith/>);