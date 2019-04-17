const initialState = {
    username: "",
    id: "",
    profilePicture: ""
}


const UPDATE_USERNAME_TYPE = "UPDATE_USERNAME_TYPE";
const UPDATE_PROFILEPICTURE_TYPE = "UPDATE_PROFILEPICTURE_TYPE";




function reducer (state=initialState, action) {
          switch(action.type){
              case UPDATE_USERNAME_TYPE:
              return Object.assign({}, state, {username:action.payload});

              case UPDATE_PROFILEPICTURE_TYPE:
              return Object.assign({}, state, {profilePicture:action.payload}) 


          default: return state;


          }


}



export function updateUsernameType(usernameType){
    return {
        type: UPDATE_USERNAME_TYPE,
        payload: usernameType
    }
}


export function updateProfilePictureType(ProfilePictureType){
    return {
        type: UPDATE_PROFILEPICTURE_TYPE,
        payoad: ProfilePictureType
    }
}









export default reducer;