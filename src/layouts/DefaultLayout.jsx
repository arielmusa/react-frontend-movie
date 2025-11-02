import { NavLink, Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <NavLink className={"link"} to={"/"}>
        <h1 className="logo">MOVIEHUB</h1>
      </NavLink>
      <Outlet />
    </>
  );
}
