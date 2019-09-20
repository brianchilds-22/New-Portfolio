// Scroll

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate(  {
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });


    $('#contact-form').on('submit', function(event){
        event.preventDefault();

        var template_params = {
            "name": $('#form_name').val(),
            "email": $('#form_email').val(),
            "message":$('#form_message').val(),
         }
         
         var service_id = "gmail";
         var template_id = "template_zUCOrGGR";
         emailjs.send(service_id, template_id, template_params)
         .then(res => alert('email sent successfully!'))
        .catch(e => console.log(e.responseText))
    })
});