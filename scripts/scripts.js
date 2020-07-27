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
            photo: 'assets/2020 Porsche Boxster Alexander Migl Wikipedia Commons.jpg',
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

//initialising everything
$(document).ready(function() {
    porschePicker.init();
});

porschePicker.init = function() {
    //setting up event listeners
    porschePicker.eventListener();
}

//slow scroll function
porschePicker.scrollAway = function(from, to) {
    $(from).click(function(e) {
        e.preventDefault();
        $("html").animate({
            scrollTop: $(to).offset().top
        }, 'slow');
    });
}

//Event Listeners
porschePicker.eventListener = function() {

    //event listener for the Get Started button
    porschePicker.scrollAway(".btnStart", '.porscheQuiz');

    //event listeners for the Skip to Next Question buttons
    porschePicker.scrollAway(".linkUse", '.porscheOldNew');
    porschePicker.scrollAway(".linkAge", '.porscheOverUnder');
    porschePicker.scrollAway(".linkSubmit", '.submitContainer');



    $('.btnReset').on('click', function(e) {
        $('form').trigger("reset");
        $('.displayPorsche').empty();
        $(".btnSubmit").show();
        $(this).hide(); //hide the reset search button
        $(".btnStart").trigger("click");

    });


    //on submitting the form
    $('form').on('submit', function(e) {
        e.preventDefault();
        $(".btnSubmit").hide();
        $(".btnReset").show();

        let porscheToDisplay;
        porschePicker.porscheUse = $('input[name=type]:checked').val();
        porschePicker.porscheAge = $('input[name=age]:checked').val();
        porschePicker.porscheBudget = $('input[name=price]:checked').val();

        //begin only if all radio options are selected
        if ((porschePicker.porscheUse) && (porschePicker.porscheAge) && (porschePicker.porscheBudget)) {
            //get a random porsche that matches user selection
            porscheToDisplay = porschePicker.getMatchingPorsche(porschePicker.porscheUse, porschePicker.porscheAge, porschePicker.porscheBudget);
        }
        porschePicker.scrollToCar(); //scroll down to the displayed car slowly
        porschePicker.displayPorsche(porscheToDisplay); //display a POrsche on the screen
    });
}


//returns 1 random Porsche object based on user selections
porschePicker.getMatchingPorsche = function(use, age, budget) {

    const options = [];
    let randomOption;
    const choice = porschePicker.inventory[age]; //first filter for cars that are new or classic 

    for (let i = 0; i < choice.length; i++) {
        //filter for use (daily/weekend) and price range
        if ((choice[i].type == use) && (budget == 'over' ? choice[i].price >= 120000 : choice[i].price < 120000)) {
            options.push(choice[i]);
        }
    }

    if (options.length >= 1) {
        //returns the one random Porsche
        return porschePicker.randomPorsche(options);

    } else {
        //return no Porsches :(
        return null;
    }
}


//returns a random Porsche object from the input array of Porsches
porschePicker.randomPorsche = function(porscheList) {
    const index = Math.floor(Math.random() * porscheList.length);
    return porscheList[index]; //here's the matching Porsche object
}

//write porsche to the screen
porschePicker.displayPorsche = function(porsche) {
    //ensuring the porsche object isn't empty
    if (porsche) {

        $('.displayPorsche').html(`<div class="resultPorsche"><div><img src="${porsche.photo}" alt="${porsche.car}"></div><div class="infoPorsche"><div class="porscheName"><p>The <span class="highlight"> ${porsche.year} ${porsche.car} </span>will be perfect for your adventures! Every Porsche factory project has an internal "type number" and this one's type number is <span class="highlight"> ${porsche.typeNumber}</span>. The ${porsche.car} typically costs <span class="highlight"> ${porsche.price} CAD</span>. Technical Specifications: <span class="highlight">${porsche.techSpecs}</span></p></div><div><p> ${porsche.attribution}</p></div></div></div>`);
    } else {


        $('.displayPorsche').html(`<div class="infoPorsche"><p>No Porsches available to match your selection. What's German for You Are Very Discerning?</p> </div>`);
    }
}

porschePicker.scrollToCar = function() {
    $("html").animate({
        scrollTop: $('.displayPorsche').offset().top
    }, 'slow');
}