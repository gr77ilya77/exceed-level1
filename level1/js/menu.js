var MENU = function (db, root_id) {
    this.db = new DB_HOMES(db);
    var THIS = this;
    this.root = document.getElementById(root_id);
    this.edit = VT.getEl("#edit");
    this.select = VT.getEl('select[name="task2"]');
    this.btnsave = VT.getEl('button[data-type="save"]');
    this.dropdown = VT.getEl('#'+root_id+' .dropdown-menu');
    this.dropdownbtn = this.root.querySelector('button');
    this.dropdown.addEventListener('click',function(e){return THIS.change_menu(e);}, false);
};

MENU.prototype.checked = function (val) {
    if(!val){
        return {id: this.dropdownbtn.dataset.value, title: this.dropdownbtn.querySelector('span[data-type="value"]').innerHTML};
    }
    this.dropdownbtn.dataset.value = val.id;
    this.dropdownbtn.querySelector('span[data-type="value"]').innerHTML = val.title;
};

MENU.prototype.change_menu = function (e) {
    if(!e.target.dataset.value){
       return;
    }
    this.checked({id: e.target.dataset.value, title: e.target.innerHTML});
    this.edit.dataset.val = e.target.dataset.value;
    this.edit.value = e.target.innerHTML;
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

MENU.prototype.create_menu = function () {
    var options = this.db.getHomeNames();
    this.dropdown.innerHTML = '';
    this.add_select(options);
};

MENU.prototype.save = function () {
    var home = this.db.searchHome(this.edit.dataset.val);
    if (home == -1) {
        return false;
    }
    home.homeName = this.edit.value.trim();
    this.create_menu();
    this.checked({id: this.edit.dataset.val, title: home.homeName});
    this.change_menu();
};