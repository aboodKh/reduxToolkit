import { useEffect, Fragment } from "react";
import {fetchUserThunkCreator} from "./userSlice";
import {useSelector, useDispatch} from "react-redux";

 const Profile=() =>{
     let userID= 1;
     let userSelector= (state) => state.user;
     const dispatch= useDispatch();
     const userState= useSelector(userSelector);

     useEffect(()=>{
         dispatch(fetchUserThunkCreator(userID)); 
     },[dispatch, userID])

      return (
        <Fragment>
        {userState.pending && "loading..."}
        {userState.error? "something went wrong, try later :)": userState.name} 
        </Fragment>
      )
  }

  export default Profile