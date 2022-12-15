import { INewBookApi } from "services";
import { StyledBookItem, BookImg, BookTitle, BookSubtitle, BookPrice } from "./styles";

interface IProps {
	book: INewBookApi;
  }
  
export const BookItem = ({ book }: IProps) => {
  return (
	  <StyledBookItem key={book.isbn13}>
      <BookImg src={book.image} alt={book.title} />
      <BookTitle>{book.title}</BookTitle>
      <BookSubtitle>{book.subtitle}</BookSubtitle>
      <BookPrice>{book.price}</BookPrice>
	  </StyledBookItem>
  );
};