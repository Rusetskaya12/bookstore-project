import { useAppDispatch, useAppSelector } from "./redux-hooks/redux-hooks";
import { getBooks } from "./selectors/bookSelectors";
import { featchNewBooks } from "./slices/newBookSlice";
import { AppDispatch, RootState } from "./store";

export { featchNewBooks };
export type { AppDispatch, RootState };
export { getBooks };
export { useAppDispatch, useAppSelector };