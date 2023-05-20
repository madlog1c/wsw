$(function () {
  // Animate On Scroll
  AOS.init();

  // Calculated Values
  // Age
  function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365);
  }
  $(".value.age").html(getAge('1976-10-31'));

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".main_header").removeClass("navbar-dark");
      $(".main_header").addClass("sticky navbar-light");
    } else {
      $(".main_header").removeClass("sticky navbar-light");
      $(".main_header").addClass("navbar-dark");
    }
  });

  var clipboard = new Clipboard(".cta-copy");
  clipboard.on("success", function (o) {
      $(".cta-copy").addClass("active");
      $(".cta-btn__txt").html("copied");
      setTimeout(function () {
        $(".cta-copy").removeClass("active");
        $(".cta-btn__txt").html("Copy to Clipboard");
      }, 6000);
      console.log(o), $(".result-div").click();
    }),
    clipboard.on("error", function (o) {
      console.log(o);
    });


  var clipboard = new Clipboard(".cta-copy-2");
  clipboard.on("success", function (o) {
      $(".cta-copy-2").addClass("active");
      $(".cta-btn__txt_2").html("copied");
      setTimeout(function () {
        $(".cta-copy-2").removeClass("active");
        $(".cta-btn__txt_2").html("Copy to Clipboard");
      }, 6000);
      console.log(o), $(".result-div").click();
    }),
    clipboard.on("error", function (o) {
      console.log(o);
    });


  var clipboard = new Clipboard(".cta-copy-3");
  clipboard.on("success", function (o) {
      $(".cta-copy-3").addClass("active");
      $(".cta-btn__txt_3").html("copied");
      setTimeout(function () {
        $(".cta-copy-3").removeClass("active");
        $(".cta-btn__txt_3").html("Copy to Clipboard");
      }, 6000);
      console.log(o), $(".result-div").click();
    }),
    clipboard.on("error", function (o) {
      console.log(o);
    });



  var clipboard = new Clipboard(".cta-copy-4");
  clipboard.on("success", function (o) {
      $(".cta-copy-4").addClass("active");
      $(".cta-btn__txt_4").html("copied");
      setTimeout(function () {
        $(".cta-copy-4").removeClass("active");
        $(".cta-btn__txt_4").html("Copy to Clipboard");
      }, 6000);
      console.log(o), $(".result-div").click();
    }),
    clipboard.on("error", function (o) {
      console.log(o);
    });


  var navbarCollapse = function () {
    if ($(window).scrollTop() > 400) {
      $(".main-header").addClass("is-scrolled");
    } else {
      $(".main-header").removeClass("is-scrolled");
    }
  };
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(".js-scroll-trigger").click(function (e) {
    e.preventDefault();
    var target = $($(this).attr("href"));
    if (target.length) {
      var scrollTo = target.offset().top;
      $("body, html").animate({
          scrollTop: scrollTo + "px",
        },
        800
      );
    }
  });

  var sections = $("section");
  var navigation = $(".navbar-nav");

  $(window).on("scroll", function () {
    var current = $(this).scrollTop() + 200;
    sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (current >= top && current <= bottom) {
        if (current <= bottom) {
          navigation.find(".nav-link").removeClass("active");
        }
        navigation
          .find('a[href="#' + $(this).attr("id") + '"]')
          .addClass("active");
      }
      if (current < 300) {
        $(".navbar-nav:first .nav-link:first").addClass("active");
      }
    });
  });

  // BackToTop
  var btn = $("#backToTop");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0,
      },
      "300"
    );
  });

  //  SmoothScroll
  $(".smoothScroll").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate({
            scrollTop: target.offset().top,
          },
          500
        );
        return false;
      }
    }
  });

  // removed particle js


  


  $(".skew_carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // $(".partner_carousel").owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   autoplay: true,
  //   nav: false,
  //   dots: false,
  //   slideTransition: "linear",
  //   autoplayTimeout: 2000,
  //   autoplaySpeed: 3000,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       margin: 10,
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // });

  $(".hero_carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 27000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplaySpeed: 3000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });


  $("#donate_form").submit(function (e) {
    e.preventDefault();
    let name = $("#name");
    let phone = $("#phone");
    let email = $("#email");
    let message = $("#message");

    $.ajax({
      url: "mail.php",
      type: "POST",
      data: {
        action: "contact",
        name: name.val(),
        phone: phone.val(),
        email: email.val(),
        message: message.val(),
      },
      success: function (res) {
        if (res == "success") {
          swal({
              title: "Thanks for your submission",
              text: "we will send major updates by email.",
              type: "success",
              confirmButtonColor: "#0ea6ff",
              confirmButtonText: "OK!",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.href = "index.html";
              }
            }
          );
        } else {
          swal({
              title: "Error",
              text: "Something Went Wrong !",
              type: "error",
              confirmButtonColor: "#0ea6ff",
              confirmButtonText: "OK!",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.href = "index.html";
              }
            }
          );
        }
      },
    });
  });

});

// copyToClipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $(".linkCopied").fadeIn();
  setTimeout(function () {
    $(".linkCopied").fadeOut();
  }, 2000);
}

// Captivity
countUpFromTime("Oct 31, 1979 12:00:00", 'counterCaptivity');

function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = (now - countFrom);

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  days = Math.floor(timeDifference / (secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1) {
    days = days - (years * 365)
  }
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('years')[0].innerHTML = years;
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function () {
    countUpFromTime(countFrom, id);
  }, 1000);
};



countUpFromTime2("Nov 05, 2011 12:00:00", 'counterSolitary');

function countUpFromTime2(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = (now - countFrom);

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  days = Math.floor(timeDifference / (secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1) {
    days = days - (years * 365)
  }
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('years')[0].innerHTML = years;
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime2.interval);
  countUpFromTime2.interval = setTimeout(function () {
    countUpFromTime2(countFrom, id);
  }, 1000);
};