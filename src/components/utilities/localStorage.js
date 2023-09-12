const getStoredCart = () =>{
    const storedCartString  = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}


const addToLS = (id) =>{
    const cart = getStoredCart();
    cart.push(id);
    // Save to local storage
    saveCartToLS(cart);
}

const saveCartToLS = (cart)=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const removeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx =>idx !== id);
    saveCartToLS(remaining);
}

export {addToLS,getStoredCart,removeFromLS}
