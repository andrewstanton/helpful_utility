import React from "react";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { lighten } from "polished";

import { Color, Type } from "../";

const BADGE_MODIFIERS_CONFIG = {
  primary: () => `
      background-color: ${Color.blue};
      color: ${Color.white};
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
      background-color:${lighten(0.5, Color.grey)};
      color: ${Color.white};
    `,
  mleft: () => `
    margin-left: 0.5rem; 
  `
};

export const Badge = styled.div`
  padding: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 0.3rem;
  font-family: ${Type.header};
  font-weight: bold;
  font-size: 0.8rem;
  display: inline-block;

  ${applyStyleModifiers(BADGE_MODIFIERS_CONFIG)};
`;
