const mobile = document.querySelector(".mobile")

const phones = [
    {
        brand: 'Samsung',
        img: "https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 159000,
    },
    {
        brand: 'Xiomi',
        img: "https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 31999,
    },
    {
        brand: 'Infinix',
        img: "https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 5,
        rom: 16,
        camera: '5 megapixel',
        price: 34999,
    },
    {
        brand: 'Tecno',
        img: "https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 39999,
    },
    {
        brand: 'Iphone',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 234999,
    },
    {
        brand: 'Oppo',
        img: "https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img: "https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 26999,
    },
    {
        brand: 'Huawei',
        img: "https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price: 26999,
    },

]
for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    mobile.innerHTML += `<div class ="c-div main ">
    <h2 > ${phones[i].brand}</h2>
    <img class="js-img" src=" ${phones[i].img}" alt="">
   <p  class = "h4"> <b>Ram: ${phones[i].ram}</p></b>
   <p  class = "h4"><b> Rom: ${phones[i].rom}</p></b>
    <p  class = "h4"><b>Camera: ${phones[i].camera}</p></b>
    <p  class = "h4"><b>Price: ${phones[i].price}</p></b>
<button onclick = "addtocart(${i})" class="btn">ADD to cart </button>
</div>
`
}

const addcartarr = [];


function addtocart(index) {
    console.log(phones[index]);
    if (addcartarr.includes(phones[index])) {
        // addcartarr.push(phones[index])
        for (let i = 0; i < addcartarr.length; i++) {
            if (addcartarr[i] === phones[index]) {
                phones[index].quantity += 1
            }
        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added To Cart',
            showConfirmButton: false,
            timer: 1500
        })
        phones[index].quantity = 1
        addcartarr.push(phones[index])
    }
    // console.log(addcartarr);

}

function gocart(params) {
    const cart = JSON.stringify(addcartarr);
    localStorage.setItem("addcartarr", cart)
    // console.log("cart called");
    window.location = "./cart.html "
}

function login(params) {
    window.location = './login.html'
}



function logreg(params) {
    window.location = './register.html'
    
}