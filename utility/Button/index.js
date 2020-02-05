import React from "react";
import styled, { css } from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { lighten, darken } from "polished";

import { Type, Color } from "../";

const BUTTON_MODIFERS_CONFIG = {
  primary: () => `
    background: ${Color.red};
    color: ${Color.white};

    &:hover {
      background: ${darken(0.1, Color.red)};
    }
    `,

  default: () => `
    color: ${lighten(0.2, Color.grey)} !important;

    &:hover {
      color: ${Color.grey} !important;
    }
  `,

  success: () => `
    background: ${Color.green};
    color: ${Color.white} !important;

    &:hover {
      background: ${darken(0.1, Color.green)};
      color: ${Color.white} !important;
      text-decoration: none !important;
    }
  `,

  danger: () => `
    color: ${Color.white};
    background: ${Color.red};

    &:hover {
      background: ${darken(0.2, Color.red)};
    }
  `,

  block: () => `
    width: 100%;
    text-align: center;
  `
};

const buttonStyles = css`
  padding: 1rem 1.5rem;
  border: 0;
  font-family: ${Type.header};
  font-weight: bold;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  ${applyStyleModifiers(BUTTON_MODIFERS_CONFIG)};
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const ButtonLink = styled.a`
  ${buttonStyles};
`;

export const ButtonGroup = styled.div`
  ${Button}, ${ButtonLink} {
    border-radius: 0;
    border-right-width: 0;
  }

  ${Button}:first-child, ${ButtonLink}:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  ${Button}:last-child, ${ButtonLink}:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right-width: 1px;
  }
`;
