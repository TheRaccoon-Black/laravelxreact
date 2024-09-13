import { Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";
import { useStateContext } from "../contexts/contextprovider";

export default function DefaultLayout() {
    const { user, token } = useStateContext();
    if (!token) {
        return <Navigate to="/Login" />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();
    };

    return (
        <div id="defaultLayout">
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <a
                            href="#"
                            onClick={onLogout}
                            className="btn btn-logout"
                        >
                            {" "}
                            Logout
                        </a>
                    </div>
                </header>
            </div>
            <Outlet />
        </div>
    );
}
