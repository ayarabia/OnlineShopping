import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem("productes")?JSON.parse(localStorage.getItem("productes")):[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}
export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
   const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
 
   if (itemIndex >= 0){
      state.cartItems[itemIndex].quantity +=1
      toast.info("quantity incresed", {
        position: toast.POSITION.BOTTOM_CENTER
      });
  } else{ 
      const tempProduct={...action.payload ,quantity:1}
      state.cartItems.push(tempProduct)
      toast.success(`${tempProduct.title} added to cart`, {
        position: toast.POSITION.BOTTOM_CENTER
      });
     }
     localStorage.setItem("productes",JSON.stringify(state.cartItems))
    },
    removeFromCart(state,action){
  const newCardItems= state.cartItems.filter((item)=>{
return item.id!==action.payload.id
   })
   state.cartItems=newCardItems
   localStorage.setItem("productes",JSON.stringify(state.cartItems))
   toast.error(`${action.payload.title} removed from cart`, {
    position: toast.POSITION.BOTTOM_CENTER
  });
    },
    decreaseQuantity(state,action){
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if( state.cartItems[itemIndex].quantity >1){
        state.cartItems[itemIndex].quantity -=1
      }else if(state.cartItems[itemIndex].quantity ===1){
        const newCardItems= state.cartItems.filter((item)=>{
          return item.id!==action.payload.id
             })
             state.cartItems=newCardItems
             toast.error(`${action.payload.title} removed from cart`, {
              position: toast.POSITION.BOTTOM_CENTER
            });
             localStorage.setItem("productes",JSON.stringify(state.cartItems))
           
      }
    },
    increaseQuantity(state,action){
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      state.cartItems[itemIndex].quantity +=1
     
    },
    clearCart(state){
    state.cartItems=[]
    localStorage.setItem("productes",JSON.stringify(state.cartItems))
    toast.error("Cart Is Empty", {
      position: toast.POSITION.BOTTOM_CENTER
    });
   },
   getTotalQuantity(state){
  const {total ,quantity}= state.cartItems.reduce((cartTotal,item)=>{
    const {price,quantity}=item
    const totalPrice=price * quantity
    cartTotal.total +=totalPrice
    cartTotal.quantity +=quantity
    return cartTotal
   },{
   total:0,
   quantity:0 
   })
   state.cartTotalQuantity=quantity
   state.cartTotalAmount=total
   }

  },
})
// Action creators are generated for each case reducer function
export const {addToCart ,removeFromCart,decreaseQuantity,increaseQuantity,clearCart,getTotalQuantity} = cartSlice.actions
export default cartSlice.reducer