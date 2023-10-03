import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bookList: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.bookList.push({
        title: action.payload.title,
        author: action.payload.author,
        id: uuidv4(),
      });
    },
    remove(state, action) {
      // console.log(action.payload);
      return {
        ...state,
        bookList: state.bookList.filter((books) => books.id !== action.payload.bookData.id),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
