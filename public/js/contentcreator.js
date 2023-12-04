$(document).ready(function () {

    const forms = $('.forms');
    const formBtns = $('.form-btns');

    $.each(formBtns, function (index, item) {

        const btn = $(item);

        btn.click( function () {

            const btnValue = btn.data('btn');

            $.each(forms, function (index, item) {

                const form = $(item);

                if (form.data('form') == btnValue) {
                    
                    form.removeClass('d-none');

                    form.siblings('.forms').addClass('d-none');

                }

            });

        });

    });

});