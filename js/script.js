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
    //hiding and showing both matches based on which one is selected 
    $(`#color option:contains("${matched}")`).show();
    $(`#color option:not(:contains("${matched}"))`).hide();
    });
//selecting "activities" by it's class
const activities = document.querySelector('.activities');
//adding an event listener to listen for changes in the checkboxes
activities.addEventListener('change', () => {
    //selecting the input of the checkboxes
    const checkbox = document.querySelectorAll('input[type = "checkbox"]');
    //using if and else statements to disable and grey out checkboxes when conflicting days and times are selected 
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
     //creating a variable to store the total activity costs and initially setting it to 0
    let totalCost = 0;
});
    



    


