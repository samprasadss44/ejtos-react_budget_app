


import React , { useContext  }from 'react';
import { AppContext } from '../context/AppContext';
import '../style.css'; // Import the CSS file

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const changeCurrency = (event) => {        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });

    }
    return (
        <div className='alert alert-secondary select-box'>
            <span>Currency </span>
            <select className="awesome-class" id="inputGroupSelect01"  value={currency} onChange={changeCurrency}>
                <option value="€" name="euro">€ Euro</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;

