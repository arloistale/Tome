import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Aphorism } from './aphorism'
import { fetchAphorisms } from './aphorismsAPI';
import { RootState } from '../../state/store';

interface AphorismsState {
  items: Aphorism[],
  status: 'idle' | 'loading' | 'failed'
}

export const mostRecentAphorism = (state: RootState) => {
  const items = state.aphorisms.items;

  if (items.length === 0) {
    return undefined;
  }

  return items[0];
};

const initialState: AphorismsState = { 
  items: [],
  status: 'idle'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchAphorismsAsync = createAsyncThunk(
  'aphorisms/fetch',
  async () => {
    const response = await fetchAphorisms();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

const aphorismsSlice = createSlice({
  name: 'aphorisms',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Aphorism>) {
      state.items.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAphorismsAsync.pending, state => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchAphorismsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchAphorismsAsync.rejected, state => {
        state.status = 'failed';
        state.items = [];
      });
  }
})

export const { addItem } = aphorismsSlice.actions
export default aphorismsSlice.reducer