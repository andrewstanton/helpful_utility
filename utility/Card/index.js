import styled from "styled-components";
import { Color } from "../Color";

export const Card = styled.div`
  padding: 2.5rem;
  border-radius: 2px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

export const WhiteCard = styled(Card)`
  background: ${Color.white};
`;
