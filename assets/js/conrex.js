window.onload = function() {
  $(".box-inner").find("h6").addClass("translate-sub");
  $(".box-inner").find("h3").addClass("translate-main");
  $(".box-inner").find("p").addClass("translate-text");
  $(".box-inner").find("button").addClass("translate-now");
};

jQuery("#carousel").owlCarousel({
    nav:true,
    dots:true,
    loop:true,
    responsiveClass:true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
  });

  // jQuery(".carousel-construc .owl-carousel").owlCarousel({
  //   autoplay: true,
  //   lazyLoad: true,
  //   loop: true,
  //   responsiveClass: true,
  //   autoHeight: true,
  //   autoplayTimeout: 1000,
  //   smartSpeed: 400,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 1
  //     },
  
  //     1024: {
  //       items: 1
  //     },
  
  //     1366: {
  //       items: 1
  //     }
  //   }
  // });

  // jQuery(".wp-partner .owl-carousel").owlCarousel({
  //   loop:true,
  //   responsiveClass:true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 4
  //     },
  
  //     1024: {
  //       items: 5
  //     },
  
  //     1366: {
  //       items: 6
  //     }
  //   }
  // });

  // jQuery(".list-box-testimon .owl-carousel").owlCarousel({
  //   loop:true,
  //   margin:60,
  //   responsiveClass:true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 2
  //     },
  
  //     1024: {
  //       items: 3
  //     },
  
  //     1366: {
  //       items: 3
  //     }
  //   }
  // });

  // jQuery(".list-team .owl-carousel").owlCarousel({
  //   loop:true,
  //   margin:30,
  //   responsiveClass:true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 2
  //     },
  
  //     1024: {
  //       items: 3
  //     },
  
  //     1366: {
  //       items: 3
  //     }
  //   }
  // });

  // jQuery(".wp-comment .owl-carousel").owlCarousel({
  //   loop:true,
  //   margin: 30,
  //   responsiveClass:true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  
  //     600: {
  //       items: 1
  //     },
  
  //     1024: {
  //       items: 2
  //     },
  
  //     1366: {
  //       items: 2
  //     }
  //   }
  // });



