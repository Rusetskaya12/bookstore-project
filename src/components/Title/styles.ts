import styled from "styled-components";
import { Media } from "../../ui";
import { Margin3 } from "../../ui/margin";
import { H1 } from "../../ui/typography";

export const StyledTitle = styled.h1`
  ${H1}
  margin-bottom:${Margin3.desktop};
  ${Media.SM} {
    font-size: 32px;
    margin-bottom: ${Margin3.mobile};
  }
`;
