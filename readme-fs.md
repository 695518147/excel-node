### fs模块提供了用于与文件系统进行交互的API。

#### 1.所有的文件系统操作都具有同步和异步的形式。

#### 2.异步的形式总是把完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数总是预留给异常。 如果操作被成功地完成，则第一个参数会为 null 或 undefined。

#### 3.在 NodeJS 中，每操作一个文件，文件描述符是递增的，文件描述符一般从 3 开始，因为前面有 0、1、2 三个比较特殊的描述符，分别代表 process.stdin（标准输入）、process.stdout（标准输出）和 process.stderr（错误输出）。

```
1、文件读取
(1) 同步读取方法 readFileSync
readFileSync 有两个参数：

第一个参数为读取文件的路径或文件描述符；
第二个参数为 options，默认值为 null，其中有 encoding（编码，默认为 null）和 flag（标识位，默认为 r），也可直接传入 encoding；
返回值为文件的内容，如果没有 encoding，返回的文件内容为 Buffer，如果有按照传入的编码解析。
(2) 异步读取方法 readFile
异步读取方法 readFile 与 readFileSync 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 err（错误）和 data（数据），该方法没有返回值，回调函数在读取文件成功后执行。

2、文件写入
(1) 同步写入方法 writeFileSync
writeFileSync 有三个参数：

第一个参数为写入文件的路径或文件描述符；
第二个参数为写入的数据，类型为 String 或 Buffer；
第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），也可直接传入 encoding。
(2) 异步写入方法 writeFile
异步写入方法 writeFile 与 writeFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件写入数据成功后执行。

3、读取文件 read
read 方法与 readFile 不同，一般针对于文件太大，无法一次性读取全部内容到缓存中或文件大小未知的情况，都是多次读取到 Buffer 中。

read 方法中有六个参数：

fd：文件描述符，需要先使用 open 打开；
buffer：要将内容读取到的 Buffer；
offset：整数，向 Buffer 写入的初始位置；
length：整数，读取文件的长度；
position：整数，读取文件初始位置；
callback：回调函数，有三个参数 err（错误），bytesRead（实际读取的字节数），buffer（被写入的缓存区对象），读取执行完成后执行。

4、写入文件 write
write 方法与 writeFile 不同，是将 Buffer 中的数据写入文件，Buffer 的作用是一个数据中转站，可能数据的源占用内存太大或内存不确定，无法一次性放入内存中写入，所以分段写入，多与 read 方法配合。

write 方法中有六个参数：

fd：文件描述符，需要先使用 open 打开；
buffer：存储将要写入文件数据的 Buffer；
offset：整数，从 Buffer 读取数据的初始位置；
length：整数，读取 Buffer 数据的字节数；
position：整数，写入文件初始位置；
callback：回调函数，有三个参数 err（错误），bytesWritten（实际写入的字节数），buffer（被读取的缓存区对象），写入完成后执行。

```


https://blog.csdn.net/github_38140984/article/details/83006101
