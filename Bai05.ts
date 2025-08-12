
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
            console.log("Đăng nhập thành công");
        } else {
            console.log("Sai mật khẩu");
        }
    }

    
    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
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
            console.log("Tài khoản đã bị khóa");
            return;
        }
       
        super.login(password);
    }
}




const acc1 = new userAcc("U001", "Ngọc", "123456", "user", "active");
acc1.login("123456"); 
acc1.logout();        

const acc2 = new userAcc("U002", "Minh", "abc123", "user", "banned");
acc2.login("abc123"); 
acc2.logout();    
