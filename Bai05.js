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
// Định nghĩa lớp Account
var Account = /** @class */ (function () {
    function Account(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false; // mặc định chưa đăng nhập
        this.role = role;
    }
    // Phương thức login (sẽ được ghi đè ở lớp con)
    Account.prototype.login = function (password) {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Sai mật khẩu");
        }
    };
    // Phương thức logout
    Account.prototype.logout = function () {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    };
    return Account;
}());
// Lớp userAcc kế thừa Account
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, userName, password, role, status) {
        var _this = _super.call(this, id, userName, password, role) || this;
        _this.status = status;
        return _this;
    }
    // Ghi đè login()
    userAcc.prototype.login = function (password) {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
        // Gọi login() của lớp cha
        _super.prototype.login.call(this, password);
    };
    return userAcc;
}(Account));
// =====================
// Kiểm tra chương trình
// =====================
// Tài khoản đang active
var acc1 = new userAcc("U001", "Ngọc", "123456", "user", "active");
acc1.login("123456"); // Đăng nhập thành công
acc1.logout(); // Đăng xuất thành công
// Tài khoản bị banned
var acc2 = new userAcc("U002", "Minh", "abc123", "user", "banned");
acc2.login("abc123"); // Tài khoản đã bị khóa
acc2.logout(); // Không làm gì vì chưa đăng nhập
