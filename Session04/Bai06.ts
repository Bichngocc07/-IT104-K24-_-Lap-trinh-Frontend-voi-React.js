
type Productc = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};


function getFinalPrice(product: Productc): number {
    if (product.discount) {
        return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
}


function printProductInfo(product: Productc): void {
    const finalPrice = getFinalPrice(product);
    const formattedPrice = product.price.toLocaleString("vi-VN") + " VND";
    const formattedFinal = finalPrice.toLocaleString("vi-VN") + " VND";

    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${formattedPrice}`);
    console.log(`Giá sau giảm: ${formattedFinal}`);
    console.log(`Danh mục: ${product.category.name}`);
}


const listProduct: Productc[] = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: {
            id: "C01",
            name: "Thời trang nam"
        },
        discount: 20
    },
    {
        id: "P002",
        name: "Giày sneaker",
        price: 1200000,
        category: {
            id: "C01",
            name: "Thời trang nam"
        }
    },
    {
        id: "P003",
        name: "Túi xách nữ",
        price: 850000,
        category: {
            id: "C02",
            name: "Thời trang nữ"
        },
        discount: 10
    }
];

for (const product of listProduct) {
    printProductInfo(product);
    console.log(); 
}
