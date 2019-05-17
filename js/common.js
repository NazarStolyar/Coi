$(document).ready(function() {
    // function heightDetect() {
    //     $(".global_wrapper").css("height", $(window).height());
    // }
    // heightDetect();
    // $(window).resize(function() {
    //     heightDetect();
    // });

    $.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "<span><img src='img/wr.png' alt='span'></span> Неправильний формат");

    $.validator.addMethod("number", function(value, element) {
        return this.optional(element) || /^+380\d{3}\d{2}\d{2}\d{2}$/i.test(value);
    }, "<span><img src='img/wr.png' alt='Span'></span> Неправильний формат");




    $("#form").validate({
       rules: {
          name: {
              required: true,
              minlength: 6,
              maxlength: 30
          },
           number: {
               required: true
           },
           email: {
               required: true,
               email: true
           }
       },
        messages: {
            email: {
                required: "<span><img src='img/wr.png' alt='Span'></span>  Заповніть поле "
            },
            number: {
                required: "<span><img src='img/wr.png' alt='Span'></span> Заповніть поле",
            },
            name: {
                required: "<span><img src='img/wr.png' alt='Span'></span> Ім’я має мати довжину від 6 до 30 символів"
            }
        },
        submitHandler: function() {
            submitSucsses();
        }

    });

    function submitSucsses () {
        $('form').css('display','none');
        $('.sucsses_message').css('display', 'flex');
        $('.form_data input').val('');
    }

    $('.home').on('click', function () {
        $('form').css('display','flex');
        $('.sucsses_message').css('display', 'none');
    });

    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {
        icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
});
});

    $('.icon').on('click', function() {
        if($('.icon').hasClass('open')) {
            $('.mob_menu').css('top','50px')
        } else {
            $('.mob_menu').css('top','-100%')
        }
    });

    $("#phone").mask("+380 (99) 999-9999");



});