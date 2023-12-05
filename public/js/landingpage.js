$(document).ready(function () {

    const userButtons = $('.user-buttons');
    const formHeader = $('#form-header');
    const loginBtn = $('#login-btn');
    let formState = 4;
    const guestBtn = $('#guest-btn');

    guestBtn.click( function () {

        location.href = '../../views/guestview.html';

    });

    $.each(userButtons, function (index, item) {

        const button = $(item);

        button.click( function () {

            formHeader.text('Login as ' + button.text());
            
            const hiddenBtn = button.siblings('.d-none');

            hiddenBtn.removeClass('d-none');

            button.addClass('d-none');

            const state = button.data('key');

            formState = state;
            console.log(formState);

        });
        

    });

    loginBtn.click( function () {

        if (formState == 1) {

            location.href = '../../views/createcontent.html';

        } else if (formState == 2) {

            location.href = '../../views/moderatecontent.html';

        } else if (formState == 3) {

            location.href = '../../views/guestview.html';

        } else if (formState == 4) {

            location.href = '../../views/dashboard.html';

        } else {
            alert();
        }
            
    });

    

    

});