import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState:[{
    id: "none",
      email: "none",
      name: "none",
      role:"none"
  }],
  reducers: {
    setUser:(state,actions)=>{
        return actions.payload
    }

  },
});

// Action creators are generated for each case reducer function
export const {setUser} = userSlice.actions;

export default userSlice.reducer;
