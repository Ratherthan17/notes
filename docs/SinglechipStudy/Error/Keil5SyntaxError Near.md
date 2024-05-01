# 代码没写错，编译后显示 syntax error near

### 报错提示：

```C
Build target 'Target 1'
compiling main.c...
main.c(74): error C141: syntax error near 'int'
main.c(74): error C202: 'i': undefined identifier
main.c(75): error C141: syntax error near 'int'
main.c(75): error C202: 'j': undefined identifier
main.c(77): error C202: 'i': undefined identifier
main.c(79): error C202: 'j': undefined identifier
main.c(80): error C202: 'j': undefined identifier
Target not created.
Build Time Elapsed:  00:00:00
```

### 原代码：

```c {line-numbers}
68	void Light4()
69	{
70		P2 = 0x00;//一开始全亮
71	
72		Delay(1);
73	
74		int i = 0;
75		int j = 0x80;//1000 0000
76
77		for(i=0; i<8; i++)
78		{
79			P2 += j;
80			j /= 2;
81			
82			Delay(1);
83		}
84
85	}
```

### 原因：

- C89规定，C语言程序中，要求声明部分在前面，执行部分在后面，顺序不能颠倒，也不能交叉，变量的定义只能放在函数的开头。

- 比如下面的代码在C89里会编译失败

```c
int a;
a = 10;
int b;
b = a+20;
```

- 只能把所有声明都放在函数开头：

```c
int a;
int b;
a = 10;
b = a+20;
```

- 而C99以后以及C++中，变量只要在使用之前定义就行。第一段代码在C99之后是没错的。

### 解决办法：

- 把所有声明都放在函数开头

### 参考资料

- [C语言变量声明问题——变量定义一定要放在所有执行语句/语句块的最前面吗?](https://www.cnblogs.com/web-HCJ/p/4468689.html)

- [keil编译出现：error: declaration may not appear after executable statement in block](https://blog.csdn.net/ylzmm/article/details/88852155#:~:text=%E5%A3%B0%E6%98%8E%E4%B8%8D%E8%83%BD%E5%87%BA%E7%8E%B0%E5%9C%A8%E5%8F%AF%E6%89%A7%E8%A1%8C%E7%8A%B6%E6%80%81%E4%B9%8B%E5%90%8E%EF%BC%8CC%E8%AF%AD%E8%A8%80%E5%85%B3%E4%BA%8E%E5%8F%98%E9%87%8F%E7%9A%84%E5%AE%9A%E4%B9%89%E5%8F%AA%E8%83%BD%E6%94%BE%E5%9C%A8%E5%87%BD%E6%95%B0%E7%9A%84%E5%BC%80%E5%A4%B4%EF%BC%8C%E6%94%BE%E5%9C%A8%E6%89%A7%E8%A1%8C%E8%AF%AD%E5%8F%A5%E7%9A%84%E5%89%8D%E9%9D%A2%E5%AE%9A%E4%B9%89%EF%BC%8C%E8%BF%99%E6%98%AFC89%E7%9A%84%E6%A0%87%E5%87%86%E3%80%82,%E5%90%8E%E6%9D%A5%E7%9A%84C99%E6%A0%87%E5%87%86%E5%B0%B1%E5%B7%B2%E7%BB%8F%E6%94%B9%E5%8F%98%E4%BA%86%EF%BC%8C%E6%97%A0%E8%AE%BA%E5%AE%9A%E4%B9%89%E5%9C%A8%E4%B9%8B%E5%89%8D%E8%BF%98%E6%98%AF%E4%B9%8B%E5%90%8E%E9%83%BD%E6%98%AF%E5%8F%AF%E4%BB%A5%E7%9A%84%E3%80%82)

- [**请问为什么我的keil5的options for target选项卡没有c/c++**](http://www.51hei.com/bbs/dpj-218065-1.html)
