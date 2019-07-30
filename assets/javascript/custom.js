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

    $('#contactSubmit').on('click', function(event){
        event.preventDefault();

        var data = {
            service_id: 'smtp_service',
            template_id: 'g',
            user_id: '',
            template_params: {
                "name": $('#form_name').text(),
                "email": $('#form_email').text(),
                "message":$('#form_message').text(),
              }
        };
        $.post('https://api.emailjs.com/api/v1.0/email/send',data)
        .then(res => alert('email sent successfully!'))
    })
});