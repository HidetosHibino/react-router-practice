import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
};

export default Layout;