import React, { Component, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { array } from "../data";

export default function MuiChart(props) {
  const [series, setSeries] = React.useState([]);

  const headers = {
    Authorization: "Bearer bu6gep7twyxw52k5oqfatk624a",
  };

  useEffect(async () => {
    console.log(array);
    const res = await axios.get(
      `https://itutor-dev.elltechnologies.com/studio/progress/1?app_id=studio&question_id=${props.question}`,
      { headers }
    );
    console.log("erererer", res.data);
    //series.push({data:res.data.map((data) =>  data.score)});
    let data = res.data.map((data) => data.score);
    setSeries([{ data }]);
    console.log(series);
  }, []);

  const options = {
    chart: {
      id: "basic-bar",
    },
  };
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="100%" />
        </div>
      </div>
    </div>
  );
}
