$(document).ready(function () {
    /* menu button click */
    // $('#mmDrpdnMenuBtn, #aoDrpdnMenuBtn, #sortDrpdnMenuDsktBtn, #sortDrpdnMenuMblBtn, #btnBlogSearch').on('click', function (event) {
    //     $('.page-backdrop').addClass('page-backdrop-show');
    //     $('.page-backdrop').css('z-index', '4');
    //     $('body').css('overflow', 'hidden');
    // });


    /* page backdrop click hide page backdrop */
    // $('.page-backdrop, #mmDrpdnMenu, #mmCloseBtn, #mmSignInModalCloseBtn, #aoDrpdnMenu, #sortDrpdnMenuDskt, #sortDrpdnMenuMbl').on('click', function (event) {
    //     $('.page-backdrop').removeClass('page-backdrop-show');
    //     $('body').css('overflow', '');
    //     $('#headerSearchBar, #blogSearchBar').removeClass('show');
    // });


    /* header search bar */
    $('#btnHeaderSearch').on('click', function (event) {
        if ($("#headerSearchBar").hasClass("show")) {
            $('#headerSearchBar').removeClass('show');
            // $('.page-backdrop').removeClass('page-backdrop-show');
            // $('body').css('overflow', '');
        } else {
            $('#headerSearchBar').addClass('show');
            // $('.page-backdrop').addClass('page-backdrop-show');
            // $('.page-backdrop').css('z-index', '1');
            // $('body').css('overflow', 'hidden');
        }
    });

    /* blog search bar */
    $('#btnBlogSearch').on('click', function (event) {
        $('#blogSearchBar').toggleClass('show');
        // $('.page-backdrop').css('z-index', '1');
    });


    // if ($(window).width() >= 768) {
    //     $('#mmList li').on('click', function (event) {
    //         $('.page-backdrop').removeClass('page-backdrop-show');
    //         $('body').css('overflow', '');
    //     });
    // }


    /* toggle enter password value show/hide */
    $('.toggle-password').click(function () {
        var inputPass = $(this).siblings('.input-password');
        if (inputPass.val().length > 0 && inputPass.attr('type') == 'password') {
            inputPass.attr('type', 'text');
            $(this).addClass('sprt-pass-eye-open');
        } else {
            inputPass.attr('type', 'password');
            $(this).removeClass('sprt-pass-eye-open');
        }
    });


    if ($(window).width() <= 767) {
        /* manualy close the mobile side menu */
        // $('#mmCloseBtn, #mmList li').on('click', function (event) {
        //     $(this).parents('#mmDrpdnMenu').removeClass('show');
        // });


        /* stop default hiding on click inside the mobile side menu */
        // $('#mmDrpdnMenu').on('click', function (event) {
        //     event.stopPropagation();
        // });


        /* show dropdown on click for city change dropdown inside mobile side menu */
        // $('#citydrpdnChevron').on('click', function (event) {
        //     $('#mmSelectCityDrpdn').toggleClass('show');
        // });


        /* initiate signin modal on click through sign in button inside mobile side menu */
        $('#btnmmSignIn').on('click', function (event) {
            $('#signInModal').modal({
                show: true
            });
        });


        // /* show user profile content */
        // $('#userProfileBtn').on('click', function (event) {
        //     $('#userProfileContent').css('display', 'block');
        // });

        // /* hide user profile content on back button */
        // $('#userProfileBackBtn').on('click', function (event) {
        //     $('#userProfileContent').css('display', 'none');
        // });
    }


    /* footer collapse */
    if ($(window).width() <= 767) {
        $('#footerSocialDsktp').contents().appendTo('#footerSocialMbl');

        $('#footerCollapseBtn').on('click', function (event) {
            $('#footerCollapseContent').css("display", "block");
        });

        $('#footerCollapseCloseBtn').on('click', function (event) {
            $('#footerCollapseContent').css("display", "none");
        });
    }
});