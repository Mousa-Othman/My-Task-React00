import { Component } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default class About extends Component{
    render(){
        return(
            <>
                <FontAwesomeIcon icon={faUsers}/>
            </>
        )
    }

}