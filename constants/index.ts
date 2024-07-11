export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
    inStock?: boolean;
    label?: string;
}


export const navLinks = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "Contact",
        route: "/contact",
    },
    {
        label: "About",
        route: "/about",
    },
    {
        label: "Sign Up",
        route: "/sign-up",
    },
]

export const navIcons = [
    {
        icon: "/icons/heart.svg",
        route: "/wishlist"
    },
    {
        icon: "/icons/cart.svg",
        route: "/cart"
    },
    // {
    //     icon: "/icons/user-off.svg",
    //     route: "/profile"
    // }
]

export const sidebarLinks = [
    {
        label: "Woman's Fashion",
        link: "/women-fashion",
        icon: "/icons/dropdown.svg"
    },
    {
        label: "Men's Fashion",
        link: "/men-fashion",
        icon: "/icons/dropdown.svg"
    },
    {
        label: "Electronics",
        link: "/electronics"
    },
    {
        label: "Home & Lifestyle",
        link: "/home-lifestyle"
    },
    {
        label: "Medicine",
        link: "/medicine"
    },
    {
        label: "Sports & Outdoor",
        link: "/sports-outdoor"
    },
    {
        label: "Baby's & Toys",
        link: "/baby-toys"
    },
    {
        label: "Groceries & Pets",
        link: "/groceries-pets"
    },
    {
        label: "Health & Beauty",
        link: "/health-beauty"
    },
]

export const carouselItems = [
    {
        title: 'iPhone 14 Series',
        offer: 'Up to 10% off Voucher',
        image: '/hero_endframe.svg',
    },
    {
        title: 'iPhone 15 Series',
        offer: 'Up to 15% off Voucher',
        image: '/hero_endframe.svg',
    },
    {
        title: 'iPhone 15 Series',
        offer: 'Up to 15% off Voucher',
        image: '/hero_endframe.svg',
    },
    {
        title: 'iPhone 15 Series',
        offer: 'Up to 15% off Voucher',
        image: '/hero_endframe.svg',
    },
    {
        title: 'iPhone 15 Series',
        offer: 'Up to 15% off Voucher',
        image: '/hero_endframe.svg',
    },

];

// export const allProducts: Product[] = [
//     {
//         id: '1',
//         name: 'HAVIT HV-G92 Gamepad',
//         price: 120,
//         originalPrice: 160,
//         discount: 40,
//         rating: 5,
//         reviews: 88,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '25%',
//         label: 'New',
//     },
//     {
//         id: '2',
//         name: 'AKG N700NC Wireless Headphones',
//         price: 199,
//         originalPrice: 299,
//         discount: 100,
//         rating: 4.5,
//         reviews: 65,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '33%',
//     },
//     {
//         id: '3',
//         name: 'ASUS ROG Strix G15 Gaming Laptop',
//         price: 1299,
//         originalPrice: 1499,
//         discount: 200,
//         rating: 4.8,
//         reviews: 112,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '13%',
//     },
//     {
//         id: '4',
//         name: 'Sony Alpha A7 III Mirrorless Camera',
//         price: 1799,
//         originalPrice: 1999,
//         discount: 200,
//         rating: 4.9,
//         reviews: 201,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '10%',
//     },
//     {
//         id: '5',
//         name: 'Samsung 65" QLED 4K Smart TV',
//         price: 999,
//         originalPrice: 1299,
//         discount: 300,
//         rating: 4.7,
//         reviews: 156,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '23%',
//     },
//     {
//         id: '6',
//         name: 'Apple Watch Series 7',
//         price: 379,
//         originalPrice: 399,
//         discount: 20,
//         rating: 4.8,
//         reviews: 302,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '5%',
//     },
//     {
//         id: '7',
//         name: 'Bose QuietComfort 45 Headphones',
//         price: 279,
//         originalPrice: 329,
//         discount: 50,
//         rating: 4.6,
//         reviews: 89,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '15%',
//     },
//     {
//         id: '8',
//         name: 'DJI Mavic Air 2 Drone',
//         price: 799,
//         originalPrice: 899,
//         discount: 100,
//         rating: 4.7,
//         reviews: 76,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '11%',
//     },
//     {
//         id: '9',
//         name: 'Fitbit Charge 5 Fitness Tracker',
//         price: 129,
//         originalPrice: 149,
//         discount: 20,
//         rating: 4.5,
//         reviews: 210,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '13%',
//     },
//     {
//         id: '10',
//         name: 'Logitech MX Master 3 Wireless Mouse',
//         price: 89,
//         originalPrice: 99,
//         discount: 10,
//         rating: 4.8,
//         reviews: 178,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '10%',
//     },
//     {
//         id: '11',
//         name: 'Kindle Paperwhite E-reader',
//         price: 129,
//         originalPrice: 139,
//         discount: 10,
//         rating: 4.6,
//         reviews: 1205,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '7%',
//     },
//     {
//         id: '12',
//         name: 'Anker PowerCore 26800 Power Bank',
//         price: 59,
//         originalPrice: 69,
//         discount: 10,
//         rating: 4.7,
//         reviews: 3201,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '14%',
//     },
//     {
//         id: '13',
//         name: 'Razer BlackWidow Elite Mechanical Keyboard',
//         price: 129,
//         originalPrice: 169,
//         discount: 40,
//         rating: 4.5,
//         reviews: 892,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '24%',
//     },
//     {
//         id: '14',
//         name: 'GoPro HERO10 Black',
//         price: 399,
//         originalPrice: 499,
//         discount: 100,
//         rating: 4.7,
//         reviews: 562,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '20%',
//     },
//     {
//         id: '15',
//         name: 'Philips Hue White and Color Ambiance Starter Kit',
//         price: 179,
//         originalPrice: 199,
//         discount: 20,
//         rating: 4.6,
//         reviews: 721,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '10%',
//     },
//     {
//         id: '16',
//         name: 'Beats Studio3 Wireless Headphones',
//         price: 249,
//         originalPrice: 349,
//         discount: 100,
//         rating: 4.5,
//         reviews: 1102,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '29%',
//     },
//     {
//         id: '17',
//         name: 'Nintendo Switch OLED Model',
//         price: 349,
//         originalPrice: 349,
//         discount: 0,
//         rating: 4.9,
//         reviews: 2105,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         label: 'New',
//     },
//     {
//         id: '18',
//         name: 'Dyson V11 Absolute Cordless Vacuum',
//         price: 599,
//         originalPrice: 699,
//         discount: 100,
//         rating: 4.7,
//         reviews: 892,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '14%',
//     },
//     {
//         id: '19',
//         name: 'LG 34" UltraWide Monitor',
//         price: 449,
//         originalPrice: 499,
//         discount: 50,
//         rating: 4.6,
//         reviews: 456,
//         image: '/flashSales/gamepad.svg',
//         inStock: true,
//         offer: '10%',
//     },
//     {
//         id: '20',
//         name: 'Sonos One SL Wireless Speaker',
//         price: 179,
//         originalPrice: 199,
//         discount: 20,
//         rating: 4.8,
//         reviews: 1023,
//         image: '/flashSales/gamepad.svg',
//         inStock: false,
//         offer: '10%',
//     },
// ]

export const browseByCategories = [
    {
        label: "Phones",
        icon: "/browse_by_categories/cell-phone.svg"
    },
    {
        label: "Computers",
        icon: "/browse_by_categories/computer.svg"
    },
    {
        label: "SmartWatch",
        icon: "/browse_by_categories/smartwatch.svg"
    },
    {
        label: "Camera",
        icon: "/browse_by_categories/camera.svg"
    },
    {
        label: "HeadPhones",
        icon: "/browse_by_categories/headphone.svg"
    },
    {
        label: "Gaming",
        icon: "/browse_by_categories/gamepad.svg"
    },
]

// export const bestSellingProducts: Product[] = [
//     {
//         id: 'bs1',
//         name: 'The north coat',
//         price: 260,
//         originalPrice: 360,
//         discount: 100,
//         rating: 5,
//         reviews: 65,
//         offer: 35,
//         image: '/best_selling_products/coat.svg',
//         inStock: true,
//     },
//     {
//         id: 'bs2',
//         name: 'Gucci duffle bag',
//         price: 960,
//         originalPrice: 1160,
//         discount: 200,
//         rating: 5,
//         reviews: 65,
//         offer: 35,
//         image: '/best_selling_products/duffle-bag.svg',
//         inStock: true,
//     },
//     {
//         id: 'bs3',
//         name: 'RGB liquid CPU Cooler',
//         price: 160,
//         originalPrice: 170,
//         discount: 10,
//         rating: 5,
//         reviews: 65,
//         offer: 35,
//         image: '/best_selling_products/cpu-cooler.svg',
//         inStock: true,
//     },
//     {
//         id: 'bs4',
//         name: 'Small BookSelf',
//         price: 360,
//         originalPrice: 360,
//         discount: 0,
//         rating: 5,
//         reviews: 65,
//         image: '/best_selling_products/bookself.svg',
//         inStock: true,
//     },
// ]

// export const exploreOurProducts: Product[] = [
//     {
//         id: 'eop1',
//         name: 'Breed Dry Dog Food',
//         price: 100,
//         originalPrice: 100,
//         discount: 0,
//         rating: 5,
//         reviews: 35,
//         image: '/explore_our_products/dog-food.svg',
//         inStock: true,
//     },
//     {
//         id: "eop2",
//         name: 'CANON EOS DSLR Camera',
//         price: 360,
//         originalPrice: 360,
//         discount: 0,
//         rating: 5,
//         reviews: 35,
//         image: '/explore_our_products/dslr-camera.svg',
//         inStock: true,
//     },
//     {
//         id: "eop3",
//         name: 'ASUS FHD Gaming Laptop',
//         price: 700,
//         originalPrice: 700,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/laptop.svg',
//         inStock: true,
//     },
//     {
//         id: "eop4",
//         name: 'Curology Product Set ',
//         price: 500,
//         originalPrice: 500,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/copa-sense.svg',
//         inStock: true,
//     },
//     {
//         id: "eop5",
//         name: 'Kids Electric Car',
//         price: 960,
//         originalPrice: 960,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/kids-car.svg',
//         inStock: true,
//         offer: "New",
//     },
//     {
//         id: "eop6",
//         name: 'Jr. Zoom Soccer Cleats',
//         price: 1160,
//         originalPrice: 1160,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/copa-sense.svg',
//         inStock: true,
//     },
//     {
//         id: "eop7",
//         name: 'GP11 Shooter USB Gamepad',
//         price: 660,
//         originalPrice: 660,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/usb-gamepad.svg',
//         inStock: true,
//         offer: "New",
//     },
//     {
//         id: "eop8",
//         name: 'Quilted Satin Jacket',
//         price: 700,
//         originalPrice: 700,
//         discount: 0,
//         rating: 5,
//         reviews: 325,
//         image: '/explore_our_products/satin-jacket.svg',
//         inStock: true,
//     },
// ]

export const newArrival = [
    {
        id: "na1",
        title: "PlayStation 5",
        description: "Black and White version of the PS5 coming out on sale",
        image: "/new_arrival/playstation.svg"
    },
    {
        id: "na2",
        title: "Women`s Collections",
        description: "Featured woman collections that give you another vibe",
        image: "/new_arrival/women-collection.svg"
    },
    {
        id: "na3",
        title: "Speakers",
        description: "Amazon wireless speakers",
        image: "/new_arrival/speakers.svg"
    },
    {
        id: "na4",
        title: "Perfume",
        description: "GUCCI INTENSE OUD EDP",
        image: "/new_arrival/playstation.svg"
    },
]

export const accountDropDownList = [
    {
        label: "Manage My Account",
        icon: "/icons/user.svg",
        route: "/account"
    },
    {
        label: "My Order",
        icon: "/icons/my-order.svg",
        route: "/order"
    },
    {
        label: "My Cancellations",
        icon: "/icons/cancel.svg",
        route: "/"
    },
    {
        label: "My Reviews",
        icon: "/icons/review.svg",
        route: "/"
    },
    {
        label: "Logout",
        icon: "/icons/logout.svg",
        route: "#"
    },
]

// export const wishListItem: Product[] = [
//     {
//         id: "wl1",
//         name: "Gucci duffle bag",
//         price: 960,
//         originalPrice: 1160,
//         discount: 200,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/duffle-bag.svg",
//         inStock: true,
//     },
//     {
//         id: "wl2",
//         name: "RGB liquid CPU Cooler",
//         price: 1960,
//         originalPrice: 1960,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/cpu-cooler.svg",
//         inStock: true,
//     },
//     {
//         id: "wl3",
//         name: "GP11 Shooter USB Gamepad",
//         price: 550,
//         originalPrice: 550,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/use-gamepad.svg",
//         inStock: true,
//     },
//     {
//         id: "wl4",
//         name: "Quilted Satin Jacket",
//         price: 750,
//         originalPrice: 750,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/jacket.svg",
//         inStock: true,
//     },
// ]


// export const wishListJustForYou: Product[] = [
//     {
//         id: "wjfu1",
//         name: "ASUS FHD Gaming Laptop",
//         price: 960,
//         originalPrice: 1160,
//         discount: 200,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/laptop.svg",
//         inStock: true,
//     },
//     {
//         id: "wjfu2",
//         name: "IPS LCD Gaming Monitor",
//         price: 1160,
//         originalPrice: 1160,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/gaming-monitor.svg",
//         inStock: true,
//     },
//     {
//         id: "wjfu3",
//         name: "HAVIT HV-G92 Gamepad",
//         price: 560,
//         originalPrice: 560,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/gamepad.svg",
//         inStock: true,
//         label: "NEW",
//     },
//     {
//         id: "wjfu4",
//         name: "AK-900 Wired Keyboard",
//         price: 200,
//         originalPrice: 200,
//         discount: 0,
//         rating: 5,
//         reviews: 100,
//         image: "/wishlist/keyboard.svg",
//         inStock: true,
//     },
// ]




export const productData = {
    products: [
        {
            id: 'TECH001',
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/flashSales/gamepad.svg',
            inStock: true,
            label: 'New',
            category: 'Gaming'
        },
        {
            id: 'TECH002',
            name: 'AKG N700NC Wireless Headphones',
            price: 199,
            originalPrice: 299,
            discount: 100,
            rating: 4.5,
            reviews: 65,
            image: '/explore_our_products/kids-car.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH003',
            name: 'ASUS ROG Strix G15 Gaming Laptop',
            price: 1299,
            originalPrice: 1499,
            discount: 200,
            rating: 4.8,
            reviews: 112,
            image: '/explore_our_products/laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH004',
            name: 'Sony Alpha A7 III Mirrorless Camera',
            price: 1799,
            originalPrice: 1999,
            discount: 200,
            rating: 4.9,
            reviews: 201,
            image: '/explore_our_products/usb-gamepad.svg',
            inStock: true,
            category: 'Cameras'
        },
        {
            id: 'TECH005',
            name: 'Samsung 65" QLED 4K Smart TV',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 156,
            image: '/explore_our_products/laptop.svg',
            inStock: false,
            category: 'TVs'
        },
        {
            id: 'TECH006',
            name: 'Apple Watch Series 7',
            price: 379,
            originalPrice: 399,
            discount: 20,
            rating: 4.8,
            reviews: 302,
            image: '/explore_our_products/copa-sense.svg',
            inStock: true,
            category: 'Wearables'
        },
        {
            id: 'TECH007',
            name: 'Bose QuietComfort 45 Headphones',
            price: 279,
            originalPrice: 329,
            discount: 50,
            rating: 4.6,
            reviews: 89,
            image: '/explore_our_products/dog-food.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH008',
            name: 'DJI Mavic Air 2 Drone',
            price: 799,
            originalPrice: 899,
            discount: 100,
            rating: 4.7,
            reviews: 76,
            image: '/explore_our_products/satin-jacket.svg',
            inStock: true,
            category: 'Drones'
        },
        {
            id: 'TECH009',
            name: 'Fitbit Charge 5 Fitness Tracker',
            price: 129,
            originalPrice: 149,
            discount: 20,
            rating: 4.5,
            reviews: 210,
            image: '/browse_by_categories/smartwatch.svg',
            inStock: true,
            category: 'Wearables'
        },
        {
            id: 'TECH010',
            name: 'Logitech MX Master 3 Wireless Mouse',
            price: 89,
            originalPrice: 99,
            discount: 10,
            rating: 4.8,
            reviews: 178,
            image: '/browse_by_categories/headphone.svg',
            inStock: false,
            category: 'Accessories'
        },
        {
            id: 'TECH011',
            name: 'Kindle Paperwhite E-reader',
            price: 129,
            originalPrice: 139,
            discount: 10,
            rating: 4.6,
            reviews: 1205,
            image: '/browse_by_categories/computer.svg',
            inStock: true,
            category: 'E-readers'
        },
        {
            id: 'TECH012',
            name: 'Anker PowerCore 26800 Power Bank',
            price: 59,
            originalPrice: 69,
            discount: 10,
            rating: 4.7,
            reviews: 3201,
            image: '/browse_by_categories/camera.svg',
            inStock: true,
            category: 'Accessories'
        },
        {
            id: 'TECH013',
            name: 'Razer BlackWidow Elite Mechanical Keyboard',
            price: 129,
            originalPrice: 169,
            discount: 40,
            rating: 4.5,
            reviews: 892,
            image: '/browse_by_categories/gamepad.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'TECH014',
            name: 'GoPro HERO10 Black',
            price: 399,
            originalPrice: 499,
            discount: 100,
            rating: 4.7,
            reviews: 562,
            image: '/explore_our_products/dslr-camera.svg',
            inStock: true,
            category: 'Cameras'
        },
        {
            id: 'TECH015',
            name: 'Philips Hue White and Color Ambiance Starter Kit',
            price: 179,
            originalPrice: 199,
            discount: 20,
            rating: 4.6,
            reviews: 721,
            image: '/browse_by_categories/cell-phone.svg',
            inStock: true,
            category: 'Smart Home'
        },
        {
            id: 'TECH016',
            name: 'Beats Studio3 Wireless Headphones',
            price: 249,
            originalPrice: 349,
            discount: 100,
            rating: 4.5,
            reviews: 1102,
            image: '/browse_by_categories/headphone.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH017',
            name: 'Nintendo Switch OLED Model',
            price: 349,
            originalPrice: 349,
            discount: 0,
            rating: 4.9,
            reviews: 2105,
            image: '/browse_by_categories/gamepad.svg',
            inStock: false,
            label: 'New',
            category: 'Gaming'
        },
        {
            id: 'TECH018',
            name: 'Dyson V11 Absolute Cordless Vacuum',
            price: 599,
            originalPrice: 699,
            discount: 100,
            rating: 4.7,
            reviews: 892,
            image: '/products/vacuum.svg',
            inStock: false,
            category: 'Home Appliances'
        },
        {
            id: 'TECH019',
            name: 'LG 34" UltraWide Monitor',
            price: 449,
            originalPrice: 499,
            discount: 50,
            rating: 4.6,
            reviews: 456,
            image: '/products/monitor.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH020',
            name: 'Sonos One SL Wireless Speaker',
            price: 179,
            originalPrice: 199,
            discount: 20,
            rating: 4.8,
            reviews: 1023,
            image: '/products/speaker.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'FASH001',
            name: 'The North Face Coat',
            price: 260,
            originalPrice: 360,
            discount: 100,
            rating: 5,
            reviews: 65,
            image: '/products/coat.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'FASH002',
            name: 'Gucci Duffle Bag',
            price: 960,
            originalPrice: 1160,
            discount: 200,
            rating: 5,
            reviews: 65,
            image: '/products/duffle-bag.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'FASH003',
            name: 'Quilted Satin Jacket',
            price: 700,
            originalPrice: 700,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/satin-jacket.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'PET001',
            name: 'Breed Dry Dog Food',
            price: 100,
            originalPrice: 100,
            discount: 0,
            rating: 5,
            reviews: 35,
            image: '/products/dog-food.svg',
            inStock: true,
            category: 'Pet Supplies'
        },
        {
            id: 'KIDS001',
            name: 'Kids Electric Car',
            price: 960,
            originalPrice: 960,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/kids-car.svg',
            inStock: true,
            label: 'New',
            category: 'Kids'
        },
        {
            id: 'SPORT001',
            name: 'Jr. Zoom Soccer Cleats',
            price: 1160,
            originalPrice: 1160,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/soccer-cleats.svg',
            inStock: true,
            category: 'Sports'
        },
        {
            id: 'HOME001',
            name: 'Small Bookshelf',
            price: 360,
            originalPrice: 360,
            discount: 0,
            rating: 5,
            reviews: 65,
            image: '/products/bookshelf.svg',
            inStock: true,
            category: 'Home & Living'
        },
        {
            id: 'BEAUTY001',
            name: 'Curology Product Set',
            price: 500,
            originalPrice: 500,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/skincare-set.svg',
            inStock: true,
            category: 'Beauty'
        },
        {
            id: 'TECH021',
            name: 'iPad Pro 12.9-inch',
            price: 1099,
            originalPrice: 1199,
            discount: 100,
            rating: 4.9,
            reviews: 1523,
            image: '/products/ipad.svg',
            inStock: true,
            // offer: '8%',
            category: 'Tablets'
        },
        {
            id: 'TECH022',
            name: 'Microsoft Surface Laptop 4',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 876,
            image: '/products/surface-laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH023',
            name: 'Oculus Quest 2 VR Headset',
            price: 299,
            originalPrice: 399,
            discount: 100,
            rating: 4.8,
            reviews: 2341,
            image: '/products/vr-headset.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'HOME002',
            name: 'Instant Pot Duo 7-in-1',
            price: 79,
            originalPrice: 99,
            discount: 20,
            rating: 4.7,
            reviews: 5678,
            image: '/products/instant-pot.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'SPORT002',
            name: 'Peloton Bike+',
            price: 2495,
            originalPrice: 2495,
            discount: 0,
            rating: 4.8,
            reviews: 1234,
            image: '/products/peloton.svg',
            inStock: true,
            label: 'Premium',
            category: 'Sports'
        },
        {
            id: 'TECH021',
            name: 'iPad Pro 12.9-inch',
            price: 1099,
            originalPrice: 1199,
            discount: 100,
            rating: 4.9,
            reviews: 1523,
            image: '/products/ipad.svg',
            inStock: true,
            category: 'Tablets'
        },
        {
            id: 'TECH022',
            name: 'Microsoft Surface Laptop 4',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 876,
            image: '/products/surface-laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH023',
            name: 'Oculus Quest 2 VR Headset',
            price: 299,
            originalPrice: 399,
            discount: 100,
            rating: 4.8,
            reviews: 2341,
            image: '/products/vr-headset.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'HOME002',
            name: 'Instant Pot Duo 7-in-1',
            price: 79,
            originalPrice: 99,
            discount: 20,
            rating: 4.7,
            reviews: 5678,
            image: '/products/instant-pot.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'SPORT002',
            name: 'Peloton Bike+',
            price: 2495,
            originalPrice: 2495,
            discount: 0,
            rating: 4.8,
            reviews: 1234,
            image: '/products/peloton.svg',
            inStock: true,
            label: 'Premium',
            category: 'Sports'
        },
        {
            id: 'TECH024',
            name: 'Dell XPS 13 Laptop',
            price: 1299,
            originalPrice: 1499,
            discount: 200,
            rating: 4.8,
            reviews: 1876,
            image: '/products/dell-xps.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH025',
            name: 'Sony WH-1000XM4 Wireless Headphones',
            price: 349,
            originalPrice: 399,
            discount: 50,
            rating: 4.9,
            reviews: 3241,
            image: '/products/sony-headphones.svg',
            inStock: true,
            category: 'Audio'
        },
        {
            id: 'HOME003',
            name: 'Roomba i7+ Robot Vacuum',
            price: 799,
            originalPrice: 999,
            discount: 200,
            rating: 4.6,
            reviews: 2345,
            image: '/products/roomba.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'FASH004',
            name: 'Ray-Ban Aviator Sunglasses',
            price: 154,
            originalPrice: 204,
            discount: 50,
            rating: 4.7,
            reviews: 5678,
            image: '/products/rayban.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'TECH026',
            name: 'Canon EOS R6 Mirrorless Camera',
            price: 2499,
            originalPrice: 2799,
            discount: 300,
            rating: 4.8,
            reviews: 876,
            image: '/products/canon-eos.svg',
            inStock: true,
            category: 'Cameras'
        }
    ],
    categories: [
        { id: 'cat001', name: 'Gaming', count: 4 },
        { id: 'cat002', name: 'Audio', count: 5 },
        { id: 'cat003', name: 'Computers', count: 4 },
        { id: 'cat004', name: 'Cameras', count: 3 },
        { id: 'cat005', name: 'TVs', count: 1 },
        { id: 'cat006', name: 'Wearables', count: 2 },
        { id: 'cat007', name: 'Drones', count: 1 },
        { id: 'cat008', name: 'Accessories', count: 2 },
        { id: 'cat009', name: 'E-readers', count: 1 },
        { id: 'cat010', name: 'Smart Home', count: 1 },
        { id: 'cat011', name: 'Home Appliances', count: 3 },
        { id: 'cat012', name: 'Fashion', count: 4 },
        { id: 'cat013', name: 'Pet Supplies', count: 1 },
        { id: 'cat014', name: 'Kids', count: 1 },
        { id: 'cat015', name: 'Sports', count: 2 },
        { id: 'cat016', name: 'Home & Living', count: 1 },
        { id: 'cat017', name: 'Beauty', count: 1 },
        { id: 'cat018', name: 'Tablets', count: 1 }
    ],
    filters: {
        priceRange: {
            min: 59,
            max: 1799
        },
        ratings: [5, 4, 3, 2, 1],
        brands: [
            'HAVIT', 'AKG', 'ASUS', 'Sony', 'Samsung', 'Apple', 'Bose', 'DJI', 'Fitbit',
            'Logitech', 'Amazon', 'Anker', 'Razer', 'GoPro', 'Philips', 'Beats', 'Nintendo',
            'Dyson', 'LG', 'Sonos', 'The North Face', 'Gucci', 'Breed', 'Curology'
        ]
    },
    specialCollections: {
        flashSale: ['TECH003', 'BEAUTY001', 'TECH007', 'TECH019', 'TECH014', 'TECH001', 'FASH001', 'TECH013', 'TECH006, TECH021', 'TECH024', 'TECH025', 'HOME003',],
        bestSelling: ['TECH001', 'FASH001', 'TECH013', 'TECH006, TECH021', 'TECH024', 'TECH025', 'HOME003',],
        exploreOurProducts: ['TECH001', 'FASH001', 'PET001', 'TECH003', 'BEAUTY001', 'TECH014', 'TECH022', 'FASH004', 'FASH002', 'HOME002', 'SPORT002', 'TECH026', 'TECH022'],
        justForYou: ['TECH002', 'TECH007', 'TECH019', 'FASH002', 'HOME002', 'SPORT002', 'TECH026', 'TECH022']
    }
};

// export const filterProductsByCategory = (category: string) => {
//     return productData.products.filter(product => product.category === category);
// };

export const ProductDataSchema = {
    products: [
        {
            id: 'TECH001',
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88,
            image: '/flashSales/gamepad.svg',
            inStock: true,
            label: 'New',
            category: 'Gaming'
        },
        {
            id: 'TECH002',
            name: 'AKG N700NC Wireless Headphones',
            price: 199,
            originalPrice: 299,
            discount: 100,
            rating: 4.5,
            reviews: 65,
            image: '/explore_our_products/kids-car.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH003',
            name: 'ASUS ROG Strix G15 Gaming Laptop',
            price: 1299,
            originalPrice: 1499,
            discount: 200,
            rating: 4.8,
            reviews: 112,
            image: '/explore_our_products/laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH004',
            name: 'Sony Alpha A7 III Mirrorless Camera',
            price: 1799,
            originalPrice: 1999,
            discount: 200,
            rating: 4.9,
            reviews: 201,
            image: '/explore_our_products/usb-gamepad.svg',
            inStock: true,
            category: 'Cameras'
        },
        {
            id: 'TECH005',
            name: 'Samsung 65" QLED 4K Smart TV',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 156,
            image: '/explore_our_products/laptop.svg',
            inStock: false,
            category: 'TVs'
        },
        {
            id: 'TECH006',
            name: 'Apple Watch Series 7',
            price: 379,
            originalPrice: 399,
            discount: 20,
            rating: 4.8,
            reviews: 302,
            image: '/explore_our_products/copa-sense.svg',
            inStock: true,
            category: 'Wearables'
        },
        {
            id: 'TECH007',
            name: 'Bose QuietComfort 45 Headphones',
            price: 279,
            originalPrice: 329,
            discount: 50,
            rating: 4.6,
            reviews: 89,
            image: '/explore_our_products/dog-food.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH008',
            name: 'DJI Mavic Air 2 Drone',
            price: 799,
            originalPrice: 899,
            discount: 100,
            rating: 4.7,
            reviews: 76,
            image: '/explore_our_products/satin-jacket.svg',
            inStock: true,
            category: 'Drones'
        },
        {
            id: 'TECH009',
            name: 'Fitbit Charge 5 Fitness Tracker',
            price: 129,
            originalPrice: 149,
            discount: 20,
            rating: 4.5,
            reviews: 210,
            image: '/browse_by_categories/smartwatch.svg',
            inStock: true,
            category: 'Wearables'
        },
        {
            id: 'TECH010',
            name: 'Logitech MX Master 3 Wireless Mouse',
            price: 89,
            originalPrice: 99,
            discount: 10,
            rating: 4.8,
            reviews: 178,
            image: '/browse_by_categories/headphone.svg',
            inStock: false,
            category: 'Accessories'
        },
        {
            id: 'TECH011',
            name: 'Kindle Paperwhite E-reader',
            price: 129,
            originalPrice: 139,
            discount: 10,
            rating: 4.6,
            reviews: 1205,
            image: '/browse_by_categories/computer.svg',
            inStock: true,
            category: 'E-readers'
        },
        {
            id: 'TECH012',
            name: 'Anker PowerCore 26800 Power Bank',
            price: 59,
            originalPrice: 69,
            discount: 10,
            rating: 4.7,
            reviews: 3201,
            image: '/browse_by_categories/camera.svg',
            inStock: true,
            category: 'Accessories'
        },
        {
            id: 'TECH013',
            name: 'Razer BlackWidow Elite Mechanical Keyboard',
            price: 129,
            originalPrice: 169,
            discount: 40,
            rating: 4.5,
            reviews: 892,
            image: '/browse_by_categories/gamepad.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'TECH014',
            name: 'GoPro HERO10 Black',
            price: 399,
            originalPrice: 499,
            discount: 100,
            rating: 4.7,
            reviews: 562,
            image: '/explore_our_products/dslr-camera.svg',
            inStock: true,
            category: 'Cameras'
        },
        {
            id: 'TECH015',
            name: 'Philips Hue White and Color Ambiance Starter Kit',
            price: 179,
            originalPrice: 199,
            discount: 20,
            rating: 4.6,
            reviews: 721,
            image: '/browse_by_categories/cell-phone.svg',
            inStock: true,
            category: 'Smart Home'
        },
        {
            id: 'TECH016',
            name: 'Beats Studio3 Wireless Headphones',
            price: 249,
            originalPrice: 349,
            discount: 100,
            rating: 4.5,
            reviews: 1102,
            image: '/browse_by_categories/headphone.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'TECH017',
            name: 'Nintendo Switch OLED Model',
            price: 349,
            originalPrice: 349,
            discount: 0,
            rating: 4.9,
            reviews: 2105,
            image: '/browse_by_categories/gamepad.svg',
            inStock: false,
            label: 'New',
            category: 'Gaming'
        },
        {
            id: 'TECH018',
            name: 'Dyson V11 Absolute Cordless Vacuum',
            price: 599,
            originalPrice: 699,
            discount: 100,
            rating: 4.7,
            reviews: 892,
            image: '/products/vacuum.svg',
            inStock: false,
            category: 'Home Appliances'
        },
        {
            id: 'TECH019',
            name: 'LG 34" UltraWide Monitor',
            price: 449,
            originalPrice: 499,
            discount: 50,
            rating: 4.6,
            reviews: 456,
            image: '/products/monitor.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH020',
            name: 'Sonos One SL Wireless Speaker',
            price: 179,
            originalPrice: 199,
            discount: 20,
            rating: 4.8,
            reviews: 1023,
            image: '/products/speaker.svg',
            inStock: false,
            category: 'Audio'
        },
        {
            id: 'FASH001',
            name: 'The North Face Coat',
            price: 260,
            originalPrice: 360,
            discount: 100,
            rating: 5,
            reviews: 65,
            image: '/products/coat.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'FASH002',
            name: 'Gucci Duffle Bag',
            price: 960,
            originalPrice: 1160,
            discount: 200,
            rating: 5,
            reviews: 65,
            image: '/products/duffle-bag.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'FASH003',
            name: 'Quilted Satin Jacket',
            price: 700,
            originalPrice: 700,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/satin-jacket.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'PET001',
            name: 'Breed Dry Dog Food',
            price: 100,
            originalPrice: 100,
            discount: 0,
            rating: 5,
            reviews: 35,
            image: '/products/dog-food.svg',
            inStock: true,
            category: 'Pet Supplies'
        },
        {
            id: 'KIDS001',
            name: 'Kids Electric Car',
            price: 960,
            originalPrice: 960,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/kids-car.svg',
            inStock: true,
            label: 'New',
            category: 'Kids'
        },
        {
            id: 'SPORT001',
            name: 'Jr. Zoom Soccer Cleats',
            price: 1160,
            originalPrice: 1160,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/soccer-cleats.svg',
            inStock: true,
            category: 'Sports'
        },
        {
            id: 'HOME001',
            name: 'Small Bookshelf',
            price: 360,
            originalPrice: 360,
            discount: 0,
            rating: 5,
            reviews: 65,
            image: '/products/bookshelf.svg',
            inStock: true,
            category: 'Home & Living'
        },
        {
            id: 'BEAUTY001',
            name: 'Curology Product Set',
            price: 500,
            originalPrice: 500,
            discount: 0,
            rating: 5,
            reviews: 325,
            image: '/products/skincare-set.svg',
            inStock: true,
            category: 'Beauty'
        },
        {
            id: 'TECH021',
            name: 'iPad Pro 12.9-inch',
            price: 1099,
            originalPrice: 1199,
            discount: 100,
            rating: 4.9,
            reviews: 1523,
            image: '/products/ipad.svg',
            inStock: true,
            // offer: '8%',
            category: 'Tablets'
        },
        {
            id: 'TECH022',
            name: 'Microsoft Surface Laptop 4',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 876,
            image: '/products/surface-laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH023',
            name: 'Oculus Quest 2 VR Headset',
            price: 299,
            originalPrice: 399,
            discount: 100,
            rating: 4.8,
            reviews: 2341,
            image: '/products/vr-headset.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'HOME002',
            name: 'Instant Pot Duo 7-in-1',
            price: 79,
            originalPrice: 99,
            discount: 20,
            rating: 4.7,
            reviews: 5678,
            image: '/products/instant-pot.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'SPORT002',
            name: 'Peloton Bike+',
            price: 2495,
            originalPrice: 2495,
            discount: 0,
            rating: 4.8,
            reviews: 1234,
            image: '/products/peloton.svg',
            inStock: true,
            label: 'Premium',
            category: 'Sports'
        },
        {
            id: 'TECH021',
            name: 'iPad Pro 12.9-inch',
            price: 1099,
            originalPrice: 1199,
            discount: 100,
            rating: 4.9,
            reviews: 1523,
            image: '/products/ipad.svg',
            inStock: true,
            category: 'Tablets'
        },
        {
            id: 'TECH022',
            name: 'Microsoft Surface Laptop 4',
            price: 999,
            originalPrice: 1299,
            discount: 300,
            rating: 4.7,
            reviews: 876,
            image: '/products/surface-laptop.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH023',
            name: 'Oculus Quest 2 VR Headset',
            price: 299,
            originalPrice: 399,
            discount: 100,
            rating: 4.8,
            reviews: 2341,
            image: '/products/vr-headset.svg',
            inStock: false,
            category: 'Gaming'
        },
        {
            id: 'HOME002',
            name: 'Instant Pot Duo 7-in-1',
            price: 79,
            originalPrice: 99,
            discount: 20,
            rating: 4.7,
            reviews: 5678,
            image: '/products/instant-pot.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'SPORT002',
            name: 'Peloton Bike+',
            price: 2495,
            originalPrice: 2495,
            discount: 0,
            rating: 4.8,
            reviews: 1234,
            image: '/products/peloton.svg',
            inStock: true,
            label: 'Premium',
            category: 'Sports'
        },
        {
            id: 'TECH024',
            name: 'Dell XPS 13 Laptop',
            price: 1299,
            originalPrice: 1499,
            discount: 200,
            rating: 4.8,
            reviews: 1876,
            image: '/products/dell-xps.svg',
            inStock: true,
            category: 'Computers'
        },
        {
            id: 'TECH025',
            name: 'Sony WH-1000XM4 Wireless Headphones',
            price: 349,
            originalPrice: 399,
            discount: 50,
            rating: 4.9,
            reviews: 3241,
            image: '/products/sony-headphones.svg',
            inStock: true,
            category: 'Audio'
        },
        {
            id: 'HOME003',
            name: 'Roomba i7+ Robot Vacuum',
            price: 799,
            originalPrice: 999,
            discount: 200,
            rating: 4.6,
            reviews: 2345,
            image: '/products/roomba.svg',
            inStock: true,
            category: 'Home Appliances'
        },
        {
            id: 'FASH004',
            name: 'Ray-Ban Aviator Sunglasses',
            price: 154,
            originalPrice: 204,
            discount: 50,
            rating: 4.7,
            reviews: 5678,
            image: '/products/rayban.svg',
            inStock: true,
            category: 'Fashion'
        },
        {
            id: 'TECH026',
            name: 'Canon EOS R6 Mirrorless Camera',
            price: 2499,
            originalPrice: 2799,
            discount: 300,
            rating: 4.8,
            reviews: 876,
            image: '/products/canon-eos.svg',
            inStock: true,
            category: 'Cameras'
        }
    ],
    categories: [
        { id: 'cat001', name: 'Gaming', count: 4 },
        { id: 'cat002', name: 'Audio', count: 5 },
        { id: 'cat003', name: 'Computers', count: 4 },
        { id: 'cat004', name: 'Cameras', count: 3 },
        { id: 'cat005', name: 'TVs', count: 1 },
        { id: 'cat006', name: 'Wearables', count: 2 },
        { id: 'cat007', name: 'Drones', count: 1 },
        { id: 'cat008', name: 'Accessories', count: 2 },
        { id: 'cat009', name: 'E-readers', count: 1 },
        { id: 'cat010', name: 'Smart Home', count: 1 },
        { id: 'cat011', name: 'Home Appliances', count: 3 },
        { id: 'cat012', name: 'Fashion', count: 4 },
        { id: 'cat013', name: 'Pet Supplies', count: 1 },
        { id: 'cat014', name: 'Kids', count: 1 },
        { id: 'cat015', name: 'Sports', count: 2 },
        { id: 'cat016', name: 'Home & Living', count: 1 },
        { id: 'cat017', name: 'Beauty', count: 1 },
        { id: 'cat018', name: 'Tablets', count: 1 }
    ],
    filters: {
        priceRange: {
            min: 59,
            max: 1799
        },
        ratings: [5, 4, 3, 2, 1],
        brands: [
            'HAVIT', 'AKG', 'ASUS', 'Sony', 'Samsung', 'Apple', 'Bose', 'DJI', 'Fitbit',
            'Logitech', 'Amazon', 'Anker', 'Razer', 'GoPro', 'Philips', 'Beats', 'Nintendo',
            'Dyson', 'LG', 'Sonos', 'The North Face', 'Gucci', 'Breed', 'Curology'
        ]
    },
    specialCollections: {
        flashSale: ['TECH003', 'BEAUTY001', 'TECH007', 'TECH019', 'TECH014', 'TECH001', 'FASH001', 'TECH013', 'TECH006, TECH021', 'TECH024', 'TECH025', 'HOME003',],
        bestSelling: ['TECH001', 'FASH001', 'TECH013', 'TECH006, TECH021', 'TECH024', 'TECH025', 'HOME003',],
        exploreOurProducts: ['TECH001', 'FASH001', 'PET001', 'TECH003', 'BEAUTY001', 'TECH014', 'TECH022', 'FASH004', 'FASH002', 'HOME002', 'SPORT002', 'TECH026', 'TECH022'],
        justForYou: ['TECH002', 'TECH007', 'TECH019', 'FASH002', 'HOME002', 'SPORT002', 'TECH026', 'TECH022']
    }
};