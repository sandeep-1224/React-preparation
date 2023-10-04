import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <div className="grid-service">
      <h2 className="grid-service-head">Services</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos repellat
          vel id distinctio at facere a iusto molestiae sint earum tenetur
          accusantium incidunt unde, enim blanditiis optio, impedit aliquid
          obcaecati?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quam laborum tenetur nisi explicabo suscipit aspernatur placeat, in
          sapiente totam ratione facere excepturi corrupti assumenda eum dolorem
          eius! Nisi, sed nihil. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio culpa et, consequuntur ducimus repellendus
          tempora dolor necessitatibus ipsum quis amet mollitia nam id veniam
          numquam obcaecati, labore sunt molestias aperiam?
        </p>
        <div class="card">
          {/* <img src="/images/img_avatar.png" alt="Avatar" /> */}
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div class="card">
          {/* <img src="/images/img_avatar.png" alt="Avatar" /> */}
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
