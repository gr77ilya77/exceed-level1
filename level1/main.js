(function () {
    function ready() {
        task3();
        task4();
        task5();

            $('.mdb-select').materialSelect();

        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }

    document.addEventListener("DOMContentLoaded", ready);
})
(window);

function task4() {
    var this_select = VT.getEl('select[name="task2"]');
    this_select.innerHTML = '';
    var options = test.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
    return add_select(options);
}



function task5() {
    var my_menu = new MENU(test);
    my_menu.load_menu();
    my_menu.select.addEventListener("change", function () {
        my_menu.change_menu()
    });
    my_menu.edit.onkeyup = function (e) {
        this.style.borderColor = 'black';
    };
    my_menu.dropdown.onclick = function (e) {
        my_menu.change_menu(e.target);
    };

    my_menu.btnsave.onclick = function () {
        if (/^\s*$/.test(my_menu.edit.value)) {
            my_menu.edit.style.borderColor = 'red';
            return false;
        } else {
            my_menu.save();
        }
    };
}

getHomeNames(test);
searchHome(test, "58873bae28f4bf912185591b");
searchHome(test, "58873bae28f4bf912185591bssd");
//https://exceed-solution.slack.com/messages/DK0U2T449/



