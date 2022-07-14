import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const TimeTrendsChart = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter(val) {
              return val * 100 + '%';
            }
          }
        },
        series: [
          {
            name: '故意伤人',
            data: [
              0.15, 0.13, 0.11, 0.13, 0.14, 0.15, 0.16, 0.18, 0.21, 0.19, 0.17,
              0.16, 0.15
            ],
            type: 'line',
            symbol: 'circle',
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#414a9f'
                },
                {
                  offset: 1,
                  color: '#1b1d52'
                }
              ])
            }
          }
        ]
      })
    );
  }, []);

  return (
    <div className="bordered time-trends">
      <h2>案件时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
