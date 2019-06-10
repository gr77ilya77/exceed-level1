var DB_HOMES = function (db) {
    this.data = db;
};

DB_HOMES.prototype.searchHome = function (_id) {
    var result = -1;
    for (var i in this.data) {
        if (this.data[i]._id == _id) {
            result = this.data[i];
            break;
        }
    }
    return result;
};

DB_HOMES.prototype.getHomeNames = function () {
    return this.data.map(function (value) {
        return {val: value._id, title: value.homeName};
    });
};