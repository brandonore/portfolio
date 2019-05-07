$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

const ctx = document.getElementById('menu-chart').getContext("2d")

const gradientStroke = ctx.createLinearGradient(200, 0, 100, 0);
gradientStroke.addColorStop(0, '#74ebd5');
gradientStroke.addColorStop(1, '#9face6');

const gradientFill = ctx.createLinearGradient(200, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(116, 235, 213, 0.6)");
gradientFill.addColorStop(1, "rgba(159, 172, 230, 0.6)");

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Commits by Month",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
           pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: .5,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [2, 5, 12, 9, 9, 5, 12]
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});