/*
Theme Name: Nominee
Author: TrendyTheme
Version: 1.6
*/

/* ======= TABLE OF CONTENTS ==================================

    # Preloader
    # jQuery for page scrolling feature - requires jQuery Easing plugin
    # Sticky Menu
    # superslides
    # Enable bootstrap tooltip
    # Textrotator
    # Counter
    # Social Counter
    # Twitter Feed Carousel
    # Magnific Popup for image
    # Magnific Popup for embeds
    # Social share popup window
    # Latest post carousel
    # Testimonial Carousel
    # Archivement Carousel
    # Team Carousel
    # Client Carousel
    # Countdown
    # Detect IE version
    # Back to Top
    # Google Map
    # Shuffle for reformation filter
    # Masonry Grid
    # Placeholder
    # Ticker
    # Flickr photo
    # Donate amount select
    # Gallery
    # Newsletter popup

========================================================= */

jQuery(function ($) {

    'use strict';


    /* ======= Preloader ======= */
    $('#status').delay(0).fadeOut();
    $('#preloader').delay(500).fadeOut('slow');


    /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    (function () {

        $('.navbar-nav a[href^="#"], .tt-scroll').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);
            var headerHeight = $('.navbar, .navbar.sticky').outerHeight();

            if (target) {
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - headerHeight + "px"
                }, 1200, 'easeInOutExpo', function () {
                    window.location.hash = target;
                });
            }
        });

    }());


    /* === Mobile Dropdown Menu === */
    (function(){
        $('.dropdown-menu-trigger').each(function() {
            $(this).on('click', function(e){
                $(this).toggleClass('menu-collapsed');
            });
        });
    }());

    /* === Sticky Menu === */
    (function () {
        if (nomineeJSObject.nominee_sticky_menu == true) {
            var nav = $('.header-transparent .navbar, .header-default .header-wrapper');
            var scrolled = false;

            $(window).scroll(function () {

                if (20 < $(window).scrollTop() && !scrolled) {
                  nav.addClass('sticky').animate({ 'margin-top': '0px' });
                    scrolled = true;
                }

                if (20 > $(window).scrollTop() && scrolled) {
                    nav.removeClass('sticky').css('margin-top', '0px');
                    scrolled = false;
                }
            });
        }
    }());

    	// User define function
    	/*function Scroll() {
        $ = jQuery;

    		var contentTop      =   [];
    		var contentBottom   =   [];
    		var winTop      =   $(window).scrollTop();
    		var rangeTop    =   100;
    		var rangeBottom =   300;

    		$('.navbar-collapse').find('.scroll a').each(function(){


          console.log( $(this).attr('href') );
          var href =  $(this).attr('href') ;//$($('.navbar-collapse').find('.scroll a')[1]).attr("href");
          href = href.split("#");
          if (href.length>1){

            href = "#"+href[1];
    			   contentTop.push( $( href ).offset().top);
    			      contentBottom.push( $( href ).offset().top + $( href ).height() );
          }
    		})
    		$.each( contentTop, function(i){

          console.log($('.navbar-collapse li.scroll'));
          if ( winTop > contentTop[i] - rangeTop ){
    				$('.navbar-collapse li.scroll')
    				.removeClass('active')
    				.eq(i+1).addClass('active');
    			}
    		})
    	}


$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {
    var _top = 5;
if (this.hash=="achivement"){
  _top = 40;
}


		$('html, body').animate({scrollTop: $(this.hash).offset().top - _top}, 1000);
		return false;
	});*/


    /* ======= superslides ======= */
    $('#slides').superslides({
        play: 70000,
        animation: 'fade'
    });

    $(function(){
      $('.navbar-collapse li a').click(function()
      {
        $(".navbar-collapse").collapse('hide');
      });
    });
    /* ======= Enable bootstrap tooltip ======= */
    (function () {
        $('[data-toggle="tooltip"]').tooltip()
    }());


    /* ======= Textrotator ======= */
    var ttAnimation = $('.rotate').attr('data-animation');
    var ttAniSpeed = $('.rotate').attr('data-speed');

    $(".rotate").textrotator({
        animation: ttAnimation, // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
        speed: ttAniSpeed // How many milliseconds until the next word show.
    });


    /* === Counter === */
    $('.fact-wrap, .tt-fundraise-wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });


    /* === Social Counter === */
    $('.social-counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.count').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });


    /* === Twitter Feed Carousel === */
    (function () {

        var ttTwitterID = $('.twitterfeed').attr('data-twitter-id');
        var ttMaxTweet = $('.twitterfeed').attr('data-max-tweet');
        var ttConfig = {
            id: ttTwitterID,
            domId: "twitterfeed",
            maxTweets: ttMaxTweet,
            enableLinks: true,
            showUser: false,
            showTime: true,
            showInteraction: false,
            customCallback: ttHandleTweets
        };
        twitterFetcher.fetch(ttConfig);

        function ttHandleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var html = "";
            while (n < x) {
                html += '<div class="item">' + tweets[n] +
                    "</div>";
                n++
            }
            $(".twitter-carousel").html(html);
            $(".twitter_retweet_icon").html(
                '<i class="fa fa-retweet"></i>');
            $(".twitter_reply_icon").html(
                '<i class="fa fa-reply"></i>');
            $(".twitter_fav_icon").html(
                '<i class="fa fa-star"></i>');
            $(".twitter-carousel").owlCarousel({
                dots: true,
                items: 1,
                loop: true,
                autoplay: true
            });

        }
    }());

/* === Twitter Feed === */
    (function () {

        var ttTwitterID = $('.spokesman-tweet').attr('data-twitter-id');
        var ttMaxTweet = $('.spokesman-tweet').attr('data-max-tweet');
        var ttConfig = {
            id: ttTwitterID,
            domId: "spokesman-tweet",
            maxTweets: ttMaxTweet,
            enableLinks: true,
            showUser: true,
            showTime: true,
            showInteraction: false,
            customCallback: ttHandleTweets
        };

        function ttHandleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var html = "";
            while (n < x) {
                html += '<div class="item">' + tweets[n] +
                    "</div>";
                n++
            }
            $(".tt-tweets").html(html);
        }
        twitterFetcher.fetch(ttConfig);

    }());



    /* ======= Magnific Popup for image ======= */
    $(window).load(function(){
        $(".image-link").magnificPopup({
            gallery: {
              enabled: true
            },
            removalDelay: 300, // Delay in milliseconds before popup is removed
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            type:'image'
        });
    });

    /* ======= Magnific Popup for embeds ======= */
    $('.tt-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });


     /* ======= Social share popup window ======= */
    (function () {
        $('.post-share ul li a').on('click', function () {
            var newwindow = window.open($(this).attr('href'), '', 'height=450,width=700');
            if (window.focus) {
                newwindow.focus()
            }
            return false;
        });
    }());


    /* ======= Latest post carousel ======= */
    (function () {

        $('.latest-post-carousel').owlCarousel({
            autoplay: true,
            loop:true,
            items: 1,
            autoplayHoverPause: true
        })

    }());

    /* ======= Testimonial Carousel ======= */
    (function () {

        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            loop:true,
            items: 1,
            autoplayHoverPause: true
        })

    }());



    /* ======= Archivement Carousel ======= */
    (function () {

        $('.archivement-carousel').owlCarousel({
            autoplay: true,
            loop:true,
            items: 1,
            autoplayHoverPause: true
        })

    }());


    /* ======= Team Carousel ======= */
    (function () {

        $('.team-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })

    }());



    /* ======= Client Carousel ======= */
    (function () {

        var clientCarousel = $('.client-carousel');

        var itemDesktop = clientCarousel.attr('data-item-desktop');
        var itemTablet = clientCarousel.attr('data-item-tablet');
        var itemMobile = clientCarousel.attr('data-item-mobile');

        clientCarousel.owlCarousel({
            autoplay:true,
            loop:true,
            margin:30,
            dots: false,
            responsive:{
                0:{
                    items:itemMobile
                },
                600:{
                    items:itemTablet
                },
                1000:{
                    items:itemDesktop
                }
            }
        })

    }());



    /* ======= Countdown ======= */
    (function () {
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime(''
                    + '<li><span class="days">%D<span><p>'+nomineeJSObject.count_day+'</p></li>'
                    + '<li><span class="hours">%H<span><p>'+nomineeJSObject.count_hour+'</p></li>'
                    + '<li><span class="minutes">%M<span><p>'+nomineeJSObject.count_minutes+'</p></li>'
                    + '<li><span class="second">%S<span><p>'+nomineeJSObject.count_second+'</p></li>'
                ));
            });
        });
    }());



    /* === Detect IE version === */
    (function () {

        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1], 10) : false;
        }

        if( getIEVersion() ){
            $('html').addClass('ie'+getIEVersion());
        }

    }());



    /* ======= Back to Top ======= */
    (function(){

        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

        $(window).scroll(function () {
            if ($(this).scrollTop() !== 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());



    /* ======= Google Map ======= */
    (function () {
        if (document.getElementById('ttmap')) {
            //set your google maps parameters
            var $latitude  = $('#ttmap').attr('data-map-latitude'),
                $longitude = $('#ttmap').attr('data-map-longitude'),
                $map_zoom  = 12;
            /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = $('#ttmap').attr('data-map-marker');

            //we define here the style of the map

            var style = [{
                stylers: [{
                    "hue": "#000"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : true,
                zoomControl       : true,
                mapTypeControl    : false,
                streetViewControl : true,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles            : style
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('ttmap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }

    }());



    /* === Shuffle for reformation filter  === */
    (function () {

        $(window).on('load', function () {

            $('.reformation-wrap').each(function(i, e){

                var ttGrid = $(this).find('.tt-grid');
                var self = this;
                ttGrid.shuffle({
                    itemSelector: '.tt-item' // the selector for the items in the grid
                });

                /* reshuffle when user clicks button filter item */
                $(this).find('.tt-filter button').on('click',function (e) {
                    e.preventDefault();

                    // set active class
                    $(self).find('.tt-filter button').removeClass('active');
                    $(this).addClass('active');

                    // get group name from clicked item
                    var ttGroupName = $(this).attr('data-group');

                    // reshuffle grid
                    ttGrid.shuffle('shuffle', ttGroupName);
                });

            });

        });
    }());



    /* === Masonry Grid  === */
    $(window).load(function () {
        $('.masonry-wrap').masonry({
            "columnWidth" : ".masonry-column"
        });
    });


    /* === Placeholder  === */
    (function(){
        $('input, textarea, email, number').placeholder();
    }());


    /* === Ticker  === */
    (function(){
        if (nomineeJSObject.nominee_news_ticker == true) {
            $('.news-ticker').newsTicker({
                row_height: 40,
                max_rows: 1,
                speed: 600,
                direction: 'up',
                duration: 4000,
                autostart: 1,
                pauseOnHover: 1
            });
        }
    }());


    /* === Flickr photo  === */
    (function () {

        var ttFlickr = $('.tt-flickr-photo');
        ttFlickr.jflickrfeed({
        limit: ttFlickr.attr('data-photo-limit'),
        qstrings: {
            id: ttFlickr.attr('data-flickr-id')
        },
        itemTemplate: '<li>'+
                        '<a href="{{image}}" title="{{title}}">' +
                            '<img src="{{image_s}}" alt="{{title}}" />' +
                        '</a>' +
                      '</li>'
        });

    }());

    /* === Donate amount select === */
    (function () {

        $('input.others-amount').on('focus', function(){
            $(this).closest('.donate-amount').find('.amount-button').removeClass('active');
        });

    }());



    /* === Gallery === */
    $(window).on('load', function () {
        // The slider being synced must be initialized first
        $('.tt-gallery-wrapper').each(function(i, e){

            var ttGalleryNav = $(this).find('.tt-gallery-nav');
            var ttGalleryThumb = $(this).find('.tt-gallery-thumb');
            var ttGallery = $(this).find('.tt-gallery');

            ttGalleryThumb.flexslider({
                animation     : "slide",
                controlNav    : false,
                animationLoop : true,
                slideshow     : false,
                itemWidth     : 150,
                asNavFor      : ttGallery
            });

            ttGallery.flexslider({
                animation     : "slide",
                directionNav  : false,
                controlNav    : false,
                animationLoop : false,
                slideshow     : false,
                sync          : ttGalleryThumb
            });

            // Navigation
            ttGalleryNav.find('.prev').on('click', function (e) {
                ttGallery.flexslider('prev')
                return false;
            });

            ttGalleryNav.find('.next').on('click', function (e) {
                ttGallery.flexslider('next')
                return false;
            });

        });

    }());


    /* === Newsletter popup === */
    if (nomineeJSObject.newsletter_popup && nomineeJSObject.is_front_page) {
        $(window).on('load', function () {
            if (nomineeJSObject.newsletter_popup_limit == 1 ) {
                if (document.cookie.indexOf('visited=true') == -1) {
                    var fifteenDays = 1000*60*60*24*15;
                    var expires = new Date((new Date()).valueOf() + fifteenDays);
                    document.cookie = "visited=true;expires=" + expires.toUTCString();
                    setTimeout(function () {
                        $('.tt-newsletter-popup').modal();
                    }, nomineeJSObject.newsletter_popup_time * 1000);
                }
            } else {
                setTimeout(function () {
                    $('.tt-newsletter-popup').modal();
                }, nomineeJSObject.newsletter_popup_time * 1000);
            }
        });
    }


    $(function () {

      $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-collapse li.scroll.active').removeClass('active');
        $(this).closest("li").addClass("active");
      });
        if (window.location.hash) {
            //getHash();
        }
        $(window).on("hashchange", function () {
            console.log(window.location.hash);
            var hash = window.location.hash;
          //  $('.navbar-collapse li.scroll.active').removeClass('active');
            //$(hash).addClass('active');
            //$(hash+"_").addClass('active');

        });
    });
    $('.navbar-collapse ul li a').on('click', function() {
      var _top = 60;

  if (this.hash=="#achievements"){
    _top = 60;
  }
  else if (this.hash=="#about") {
    _top=120;
  }
  else if (this.hash=="#why_naga") {
    _top=105;
  }
  else if (this.hash=="#blogs") {
    _top=160;
  }
  else if (this.hash=="#resources") {
    _top=100;
  }
  else if (this.hash=="#career_history") {
    _top=120;
  }
  else if (this.hash=="#contact") {
    _top=120;
  }
  		$('html, body').animate({scrollTop: $(this.hash).offset().top - _top}, 1000);
  		return false;
  	});
});
