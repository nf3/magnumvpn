$("#contactForm").submit(function(e) {

    var url = "https://stats.magnumvpn.com/isso/contactus"; // the script where you handle the form input.
    var formdata = {};
    $("#contactForm").serializeArray().map(function(x){formdata[x.name] = x.value;})
    $.ajax({
           type: "POST",
           url: url,
           data: JSON.stringify(formdata), // serializes the form's elements.
           dataType: "json",
           contentType: "application/json; charset=utf-8",
           success: function(data)
           {
               alert(data); // show response from the php script.
               $('#contactForm').trigger("reset");
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});