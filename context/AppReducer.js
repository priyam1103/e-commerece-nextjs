export default (state, action) => {
    switch (action.type) {
        
        case "ADD_TO_WISHLIST":
           
            return {
                ...state,
                wishlist:[...state.wishlist , action.payload.product]
            }
        case "ADD_TO_CART":
                return {
                    ...state,
                    cart:[...state.cart , action.payload.product]
            }
        case "REMOVE_FROM_WISHLIST":
            var index;
            for (var i = 0; i < state.wishlist.length; i++){
                if (state.wishlist[i].id === action.payload.product.id) {
                    index = i;
                    break;
                }
            }
            const arr = state.wishlist;
           
            arr.splice(index, 1);
            return {
                ...state,
                wishlist:arr
            }
        case "UPDATE_CART_VALUE":
            let arr_ = state.cart.map((item,_) => {
                if (item.id === action.payload.product.id) {
                   console.log(item)
                    item.quantity = action.payload.quantity
                }
                return {...item}
            })
            console.log(arr_);
            return {
                ...state,
                cart:arr_
            }
        case "REMOVE_FROM_CART":
            var index_;
            for (var j = 0; j < state.cart.length; j++){
                if (state.cart[j].id === action.payload.product.id) {
                    index_ = j;
                    break;
                }
            }
            const arr1 = state.cart;
           
            arr1.splice(index_, 1);
            return {
                ...state,
                cart:arr1
            }
        case "UPDATE_ORDER":
            console.log(action.payload.order)
            return {
                ...state,
                orders:[...state.orders , action.payload.order]
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart:[]
            }
        default: return;
    }
    
}