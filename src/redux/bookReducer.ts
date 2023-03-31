import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { BookState } from './types';

//Defining our initialState's type
type initialStateType = {
  bookList: BookState[];
};

const bookList: BookState[] = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J. K. Rowling',
  },
  {
    id: 3,
    title: 'The Lord of the Rings',
    author: 'J.R.R Tolkien',
  },
];

const initialState: initialStateType = {
  bookList,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<BookState>) => {
      state.bookList.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<BookState>) => {
      const {
        payload: { title, id, author },
      } = action;

      state.bookList = state.bookList.map((book) =>
        book.id === id ? { ...book, author, title } : book,
      );
    },
    deleteBook: (state, action: PayloadAction<{ id: number }>) => {
      state.bookList = state.bookList.filter((book) => book.id !== action.payload.id);
    },
  },
});

// To able to use reducers we need to export them.
export const { addNewBook, updateBook, deleteBook } = bookSlice.actions;

//Selector to access bookList state.
export const selectBookList = (state: RootState) => state.book.bookList;

export default bookSlice.reducer;
