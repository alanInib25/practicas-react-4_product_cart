
export const authReducer = (state, {type, payload}) => {

  switch(type){
    case "REGISTER_USER":{
      return {
        ...state,
        user: payload
      }
    }
    case "LOGIN_USER":{
      return {
        ...state,
        user: payload
      }
    }
    case "IS_AUTHENTICATE":{
      return{
        ...state,
        isAuthenticate: payload
      }
    }
    case "MESSAGE":{
      return{
        ...state,
        message: payload
      }
    }
    case "LOGOUT_USER":{
      return{
        ...state,
        user: payload
      }
    }
    case "ERROR":{
      return{
        ...state,
        error: payload
      }
    }
    case "SHOW_PASSWORD":{
      return{
        ...state,
        showPassword: payload
      }
    }
    case "CHECK_LOGIN":{
      return{
        ...state,
        user: payload
      }
    }
    default:{
      break;
    }
  }
}