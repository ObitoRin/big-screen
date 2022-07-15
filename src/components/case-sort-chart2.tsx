import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { random } from "../shared/random";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const CaseSortChart = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);

  const data = [
    { name: "城关区公安局", 2011: 3, 2012: 10 },
    { name: "七里河区公安局", 2011: 5, 2012: 9 },
    { name: "西固区公安局", 2011: 4, 2012: 2 },
    { name: "安宁区公安局", 2011: 7, 2012: 6 },
    { name: "红古区公安局", 2011: 1, 2012: 8 },
    { name: "永登县公安局", 2011: 9, 2012: 4 },
    { name: "皋兰县公安局", 2011: 8, 2012: 5 },
    { name: "榆中县公安局", 2011: 6, 2012: 7 },
    { name: "新区公安局", 2011: 2, 2012: 1 },
  ];

  const renderChart = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        grid: {
          x: px(100),
          y: px(40),
          x2: px(40),
          y2: px(40),
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "2011",
            type: "bar",
            data: data.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#2034f9" },
                  { offset: 1, color: "#04a1ff" },
                ]),
              },
            },
          },
          {
            name: "2012",
            type: "bar",
            data: data.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#b92ae8" },
                  { offset: 1, color: "#6773e7" },
                ]),
              },
            },
          },
        ],
      })
    );
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    renderChart(data);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const newData = [
        { name: "城关区公安局", 2011: random(10), 2012: random(10) },
        { name: "七里河区公安局", 2011: random(10), 2012: random(10) },
        { name: "西固区公安局", 2011: random(10), 2012: random(10) },
        { name: "安宁区公安局", 2011: random(10), 2012: random(10) },
        { name: "红古区公安局", 2011: random(10), 2012: random(10) },
        { name: "永登县公安局", 2011: random(10), 2012: random(10) },
        { name: "皋兰县公安局", 2011: random(10), 2012: random(10) },
        { name: "榆中县公安局", 2011: random(10), 2012: random(10) },
        { name: "新区公安局", 2011: random(10), 2012: random(10) },
      ];

      renderChart(newData);
    }, 2100);

    return () => {
      window.clearInterval(timer);
    }
  }, []);

  return (
    <div className="bordered case-sort">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名2
      </div>
    </div>
  );
};
