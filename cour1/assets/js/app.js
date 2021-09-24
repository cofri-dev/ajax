window.addEventListener('load', function() {
    category_field = document.getElementById('category_field');
    category_field.addEventListener('change', function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) { // si les 4 étapes pour le fonctionnement de la requête est ok et que le statut est en 200ok
                data = JSON.parse(this.responseText);
                choise_field = document.getElementById('choise_field');
                choise_field.disabled = false;

                choise_field.innerHTML = "";

                for(i = 0; i < data.length; i++ ){
                    option = document.createElement('option');
                    option.value = data[i].id;
                    option.innerHTML = data[i].name;

                    choise_field.append(option);
                }
            }
        };
        xhttp.open("GET", "src/data.php?category_id=" + category_field.value, true); //le + est comme le . pour concaténer
        xhttp.send();

    });
});