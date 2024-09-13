import { Outlet,Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextprovider";
// import { useContext} from "react";
export default function GuestLayout() {
    const { token }  = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div id="guestLayout">
            <div className="content">
                {/* <h1>Guest layout</h1> */}
            </div>
            <Outlet />
        </div>
    );
}
