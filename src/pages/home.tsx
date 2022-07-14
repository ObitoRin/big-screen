import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import { AdministerChart } from '../components/administer-chart1';
import { CaseSortChart } from '../components/case-sort-chart2';
import { BothTrendsChart } from '../components/both-trends-chart3';
import { TimeTrendsChart } from '../components/time-trends-chart4';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <AdministerChart />
          <CaseSortChart />
        </section>
        <section className="section2">
          <BothTrendsChart />
          <TimeTrendsChart />
        </section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
      <footer>@xk-{year}</footer>
    </div>
  );
};
