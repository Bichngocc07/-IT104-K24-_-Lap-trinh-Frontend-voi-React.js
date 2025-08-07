// Khai báo kiểu dữ liệu
type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

// Hàm tính tổng giá trị đơn hàng
function calculateOrderTotal(order: Order): number {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}

// Hàm in đơn hàng ra định dạng đẹp
function printOrder(order: Order): void {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);

    for (const item of order.items) {
        const totalItem = item.product.price * item.quantity;
        const formatted = totalItem.toLocaleString("vi-VN") + " VND";
        console.log(`- ${item.product.name} × ${item.quantity} → ${formatted}`);
    }

    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total.toLocaleString("vi-VN")} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}

// Ví dụ sử dụng
const aoSoMi: Product = { id: "P01", name: "Áo sơ mi", price: 250000 };
const quanTay: Product = { id: "P02", name: "Quần tây", price: 400000 };

const order: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: aoSoMi, quantity: 2 },
        { product: quanTay, quantity: 1 }
    ],
    note: "Giao sau 18h"
};

printOrder(order);
