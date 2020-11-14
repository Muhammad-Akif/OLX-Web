import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Header(){
    const go = {
        fontSize:'35px',
        color:'white',
        backgroundColor:'black', 
        opacity:'0.8' ,
        height:'45px',
        width:'50px',
        border:'0px',
        outline:'none'
}
    return(
        <div className='header sticky flex aic'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="location rel flex aic">
                <div className="icon-search ico"><SearchIcon style={{fontSize:'35px'}} /></div>
                <input className='label s18 font' placeholder='Your Location' value='Pakistan'/>
                <button className="icon-chewron-down arro"><ExpandMoreIcon style={{fontSize: '40px',opacity: 0.8}} /></button>
            </div>
            <div className="search flex aic">
                <input type="text" className='query font s15' placeholder='Find Cars, Mobile Phones and more...'/>
                <button className="icon-search go"><SearchIcon style={go} /></button>
            </div>
            <div className="actions flex aic">
                <Link to="/account/signin" className="fontb s16">Login</Link>
                <button className='sell'>
                    <div className='icon-plus'><AddIcon/></div>
                    <h2 className='fontb s16 font'>SELL</h2>
                </button>
            </div>
        </div>
    )
}
export default Header;