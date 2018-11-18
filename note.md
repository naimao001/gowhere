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
  - 轮播图小点想变成白色 得该样式 但是轮播图内每一项又是一个子组件 由于作用域问题 所以要使用样式穿透(>>>)
  - 网速较慢 时 下面的元素可能会补位上去 所以得先占位 又得符合图片比 
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-swiper合并到主分支 git merge origin/index-swiper
---
## 首页图标区域导航 (多出图标要能横向区域滚动)
  - 先在码云上建了一个分支(index-icon) 然后拉倒本地 切换到分支 写代码
  - 先把基础布局写好 再嵌入swiper 让其能在超过8个图标时 能区域滚动
  - 得先把用计算属性将总的图片数组 进行一定的处理
  - 根据总图标个数 将数组分成几个 将总数组遍历 (Math.floor(index/8))
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-swiper合并到主分支 git merge origin/index-icon
---


