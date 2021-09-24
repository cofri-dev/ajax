$(document).ready(function () {
    let category_field = $('#category_field'); //lET le contenu ne peut pas être changé 
    category_field.change(function(){
        $.get({
            url: "../../src/data.php?category_id=" + $(this).val(),
            success: function (result) {
                
            choice_field = $('#choice_field');
            choice_field.attr('disabled', false);

            choice_field.html("");

            for(i = 0; i < result.length; i++ ){
                option = document.createElement('option');
                option.value = result[i].id;
                option.innerHTML = result[i].name;

                choice_field.append(option);
            }

            }
        });
    
    });

    let food_form = $('#food_form');
    food_form.submit(function(e){
        e.preventDefault(); //permet d'éviter de changer de page mais le JS va traiter le formulaire dans l'action
            $.ajax({
                url: "../../src/validation.php",
                type:"POST",
                data: "category=" + $('#category_field').val() + "&choice=" + $('#choice_field').val(), //category=1 et choice=1
                success: function(result){
                    if(result == "valid"){
                        window.location.href="https://google.com";
                    } else {
                        $("#category_field").addClass("is-invalid");
                        $("#choice_field").addClass("is-invalid");
                    } 
                }
            });
        });

});