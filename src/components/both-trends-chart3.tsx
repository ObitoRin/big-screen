import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { px } from '../shared/px';
import { random } from '../shared/random';

export const BothTrendsChart = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    dataOne: [0.026, 0.029, 0.03, 0.032, 0.032, 0.033, 0.034, 0.035, 0.03],
    dataTwo: [0.031, 0.035, 0.037, 0.036, 0.038, 0.04, 0.041, 0.039, 0.045],
    dataThree: [0.036, 0.041, 0.046, 0.05, 0.048, 0.047, 0.05, 0.049, 0.046],
    dataFour: [0.022, 0.023, 0.023, 0.024, 0.025, 0.028, 0.026, 0.021, 0.022],
    dataFive: [0.016, 0.015, 0.014, 0.016, 0.018, 0.017, 0.019, 0.018, 0.017]
  };

  const renderChart = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: 'white' },
          itemWidth: px(30),
          itemHeight: px(16)
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(76),
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
          splitLine: { show: true, lineStyle: { color: '#073E78' } },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: 'value',
          splitLine: { lineStyle: { color: '#073E78' } },
          axisLabel: {
            formatter(val) {
              return parseInt(val * 100) + '%';
            }
          }
        },
        series: [
          {
            name: '抢劫',
            data: data.dataOne
          },
          {
            name: '醉驾',
            data: data.dataTwo
          },
          {
            name: '盗窃',
            data: data.dataThree
          },
          {
            name: '故意伤人',
            data: data.dataFour
          },
          {
            name: '故意杀人',
            data: data.dataFive
          }
        ].map((obj) => ({
          ...obj,
          type: 'line',
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: { width: px(2) }
        }))
      })
    );
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    renderChart(data);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const newData = {
        dataOne: [
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035),
          random(0.035)
        ],
        dataTwo: [
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05),
          random(0.05)
        ],
        dataThree: [
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04),
          random(0.04)
        ],
        dataFour: [
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02),
          random(0.02)
        ],
        dataFive: [
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03),
          random(0.03)
        ]
      };

      renderChart(newData);
    }, 3500);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="bordered both-trends">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
