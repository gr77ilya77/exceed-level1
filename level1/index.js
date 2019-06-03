(function () {
    function ready() {
        var $ = VT;//addEl(parentEl, html, first)
        add_select([{val: "val44", title: "Созданный элемент1"}, {
            val: "val44f4",
            title: "Созданный элемент1"
        }, {val: "val444", title: "Созданный элемент3"}]);

    }

    function add_select(elms) {
        if (!VT.isArray(elms)) {
            return false;
        }
        alert(VT.getEl('select[name="task2"]')[0])
        for (var i in elms) {

        }


    }

    document.addEventListener("DOMContentLoaded", ready);
})
(window);

function task2(t) {
    alert("Вы выбрали меню списка: " + t.options[t.selectedIndex].innerHTML);
}

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

getHomeNames(test);
searchHome(test, "58873bae28f4bf912185591b");
searchHome(test, "58873bae28f4bf912185591bssd");

