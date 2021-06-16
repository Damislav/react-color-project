import React from "react";
import "./Pages.css";

function Page({ children }) {
  return <section className="page">{children}</section>;
}
export default Page;
