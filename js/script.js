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

$('#design').on('change', function(){
    let selectedDesign = $('#design option').val();
    if (selectedDesign === 'js puns'){
        $("#color option:contains('JS puns')").show();
        $("#color option:contains('I')").hide();
    } else {
        $("#color option:contains('I')").show();
        $("#color option:contains('JS puns')").hide();
    }
});
    