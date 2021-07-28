const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
  };
  
  const StudioReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case "DialLIST_FAIL_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "DialLIST_FAIL_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to get data"
        };
      case "DialLIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data:  action.data,
          errorMsg: "",
          
        };
      default:
        return state
    }
  };
  
  export default StudioReducer