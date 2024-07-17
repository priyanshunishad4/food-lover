import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <h3 className="text-light">Ecommerce</h3>
          </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={carts.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
