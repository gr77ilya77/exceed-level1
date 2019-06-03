(function () {
    function ready() {
        task3();
        task4();
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
        VT.addEl(this_select,"<option value='"+value.val+"'>"+value.title+'</option>');
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
    this_select.innerHTML='';
    var options = test.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
    return add_select(options);
}

getHomeNames(test);
searchHome(test, "58873bae28f4bf912185591b");
searchHome(test, "58873bae28f4bf912185591bssd");



