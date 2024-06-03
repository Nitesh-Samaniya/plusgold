"use client"

import { useState, useEffect } from "react";
// import Image from "next/image";
// import week from "../../../public/chart/week.png";
// import month from "../../../public/chart/month.png";
// import month6 from "../../../public/chart/M6.png";
// import year from "../../../public/chart/year.png";
// import year3 from "../../../public/chart/year3.png";
// import max from "../../../public/chart/max.png";

const chartData = [
    { title: '1W', img: 'week' },
    { title: '1M', img: 'month' },
    { title: '6M', img: 'month6' },
    { title: '1Y', img: 'year' },
    { title: '3Y', img: 'year3' },
    { title: 'Max', img: 'max' }
];

const GoldChart = () => {
    const [selectedChart, setSelectedChart] = useState(chartData[2]);

    // useEffect(() => {
    //     setSelectedChart(chartData[1]);
    // }, []);

    return (
        <div className="border w-[80%] m-auto">
            {/* <div>
                <Image src={selectedChart.img} alt={selectedChart.title} />
            </div> */}
            <div>
                {chartData.map((chart) => (
                    <button
                        key={chart.title}
                        onClick={() => setSelectedChart(chart)}
                        style={{
                            backgroundColor: selectedChart.title === chart.title ? 'black' : '#F6F5F2',
                            color: selectedChart.title === chart.title ? 'white' : 'black',
                            margin: '5px', 
                            padding: '2px 4px' 
                        }}
                    >
                        {chart.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GoldChart;
