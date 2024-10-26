import { createSlice } from "@reduxjs/toolkit";
import { FarmData } from "../../../constants/farms";

interface FarmState {
  farm: FarmData | null;
  farms: FarmData[];
}

const initialState: FarmState = {
  farm: null,
  farms: [],
};

const farmSlice = createSlice({
  name: "farm",
  initialState,
  reducers: {
    setFarm: (state, { payload }) => {
      state.farm = payload;
    },
    setFarms: (state, { payload }) => {
      state.farms = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setFarm, setFarms } = farmSlice.actions;
export default farmSlice.reducer;
