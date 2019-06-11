// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});

// chart js colors
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

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// new charts 
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Github Commits by Month",
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
            data: [0, 15, 5, 0, 10, 3, 0]
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

// modal list info
const pi1 = '<ul>' +
    '<li>Secure login/logout using OAuth2</li>' +
    '<li>Connect to your imgur account using the imgur API</li>' +
    '<li>Drag and drop images to upload + file select</li>' +
    '<li>View all uploaded images through the gallery component</li>' +
    '<li>State management with Vuex</li>' +
'</ul>'

const pi2 = '<ul>' +
    '<li>Genearte PDF invoices</li>' +
    '<li>Preview the invoice in a separate window before saving</li>' +
    '<li>Upload images (eg. company logo)</li>' +
    '<li>Complete with date picker to select due dates</li>' +
    '<li>Easily add/remove discounts</li>' +
    '<li>Extra fields for Notes & Terms/Conditions</li>' +
    '<li>All fields are editable to allow for full customization</li>' +
'</ul>'

const pi3 = '<ul>' +
    '<li>Auto-syncs every 90 seconds</li>' +
    '<li>Pulls data from CoinMarketCap</li>' +
    '<li>Search to find your favorite coins</li>' +
    '<li>Settings include Satoshi -> USD & USD -> BTC converter that updates in real time</li>' +
    '<li>Toggle display between USD/BTC price & volume + market cap/available + total supply</li>' +
    '<li>Dark & light theme</li>' +
    '<li>Support for Windows & macOS</li>' +
'</ul>'

const pi4 = '<ul>' +
    '<li>Login with Google authentication</li>' +
    '<li>Expenses are saved via Google Firebase</li>' +
    '<li>Add/edit/remove expenses</li>' +
    '<li>Date pickers for easy filtering</li>' +
    '<li>Sort by date or amount</li>' +
    '<li>Search field for searching and filtering expenses</li>' +
'</ul>'

const pi5 = '<ul>' +
    '<li>Current command categories: admin, fun, general & anime</li>' +
    '<li>Admin - !addrole, !ban, !kick, !purge, !removerole, !tempmute, !warn</li>' +
    '<li>Fun - !8ball, !cat, !dog, !ping</li>' +
    '<li>General - !botinfo, !report, !say, !serverinfo, !warnlevel</li>' +
    '<li>Anime - !getanime</li>' +
    '<li>Detailed readme site coming soon with a full list of commands, detailed descriptions & usage info!</li>' +
'</ul>'

const pi6 = '<ul>' +
    '<li>Simple, clean, easy to read interface</li>' +
    '<li>Displays recent tweets from your timeline, recent accounts followed & direct messages</li>' +
    '<li>Post a tweet from the custom text box</li>' +
    '<li>Uses the twitter api and key to connect to your account.</li>' +
'</ul>'

// populate modal list 
$('.fa-info-circle').on('click', function() {
    let idName = $(this).attr('id');
    switch (idName) {
        case 'item1' :
            $('#info-modal-body').html(pi1);
            $('#modal-title').html('Imgur Upload App');
            break;
        case 'item2' :
            $('#info-modal-body').html(pi2);
            $('#modal-title').html('Samuraii Invoice Generator');
            break;
        case 'item3' :
            $('#info-modal-body').html(pi3);
            $('#modal-title').html('Aurora Cryptocurrency Tracker');
            break;
        case 'item4' :
            $('#info-modal-body').html(pi4);
            $('#modal-title').html('Expensify (Expense Manager) App');
            break;
        case 'item5' :
            $('#info-modal-body').html(pi5);
            $('#modal-title').html('Chii Discord Bot');
            break;
        case 'item6' :
            $('#info-modal-body').html(pi6);
            $('#modal-title').html('Twitter Interface');
            break;
    }
});

 // fancybox gallery 
$('.img-gallery').click(function() {
    let id = $(this).attr('id');

    switch (id) {
        case 'i2':
            $.fancybox.open([
                {
                    src  : 'https://i.imgur.com/tQF8Mno.png',
                    opts : {
                        caption : 'Blank preview'
                    }
                },
                {
                    src  : 'https://i.imgur.com/uAu9vnS.png',
                    opts : {
                        caption : 'Example invoice'
                    }
                },
                {
                    src : 'https://i.imgur.com/eEAU48k.png',
                    opts : {
                        caption : 'Date picker'
                    }
                }
            ], {
                loop : true,
                thumbs : {
                    autoStart : true
                }
            });
            break;

        case 'i3': 
            $.fancybox.open([
                {
                    src  : 'https://i.imgur.com/WkwONkK.mp4',
                    opts : {
                        caption : 'App in action'
                    }
                },
                {
                    src  : 'https://i.imgur.com/uC64mir.png',
                    opts : {
                        caption : 'Home view'
                    }
                },
                {
                    src : 'https://i.imgur.com/Stzdtxj.png',
                    opts : {
                        caption : 'Satoshi to USD conversion'
                    }
                }
            ], {
                loop : true,
                thumbs : {
                    autoStart : true
                }
            });
            break;

        case 'i5': 
            $.fancybox.open([
                {
                    src  : 'https://i.imgur.com/W1coGFo.png',
                    opts : {
                        caption : 'Get info from a specific anime'
                    }
                },
                {
                    src  : 'https://i.imgur.com/CR55qsJ.png',
                    opts : {
                        caption : 'Report user example'
                    }
                },
                {
                    src : 'https://i.imgur.com/lZ9cf2v.png',
                    opts : {
                        caption : 'Random doggo example'
                    }
                },
                {
                    src : 'https://i.imgur.com/wGlQJjq.png',
                    opts : {
                        caption : 'Check online players for a private game server'
                    }
                }
            ], {
                loop : true,
                thumbs : {
                    autoStart : true
                }
            });
            break;

        case 'i4': 
            $.fancybox.open([
                {
                    src  : 'https://i.imgur.com/7eWNKVD.png',
                    opts : {
                        caption : 'Home view'
                    }
                },
                {
                    src  : 'https://i.imgur.com/e3khBEd.png',
                    opts : {
                        caption : 'Filter by keyword'
                    }
                },
                {
                    src : 'https://i.imgur.com/QwLb1Es.png',
                    opts : {
                        caption : 'Edit/Remove expense'
                    }
                },
                {
                    src : 'https://i.imgur.com/uw10O1b.png',
                    opts : {
                        caption : 'Date picker'
                    }
                },
                {
                    src : 'https://i.imgur.com/y0uD3vu.png',
                    opts : {
                        caption : 'Login'
                    }
                }
            ], {
                loop : true,
                thumbs : {
                    autoStart : true
                }
            });
            break;

            case 'i6': 
                $.fancybox.open([
                    {
                        src  : 'https://i.imgur.com/hWKeZvL.png',
                        opts : {
                            caption : 'Main view'
                        }
                    },
                    {
                        src  : 'https://i.imgur.com/ZthGjck.png',
                        opts : {
                            caption : 'Sample config file'
                        }
                    }
                ], {
                    loop : true,
                    thumbs : {
                        autoStart : true
                    }
                });
                break;
    }
  });

  // reset form
  $('.close').on('click', function() {
    $('#form')[0].reset();
    $('#label').html('Attach File...');
    $('#file').val('');
})