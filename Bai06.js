var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    Account.prototype.login = function (password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log("".concat(this.userName, " \u0111\u00E3 \u0111\u0103ng nh\u1EADp th\u00E0nh c\u00F4ng"));
        }
        else {
            console.log("Sai mật khẩu");
        }
    };
    Account.prototype.logout = function () {
        if (this.isLogin) {
            console.log("".concat(this.userName, " \u0111\u00E3 \u0111\u0103ng xu\u1EA5t th\u00E0nh c\u00F4ng"));
            this.isLogin = false;
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, password, role, status) {
        var _this = _super.call(this, id, userName, password, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.login = function (password) {
        if (this.status === "banned") {
            console.log("T\u00E0i kho\u1EA3n ".concat(this.userName, " \u0111\u00E3 b\u1ECB kh\u00F3a"));
            return;
        }
        _super.prototype.login.call(this, password);
    };
    return userAcc;
}(Account));
var adminAcc = /** @class */ (function (_super) {
    __extends(adminAcc, _super);
    function adminAcc(id, userName, password) {
        return _super.call(this, id, userName, password, "admin") || this;
    }
    adminAcc.prototype.banUser = function (user) {
        user.status = "banned";
        console.log("T\u00E0i kho\u1EA3n ".concat(user.userName, " \u0111\u00E3 b\u1ECB admin ").concat(this.userName, " kh\u00F3a"));
    };
    return adminAcc;
}(Account));
var user1 = new userAcc("U001", "Ngọc", "123456", "user", "active");
var admin1 = new adminAcc("A001", "AdminPro", "adminpass");
user1.login("123456");
user1.logout();
admin1.banUser(user1);
user1.login("123456");
