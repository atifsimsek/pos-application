import { Line } from "react-chartjs-2";

const CustumAreaChart = ({ bills }) => {
  const data = {
    labels: bills?.map((bill) => bill?.customerName),
    datasets: [
      {
        label: "Yapılan Alışverişler",
        data: bills?.map((bill) => bill?.totalAmount),
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (text) => `Yapılan Alışveriş ${text.formattedValue} ₺`,
        },
      },
      legend: {
        position: "top",
      },
      title: {
        display: false,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        stacked: true,
      },
    },
    colors: {
      forceOverride: true,
    },
  };

  return <Line data={data} options={options} />;
};

export default CustumAreaChart;
