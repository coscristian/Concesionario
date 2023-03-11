import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <main className="flex w-full bg-blue-400 overflow-y-scroll justify-center items-center">
                <Outlet />
            </main>
        </div>
    );
}

export default PrivateLayout;