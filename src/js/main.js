$('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    document.getElementById("label").innerHTML = `${fileName} is selected`;
});

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
				
    jQuery.validator.addMethod("filetype", function(value, element) {
        var types = ['jpeg', 'jpg', 'png', 'gif', 'doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'rtf', 'zip', 'rar'],	
            ext = value.replace(/.*[.]/, '').toLowerCase();
    
        if (types.indexOf(ext) !== -1) {
            return true;
        }
        return false;
        },
      "Upload supported files only."
    );
        

    $('#form').validate({
        ignore: ".ignore",
            rules:{
                "name":{
                    required:true,
                    maxlength:40		
                },

                "email":{
                    required:true,
                    email:true,
                    maxlength:100		
                },
                
                "userfile[]":{
                    required:true,
                    filetype:true
                },

                "message":{
                    required:true
                },
                
                "hiddenRecaptcha":{		
                    required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }},
                

            messages:{
                "name":{
                    required:"Username is required."		
                },

                "email":{
                    required:"Email is required.",		
                    email:"Please enter a valid email address."		
                },
                
                "subject":{
                    required:"Subject is required.",		
                },
                
                "userfile[]":{
                    required:"Please upload your file."		
                },
                
                "message":{
                    required:"Please enter your message."		
                },
                
                "hiddenRecaptcha":{
                    required:"Captcha is required."		
                }},
                
                
                errorLabelContainer: '#errors',
                   wrapper:'li',
                
            submitHandler: function(form){
            $(form).ajaxSubmit({
            url: 'mail/mailplusattachment.php',
            type: 'post',
            data: $('form').serialize(),
            success: function (data) {
                $('.xyz').fadeIn("slow").html('Your Message has been sent!');
                setTimeout(function() {
                $('.xyz').fadeOut("slow");
                $('#form')[0].reset();
                grecaptcha.reset();
                }, 5000 );
            }
        }); 
     }
   })

