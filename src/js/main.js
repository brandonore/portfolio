jQuery(document).ready(function($) {

    //smooth scrolling for browsers that dont support css property
    $("a").click(function(event) {
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          let hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        }
      });
    
      // fancybox gallery 
    $('.img-gallery').click(function() {
        let id = $(this).attr('id');
        
        switch (id) {
            case 'i1':
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
    
            case 'i2': 
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
    
            case 'i3': 
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
    
                case 'i5': 
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
    
                case 'i6': 
                    $.fancybox.open([
                        {
                            src  : 'https://i.imgur.com/BOOEWUh.png',
                            opts : {
                                caption : 'Example data exported to Excel sheet'
                            }
                        },
                        {
                            src  : 'https://i.imgur.com/B2GKB9j.png',
                            opts : {
                                caption : 'CMD status text'
                            }
                        },
                        {
                            src  : 'https://i.imgur.com/XwiZGUR.png',
                            opts : {
                                caption : 'Success message'
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
      })
});

$('.close').on('click', function() {
    $('#form')[0].reset();
    $('#label').html('Attach File...');
    $('#file').val('');
})
