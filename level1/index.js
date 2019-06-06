(function () {
    function ready() {
        task3();
        task4();
        task5();

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


function getHomeNames(homes) {
    var result;
    result = homes.map(function (value) {
        return value.homeName;
    });
    return result;
}

function searchHome(homes, _id) {
    var result = -1;
    for (var i in homes) {
        if (homes[i]._id == _id) {
            result = homes[i];
            break;
        }
    }
    return result;
}

function add_select(elms) {
    if (!VT.isArray(elms)) {
        return false;
    }
    var this_select = VT.getEl('select[name="task2"]');

    return elms.map(function (value) {
        VT.addEl(this_select, "<option value='" + value.val + "'>" + value.title + '</option>');
    });
}

function task2(t) {
    alert("Вы выбрали меню списка: " + t.options[t.selectedIndex].innerHTML);
}


function task3() {
    add_select([{val: "val44", title: "Созданный элемент1"}, {
        val: "val44f4",
        title: "Созданный элемент1"
    }, {val: "val444", title: "Созданный элемент3"}]);
}

function task4() {
    var this_select = VT.getEl('select[name="task2"]');
    this_select.innerHTML = '';
    var options = test.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
    return add_select(options);
}

var MENU = function (data) {
    this.data = data;
    this.edit = VT.getEl("#edit");
    this.select = VT.getEl('select[name="task2"]');
    this.btnsave = VT.getEl('button[data-type="save"]');
    this.dropdown = VT.getEl('.dropdown-menu');
    this.dropdownbtn = VT.getEl('.btn-group button');
};


MENU.prototype.get_obj_selected = function () {
    var this_select = VT.getEl('select[name="task2"]'),
        selected = this_select.options[this_select.selectedIndex];
    return {value: selected.value, title: selected.innerHTML};
};

MENU.prototype.change_menu = function (target) {
    this.dropdownbtn.dataset.value = target.dataset.value;
    this.dropdownbtn.innerHTML = target.innerHTML;

    this.edit.dataset.val = target.dataset.value;
    this.edit.value = target.innerHTML;
};

MENU.prototype.searchHome = function (_id) {
    var result = -1;
    for (var i in this.data) {
        if (this.data[i]._id == _id) {
            result = this.data[i];
            break;
        }
    }
    return result;
};

MENU.prototype.add_select = function (elms) {
    var _this = this;
    if (!VT.isArray(elms)) {
        return false;
    }
    return elms.map(function (value) {
        VT.addEl(_this.dropdown, '<li><a href="#" data-value="'+value.val+'">'+value.title+'</a></li>');
    });
};

MENU.prototype.load_menu = function () {
    var options = this.data.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
    this.dropdown.innerHTML = '';
    this.add_select(options);
};

MENU.prototype.save = function () {
    var home = this.searchHome(this.edit.dataset.val);
    if (home == -1) {
        return false;
    }
    home.homeName = this.edit.value.trim();
    this.load_menu();
    this.select.value = this.edit.dataset.val;
    this.change_menu();
};

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



