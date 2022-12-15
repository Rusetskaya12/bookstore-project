/* eslint-disable react/jsx-no-undef */
import { HeaderNav } from "components/HeaderNavig/HeaderNavig";
import { Search } from "components/Search/Search";
import { StyledHeader, LogoWrapper } from "./styles";

export const Header = () => {
  return (
	  <StyledHeader>
      <LogoWrapper>
		  <LogoIcon />
      </LogoWrapper>
      <Search type="search" placeholder="Search" />
      <HeaderNav />
	  </StyledHeader>
  );
};
  