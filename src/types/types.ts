export interface IBook {
	image: string;
	isbn13: string;
	price: string;
	subtitle: string;
	title: string;
	url: string;
  }
  
export interface IResponseBooks {
	error: string;
	total: string;
	books: IBook[];
  }
  