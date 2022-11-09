import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "Article",
  initialState:[{
    category: "none",
    price: "none",
    size: "none",
    color: "none",
    type: "none",
  }],
  reducers: {
    setArticles:(state,actions)=>{
        return actions.payload
    }

  },
});

// Action creators are generated for each case reducer function
export const {setArticles} = articleSlice.actions;

export default articleSlice.reducer;
