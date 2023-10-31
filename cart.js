
function gohome(params) {
    window.location = "./index.html"
 }
 
 
 const maindiv = document.getElementById("main-div")
 const div = document.getElementById("div")
 
 
 
 let data = localStorage.getItem("addcartarr")
 let retarray = JSON.parse(data)
//  console.log(addcartarr);
 
 
 
 function render() {
    for (let i = 0; i < retarray.length; i++) {
 retarray[i].totalprice =+ `${retarray[i].price} * ${retarray[i].quantity} `
//  console.log(addcartarr[i]);
 maindiv.innerHTML += `<div class ="c-div main ">
 <h2 > ${retarray[i].brand}</h2>
 <img class="js-img" src=" ${retarray[i].img}" alt="">
 <p  class = "h4"> <b>Ram: ${retarray[i].ram}</p></b>
 <p  class = "h4"><b> Rom: ${retarray[i].rom}</p></b>
 <p  class = "h4"><b>Camera: ${retarray[i].camera}</p></b>
 <p  class = "h4"><b>Price: ${retarray[i]} </p></b>
 <p  class = "h4"><b>Price: ${retarray[i].quantity} </p></b>
 <p  class = "h4"><b>Price: ${retarray[i].TotalPrice} </p></b>
 <button onclick = "delete(${i})" class="btn">Delete</button>
 </div>
 `
    }
 }
 render()
 // const div = document.querySelector("#main-div");
 
 
 function renderCart() {
   let totals = 0;
   total.innerHTML = " "
   if (array.length > 0) {
       for (let i = 0; i < array.length; i++) {
           totals += array[i].price * array[i].quantity;
           parent.innerHTML += `
           <div class = 'flex'> 
            <div class = 'main'>
            <img class="image" src = "${array[i].img}">
            <h3><b>Brand</b>: ${array[i].brand}</h3>
          <p> <b>Model</b>: ${array[i].model}<br>
   <b>Ram</b>: ${array[i].ram}<br>
       <b>Rom</b>: ${array[i].rom}<br>
       <b>Camera</b>: ${array[i].camera}<br>
       <b>Quantity</b>: ${array[i].quantity}<br>
       <b>Price</b>: ${array[i].price}<br>
        <b>Total price</b>: ${array[i].price * array[i].quantity}</p>
            <button onclick = "sub(${i})" class = "btn">-</button>
            <button onclick = "add(${i})" class = "btn">+</button><br>
            <button  onclick = "delete(${i})" class = "addbtns">Delete</button>
            </div> 
            </div> 
           `



           total.innerHTML = `<p class ='total'><b>Total Price:${totals}</p></b> `;

       }


   } else {
       parent.innerHTML = '<center><h2>No item Found..</h2></center>'
   }
}





cartrender()



