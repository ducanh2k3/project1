import { Outlet } from "react-router-dom";
import Home from "../Routes/Home";
const UserLayout=()=>{
    return <Outlet >
<Home></Home>

    </Outlet>
}

export default UserLayout