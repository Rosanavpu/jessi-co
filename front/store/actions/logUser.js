import {  LOG_USER, DELOG_USER} from "../../utils/constants";
import Axios from "axios";
import store from "../../store/index"

export const logUser = (user)=>({
    type:LOG_USER,
    user
})
export const deLogUser = ()=>({
    type:DELOG_USER,
})

export const fetchUser= (user, history)=>Axios.post("/api/user/login", user)
.then(user=>{
    store.dispatch(logUser(user.data))
    user.data.admin==true&&history.push("/admin")
})
export const fetchLoggedUser= ()=>Axios.get("/api/user/get-user").then(user=>store.dispatch(logUser(user.data)))
