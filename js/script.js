/*кнопка на верх*/

var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки
console.log(123);
$(document).ready(function () {
    window.addEventListener('scroll', function () { // При прокрутке попадаем в эту функцию);
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });

    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $(this).css('max-height', '33px');
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });    
});

/* конец кнопка на верх*/


/*плавные переходы по якорям*/

$(document).ready(function () {
   
    $(".anchor").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

    $(".anchor").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;
    });

    $(".arrow_down").on("click", function (event) {
        
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 147;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });


/*конец плавные переходы по якорям*/

/*фиксированное верхнее меню*/

var myHeight = $("#navbar").height(); //определил высоту менюхи
//$(".wrap").css('marginTop', myHeight); //опустил контент относителньо высоты меню
var myFontSize = $('.navbar-nav li a').css('font-size');//узнаю размер шрифта
myFontSize = parseInt(myFontSize);//привожу к числу.(убирая px)


/* конец фиксированное верхнее меню*/
});

$(document).scroll(function () {
    if($(document).innerWidth()>=768){
        if ($(document).scrollTop() < 10) {
            $('#navbar').removeClass('miniMenu');
            //console.log($(document).scrollTop());
        }else{
            $('.dropdown1').removeClass('dropdown1');
            $('.active1').removeClass('active1');
            $('#navbar').addClass('miniMenu');
        }

        $('#navbar').on('mouseover', function () {
            $(this).removeClass('miniMenu');
            $('.navbar-inverse').css('background-color', 'rgba(255, 255, 255, 0.95)');
        });

        $('#navbar').on('mouseleave', function () {
            $('.navbar-inverse').css('background-color', 'rgba(255, 255, 255, 0.85)');
            if ($(document).scrollTop() < 10) {
                $('#navbar').removeClass('miniMenu');
                //console.log($(document).scrollTop());
            } else {
                $('.dropdown1').removeClass('dropdown1');
                $('.active1').removeClass('active1');
                $('#navbar').addClass('miniMenu');
            }
        });
    }

});

$('.closeMenu').on('click', function () {
    $('.dropdown1').removeClass('dropdown1');
    $('.active1').removeClass('active1');
});


$(window).resize(function () {
    $('.dropdown1').removeClass('dropdown1');
    $('.active1').removeClass('active1');
});







var setMenuEvents = function () {
    var list = {
        'a1': 'b1',
        'a2': 'b2',
        'a3': 'b3',
    }
    if (innerWidth >= 1400) {
        $('#link1>ul:first-child>li').off().click(function (e) {
            e.preventDefault();
            $('.dropdown1').removeClass('dropdown1');
            $(this).parent().addClass('dropdown1');
            $('.active1').removeClass('active1');

            var parent = $(this).parent();
            $(this).detach().insertBefore(parent.find('>').eq(0));

            var q = $(this).find('a').data('current-block');
            console.log('[data-current-block=' + list[q] + ']');
            $('[data-current-block=' + list[q] + ']').addClass('active1');
        });
    } else {
        $('#link1>ul:first-child>li').off().click(function (e) {
            e.preventDefault();
            $('.dropdown1').removeClass('dropdown1');

            $('.active1').removeClass('active1');


            var q = $(this).find('a').data('current-block');
            console.log('[data-current-block=' + list[q] + ']');
            $('[data-current-block=' + list[q] + ']').addClass('active1');
        });
    }
};
setMenuEvents();
$(window).resize(setMenuEvents);

/*search*/

var speed = 100;
var delay = 1000;
var timerID = null;
var Running = false;
var mess = new Array()
mess[0] = "вступить в брак";
mess[1] = "получить пособие для ребенка";
mess[2] = "открыть бизнес";
mess[3] = "получить адресную справку";
mess[4] = "записаться на прием к доктору";
mess[5] = "получить паспорт";
mess[6] = "устроиться на работу ";
mess[7] = "выиграть грант";
var currentMessage = 0;
var offset = 0;

function stop() {
    if (Running) clearTimeout(timerID);
    Running = false;
}

function start() {
    stop();
    show();
}

function show() {
    var text = mess[currentMessage]
    if (offset < text.length) {
        if (text.charAt(offset) == " ") offset++
        var partialMessage = text.substring(0, offset + 1)
        document.example.p.value = partialMessage
        offset++;
        timerID = setTimeout("show()", speed);
        Running = true;
    }
    else {
        offset = 0
        currentMessage++
        if (currentMessage == mess.length)
            currentMessage = 0
        timerID = setTimeout("show()", delay)
        Running = true
    }
}
$('#livesearch .search_box').keyup(function () {
    if ($(this).val().length >= 3) {
        $.get('/main/livesearch/' + $(this).val(), function (data) {
            data = eval('(' + data + ')');//json data. array of strings
            console.log(data);
            if (data.length != undefined && data.length > 0) {
                $("#livesearch .advice_variant").remove();

                for (i in data) {

                    if (data[i]['slug'] !== '') {
                        var slug = data[i]['slug'];
                    } else {
                        var slug = data[i]['id'];
                    }
                    type = data[i]['type'];
                    var str = $('<div class="advice_variant"><a href="/' + type + '/' + slug + '">' + data[i]['title'] + '</a></div>');
                    $("#livesearch").append(str);
                }
            }
        });
    }

    /*$('#imaginary_container').on('click','.advice_variant', function(){
        console.log($(this).text());
        $('.search_box').val($(this).text());
    });*/
});
function sub() {
    $.ajax({
        type: "post",
        url: "/auth/creat_user",
        data: $('#regForm').serialize(),
        success: function (html) {
            html = JSON.parse(html);
            console.log(html.state);
            if (html.state == 2) {
                $('#errors').html(html.message);
                return_captcha();
            }
            if (html.state == 1) {
                $('#regForm,.social_regist').hide();
                $('#errors').hide();
                $('#success').html((html.message));

            } else {
                $('#errors').html(html.message);
            }
        }
    })

}

function chklogin() {
    $.ajax({
        type: "post",
        url: "/auth/checklogin",
        data: $('#authForm').serialize(),
        success: function (html) {
            if (html == 1) {
                window.location.assign("/")
            } else {
                $('#errors').html(html);
            }
        }
    })
}
function addComment() {
    $.ajax({
        type: "post",
        url: "/main/addComment",
        data: $('#commentsForm').serialize(),
        success: function (html) {
            html = JSON.parse(html);
            if (html.state == 1) {
                $('#regForm,.social_regist').hide();
                $('#errors').hide();
                $('#commentsForm').hide();
                $('#success').html((html.message));
                setTimeout(function () {
                    location.reload();
                }, 1000);
            } else {
                $('#errors').html(html.message);
            }
        }
    })
}
function return_captcha() {
    $.ajax({
        type: "get",
        url: "/main/captcha",
        success: function (html) {
            $(".captcha_img").attr("src", '/main/captcha1').attr('src', '/main/captcha');
            $(".captcha_block input").val('');
        }
    });
    return false;
}

function replyComment(pid) {
    $("input[name='idparent']").val(pid);
}

if ($('#mainPageWrap').length)
    start();
/*end search*/

$('.plus').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.carousel-inner .item.active a img').click();
});
$('.plus2').click(function () {
    e.stopPropagation();
    e.preventDefault();
});


$('.linkFamilyBluue').tooltip();

