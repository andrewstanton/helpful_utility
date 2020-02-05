import styled from "styled-components";

import { Color } from "../Color";
import { Type } from "../Type";

export const PlaceHolder = styled.div`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "200px"};
  background: ${Color.grey};
  margin: auto;
`;

export const ImageCaption = styled.div`
  margin-top: 2rem;
  font-family: ${Type.header};
  text-align: center;
  line-height: 100%;
`;
