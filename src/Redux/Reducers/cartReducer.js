const initialData ={
    cartCount: 0

}
const cartReducer =(state=initialData,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
         return{
            cartCount:++ state.cartCount
         }
         default:
         return state
    }
}
export default cartReducer