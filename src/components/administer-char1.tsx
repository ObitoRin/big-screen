import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const px = (n) => (n / 2420) * (window as any).pageWidth;

export const AdministerChart = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: '#79839E'
      },
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
          fontSize: px(12),
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
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      yAxis: {
        axisLine: {
          lineStyle: { show: true, color: '#083B70' }
        },
        axisLabel: {
          fontSize: px(12)
        },
        splitLine: { show: false }
      },
      series: [
        {
          type: 'bar',
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
        }
      ]
    });
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
