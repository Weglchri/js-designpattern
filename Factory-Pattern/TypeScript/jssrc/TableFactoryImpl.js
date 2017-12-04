"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserTable_1 = require("./UserTable");
var GroupTable_1 = require("./GroupTable");
var TableFactoryImpl = /** @class */ (function () {
    function TableFactoryImpl() {
    }
    TableFactoryImpl.prototype.createTable = function (type) {
        switch (type) {
            case "UserTable":
                return new UserTable_1.UserTable();
            case "GroupTable":
                return new GroupTable_1.GroupTable();
        }
    };
    return TableFactoryImpl;
}());
exports.TableFactoryImpl = TableFactoryImpl;
