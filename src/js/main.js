$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    // $('#page-content-wrapper').toggleClass('toggled');
});

const ctx = document.getElementById('menu-chart').getContext("2d");
const ctx1 = document.getElementById('skills-chart').getContext("2d");

const gs = ctx.createLinearGradient(200, 0, 100, 0);
gs.addColorStop(0, '#74ebd5');
gs.addColorStop(1, '#9face6');

const gf = ctx.createLinearGradient(200, 0, 100, 0);
gf.addColorStop(0, "rgba(116, 235, 213, 0.6)");
gf.addColorStop(1, "rgba(159, 172, 230, 0.6)");

const gs1 = ctx.createLinearGradient(0, 500, 200, 0);
gs1.addColorStop(0, '#21d4fd');
gs1.addColorStop(1, '#b721ff');

const gf1 = ctx.createLinearGradient(0, 500, 200, 0);
gf1.addColorStop(0, "rgba(33, 212, 253, 0.6)");
gf1.addColorStop(1, "rgba(183, 33, 255, 0.6)");

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Commits by Month",
            borderColor: gs,
            pointBorderColor: gs,
            pointBackgroundColor: gs,
            pointHoverBackgroundColor: gs,
            pointHoverBorderColor: gs,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: .5,
            fill: true,
            backgroundColor: gf,
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

let myChart1 = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
        labels: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Node', 'Electron'],
        datasets: [{
            label: 'Value in %',
            borderColor: gs1,
            fill: true,
            backgroundColor: [gf1, gf1, gf1, gf1, gf1, gf1],
            borderWidth: 4,
            data: [70, 75, 60, 35, 50, 80]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 10
                }
            }]
        }
    }
});