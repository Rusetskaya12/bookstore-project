import { HeaderNav } from "../HeaderNavig/HeaderNavig";
import { ReactComponent as LogoIcon } from "../../assets/icons/bookstore-logo.svg";
import { Search } from "../Search/Search";
import { LogoWrapper, StyledHeader } from "./styles";

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
  