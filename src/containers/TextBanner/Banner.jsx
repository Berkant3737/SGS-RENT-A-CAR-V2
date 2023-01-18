import React from "react";

function Banner(props) {
  return (
    <div>
      <div className="item-banner">
        <div className="container-fluid">
          <div className="row text-start">
            <div className="col-12">
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
