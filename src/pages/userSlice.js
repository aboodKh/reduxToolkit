import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState= {
    name: " ",
    email: " ",
    pending:false,
    error: false
}

 
export const fetchUserThunkCreator= createAsyncThunk("user",async(id,thunkAPI)=>{
  try{  
    let body= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(body.status === 200)
    return body.json();
    else return thunkAPI.rejectWithValue(body) 
  }
  catch(err){
    console.log("Error", err.message);
      return thunkAPI.rejectWithValue(err); 
     }
})

export const userSlice= createSlice({
    name:"user",
    initialState: initialState,
    reducers:{

    },
    extraReducers:{
        [fetchUserThunkCreator.pending]: (state,action)=>{
            state.pending= true;
        },
        [fetchUserThunkCreator.fulfilled]: (state,action)=>{
            state.name= action.payload.name;
            state.email= action.payload.email;
            state.pending= false;
        },
        [fetchUserThunkCreator.rejected]: (state,action)=>{
            console.log("Error", action.payload);
            state.pending= false;
            state.error= true;
        }
    }
})






// https://jsonplaceholder.typicode.com/users/1