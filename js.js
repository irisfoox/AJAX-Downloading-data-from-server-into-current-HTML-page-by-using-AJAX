//https://api.coingecko.com/api/v3/coins/list
function getData(){
    $.get("https://api.coingecko.com/api/v3/coins/list",function f(data){
        let i 
        for(i=0;i<10;i++){
            $("#cards").append(
                <div class="card displayin">
                 <div class="card-body">
                   <h5 class="card-title">${data[i].name}</h5>
                   <h6 class="card-subtitle mb-2 text-muted">${data[i].id}</h6>
                   <p class="card-text">${data[i].symbol}</p>
                 </div>
                </div>
            ).html()
            console.log(data[i])
        }
    })
}
getData()
