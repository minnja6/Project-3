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
//Updating the color field to read "Please select a T-shirt Theme"
$('#color').prepend('<option selected>Please select a T-shirt Theme</option>');
//Hiding the colors in the "Color" drop down menu
$('#color option').hide();
//using regular expression to hide/show shirt colors depending on the design
$('#design').on('change', function(){
    //creating a variable to hold the text of the selected design
    const design = $('#design option:selected').text();
    //creating a variable to hold the reg ex match of the two designs
    const regEx = /Theme - (.*)$/;
    //creating a variable to hold the first matches content
    const matched = design.match(regEx)[1];
    //hiding and showing both matches based on which one is selected 
    $(`#color option:contains("${matched}")`).show();
    $(`#color option:not(:contains("${matched}"))`).hide();
    });
    