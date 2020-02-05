import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { applyStyleModifiers } from "styled-components-modifiers";

import { Color, Button, Portal } from "../";

const MODAL_MODIFIERS = {
  large: () => `
    width: 1400px;
  `
};

const ModalWindow = styled.div`
  position: relative;
  background-color: ${Color.white};
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 600px;
  max-width: 90%;
  margin-top: 50px;
  padding: 2rem;
  margin-bottom: 2.5rem;

  ${applyStyleModifiers(MODAL_MODIFIERS)};
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2000;
  overflow: auto;
`;

const ModalClose = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  svg {
    width: 20px;
  }
`;

export const Modal = ({ toggle, on, children, modifiers }) => (
  <>
    {on && (
      <Portal selector="#modal">
        <ModalBackdrop>
          <ModalWindow modifiers={modifiers}>
            <ModalClose>
              <Button modifiers="default" onClick={toggle}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </ModalClose>
            {children}
          </ModalWindow>
        </ModalBackdrop>
      </Portal>
    )}
  </>
);
