import { useEffect } from "react";
import { useState } from "react";
import Bottole from "../Bottole/Bottole";
import './Bottoles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottoles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])



    // load cart from local storage
    useEffect(() => {
        // console.log(bottles.length);
        if (bottles.length) {
            const storedCart = getStoredCart();
            // console.log(storedCart,bottles);
            const savedCart = [];
            for(const id of storedCart){
                // console.log(id);
                const bottle = bottles.find(bottle =>bottle.id ===id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            // console.log(savedCart);
            setCart(savedCart);
        }
    }, [bottles])



    const [cart, setCart] = useState([]);
    const handlePurchase = (bottle) => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    //Remove bottle from cart
    const handleRemoveFromCart = (id)=>{
        // remove from UI
        const remainingCart = cart.filter(bottle=>bottle.id !== id);
        setCart(remainingCart);
        // Remove from local storage
        removeFromLS(id);
    }


    return (
        <div>
            <h3>Memoriable Water Bottole</h3>

            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

            <div className="bottles">
                {
                    bottles.map(bottle => <Bottole
                        key={bottle.id}
                        bottle={bottle}
                        handlePurchase={handlePurchase}
                    >

                    </Bottole>)
                }
            </div>
        </div>
    );
};

export default Bottoles;