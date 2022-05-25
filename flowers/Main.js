$(".test").isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
})

 $(".flower-categories ul li").click(function(){
    $(".flower-categories ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".test").isotope({
        filter:selector
    })
 }) 