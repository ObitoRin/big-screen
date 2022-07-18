import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { baseEchartsOptions } from '../shared/base-echarts-options';
import { createEchartsOptions } from '../shared/create-echarts-options';
import { random } from '../shared/random';

export const AdministerChart = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);

  const data = [
    { name: '城关区', value: 49 },
    { name: '七里河区', value: 38 },
    { name: '西固区', value: 29 },
    { name: '安宁区', value: 19 },
    { name: '红谷区', value: 26 },
    { name: '永登区', value: 13 },
    { name: '皋兰区', value: 21 },
    { name: '榆中区', value: 36 },
    { name: '兰州新区', value: 42 }
  ];

  const renderChart = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartsOptions,
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: { color: '#083B70' }
          },
          axisLabel: {
            formatter(val) {
              if (val.length > 2) {
                const textArray = val.split('');
                textArray.splice(2, 0, '\n');
                return textArray.join('');
              } else {
                return val;
              }
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: { show: true, color: '#083B70' }
          },
          splitLine: { show: false }
        },
        series: [
          {
            type: 'bar',
            data: data.map((i) => i.value)
          }
        ]
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
        { name: '城关区', value: random(50) },
        { name: '七里河区', value: random(50) },
        { name: '西固区', value: random(50) },
        { name: '安宁区', value: random(50) },
        { name: '红谷区', value: random(50) },
        { name: '永登区', value: random(50) },
        { name: '皋兰区', value: random(50) },
        { name: '榆中区', value: random(50) },
        { name: '兰州新区', value: random(50) }
      ];

      renderChart(newData);
    }, 2100);

    return () => {
      window.clearInterval(timer);
    };
  });

  return (
    <div className="bordered administer">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
