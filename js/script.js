"use strict"

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		] 
	});    
});

let inputFirst = document.querySelector('.form__input');
let button = document.querySelector('.form__button');
let inputSecond = document.querySelector('.form__input__second');
let inputThird = document.querySelector('.form__input__third');

button.onclick = function() {
    console.log(inputFirst.value);
    console.log(inputSecond.value);
    console.log(inputThird.value);
}

function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    function date_time()
    {
        var current_datetime = new Date();
        var year = current_datetime.getFullYear();
       

        return year;
    }
	

    setInterval(function () {
        document.getElementById('current_date_time_block2').innerHTML = date_time();
    }, 1000);
