//Making sure the document is ready to run intial code
$(document).ready(function(){
    //Selecting the "name" input element and placing focus on it
    $('#name').focus();
        //Using a descendant selector to select the "Select Theme" 'option' element and hide it 
    $('#design option:first-Child').hide();
});

//Targetting the "Other" input field and hiding it initially with JS only
$('#other-title').hide();

//change function
$('#title').on('change', function(e){
    //Creating a conditional statement that will show the text field only when 'other' is chosen
    if($(this).val() == 'other'){
        $('#other-title').show();
    } else {
        //Hiding the text field otherwise
        $('#other-title').hide();
    };
});
//Updating the color field to read "Please select a T-shirt Theme until a design is chosen"
$('#color').prepend('<option selected>Please select a T-shirt Theme</option>');
//Hiding the colors in the "Color" drop down menu
$('#color option').hide();
//using regular expression to hide/show shirt colors depending on the design chosen
$('#design').on('change', function(){
    //creating a variable to hold the text of the selected design
    const design = $('#design option:selected').text();
    //creating a variable to hold the reg ex match of the two designs
    const regEx = /Theme - (.*)$/;
    //creating a variable to hold the first matches content and regex
    const matched = design.match(regEx)[1];
    //hiding/showing both matches based on which one is selected 
    $(`#color option:contains("${matched}")`).show();
    $(`#color option:not(:contains("${matched}"))`).hide();
    });
//selecting "activities" by it's class to be used on the event listener
const activities = document.querySelector('.activities');
//adding an event listener to listen for changes in the checkboxes
activities.addEventListener('change', function(){
    //selecting the input of the checkboxes
    const checkbox = document.querySelectorAll('input[type = "checkbox"]');
    //using if and else statements to disable and grey out checkboxes when conflicting days and times are selected
    //also greying out the conflicting activities when chosen 
    if(checkbox[1].checked){
        checkbox[3].disabled = true;
        checkbox[3].parentNode.style.color = "grey";
    } else {
        checkbox[3].disabled = false; 
        checkbox[3].parentNode.style.color = "black";
    }
    if(checkbox[3].checked){
        checkbox[1].disabled = true;
        checkbox[1].parentNode.style.color = "grey";
    } else {
        checkbox[1].disabled = false; 
        checkbox[1].parentNode.style.color = "black";
    }
    if(checkbox[2].checked){
        checkbox[4].disabled = true;
        checkbox[4].parentNode.style.color = "grey";
    } else {
        checkbox[4].disabled = false; 
        checkbox[4].parentNode.style.color = "black";
    }
    if(checkbox[4].checked){
        checkbox[2].disabled = true;
        checkbox[2].parentNode.style.color = "grey";
    } else {
        checkbox[2].disabled = false;
        checkbox[2].parentNode.style.color = "black";
    }  
    
});
    // when a checkbox is clicked, show the created paragraph text content
    $('.activities p').css('display','block');
    $('.activities :checkbox').click(function() {
        // creating a variable to store the total activity costs and initially setting it to 0
        let cost = 0;
        $('.activities :checkbox:checked').each(function(index, elm) {
            switch(elm.name){
                case "all": cost +=200;
                break; 
                case "js-frameworks": cost +=100;
                break;
                case "js-libs": cost +=100;
                break;
                case "express": cost +=100;
                break;
                case "node": cost +=100;
                break;
                case "build-tools": cost +=100;
                break;
                case "npm": cost +=100;
                break;
            }
        });

        $('.total_cost').text("Total cost: $" +cost);
    });
// appending the created paragraph to the activities section and hiding it's visibility
$('.activities').append('<p><span class = "total_cost" </span></p>')

//Using a descendant selector to select the "Select Payment Method" 'option' element and hide it 
 $('#payment option:first').hide();
 $('#payment').val('credit card');
 $('div p:contains("If you selected the")').hide();
 //change function
 $('#payment').on('change', function(e){
    //Creating conditional statements that will show/hide payment option fields accordingly
    if($(this).val() == 'credit card'){
        $('#credit-card').show();
        //Hiding the payment methods otherwise
        $('div p:contains("If you selected the")').hide();
    };
    if($(this).val() == 'paypal'){
        $('div p:contains("If you selected the PayPal")').show();
         //Hiding the payment methods otherwise
         $('div p:contains("If you selected the Bitcoin")').hide();
         $('#credit-card').hide();
    };
    if($(this).val() == 'bitcoin'){
        $('div p:contains("If you selected the Bitcoin")').show();
         //Hiding the payment methods otherwise
         $('div p:contains("If you selected the PayPal")').hide();
         $('#credit-card').hide();

    };
});
//name validation
//creating regex for emails, credit cards and zipcodes
let emailAddress = /^[^@]+@[^@.]+\.[a-z]+$/i;
let creditCard = /^\d{13,16}$/
let zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
let cvv = /^\d{3}$/

//prepending the error messages to the form
$('form').prepend('<p id = "error-message"></p>');
//hiding the error messages initially
$('error-message').hide();

//creating a submit function on the form and preventing the form's automatic default
$('form').submit(function (e){
    let page = $('html, body');
    //if the name field is blank, show an error message
    if($('#name').val() == ''){
        console.log("Error!");
        errorMessage = "<p>Error!</p>Please complete all fields!";
        $('#name').addClass('error');
        page.animate({scrollTop: 0}, "slow");
        $('#name').focus();
        e.preventDefault();

    //if the email address does not pass the regex test, show error message   
    } else if ( !emailAddress.test($('#mail').val()) ) {
        errorMessage = "<p>Error!</p>Please enter a valid email!";
        page.animate({scrollTop: 0}, "slow");
        $('#mail').focus();
        e.preventDefault();

    //if no activities are checked, show error message      
    } else if ( $(".activities > label > input:checked").length == 0) {
        errorMessage = "<p>Error!</p>Please select atleast one actvivity!";
        page.animate({scrollTop: 0}, "slow");
        $('.actvivities').focus();
        e.preventDefault();

    //if no payment method is selected, show error message     
    } else if ($('#payment').val() == "select-method"){
        errorMessage = "<p>Error!</p>Please select a payment method!";
        page.animate({scrollTop: 0}, "slow");
        $('#payment').focus();
        e.preventDefault();

    //if credit card is selected as payment method and card num input doesn't pass the regex test, show error message    
    } else if ($('#payment').val() == "credit card" && !creditCard.test($("#cc-num").val()) ) {
        errorMessage = "<p>Error!</p>Please enter a valid credit card number!";
        page.animate({scrollTop: 0}, "slow");
        $('#cc-num').focus();
        e.preventDefault();


    //if payment selected is credit card and zip code doesn't pass regex test, show error message     
    } else if ($('#payment').val() == "credit card" && !zipCode.test($("#zip").val()) ) {
    errorMessage = "<p>Error!</p>Please enter your zip code!";
    page.animate({scrollTop: 0}, "slow");
        $('#zip').focus();
        e.preventDefault();

    //if payment selected is credit card and cvv is less than 3 nums, show error message    
    } else if ($('#payment').val() == "credit card" && $('#cvv').val().length < 3) {
        errorMessage = "<p>Error!</p>Please enter a 3 digit CVV!";
        page.animate({scrollTop: 0}, "slow");
        $('#cvv').focus();
        e.preventDefault();

    //otherwise, don't show an error message     
    } else {
        errorMessage = "";
    }
    document.getElementById('error-message').innerHTML = errorMessage;
}); 
