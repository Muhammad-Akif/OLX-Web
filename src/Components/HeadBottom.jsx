import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function HeadBottom() {
    const aro = {
        fontSize: '36px',
    }
    return (
        <div className="head-bottom flex">
            <div className="dropdown flex">
                <h4><strong>ALL CATAGORIES</strong></h4><span className='arrow'><ExpandMoreIcon style={aro}/></span>
            </div>  
            <div className="selling-variety s14 flex">
                <div>Mobile Phones</div>
                <div>Cars</div>
                <div>Motorcycles</div>
                <div>Houses</div>
                <div>TV - Video - Audio</div>
                <div>Tablets</div>
                <div>Land & Plots</div>
            </div>         
        </div>
    );
}

export default HeadBottom;

