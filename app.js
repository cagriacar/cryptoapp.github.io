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



