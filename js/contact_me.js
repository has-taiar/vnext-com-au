$(function () {



    // $("input,textarea").jqBootstrapValidation({
    //     preventSubmit: true,
    //     submitError: function ($form, event, errors) {
    //         // additional error messages or events
    //     },
    //     submitSuccess: function ($form, event) {
    //         event.preventDefault(); // prevent default submit behaviour
    //         // get values from FORM
    //         var name = $("input#name").val();
    //         var email = $("input#email").val();
    //         var phone = $("input#phone").val();
    //         var message = $("textarea#message").val();
    //         var firstName = name; // For Success/Failure Message
    //         // Check for white space in name for Success/Fail message
    //         if (firstName.indexOf(' ') >= 0) {
    //             firstName = name.split(' ').slice(0, -1).join(' ');
    //         }
    //         form_url = $('#contactForm').attr('action')
    //         $.ajax({
    //             url: form_url,
    //             type: "POST",
    //             data: {
    //                 name: name,
    //                 phone: phone,
    //                 email: email,
    //                 message: message
    //             },
    //             cache: false,
    //             success: function () {
    //                 // Success message
    //                 $('#success').html("<div class='alert alert-success'>");
    //                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-success')
    //                     .append("<strong>Your message has been sent. </strong>");
    //                 $('#success > .alert-success')
    //                     .append('</div>');

    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //             },
    //             error: function () {
    //                 // Fail message
    //                 $('#success').html("<div class='alert alert-danger'>");
    //                 $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //                     .append("</button>");
    //                 $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", seems there was an error. how about contacting us by email at <a href=\"mailto:has@vnext.com.au\">info@vnext.com.au</a>");
    //                 $('#success > .alert-danger').append('</div>');
    //                 //clear all fields
    //                 $('#contactForm').trigger("reset");
    //             },
    //         })
    //     },
    //     filter: function () {
    //         return $(this).is(":visible");
    //     },
    // });

    // $("a[data-toggle=\"tab\"]").click(function (e) {
    //     e.preventDefault();
    //     $(this).tab("show");
    // });
});

$(document).ready(function () {
    if (window.location.hash === "#contact_OK") {
        $(document).ready(function () {
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Your message has been sent. You can also emails us directly on <a href=\"mailto:hello@vnext.com.au\">hello@vnext.com.au</a></strong>");
            $('#success > .alert-success')
                .append('</div>');
            $(window).scrollTop($('#success').offset().top);
            console.log("Email sent successfully");
        });
    }
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success').html('');
});
