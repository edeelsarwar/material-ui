import axios from "axios";

const headers = {
  "Authorization": 'Bearer bu6gep7twyxw52k5oqfatk624a'
}

export const GetStudioData = (page) => async dispatch => {
  try {
     const res = await axios.get(`https://itutor-dev.elltechnologies.com/studio/progress/1?app_id=studio&question_id=q_2`, {headers});
      dispatch({
       type: "DialLIST_SUCCESS",
       data: res.data
     })
  } 
  catch (e) {
    dispatch({
      type: "DialLIST_FAIL",
    })
  }
};
