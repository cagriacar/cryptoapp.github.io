const btnShow = document.getElementById('show');
const labels2= [];
const data2= [];
fetch("https://api.coindesk.com/v1/bpi/historical/close.json")
.then((response)=>{
return response.json();
})
.then((data)=>{

let newList = Object.keys(data.bpi);
newList.forEach((item)=> {
labels2.push(item)
})
let newData = Object.values(data.bpi);
newData.forEach((item)=> {
  data2.push(item)
  });
})
.catch((err)=>{
  console.log("Rejected : ",err)

});


btnShow.addEventListener('click',function(){

const data = {
  labels: labels2,
  datasets: [{
    label: 'BitCoin Price',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: data2,
  }]
};
const config = {
  type: 'line',
  data: data,
  options: {}
};
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
})