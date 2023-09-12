import PropTypes from 'prop-types';
import './Bottole.css'
const Bottole = ({bottle,handlePurchase}) => {
    const {name,img,price} = bottle;
    return (
        <div className='bottle'>
           <h2>{name}</h2>
           <img src={img} alt="" />
           <p>${price}</p>
           <button onClick={()=>handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

Bottole.propTypes ={
    bottle:PropTypes.object.isRequired,
    handlePurchase:PropTypes.func.isRequired
}

export default Bottole;