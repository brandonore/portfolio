var img1 = '../img/bg7.png';

//smooth scrolling for browsers that dont support css property
$("a").on('click', function(event) {
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

  

  //gallery 
$('.img-gallery').on('click', function() {
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
    }

    // $.fancybox.open([
    //     {
    //       src  : 'https://i.imgur.com/tQF8Mno.png',
    //       opts : {
    //         caption : 'Blank preview'
    //       }
    //     },
    //     {
    //       src  : 'https://i.imgur.com/uAu9vnS.png',
    //       opts : {
    //         caption : 'Example'
    //       }
    //     },
    //     {
    //         src : 'https://i.imgur.com/eEAU48k.png',
    //         opts : {
    //             caption : 'Date picker'
    //         }
    //     }
    //   ], {
    //     loop : true,
    //     thumbs : {
    //       autoStart : true
    //     }
    //   });
  })

  