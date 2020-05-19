//引入npm包
const xlsx = require('node-xlsx');
const fs = require('fs');

//读取文件内容
const obj = xlsx.parse('./test.xlsx');
console.log(obj);
const excelObj=obj[0].data;

//处理数据
const data = [];
for(let i in excelObj){
    let row = excelObj[i];
    if (typeof row[0] !== "number") {
        data.push(row);
    } else {
        let hour = row[0];
        let duration = row[1];
        let sum = hour * duration;
        let pay = 15;
        let income = sum * pay;
        data.push([hour, duration, sum, pay, income]);
    }
}
console.log(data);

//将经过处理的数据写入新的xlsx文件中
const buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    }
]);
fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
