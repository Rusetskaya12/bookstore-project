import { useEffect, useState } from "react";
import { booksAPI } from "../../services";
import { IResponseBooks } from "../../types";
import { BookItem } from "../BookItem/BookItem";
import { Title } from "../Title/Title";
import { StyledBooksList } from "./styles";

export const BooksList = () => {
  const [booksList, setBooksList] = useState<IResponseBooks>(
	  {} as IResponseBooks
  );
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
	  booksAPI
      .setNewBooks()
      .then(setBooksList)
      .finally(() => {
		  setIsLoading(false);
      });
  }, []);
  
  if (isLoading) {
	  return <Title text="New Releases Books" />;
  }
  return (
	  <section>
      <Title text="New Releases Books" />
      <StyledBooksList>
		  {booksList.books.map(
          ({ isbn13, image, price, title, subtitle, url }) => (
			  <BookItem
              key={isbn13}
              image={image}
              price={price}
              subtitle={subtitle}
              title={title}
              url={url}
			  />
          )
		  )}
      </StyledBooksList>
	  </section>
  );
};