# 项目流程
---
## 项目初始化时
  - reset.css初始化css 
  - border.css 解决移动端一px边框问题 
  - fastclick 解决移动端点击事件300ms延迟问题
  - 采用的是stylus 需要安装它和它的loader
  - 字体库是在阿里巴巴的字体库上新建一个项目
    + 将需要的图标加入项目 然后把4个字体相关文件取出来放到assets的styles下的iconfont下 
    + 然后iconfont.css 放在styles下
    + styles中需要改一下 这4个文件的路径
    + 将下面的类名使用方式去掉 使用时直接复制16进制代码即可 记得在入口js引入iconfonst.css
---
## 首页header
  - resst.css中 html字体大小是50px 是因为设计稿是2倍图 量出设计稿直接/100 即可 不需要再算了 
  - 写样式的时候会定义一些全局变量 如果要用别名的话 引用的时候(@import "") 得在引号中加上~  
  - 别名在webpack-base中设置
---
## 首页轮播图
  - 先在码云上建了一个分支(index-swiper) 然后拉倒本地 切换到分支 写代码
  - 轮播图使用的是Vue-Awesome-Swiper 装的版本是2.6.7的

  
