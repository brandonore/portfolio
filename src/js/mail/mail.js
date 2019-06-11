// display file attachment name
$('input[type="file"]').change(function(e){
    var fileName = e.target.files[0].name;
    document.getElementById("label").innerHTML = `${fileName} is selected`;
});

// validate form
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
                required:"Name is required."		
            },
            "email":{
                required:"Email is required.",		
                email:"Please enter a valid email address."		
            },
            "subject":{
                required:"Subject is required.",		
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
                url: 'http://brandonore.io/src/js/mail/mailplusattachment.php',
                data: $('form').serialize(),
                beforeSubmit: function (data) {
                    $('.btn-submit').html('sending...');
                },
                success: function (data) {
                    $('.xyz').fadeIn("slow").html('Your Message has been sent!');
                    setTimeout(function() {
                        $('.xyz').fadeOut("slow");
                        $('#form')[0].reset();
                        $('#label').html('Attach File...');
                        $('.btn-submit').html('Send');
                        grecaptcha.reset();
                    }, 4000 );
                }
            }); 
        }
});

$.validator.addMethod("filetype", function(value, element) {
    var types = ['jpeg', 'jpg', 'png', 'gif', 'doc', 'docx', 'xls', 'xlsx', 'pdf', 'txt', 'rtf', 'zip', 'rar'],	
        ext = value.replace(/.*[.]/, '').toLowerCase();

    if (types.indexOf(ext) !== -1) {
        return true;
    }
    return false;
    },
    "Upload supported files only."
);