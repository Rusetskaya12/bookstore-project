import { BookItem } from "components/BookItem/BookItem";
import { INewBookApi } from "services";
import { StyledBookList } from "./styles";

interface IProps {
  books: INewBookApi[];
}

export const BookList = ({ books }: IProps) => {
  return (
    <>
      {" "}
      <StyledBookList>
        {books.map((book) => (
          <BookItem book={book} key={book.isbn13} />
        ))}
      </StyledBookList>
    </>
  );
};
