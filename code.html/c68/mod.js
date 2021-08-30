console.log('this is mod.js')
function average(arr){
    let sum =0;
    arr.forEach(element =>{
        sum+= element;
    });
    return sum/arr.length;
}

// module.experts ={
//     avg:average,
//     name:"harry",
//     repo:"Github"
// } 

module.exports.name="harry"