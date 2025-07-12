const admin = document.getElementById("Admin");
const PError = document.getElementById("PError");

if (!admin) {
    console.error('Form with id="Admin" not found in the DOM.');
} else {
    admin.addEventListener("submit", function(event) {
        event.preventDefault();
        PError.textContent = "";

        let isValid = true;
        const productName = document.getElementById("productName").value.trim();
        const productRate = document.getElementById("productRate").value.trim();
        const productDsc = document.getElementById("productDsc").value.trim();
        const producturl = document.getElementById("producturl").value.trim();

        if (!productName || !productRate || !productDsc || !producturl) {
            PError.textContent = "** All product details are required";
            isValid = false;
        }

        if (isValid) {
            const newProduct = {
                item: productName,
                rate: productRate,
                dsc: productDsc,
                img: producturl
            };
            
            // Save product to localStorage
            let savedProducts = JSON.parse(localStorage.getItem("newProducts")) || [];
            savedProducts.push(newProduct);
            localStorage.setItem("newProducts", JSON.stringify(savedProducts));

            alert("Product added successfully!");
            //window.location.href = "FashionWorld.html";

        }
    })}




    // let products = [
    //     { item: "iPad", rate: 41999, dsc: "Prime Members Can Enjoy Unlimited Free Shipping, Early Access To Lightning Deals", img: "https://th.bing.com/th?id=OPAC.tONn0%2b9X6Lv3rQ474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1" },
    //     { item: "Laptop", rate: 100000, dsc: "High-performance laptop for coding, gaming, and design.", img: "https://th.bing.com/th?id=OPAC.mMP8G1X%2bPtgOKg474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1" },
    //     { item: "Smartphone", rate: 69999, dsc: "Flagship phone with triple camera and AMOLED display.", img: "https://thaka.bing.com/th?q=I14+Pro+Max+Smartphone&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    //     { item: "Smartwatch", rate: 15999, dsc: "Track fitness, heart rate, and get notifications on the go.", img: "https://thaka.bing.com/th/id/OIP.Cgg7x4IfpiNhCdalpA8DOQHaHc?w=198&h=199&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7"},
    //     { item: "Bluetooth Speaker", rate: 4999, dsc: "Portable speaker with rich bass and waterproof design.", img: "https://thaka.bing.com/th/id/OIP.P2-VvoieEgA0-3ZXJ41eCAHaLT?w=129&h=196&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" },
    //     { item: "Wireless Earbuds", rate: 2999, dsc: "Noise cancellation and long battery life for calls and music.", img: "https://thaka.bing.com/th/id/OIP.dVfJuk_WPbGJ45UBzCrCnQHaHt?w=210&h=219&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" },
    //     { item: "DSLR Camera", rate: 55999, dsc: "Capture stunning photos and 4K videos with precision.", img: "https://thaka.bing.com/th/id/OIP.2ewPvAlmOFp9wmJjHt3lVwHaHa?w=189&h=188&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" },
    //     { item: "Gaming Console", rate: 44999, dsc: "Experience next-gen gaming with ultra-fast load times.", img: "https://thaka.bing.com/th/id/OIP.amek30aNSp3e8_iT3AHi5AHaHa?w=173&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7" },
    //     { item: "External Hard Drive", rate: 6999, dsc: "2TB storage for all your data backup needs.", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356880cv11d.jpg" },
    //     { item: "Mechanical Keyboard", rate: 3499, dsc: "RGB backlit keyboard for a premium typing experience.", img: "https://ts4.mm.bing.net/th?id=OIP.ZJjkGZGSeTAm7ukxIW4X7wHaE8&pid=15.1" },
    // ];
    




