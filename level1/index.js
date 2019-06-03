(function () {
    function ready() {
        add_select([{val: "val44", title: "Созданный элемент1"}, {
            val: "val44f4",
            title: "Созданный элемент1"
        }, {val: "val444", title: "Созданный элемент3"}]);

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

function task2(t) {
    alert("Вы выбрали меню списка: " + t.options[t.selectedIndex].innerHTML);
}

getHomeNames(test);
searchHome(test, "58873bae28f4bf912185591b");
searchHome(test, "58873bae28f4bf912185591bssd");



