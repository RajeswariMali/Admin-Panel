
// sidebar menu
    $("ul#accordionMenu li").click(function(e) {
      var tabIndex = $(this).index();
      if (!$(this).hasClass("active")) {
        var nthChild = tabIndex + 1;
        $("ul#accordionMenu li.active").removeClass("active");
        $(this).addClass("active");
        $("#accordionContent .content.active").removeClass("active");
        $("#accordionContent .content:nth-child(" + nthChild + ")").addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

  // tab content
  // Show the first tab by default
  $('.tab-menu li a').on('click', function(){
    var target = $(this).attr('data-rel');
 $('.tab-menu li a').removeClass('active');
    $(this).addClass('active');
    $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
    return false;
});

// vertical tab content
$('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

// mobile menu
  $("#mobileMenu").on('click', function () {
      $(".sidebar").addClass("active");
      $(".overlay").addClass("active");
  });
  $("#closeMenu").on('click', function () {
    $(".sidebar").addClass("remove");
    $(".overlay").addClass("remove");
});

