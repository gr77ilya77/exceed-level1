(function () {
    function ready() {
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


        var this_select = VT.getEl('select[name="task2"]');
        this_select.innerHTML = '';
        var options = test.map(function (value) {
            return {val: value._id, title: value.homeName};
        });
        return my_menu.add_select(options);

        //VT.getEl('.mdb-select').materialSelect();

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


//https://exceed-solution.slack.com/messages/DK0U2T449/



