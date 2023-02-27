import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div>Authentication Layout</div>
      <main><Outlet /></main>
    </div>
  );
};

export default AuthLayout;
