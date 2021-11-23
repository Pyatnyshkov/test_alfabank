import React, { FC } from "react";
import Header from "./Header";

const Layout: FC = ({ children }) => (
  <div className="page container">
    <Header />
    <main className="main__page">{children}</main>
  </div>
);
export default Layout;
