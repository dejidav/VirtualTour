import axios from "axios";
import config from "./config";
import ReactDOMServer from "react-dom/server";
import App from "./src/components/App";
import React from "react";


const getAPIUrl = contestId =>{
  if(contestId){
    return `${config.serverUrl}/api/contests/${contestId}`
  }
  return `${config.serverUrl}/api/contests`
}

const getInitialData = (contestId, apiData) => {
  if(contestId){
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    }
  }
  return {
    contests: apiData.contests
  }
}


const serverRender = (contestId) =>
  axios.get(getAPIUrl(contestId)).then((resp) => {
    const initialData = getInitialData(contestId, resp.data)
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
      ),
      initialData
    };
  }).catch(console.error);
// renderToString not rendering desired output
export default serverRender;

//Note-to-self: figure out why ReactDOMServer not rendering React HTML markup
// test with curl http://localhost:8080
