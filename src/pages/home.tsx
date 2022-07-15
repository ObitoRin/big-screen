import React from "react";
import "./home.scss";
import headerBg from "../images/header.png";
import { AdministerChart } from "../components/administer-chart1";
import { CaseSortChart } from "../components/case-sort-chart2";
import { BothTrendsChart } from "../components/both-trends-chart3";
import { TimeTrendsChart } from "../components/time-trends-chart4";
import { CombatGainsChart } from "../components/combat-gains-chart5";
import { MapChart } from "../components/map-chart6";
import { AgeChart7 } from "../components/age-chart7";
import { AgeChart8 } from "../components/age-chart8";
import { AgeChart9 } from "../components/age-chart9";
import { CaseTypeChart } from "../components/case-type-chart10";
import { CaseStreetChart } from "../components/case-street-chart11";
import { CaseModeChart } from "../components/case-mode-chart12";

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
        <section className="section3">
          <CombatGainsChart />
        </section>
        <section className="section4">
          <MapChart />
          <div className="bordered age">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <AgeChart7 />
              <AgeChart8 />
              <AgeChart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 case-type">
            <h2>案发类型统计</h2>
            <div className="charts">
              <CaseTypeChart />
              <CaseStreetChart />
            </div>
          </div>
          <div className="bordered row2 case-street">
            <h2>案发街道统计</h2>
            <div className="charts">
              <CaseModeChart />
            </div>
          </div>
          <div className="bordered row3 case-mode">
            <h2>作案手段分析</h2>
            <div className="charts"></div>
          </div>
        </section>
      </main>
      <footer>@xk-{year}</footer>
    </div>
  );
};
