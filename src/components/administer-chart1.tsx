import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartsOptions } from '../shared/base-echarts-options';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const AdministerChart = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        ...baseEchartsOptions,
        xAxis: {
          data: [
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区',
            '兰州新区'
          ],
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
            data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
          }
        ]
      })
    );
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
