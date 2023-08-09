import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const achaSaNaam = createAsyncThunk("fetchAsyncProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: {
    products: [],
    isLoading: true,
    isError: false,
  },
  reducers: {
    fetchProducts: (state) => {},
  },
  extraReducers: {
    [achaSaNaam.pending]: (state) => {
      state.isLoading = true;
    },
    [achaSaNaam.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.products = action.payload;
    },
    [achaSaNaam.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { fetchProducts } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;

// let a = 5;
// let b = 6;

// // a += a > b ? a : b;

// // console.log(a);

// if (a > b) {
//   a = a + a;
// } else {
//   a = a + b;
// }

// let arr = ["Jitendra", "girlfriend", false]

// console.log(typeof arr) //object

// let a1 = [1,2,3,4]

// let a2 = [...a1]

// console.log(a2.length)

// let names = ["Ram", "Shyam", "Seeta", "Geeta"]

// console.log(names.slice(0,3))

// console.log(names.push("Ritik"))

// console.log(names.shift())

// console.log(names.unshift("Ritik"))

// names.unshift("Ritik")
// console.log(names)

// const obj = {
//   name: "Ajeet",
//   age: 25,
// };

// const person = "name";
// // console.log(obj[person])

// function h() {
//   return obj[person].length > 5 ? "Ram" : "Shyam";
// }

// console.log(h())
