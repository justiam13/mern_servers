const {getdata,getRaw} =require('./utils')

function processData(){
    return `Processed:${getdata()}`
}
function processRaw (){
    return getRaw()
}
module.exports={processData,processRaw}