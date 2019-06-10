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