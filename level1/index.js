(function () {
    function ready() {
        task3();
        task4();
        task5();

        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false); });
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
    this.btnsave = VT.getEl('button[data-type="save"]')
    console.log('JOJOJO');

};

Array.prototype.myFN = function(){};

MENU.prototype.get_obj_selected = function () {
    var this_select = VT.getEl('select[name="task2"]'),
        selected = this_select.options[this_select.selectedIndex];
    return {value: selected.value, title: selected.innerHTML};
};

MENU.prototype.change_menu = function () {
    console.warn('POPO', JSON.stringify(this.edit));
    var selected = MENU.prototype.get_obj_selected();
    this.edit.dataset.val = selected.value;
    this.edit.value = selected.title;
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
        VT.addEl(_this.select, "<option value='" + value.val + "'>" + value.title + '</option>');
    });
};

MENU.prototype.load_menu = function () {
    var options = this.data.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
    this.select.innerHTML = '';
    this.add_select(options);
};

MENU.prototype.save = function () {
    var home = this.searchHome(this.edit.dataset.val);
    if (home == -1) {
        return false;
    }
    home.homeName = this.edit.value;
    this.load_menu();
    this.select.value = this.edit.dataset.val;

    this.change_menu();
    //VT.getEl('option[value="'+elem._id+'"]').click();
};

function task5() {
    var my_menu = new MENU(test);
    my_menu.select.addEventListener("change", my_menu.change_menu)

    var re = /^\ *$/gm;

    my_menu.edit.onkeyup = function (e) {
        this.style.borderColor = 'black';
    };
    my_menu.change_menu();
    my_menu.btnsave.onclick = function () {
        alert(re.test(my_menu.edit.value)+';'+my_menu.edit.value.length+';'+my_menu.edit.value);
        alert(re.test(my_menu.edit.value)+';'+my_menu.edit.value.length+';'+my_menu.edit.value)
        if(re.test(my_menu.edit.value)){
            alert('ok')
            my_menu.edit.style.borderColor = 'red';
            return false;
        } else {
            my_menu.save();
        }
        alert(';;')

    };
}

getHomeNames(test);
searchHome(test, "58873bae28f4bf912185591b");
searchHome(test, "58873bae28f4bf912185591bssd");



