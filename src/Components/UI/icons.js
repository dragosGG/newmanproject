import react from 'react';
import {Link} from 'react-router-dom';
import mcitylogo from '../../Resources/images/logos/machester_city_logo';


export const CityLogo = (props)  => {

    const template = <div> logo</div>


    if(props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
            {template}
            
            </Link>
        )} else {
            return template 
        }
    }


