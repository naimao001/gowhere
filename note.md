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
  - 先在码云上建了一个分支(index-swiper) 然后拉倒本地(git pull) 切换到分支 (git checkout index-swiper) 写代码
  - 轮播图使用的是Vue-Awesome-Swiper 装的版本是2.6.7的
  - 轮播图小点想变成白色 得该样式 但是轮播图内每一项又是一个子组件 由于作用域问题 所以要使用样式穿透(>>>)
  - 网速较慢 时 下面的元素可能会补位上去 所以得先占位 又得符合图片比 
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-swiper合并到主分支 git merge origin/index-swiper
---
## 首页图标区域导航 (多出图标要能横向区域滚动)
  - 先在码云上建了一个分支(index-icon) 然后拉倒本地(git pull) 切换到分支 (git checkout index-icon) 写代码
  - 先把基础布局写好 再嵌入swiper 让其能在超过8个图标时 能区域滚动
  - 得先把用计算属性将总的图片数组 进行一定的处理
  - 根据总图标个数 将数组分成几个 将总数组遍历 (Math.floor(index/8))
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-icon合并到主分支 git merge origin/index-icon
---
## 首页推荐部分
  - 先在码云上建了一个分支(index-recommend) 然后拉倒本地(git pull) 切换到分支 (git checkout index-recommend) 写代码
  - 基本布局
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-recommend合并到主分支 git merge origin/index-recommend
---
## 首页数据
  - 先在码云上建了一个分支(index-ajax) 然后拉倒本地(git pull) 切换到分支 (git checkout index-ajax) 写代码
  - 安装axios 在Home.vue中发一个请求再将 数剧传到子组件 注意请求要在mounted钩子函数中发 因为要所有组件都渲染完毕后
  - 然后在static(static中的数据不用上传到远端仓库)中建一个mock目录 存放数据 因为可能要上线的原因不会使用原地址 所以要使用到webpack-dev-sevser提供的代理来转发 请求
  -  然后通过返回来的数据在传回相应的组件 
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将index-ajax合并到主分支 git merge origin/index-ajax
---
## 城市选择页面 头部
  - 先在码云上建了一个分支(city-router) 然后拉倒本地(git pull) 切换到分支 (git checkout city-router) 写代码
  - 城市选择路由页面配置好 开始制作头部
  - 页面基本布局
  - 首页数据出现bug......待解决
    - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将city-router合并到主分支 git merge origin/city-router
---
## 城市选择页面 搜索框
  - 先在码云上建了一个分支(city-search) 然后拉倒本地(git pull) 切换到分支 (git checkout city-search) 写代码
  - 页面基本布局
  - 首页数据出现bug......待解
    - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将city-search合并到主分支 git merge origin/city-search
---
## 城市选择页面 城市列表及字母
  - 先在码云上建了一个分支(city-list) 然后拉倒本地(git pull) 切换到分支 (git checkout city-list) 写代码
  - 页面基本布局 逻辑待实现
  - 使用了better-scroll 来进行区域滚动
  - 首页数据出现bug......待解
    - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将city-list合并到主分支 git merge origin/city-list
---
## 城市选择页面 数据渲染
  - 先在码云上建了一个分支(city-ajax) 然后拉倒本地(git pull) 切换到分支 (git checkout city-ajax) 写代码
  - 同首页数据一样 拿到数据 渲染到页面 
  - 首页数据出现bug......待解
    - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将city-ajax合并到主分支 git merge origin/city-ajax
---


