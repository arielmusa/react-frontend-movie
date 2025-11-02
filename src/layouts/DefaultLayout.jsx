import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <h1 className="logo">MOVIEHUB</h1>
      <Outlet />
    </>
  );
}
