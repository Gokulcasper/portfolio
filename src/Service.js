import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Skills</h1>
        {/* <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p> */}
        {/* <p className="heading p__color">
          but the majority have suffered alteration.
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__md__1">

            <div class="progress__title">
              <h3>React</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Node</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "80%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">80%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Express</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>JavaScript</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "90%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">90%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>DOM</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

          </div>

          <div className="col__md__2">

            <div class="progress__title">
              <h3>MongoDB</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>MySql</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "80%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">80%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>Git</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "70%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">70%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>HTML</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

            <div class="progress__title">
              <h3>CSS</h3>
              <div className="progress">
                <div className="progress__bar" style={{ width: "85%", height: "20px", background: "#ef2d56" }}>
                  <div className="progress__value">85%</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

  );
}

export default Service;
