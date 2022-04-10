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
                            quantity: cartItem.quantity + cartItemToAdd.quantity,
                    }
                    : cartItem;
            });
        }
	}

	return [...cartItems, { ...cartItemToAdd, quantity: cartItemToAdd.quantity }];
};

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