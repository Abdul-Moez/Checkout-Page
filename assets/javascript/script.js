$( document ).ready(function () {

    $(document).on('click', '#continue-guest', function () {

        var errorChckGuestFrm = '';
        $('.guestFormChckInput').each(function(){
            var frGuestInpt = $(this).val();
            var frGuestInptAttr = $(this).attr('guestattr');
            if(frGuestInpt == ''){
                errorChckGuestFrm += frGuestInptAttr+"<br/>";
            }
        });

        // Email Validation
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }

        if ($("#guest-email").val().length) {
            if (IsEmail($("#guest-email").val()) == false) {
                errorChckGuestFrm += 'Invalid Email\n<br/>';
            }
        }

        if(errorChckGuestFrm != ''){
            // alert('Please Select The Below Fields:\n'+errorChckGuestFrm);
            // $("#emptyInputFiled").removeClass("d-none");

            // $("#emptyInputFiled").html("Please fill out below fields: <br/>" + errorChckGuestFrm);
            Swal.fire({
                title: 'Please fill out below fields:',
                html: errorChckGuestFrm,
                icon: 'error',
            })
            return false;
        }

        $('#login-or-guest').addClass('d-none');
        $('.login-continue-head').addClass('d-none');
        $('#open-login-or-guest').removeClass('d-none');
        $('#shipping-information-form').removeClass('d-none');

        // console.log($("#guest-email").val());

    });

    $(document).on('click', '#submit-login', function () {
        
        var errorChckLoginFrm = '';
        $('.loginFormChckInput').each(function(){
            var frLoginInpt = $(this).val();
            var frLoginInptAttr = $(this).attr('loginattr');
            if(frLoginInpt == ''){
                errorChckLoginFrm += frLoginInptAttr + "<br/>";
            }
        });

        // Email Validation
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }

        if ($("#login-email").val().length) {
            if (IsEmail($("#login-email").val()) == false) {
                errorChckLoginFrm += 'Invalid Email\n<br/>';
            }
        }

        if(errorChckLoginFrm != ''){
            // alert('Please Select The Below Fields:\n'+errorChckLoginFrm);
            // $("#emptyInputFiled").removeClass("d-none");

            // $("#emptyInputFiled").html("Please fill out below fields: <br/>" + errorChckLoginFrm);

            Swal.fire({
                title: 'Please fill out below fields:',
                html: errorChckLoginFrm,
                icon: 'error',
            })
            return false;
        }

        $('#login-or-guest').addClass('d-none');
        $('.login-continue-head').addClass('d-none');
        $('#open-login-or-guest').removeClass('d-none');
        $('#payment-form').removeClass('d-none');

    });

    $(document).on('click', '#submit-register', function () {
        
        var errorChckRegisterFrm = '';
        $('.registerFormChckInput').each(function(){
            var frRegisterInpt = $(this).val();
            var frRegisterInptAttr = $(this).attr('registerattr');
            if(frRegisterInpt == ''){
                errorChckRegisterFrm += frRegisterInptAttr+"<br/>";
            }
        });

        // Email Validation
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }

        if ($("#login-email").val().length) {
            if (IsEmail($("#login-email").val()) == false) {
                errorChckRegisterFrm += 'Invalid Email\n<br/>';
            }
        }

        if(errorChckRegisterFrm != ''){
            // alert('Please Select The Below Fields:\n'+errorChckRegisterFrm);
            // $("#emptyInputFiled").removeClass("d-none");

            // $("#emptyInputFiled").html("Please fill out below fields: <br/>" + errorChckRegisterFrm);
            Swal.fire({
                title: 'Please fill out below fields:',
                html: errorChckRegisterFrm,
                icon: 'error',
            })
            return false;
        }

        $('#login-or-guest').addClass('d-none');
        $('.login-continue-head').addClass('d-none');
        $('#open-login-or-guest').removeClass('d-none');
        $('#payment-form').removeClass('d-none');

    });

    $(document).on('click', '#submit-shipping', function () {
        
        var errorChckShippingFrm = '';
        $('.shippingFormChckInput').each(function(){
            var frShippingInpt = $(this).val();
            var frShippingInptAttr = $(this).attr('shippingattr');
            if(frShippingInpt == ''){
                errorChckShippingFrm += frShippingInptAttr+"<br/>";
            }
        });

        // Email Validation
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }

        if ($("#shipping-email").val().length) {
            if (IsEmail($("#shipping-email").val()) == false) {
                errorChckShippingFrm += 'Invalid Email\n<br/>';
            }
        }

        if(errorChckShippingFrm != ''){
            // alert('Please Select The Below Fields:\n'+errorChckShippingFrm);
            // $("#emptyInputFiled").removeClass("d-none");

            // $("#emptyInputFiled").html("Please fill out below fields: <br/>" + errorChckShippingFrm);
            Swal.fire({
                title: 'Please fill out below fields:',
                html: errorChckShippingFrm,
                icon: 'error',
            })
            return false;
        }

        $('#shipping-information-form').addClass('d-none');
        $('.shipping-information-head').addClass('d-none');
        $('#open-shipping').removeClass('d-none');
        $('#payment-form').removeClass('d-none');

    });

    $(document).on('click', '#payment-proceed', function () {
        
        var errorChckPaymentFrm = '';
        $('.paymentFormChckInput').each(function(){
            var frPaymentInpt = $(this).val();
            var frPaymentInptAttr = $(this).attr('paymentattr');
            if(frPaymentInpt == ''){
                errorChckPaymentFrm += frPaymentInptAttr+"<br/>";
            }
        });

        if(errorChckPaymentFrm != ''){
            // alert('Please Select The Below Fields:\n'+errorChckPaymentFrm);
            // $("#emptyInputFiled").removeClass("d-none");

            // $("#emptyInputFiled").html("Please fill out below fields: <br/>" + errorChckPaymentFrm);
            Swal.fire({
                title: 'Please fill out below fields:',
                html: errorChckPaymentFrm,
                icon: 'error',
            })
            return false;
        }

        $('#payment-form').addClass('d-none');
        $('.payment-methods-head').addClass('d-none');
        $('#open-payment').removeClass('d-none');

    });

    $(document).on('click', '#check-bill', function () {
        if ($(this).is(":checked")) {
            // $('#billing-form').addClass('d-none');
            $('#billing-form').fadeOut();

            $('#billing-form div input').removeClass('shippingFormChckInput');
            $('#billing-form div select').removeClass('shippingFormChckInput');

        }
        else {
            // $('#billing-form').removeClass('d-none');
            $('#billing-form').fadeIn();
            $('#billing-form div input').addClass('shippingFormChckInput');
            $('#billing-form div select').addClass('shippingFormChckInput');
        }
    });

    $(document).on('click', '#open-login-or-guest', function () {
        $('#login-or-guest').removeClass('d-none');
        $('.login-continue-head').removeClass('d-none');
        $('#open-login-or-guest').addClass('d-none');
        $('#payment-form').addClass('d-none');
        $('#shipping-information-form').addClass('d-none');
    });
    $(document).on('click', '#open-shipping', function () {
        $('#shipping-information-form').removeClass('d-none');
        $('.shipping-information-head').removeClass('d-none');
        $('#open-shipping').addClass('d-none');
        $('#payment-form').addClass('d-none');
        $('#login-or-guest').addClass('d-none');
    });
    $(document).on('click', '#open-payment', function () {
        $('#payment-form').removeClass('d-none');
        $('.payment-methods-head').removeClass('d-none');
        $('#open-payment').addClass('d-none');
        $('#login-or-guest').addClass('d-none');
        $('#shipping-information-form').addClass('d-none');
    });

    $(document).on('click', '#open-login', function () {
        $('#guest-form').addClass('d-none');
        $('#open-login').addClass('d-none');
        $('#register-form').addClass('d-none');
        $('#login-form').removeClass('d-none');
        $('#open-guest').removeClass('d-none');
        $('#open-register').removeClass('d-none');
        
        $("#emptyInputFiled").addClass("d-none");
        $('#shipping-information').addClass('d-none');
    });
    $(document).on('click', '#open-register', function () {
        $('#guest-form').addClass('d-none');
        $('#login-form').addClass('d-none');
        $('#open-register').addClass('d-none');
        $('#register-form').removeClass('d-none');
        $('#open-login').removeClass('d-none');
        $('#open-guest').removeClass('d-none');

        $("#emptyInputFiled").addClass("d-none");
        $('#shipping-information').addClass('d-none');
    });
    $(document).on('click', '#open-guest', function () {
        $('#guest-form').removeClass('d-none');
        $('#open-login').removeClass('d-none');
        $('#open-register').removeClass('d-none');
        $('#register-form').addClass('d-none');
        $('#login-form').addClass('d-none');
        $('#open-guest').addClass('d-none');
        $("#emptyInputFiled").addClass("d-none");

        $('#shipping-information').removeClass('d-none');
    });

});