export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
        const existingDate = cartItems.find((cartItem) => cartItem.date === cartItemToAdd.date)
        if(existingDate){
            return cartItems.map((cartItem) => {
                return cartItem.date === cartItemToAdd.date
                    ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                      }
                    : cartItem;
            });
        }
	}

	return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    
    if (existingCartItem.quantity > 0) { 
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
}