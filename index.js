const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        borderRadius: 6,
        borderSkipped: false,
        hoverBackgroundColor: [
          "hsla(10, 79%, 65%, 0.8)",
          "hsla(10, 79%, 65%, 0.8)",
          "#b4dfe5",
          "hsla(10, 79%, 65%, 0.8)",
          "hsla(10, 79%, 65%, 0.8)",
          "hsla(10, 79%, 65%, 0.8)",
          "hsla(10, 79%, 65%, 0.8)",
        ],
      },
    ],
  },
  options: {
    scales: {
      x: {
        ticks: {
          color: "hsl(28, 10%, 53%)",
          font: {
            size: 16,
          },
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        xAlign: "center",
        yAlign: "bottom",
        backgroundColor: "hsl(25, 47%, 15%)",
        displayColors: false,
        bodyColor: "hsl(33, 100%, 98%)",
        bodyFont: {
          weight: 600,
        },
        bodyAlign: "center",
        callbacks: {
          title: () => null,
          label: function (context) {
            var value = context.parsed.y;
            var formattedValue = value.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            });
            return "$" + formattedValue.replace(",", ".");
          },
        },
        caretSize: 0,
        caretPadding: 7,
      },
    },
  },
});
