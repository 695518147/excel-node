### node-xlsx

### 1.读取功能    返回结果，name：表名，data：二维数组--由于Excel以表格的形式表示，因此表格的数据都是通过二维数组进行接收。
```js
var list = xlsx.parse("./hello.xlsx");
```

### 2.写入功能    对应的写入数据与上面读取功能的返回格式需要一致，以数组的形式，name：表名，data：二维数组--Excel每行每列的数据。
```js
let workbook = [
    {
        name: 'firstSheet',
        data: [
            [1, 2, 3],
            [4, 5, 6]
        ],
    },
    {
        name: 'secondSheet',
        data: [
            [7, 8, 9],
            [10, 1, 12]
        ],
    }
]
```

### 3.生成excel
```
    fs.writeFileSync(ptah，Buffer数据)
    xlsx.build(workbook)会将数组转换为Buffer数据
    执行下面命令就会生成对应的Excel文件。
    fs.writeFileSync('./hello.xlsx',xlsx.build(xlsxObj),"binary");
```

