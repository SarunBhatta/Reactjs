const initialData={
    name:'Sarun Bhatta'
}
const studentReducer=(state=initialData,action)=>{
    switch (action.type){
        case 'CHANGE_NAME':
        return{
            name:action.payload
        }
        default:
            return state
    }
}
export default studentReducer