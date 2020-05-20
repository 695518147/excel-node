var fs = require('fs');
var xlsx = require('node-xlsx');
var datas = [];
for(let i = 0; i < 100000; i++){
    datas.push([i, i, i]);
}
writeXls(datas);

function writeXls(datas) {
    var buffer = xlsx.build([
        {
            name: 'sheet1',
            data: datas
        }
    ]);
    fs.writeFileSync('test1.xlsx', buffer, {'flag': 'w'});   //生成excel

}
