import React from "react";
import ReactDOM from "react-dom";

export default function () {
  const footerElement = (
    <div className="Footer">
      <footer>
        <p> &#169; 2022</p>
        <h1>THE SPARKS FOUNDATION PROJECT</h1>
      </footer>
    </div>
  );
  return ReactDOM.createPortal(
    footerElement,
    document.getElementById("footer-element")
  );
}
