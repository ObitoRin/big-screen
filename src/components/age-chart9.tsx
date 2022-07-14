import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const AgeChart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="age-图3">
      9<div ref={divRef} className="chart"></div>
    </div>
  );
};
