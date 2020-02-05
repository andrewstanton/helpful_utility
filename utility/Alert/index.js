import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { lighten } from "polished";

import { Type, Color } from "../";

const ALERT_MODIFERS_CONFIG = {
  primary: () => `
    background-color: ${Color.blue};
    color: ${Color.white};

    h1, h2, h3 {
      color: ${Color.white} !important;
      margin: 0 !important;
    }
    `,

  secondary: () => `
    background-color: ${Color.orange};
    color: ${Color.white};

    h1, h2, h3 {
      color: ${Color.white} !important;
      margin: 0 !important;
    }
  `,

  success: () => `
    background-color: ${Color.green};
    color: ${Color.white};
  `,

  danger: () => `
    background-color: ${Color.red};
    color: ${Color.white};
  `,

  default: () => `
    background-color:${lighten(0.2, Color.grey)};
    color: ${Color.white};
  `
};

export const Alert = styled.div`
  padding: 1rem;
  text-align: center;
  margin-bottom: 0.3rem;
  font-family: ${Type.header};
  font-weight: bold;

  ${applyStyleModifiers(ALERT_MODIFERS_CONFIG)};
`;
