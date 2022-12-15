import { BookList } from "components/BooksList/BooksList";
import { useAppDispatch, useAppSelector, getBooks, featchNewBooks } from "components/store";
import { useEffect } from "react";
import { StyledBook, Title } from "./styles";

export const Book = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);
  useEffect(() => {
	  dispatch(featchNewBooks());
  }, [dispatch]);
  
  return (
	  <StyledBook>
      <Title>New Releases Books</Title>
      <BookList books={books} />
	  </StyledBook>
  );
};