import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const AgeChart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
  }, []);

  return (
    <div className="age-图2">
      8<div ref={divRef} className="chart"></div>
    </div>
  );
};
