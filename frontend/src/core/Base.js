import React from "react";
import Menu from "./Menu";

const Base = ({
    title="My title",
    description="My Description",
    className="p-4",
    children
}) => {
  return (
    <>
    <Menu/>
    <div className="container-fluid">
      <div className="jumbotron bg-muted text-center text-black">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
      <footer className="footer text-center mt-auto py-3">
        <div className="container-fluid ">
            <h4 className="" >If you got any question reach me out on instagram</h4>
            <button className="btn btn-info" >Contact Us</button>
            <div className="container pt-2">
              <span className="text-muted ">DJango-React Website! Created by:- Baljeet Jangra</span>
            </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Base;
