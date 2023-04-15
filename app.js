const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

if(hour < 12){
    console.log(hour,min,sec,"AM");
}else{
    console.log(hour-12,min,sec,"PM");
}

