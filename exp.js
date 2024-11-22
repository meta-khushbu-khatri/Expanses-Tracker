let total=0;

function fndexp(){
const catitems = document.getElementById("cat-items").value;
const amount=parseInt(document.getElementById("amt-item").value);
const dateitem= document.getElementById("date-item").value;
// const addbtn = document.getElementById("btn").value;
const fetchdata = document.getElementById("expanses-table");
const totalex=document.getElementById("total");
console.log(catitems)
console.log(amount)
console.log(dateitem)

if(catitems && dateitem && !isNaN(amount)){
    const newrow = document.createElement('tr');
    newrow.innerHTML=`<td>${catitems}</td>
                      <td>${amount}</td>
                      <td>${dateitem}</td>`
                      console.log(newrow)
                      fetchdata.appendChild(newrow);     
                      localStorage.setItem("catitems",catitems.value); 
                    //   localStorage.setItem("amount",amount.value); 
                    //   localStorage.setItem("date",dateitem.value);     
    
total +=amount;
console.log(total)
totalex.innerHTML=total;

document.getElementById("cat-items").value ="";
document.getElementById("amt-item").value ="";
document.getElementById("date-item").value="";


}
else{
    alert("Please enter the correct value:");
}



// const Categorycell = newrow.insertCell();
// const amountcell = newrow.insertCell();
// const datecell = newrow.insertCell();

// console.log(newrow);
// console.log(addbtn)


}