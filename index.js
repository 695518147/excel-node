// 选择范围写入
const fs = require("fs");
let buf = Buffer.from("你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗" +
    "你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗" +
    "你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗" +
    "你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗");

// 打开文件
fs.open("6.txt", "r+", (err, fd) => {
    // 读取 buf 向文件写入数据
    fs.write(fd, buf, null, null, null, (err, bytesWritten, buffer) => {
        console.log(fd)
        // 同步磁盘缓存
        fs.fsync(fd, err => {
            // 关闭文件
            fs.close(fd, err => {
                console.log("关闭文件");
            });
        });
    });
});

// 这里为了看是否写入成功简单粗暴的使用 readFile 方法
let fd = fs.readFile("6.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log(fd,22)
