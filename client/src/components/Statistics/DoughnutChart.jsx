import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ bills }) => {
  if (!bills || bills.length === 0) {
    return <div>No data available</div>;
  }

  const groupedBills = bills.reduce((acc, bill) => {
    if (acc[bill.customerName]) {
      acc[bill.customerName] += bill.totalAmount;
    } else {
      acc[bill.customerName] = bill.totalAmount;
    }
    return acc;
  }, {});

  const labels = Object.keys(groupedBills);
  const dataValues = Object.values(groupedBills);
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (text) => `Toplam Tutar: ${text.formattedValue} ₺`,
        },
      },
      title: {
        display: true,
        text: "Kişi Başı Toplam Alışveriş Tutarı",
        font: {
          size: 16,
        },
      },
      colors: {
        forceOverride: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
