import styled from "styled-components";
import { Media } from "ui";
import { Margin } from "ui/margin";
import { Typography } from "ui/typography";

export const StyledBook = styled.div`
  margin-bottom: ${Margin.ExtraLarge};

  ${Media.SM} {
    margin-bottom: ${Margin.ExtraLargeMobile};
    flex-direction: column;
  }

  margin-bottom: ${Margin.ExtraLarge};
  ${Media.SM} {
   
  } 
`;
export const Title = styled.h1`
  ${Typography.H1};
  text-align: left;
  margin-bottom: ${Margin.SuperLarge};

  ${Media.SM} {
    margin-bottom: SuperLargeMobile;
  }
`;
