import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import { AdministerChart } from '../components/administer-char1';

export const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="section1">
          <AdministerChart />
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
