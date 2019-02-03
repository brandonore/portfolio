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

  