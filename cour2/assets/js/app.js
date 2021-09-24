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

});