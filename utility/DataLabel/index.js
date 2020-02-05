import React, { Fragment } from "react";
import styled from "styled-components";

import { Type, Color } from "../";

const StyledData = styled.div`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;

  .label {
    font-family: ${Type.header};
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${Color.green};
  }

  .data {
    display: block;
    font-size: 1rem;
    color: ${Color.grey};
    line-height: 120%;
  }
`;

export const BlockElement = styled.div`
  display: block;
  clear: both;
`;

export const DataLabel = ({ label, children }) => (
  <StyledData>
    <span className="label">{label}</span>
    <span className="data">{children}</span>
  </StyledData>
);
