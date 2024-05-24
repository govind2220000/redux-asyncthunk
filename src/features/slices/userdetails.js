import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { users: [], loading: false, error: null };

//createAction

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6650c93f20f4f4c442761ccb.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userDetailSlice.reducer;
