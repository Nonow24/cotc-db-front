import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Traveler = {
  id: number;
  name: string;
  job: string;
};

interface TravelerState {
  travelers: Traveler[];
  error: string | null;
}

const initialState: TravelerState = {
  travelers: [],
  error: null,
};

const travelerSlice = createSlice({
  name: "traveler",
  initialState,
  reducers: {
    getTravelersSuccess(state, action: PayloadAction<Traveler[]>) {
      state.travelers = action.payload;
      state.error = null;
    },
    getTravelersFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { getTravelersSuccess, getTravelersFailure } =
  travelerSlice.actions;

export default travelerSlice.reducer;
