"use client"
import React, { useState } from 'react'
import m1 from "../../public/chart/m1.png";
import m6 from "../../public/chart/m6.png";
import max from "../../public/chart/max.png";
import week from "../../public/chart/week.png";
import y1 from "../../public/chart/y1.png";
import y3 from "../../public/chart/y3.png";
import Image from 'next/image';


const Chart = () => {
  const chartData = [
    { title: '1W', img: week },
    { title: '1M', img: m1 },
    { title: '6M', img: m6 },
    { title: '1Y', img: y1 },
    { title: '3Y', img: y3 },
    { title: 'Max', img: max }
  ];
  const [selectedChart, setSelectedChart] = useState(chartData[1]);

  return (
    <div className='w-[90%] sm:w-[80%] m-auto border border-gray-200 py-5 rounded-3xl'>
      <div className=''>
        <Image style={{width:'100%'}} src={selectedChart.img} alt={selectedChart.img}/>
      </div>
      <div className='flex justify-center'>
        {chartData.map((chart) => (
          <button
            key={chart.title}
            onClick={() => setSelectedChart(chart)}
            style={{
              backgroundColor: selectedChart.title === chart.title ? 'black' : '#F6F5F2',
              color: selectedChart.title === chart.title ? 'white' : 'black',
              margin: '5px',
              padding: '2px 6px'
            }}
          >
            {chart.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Chart