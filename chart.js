var dates2 = [];
var data1 = [];

fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (text) {
    Object.entries(text.bpi).forEach((item) => {
      data1.push(item[0]);
      dates2.push(item[1]);
    });
  });
  setInterval(
    async () => {
        
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(function (response) {
          return response.json();
        })
        .then(function (text) {
            console.log(text)
         /*  Object.entries(text.bpi).forEach((item) => {
            data1.push(item[0]);
            dates2.push(item[1]);
          })
          ; */
      })
    }
    
    ,111000);
console.log(data1);
var options = {
  series: [
    {
      name: "Bitcoin Price",
      data: dates2,
    },
    /*  {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      } */
  ],
  chart: {
    height: 350,
    width: "80%",

    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [5, 7, 5],
    curve: "straight",
    dashArray: [0, 8, 5],
  },
  title: {
    text: "Crypto",
    align: "left",
  },
  legend: {
    tooltipHoverFormatter: function (val, opts) {
      return (
        val +
        " - " +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        ""
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    data1es: data1,
  },
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val) {
            return val + " : ";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return val + " per session";
          },
        },
      },
      {
        title: {
          formatter: function (val) {
            return  val ;
          },
        },
      },
    ],
  },
  grid: {
    borderColor: "#f1f1f1",
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
