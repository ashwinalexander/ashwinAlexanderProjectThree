// creating a namespace
const porschePicker = {};

// building an inventory of 20+ Porsches (and one itinerant Mercedes)
porschePicker.inventory = {
    new: [{
            year: 2020,
            price: 113800,
            car: 'Porsche Cayman GT4',
            typeNumber: '982',
            techSpecs: 'Mid-engine 4L / 414hp',
            photo: 'assets/2020 Porsche Cayman GT4 Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Weekend'
        },
        {
            year: 2020,
            price: 119400,
            car: 'Porsche Taycan',
            typeNumber: 'n/a',
            techSpecs: '522hp',
            photo: 'assets/2020 Porsche Taycan Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Daily'
        },
        {
            year: 2020,
            price: 194400,
            car: 'Porsche 911 Turbo',
            typeNumber: '992',
            techSpecs: 'Twin turbo 3.7L flat 6 / 572hp',
            photo: 'assets/2020 Porsche 911 Turbo 992 Wallpaper Flare.jpg',
            attribution: 'Photo by Wallpaper Flare',
            type: 'Weekend'
        },
        {
            year: 2020,
            price: 139500,
            car: 'Porsche 911 Carrera 4S',
            typeNumber: '992',
            techSpecs: 'Twin turbo 3.0L flat 6 / 443 hp',
            photo: 'assets/992 Porsche 911 Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Daily'
                //this car is categorised as both a Weekend and a Daily Driver
        },
        {
            year: 2020,
            price: 139500,
            car: 'Porsche 911 Carrera 4S',
            typeNumber: '992',
            techSpecs: 'Twin turbo 3.0L flat 6 / 443 hp',
            photo: 'assets/992 Porsche 911 Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Weekend'
                //this car is categorised as both a Weekend and a Daily Driver
        },
        {
            year: 2020,
            price: 66800,
            car: 'Porsche 718 Boxster',
            typeNumber: '982',
            techSpecs: 'Turbocharged 2.0L flat 4 / 300hp',
            photo: 'assets/2020 Porsche Boxster Alexander Migl Wikipedia Commons',
            attribution: 'Photo by Alexander Migl',
            type: 'Weekend'
        },
        {
            year: 2020,
            price: 99300,
            car: 'Porsche Panamera',
            typeNumber: '971',
            techSpecs: '3.0L V6 / 330hp',
            photo: 'assets/2020 Porsche Panamera Alexandre Prevot Wikipedia Commons.jpg',
            attribution: 'Photo by Alex Prevot Flickr',
            type: 'Daily'
        },
        {
            year: 2020,
            price: 178360,
            car: 'Porsche Taycan Turbo',
            typeNumber: 'n/a',
            techSpecs: '616 hp',
            photo: 'assets/2020 Porsche Taycan Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Weekend'
                //this car is categorised as both a Weekend and a Daily Driver
        },
        {
            year: 2020,
            price: 178360,
            car: 'Porsche Taycan Turbo',
            typeNumber: 'n/a',
            techSpecs: '616 hp',
            photo: 'assets/2020 Porsche Taycan Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Daily'
                //this car is categorised as both a Weekend and a Daily Driver
        },

        {
            year: 2020,
            price: 81700,
            car: 'Porsche 718 Boxter S',
            typeNumber: '982',
            techSpecs: '2.5L boxer 4 / 350hp',
            photo: 'assets/Porsche Boxster S Vauxford Wikipedia Commons.jpg',
            attribution: 'Photo by Vauxford',
            type: 'Weekend'

        },
        {
            year: 2020,
            price: 98000,
            car: 'Porsche Macan Turbo',
            typeNumber: '95B',
            techSpecs: '3.0L V6 / 434hp',
            photo: 'assets/Porsche Macan Turbo Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Daily'

        },

        {
            year: 2020,
            price: 185600,
            car: 'Porsche Cayenne Turbo S E-hybrid',
            typeNumber: '9YA',
            techSpecs: '4.0L V8 / 670hp',
            photo: 'assets/Porsche Cayenne Hybrid Mariordo Wikipedia Commons.jpg',
            attribution: 'Photo by Mariordo',
            type: 'Daily'
        }
    ],
    classic: [{
            year: 1998,
            price: 105000,
            car: 'Porsche 993 ',
            typeNumber: '993',
            techSpecs: '3.6L Flat 6/ 282 hp',
            photo: 'assets/Porsche 993 Mr Choppers Wikipedia Commons.jpg',
            attribution: 'Photo by Mr. Choppers',
            type: 'Weekend'
        }, {
            year: 1984,
            price: 20000,
            car: 'Porsche 944 Turbo',
            typeNumber: '951',
            techSpecs: '2.5L Turbocharged Inline-Four / 217hp',
            photo: 'assets/1984 Porsche 944 Daniel Leivick Wikipedia Commons.jpg',
            attribution: 'Photo by Daniel Leivick',
            type: 'Daily'
        },
        {
            year: 2004,
            price: 772000,
            car: 'Porsche Carrera GT',
            typeNumber: '980',
            techSpecs: '5.7L V10 / 605 hp',
            photo: 'assets/2004 Carrera GT Flickr Damian Morys.jpg',
            attribution: 'Photo by Damian Morys',
            type: 'Weekend'
        },
        {
            year: 2015,
            price: 1700000,
            car: 'Porsche 918 Spyder',
            typeNumber: '918',
            techSpecs: '4.6L V8 / 875 hp',
            photo: 'assets/2015 Porsche 918 Spyder Craig James Wikimedia Commons.jpg',
            attribution: 'Photo by Craig James',
            type: 'Weekend'
        },
        {
            year: 1975,
            price: 36000,
            car: 'Porsche 914',
            typeNumber: '914',
            techSpecs: '1.8L Flat-Four / 76hp',
            photo: 'assets/1975 Porsche 914 Mr Choppers Wikipedia Commons.jpg',
            attribution: 'Photo by Mr. Choppers',
            type: 'Weekend'
        },
        {
            //The Mercedes 500E was hand-assembled in Stuttgart and many consider it the first Porsche super sedan 
            //predating the Panamera
            year: 1992,
            price: 33000,
            car: 'Mercedes 500E (hand-assembled at Porsche Stuttgart!)',
            typeNumber: '2758',
            techSpecs: '5.0L V8 / 322hp',
            photo: 'assets/Mercedes 500E PAPPL Wikipedia Commons.jpg',
            attribution: 'Photo by PAPPL',
            type: 'Daily'
        },
        {
            year: 1986,
            price: 141000,
            car: 'Porsche 911 Turbo (930)',
            typeNumber: '930',
            techSpecs: '3.3L Flat-Six / 282 hp',
            photo: 'assets/Porsche 930 Flickr By nakhon100.jpg',
            attribution: 'Photo by nakhon100',
            type: 'Weekend'
        },
        {
            year: 1993,
            price: 87000,
            car: '928 GTS',
            typeNumber: '928',
            techSpecs: '5.4L V8 / 200hp',
            photo: 'assets/Porsche 928 GTS Stahlkocher Wikipedia Commons.jpg',
            attribution: 'Photo by Stahlkocher',
            type: 'Weekend'
        },
        {
            year: 2000,
            price: 36000,
            car: 'Porsche 911 Carrera',
            typeNumber: '996',
            techSpecs: '3.4L Flat-six / 345hp',
            photo: 'assets/996 Carrera Mark Harkin Flickr.jpg',
            attribution: 'Photo by Mark Harkin',
            type: 'Daily'
        },
        {
            year: 1958,
            price: 328000,
            car: 'Porsche 356 Speedster',
            typeNumber: '356',
            techSpecs: '1.6L Flat-four / 60 hp',
            photo: 'assets/Porsche 356 Speedster Alexander Migl Wikipedia Commons.jpg',
            attribution: 'Photo by Alexander Migl',
            type: 'Weekend'
        },
        {
            year: 2018,
            price: 121000,
            car: 'Porsche Panamera 4 e-Hybrid',
            typeNumber: '971',
            techSpecs: '2.9L V6 / 462hp',
            photo: 'assets/Porsche Panamera e-Hybrid Jakub Maciejewski Wikipedia Commons.jpg',
            attribution: 'Photo by Jakbu Maciejewski',
            type: 'Daily'
        }
    ]
};

//checking to see if all three checkboxes are checked.
//returns true if all checkboxes are checked else displays a reminder
porschePicker.errorHandling = function(use, age, budget) {

        $('.porscheQuiz .warning').addClass('errorInvisibility'); //hide all warning labels
        let unfilledFlag = true; //flag to indicate if there are unfilled checkboxes

        if (!use) {

            unfilledFlag = false;
            $('.porscheDailyWeekend .warning').removeClass('errorInvisibility'); //make warning label visible
        }
        if (!age) {
            unfilledFlag = false;
            $('.porscheOldNew .warning').removeClass('errorInvisibility'); //make warning label visible

        }
        if (!budget) {
            unfilledFlag = false;
            $('.porscheOverUnder .warning').removeClass('errorInvisibility'); //make warning label visible
        }

        return unfilledFlag;

    }
    //Event Listeners
porschePicker.eventListener = function() {

    //"get started" Event listener
    $(".btnStart").click(function(e) {
        e.preventDefault();
        $("html").animate({
            scrollTop: $('.porscheQuiz').offset().top
        }, "slow");
    });

    //"skip to next question" Event listener
    $(".linkUse .linkAge").click(function(e) {
        e.preventDefault();
        let jump = $(this).attr('href');
        let new_position = $(jump).offset();
        $("html,body").stop().animate({
            scrollTop: new_position.top - 50
        }, "800");
    });

    //clear warning labels if a value is selected
    $('#porscheForm').on('change', ':radio', function() {
        if ($(this).is(':checked')) {
            console.log($(this).val() + ' is now checked');
        } else {
            console.log($(this).val() + ' is now unchecked');
        }
    });

    //on submitting the form
    $(".btnSubmit").click(function(e) {
        // e.preventDefault();
        // console.log('checking');

        // porschePicker.porscheUse = $('input[name=type]:checked').val();
        // porschePicker.porscheAge = $('input[name=age]:checked').val();
        // porschePicker.porscheBudget = $('input[name=price]:checked').val();

        // //proceed after confirming we have all our boxes checked
        // if (porschePicker.errorHandling(porschePicker.porscheUse, porschePicker.porscheAge, porschePicker.porscheBudget)) {
        //     console.log('good to go');
        // }


        //if no selection return an error message label in the h3
        //save selections to variables
        //clear error message labels
        //iterate through array
        //find one random match
        //display match on screeen
        //if more than one, also display you may also be interested in
    });


}

porschePicker.init = function() {
    porschePicker.eventListener();
}


//initialising everything
$(document).ready(function() {
    porschePicker.init();
});