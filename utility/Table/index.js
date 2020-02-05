import React from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";

import { Color, Type } from "../";

export const TableButtonGroup = styled.div`
  text-align: right;
`;

const StyledTable = styled.table`
  margin-top: 2rem;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${lighten("0.5", Color.grey)};
  border-bottom: none;

  tr {
    margin: 0;
    &:nth-child(even) {
      td {
        background-color: ${darken("0.05", Color.white)};
      }
    }
  }

  th {
    padding: 1rem;
    font-size: 1.5rem;
    font-family: ${Type.header};
    background-color: ${Color.blue};
    color: ${Color.white};
  }

  td {
    margin: 0;
    padding: 1.4rem;
    border-bottom: ${lighten("0.5", Color.grey)} 1px solid;
    box-sizing: border-box;
    font-size: 1rem;
    font-style: italic;

    .name {
      font-family: ${Type.header};
      font-size: 1.2rem;
      display: block;
      font-style: normal;
      color: ${Color.blue};
    }
  }
`;

export const Table = ({ children, ...props }) => (
  <StyledTable {...props}>
    <tbody>{children}</tbody>
  </StyledTable>
);
