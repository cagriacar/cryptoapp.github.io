/* 
  setInterval(
    async () => {
        const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        if (response.status !== 200) {
          throw new Error('Veriler alınamıyor!!!');
        }
      
        const data =  await response.json();
     
        console.log(data);
      }
    ,1000);
    */

/* https://api.coindesk.com/v1/bpi/currentprice.json */
/* https://api.coindesk.com/v1/bpi/historical/close.json */
const coins = document.getElementById("coins");
const selectedInfo = document.querySelector('.selectedInfo')
let dataChange = null;
document.addEventListener('DOMContentLoaded',() => {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((response)=>{
return response.json();
})
.then((data)=>{
dataChange = data;
  
  coins.innerHTML = `
  <option  selected  disabled>Seçiniz</option>
  <option value="${data.bpi.USD.code}">${data.bpi.USD.code}</option>
  <option value="${data.bpi.GBP.code}">${data.bpi.GBP.code}</option>
  <option value="${data.bpi.EUR.code}">${data.bpi.EUR.code}</option>
  `;
})
.catch((err)=>{
  console.log("Rejected : ",err)

});
})

coins.addEventListener('change',function(){
  let cValue = coins.value;
  console.log(dataChange.bpi.EUR)
  if (cValue === 'USD') {
    selectedInfo.innerHTML = `
  <h3>${dataChange.bpi.USD.code}</h3>
  <p>${dataChange.bpi.USD.description}</p>
  <span>${dataChange.bpi.USD.symbol}</span><span>${dataChange.bpi.USD.rate}</span>
  `;
  }
  else if (cValue === 'GBP') {
    selectedInfo.innerHTML = `
  <h3>${dataChange.bpi.GBP.code}</h3>
  <p>${dataChange.bpi.GBP.description}</p>
  <span>${dataChange.bpi.GBP.symbol}</span><span>${dataChange.bpi.USD.rate}</span>
  `;
  }
  else if (cValue === 'EUR') {
    selectedInfo.innerHTML = `
  <h3>${dataChange.bpi.EUR.code}</h3>
  <p>${dataChange.bpi.EUR.description}</p>
  <span>${dataChange.bpi.EUR.symbol}</span><span>${dataChange.bpi.EUR.rate}</span>
  `;
  }

})



