obj={
    "name" : "Pavithra",
    "age" : 18,
    "city" : "Coimbatore"
}
for(i=0;i<Object.keys(obj).length; i++){

    //console.log(i,obj[i]);  //undefined
    console.log(i, Object.keys(obj)[i]);

}
for(i in obj){
    console.log(i, obj[i]);
}
for(i of Object.entries(obj)){
    console.log(i);
}

arr=[10, 20, 30, 40, 50]
for(i of arr){
    console.log(i);
}

for(i in arr){
    console.log(i, arr[i]);
}