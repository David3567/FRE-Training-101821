
// -------Select Element with jQuery: ------------
// $("h1") == document.querySelector("h1")
// $("button") == document.querySelectorAll("button")
// $("h1").css("color", "red");  // h1 has been selected and the css color property has been changed to green.

console.log($("h1").css("color")); // black
console.log($("h1").css("font-size")); // 32px


// -------- manipulate styles with jQuery: ---------------

$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
$("h1").hasClass("margin-50"); // true


// --------- manipulate text with jQuery: ---------------
$("h1").text("bye");
// $("button").text("Don't Click Me");
$("button").html("<em>Hey</em>");


// ---------manipulate attributes with jQuery: ----------------
// console.log($("img").attr("src"));  //drum.png
$("a").attr("href", "https://www.yahoo.com")
console.log($("h1").attr("class")); // "big-title margin-50"


// ------------Add Event Listeners with jQuery: ------------------
$("h1").click(() => {
    $("h1").css("color", "purple");
})

// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", () => {
//         document.querySelector("h1").style.color = "pink";
//     })
// }

$("button").click(() => {
    $("h1").css("color", "teal");
})

$("body").keypress((event) => {
    // console.log(event.key);    // to see which key got pressed
    $("h1").text(event.key);
})

$("body").on("mouseover", () => {
    $("h1").css("color", "orange")
})

// ----------- add and remove elements with jQuery: -----------------

$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");

$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// $("button").remove();

// ------------ website animations with jQuery: ---------------

$("button").on("click", () => {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    // $("h1").animate({
    //     margin: 20
    // });

    $("h1").slideUp().slideDown().animate({opacity: 0.5});

})

