import React from "react";
import styled from "styled-components";
import CountrySort from "./CountrySort";

const LiveRate = () => {
  const Wrapper = styled.div`
    padding: 40px 40px;
    margin: 70px 0;
    max-width: 1440px;
    margin: auto;
    div {
      width: min(86%, 595px);
      h5 {
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #0062ff;
        font-weight: 400;
        font-size: 16px;
      }

      h2 {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 50px;
      }
    }

    .table {
      display: flex;
      width: 100%;

      div {
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .action {
          border: 2px solid #0062ff;
          color: #0062ff;
          font-weight: 700;
          background: transparent;
          padding: 15px 100px;
          border-radius: 5px;
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div>
        <h5>live rates</h5>
        <h2>Live rates of every currency around the world</h2>
      </div>
      <div className="table">
        <div>
          <CountrySort />
          <button className="action">Edit</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LiveRate;
