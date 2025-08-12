
class Account {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false; 
        this.role = role;
    }

    
    login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log(`${this.userName} đã đăng nhập thành công`);
        } else {
            console.log("Sai mật khẩu");
        }
    }

  
    logout(): void {
        if (this.isLogin) {
            console.log(`${this.userName} đã đăng xuất thành công`);
            this.isLogin = false;
        }
    }
}


class userAcc extends Account {
    public status: "active" | "banned";

    constructor(id: string, userName: string, password: string, role: string, status: "active" | "banned") {
        super(id, userName, password, role);
        this.status = status;
    }

    
    login(password: string): void {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
            return;
        }
        super.login(password);
    }
}


class adminAcc extends Account {
    constructor(id: string, userName: string, password: string) {
        super(id, userName, password, "admin");
    }

   
    banUser(user: userAcc): void {
        user.status = "banned";
        console.log(`Tài khoản ${user.userName} đã bị admin ${this.userName} khóa`);
    }
}



const user1 = new userAcc("U001", "Ngọc", "123456", "user", "active");
const admin1 = new adminAcc("A001", "AdminPro", "adminpass");


user1.login("123456");
user1.logout();       


admin1.banUser(user1);

user1.login("123456"); 
