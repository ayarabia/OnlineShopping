import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  products: [],
  status:null,
  loading:false
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',()=>{
  return  axios
  .get("https://fakestoreapi.com/products")
  .then(function (response) {
    console.log(response.data);
    return response.data
  }).catch(
    (e)=>{
        console.log(e);
      }
  )
   }
  )
  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
   },
   extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.status="pending"
        state.loading=true
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.status="fulfilled"
        state.products=action.payload
        state.loading=false
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.status=".rejected"
        state.loading=true
      })
   }
//    extraReducers:{
//     [fetchProducts.pending]:(state,action)=>{
//         state.status="pending"
//     },
//     [fetchProducts.fulfilled]:(state,action)=>{
//         state.status="fulfilled"
//         state.value=action.payload
//     },
//     [fetchProducts.rejected]:(state,action)=>{
//         state.status="rejected"
//      }
//    }
  })
  export default productSlice.reducer