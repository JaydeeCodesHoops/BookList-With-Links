import PropTypes from 'prop-types'
import './index.css'


function Card(props){
    
    return(
        <>
        <div className="card">
            <div>
            <img className="cardImage" src={props.img} alt="a boook of brad taylor"></img>
            <h2> {props.title} </h2>
            <p> {props.about} </p>
            </div>
        </div>
      
         </>
    );
}

export default Card