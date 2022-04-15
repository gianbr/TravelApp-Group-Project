export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log("En detalle: ", cartItemToAdd.quantity)
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
        const existingDate = cartItems.find((cartItem) => cartItem.date === cartItemToAdd.date && cartItem.id === cartItemToAdd.id)
        if(existingDate){
            return cartItems.map((cartItem) => {
                return cartItem.date === cartItemToAdd.date && cartItem.id === cartItemToAdd.id
                    ? {
                            ...cartItem,
                            quantity: cartItem.quantity + cartItemToAdd.quantity,
                    }
                    : cartItem;
            });
        }
	}

	return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity }];
};

export const addItemFromCartInCart = (cartItems, cartItemToAdd) => {
    console.log("Al clickear: ", cartItemToAdd.quantity)
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.cartId === cartItemToAdd.cartId
    );

    if (existingCartItem) {
        const existingDate = cartItems.find((cartItem) => cartItem.date === cartItemToAdd.date, cartItems.find((cartItem) => cartItem.cartId === cartItemToAdd.cartId))
        if(existingDate){
            return cartItems.map((cartItem) => {
                return cartItem.date === cartItemToAdd.date && cartItem.cartId === cartItemToAdd.cartId
                    ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                    }
                    : cartItem;
            });
        }
	}
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.cartId === cartItemToRemove.cartId
    );
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.cartId !== cartItemToRemove.cartId);
      }
    
      return cartItems.map((cartItem) => {
        return cartItem.cartId === cartItemToRemove.cartId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
}

export const removeAllItemsFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.cartId === cartItemToRemove.cartId
    );
    
    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.cartId !== cartItemToRemove.cartId);
    }
}