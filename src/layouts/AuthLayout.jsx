import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-50 py-2 px-4">
        Authentication Layout
        <div className="flex w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
