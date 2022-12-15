import styled from "styled-components";
import { Color, B1 } from "ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 35px 0px 35px 0px;
  border-top: 1px solid ${Color.Blue};
`;

export const Text = styled.p`
  ${B1}
  color: ${Color.Secondary}
`;
