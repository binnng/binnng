title: 前端的工程化
speaker: binnng
transition: move

[slide style="background-image:url('http://www.itoobz.com/uploads/allimg/1207/1-120FF93I5.jpg')"]

# 前端的工程化

<small>@binnng</small>


[slide]

# 最初的前端开发


[slide]

index.html

```html
...
<link rel="stylesheet" href="a.css"/>
<link rel="stylesheet" href="b.css"/>
...

<p class="foo">Wish you happy everyday!</p>
```

a.css

```css
.foo{
	color: red;
}
```

---

	* <p style="color:red;text-align:left;background:#fff;padding:1em">Wish you happy everyday!</p> {:&.moveIn}


[slide]

<p style="margin-bottom: 2em">首次访问</p>
-----

<img src="/images/timeline1.jpg" width="100%">

[slide]

<p style="margin-bottom: 2em">缓存后 </p>
-----

<img src="/images/timeline2.jpg" width="100%">

[slide]

# 只用写HTML，JS和CSS，切图的时代

[slide]

# 那么问题来了？


[slide]

# 缓存 <del style="font-size:.8em">技术哪家强</del> 怎么更新呢？

[slide]

# 真相只有一个：

通过**更新页面中引用的资源路径**，让浏览器主动放弃缓存，加载新资源。

[slide]

index.html

```html
...
<link rel="stylesheet" href="a.css?v=0.0.1"/>
<link rel="stylesheet" href="b.css?v=0.0.1"/>
...

<p class="foo">Wish you happy everyday!</p>
```

[slide]

# 问题又来了

更新页面的时候，先更新`HTML`还是先更新`CSS`？

[slide]
# 怎么都不合适

* 如果先更新HTML {:&.moveIn}
	<p>用户访问到新的HTML，但是CSS还是旧的</p>

* 如果先更新CSS
	<p>首次进来的用户访问到旧的HTML，但是CSS已经是新的</p>

[slide]

# 真相只有一个

不能使用同名的CSS文件(**非覆盖式发布**)，先上线静态资源，再上线HTML


[slide]

index.html

```html
...
<link rel="stylesheet" href="a_20141028.css"/>
<link rel="stylesheet" href="b_20141028.css"/>
...

<p class="foo">Wish you happy everyday!</p>
```

[slide]

# 问题又来了

两个CSS文件，能不能合并成一个，减少网络请求呢？

[slide]

index.html

```html
...
<link rel="stylesheet" href="ab_20141028.css"/>
...

<p class="foo">Wish you happy everyday!</p>
```

[slide]

# 问题再次来了

合并后的css文件好大，那么多空格换行，能不能压缩一下呢？

[slide]

index.html

```html
...
<link rel="stylesheet" href="ab_20141028_min.css"/>
...

<p class="foo">Wish you happy everyday!</p>
```

[slide]

# 不再只管写HTML，CSS和JS，还要考虑性能 (ノへ￣、)

* 加戳（缓存和更新缓存）
* 合并（减少网络请求数）
* 压缩（减少网络数据传输）

[slide]

# 绝对是个工程问题

妈妈，我再也不想干前端了。。