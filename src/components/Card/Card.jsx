import React, { useState } from "react";
import "./Card.css";
import { motion } from "framer-motion";
import { UilChart } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "react-apexcharts";

export default function Card(props) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="Card">
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </div>
  );
}

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      whileHover={{ scale: 1.05 }} // Scale up on hover
      onClick={() => {
        setExpanded();
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <UilChart />
        <span>${param.value}</span>
        <span>24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      datalabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy  HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div 
      className="ExpandedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      initial={{ opacity: 0, scale: 0.8 }} // Initial animation properties
      animate={{ opacity: 1, scale: 1 }} // Animation properties when card expands
      exit={{ opacity: 0, scale: 0.8 }} // Animation properties when card collapses
    >
      <div style={{ cursor: 'pointer', alignSelf: 'flex-end', color: 'white' }} onClick={setExpanded}>
        <UilTimes />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}
