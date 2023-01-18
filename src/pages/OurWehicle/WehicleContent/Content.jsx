import React, { Fragment } from "react";
import WehicleJson from "../../../Json/OurWehicle.json";
function Content() {
  return (
    <div>
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <h2 className="text-center">Araçlarımız</h2>
          {WehicleJson.map((wehicle) => {
            return (
              <Fragment>
                {/* Column One */}{" "}
                <div className="col-12 col-md-4 me-md-4 mb-4">
                  <div class="card arac-card text-center">
                    <a href="/arac1" title="title">
                      {" "}
                      <img
                        src={wehicle.img}
                        className="card-img-top w-100"
                        alt="img1"
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{wehicle.title} </h5>
                      <p className="card-text"></p>
                      <a href={wehicle.url} className="btn btn-primary">
                        Detaylar
                      </a>
                    </div>
                  </div>
                </div>
                {/* Column One */}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
