(function () {
    function ready() {
        var my_menu = new MENU(test,'my_select');
        my_menu.create_menu();

        my_menu.edit.onkeyup = function (e) {
             this.style.borderColor = 'black';
         };


         my_menu.btnsave.onclick = function () {
             if (/^\s*$/.test(my_menu.edit.value)) {
                 my_menu.edit.style.borderColor = 'red';
                return false;
            } else {
                my_menu.save();
            }
        };

        // var this_select = VT.getEl('select[name="task2"]');
        // this_select.innerHTML = '';
        // var options = test.map(function (value) {
        //     return {val: value._id, title: value.homeName};
        // });
        // my_menu.add_select(options);
        //
        // my_menu.add_select(options);


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



