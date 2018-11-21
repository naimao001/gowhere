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
## 城市选择页面 字母列表逻辑
  - 先在码云上建了一个分支(city-components) 然后拉倒本地(git pull) 切换到分支 (git checkout city-components) 写代码
  - 点击字母 跳转到相应区域
    + 先在字母组件触发事件(带字母参数)到City组件 然后再将带过来的具体字母传入list组件 
    + list组件因为使用的是better-scroll 他有个方法是 this.scroll.scrollToElement(ele) ele为原生dom 
    + 所以得获取到这个字母所在区域的dom 于是在字母区域元素那 :ref='key' key即是字母
  - 手指在字母区域拖动 列表跳到对应的区域
    + 先将字母取出来变成一个数组 然后更改上面的遍历条件 插槽值 再多加一个 :reg='item'
    + 给字母列表绑定3个事件 触摸开始 触摸中 触摸结束 分别对应3个函数 在多加一个触摸状态 默认false
    + 开始时 改状态为true 触摸中执行逻辑 结束时改回false
    + 触摸中逻辑为 先拿到A离 选择框下边框的高度通过ref 再拿到触摸点距离选择框下边框的高度(e.clientY-选择框下边框以上的高度)
    + 再相减 除以每个字母的高度向下取整 后就是 手指所在字母的索引 
    + (需要判断index>=0 且不能大于字母数组长度)通过向外触发事件来控制城市列表滚动到相应区域(原理同点击字母)
    + 优化一下 
      * A离 选择框下边框的高度是固定的 所以可以抽出来放在mounted这个钩子函数中 因为字母列表是动态创建的
      * 函数节流 因为touchmove触发的频率是非常快的 所以可以在data中定义一个timer 
      * 在touchmove处理函数中 将里面的代码放在一个16ms的一次性定时器中 然后用this.timer接收 
      * 在执行定时器前 先清除掉上一次的定时器 即可 达到函数节流的效果
  - 做完莫得问题就 合并分支 
    + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
    + 同步完先切换到主分支 git checkout master
    + 再将city-components合并到主分支 git merge origin/city-components
---
## 城市选择页面 搜索逻辑
   - 先在码云上建了一个分支(city-search-logic) 然后拉倒本地(git pull) 切换到分支 (git checkout city-search-logic)) 写代码
   - 先把搜索列表布局写好 将input文本框值 双向绑定至keyword
   - watch监视keyword变化(此处用了函数节流) 空值return 定义一个result数组 
   - 遍历父组件传来的cities 2层循环到 具体城市对象中
   - 判断keyword是否被城市名拼音包含或是被城市名包含 如果是就将城市名 添加到result 数组中
   - 然后挂到list中 上面循环list 渲染出列表
   - 搜索列表出现与否 由keyword是否有值有关 所以直接在searchlist上 v-show='keyword'即可
   - 多添加了一个li 用于没有此搜索关键字数据时 的提示 跟list是否有值有关 v-show='!list.length'
   - 做完莫得问题就 合并分支 
     + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
     + 同步完先切换到主分支 git checkout master
     + 再将city-search-logic合并到主分支 git merge origin/city-search-logic
---
## 城市选择页面 使用Vuex实现城市数据共享
  - 先在码云上建了一个分支(city-vuex) 然后拉倒本地(git pull) 切换到分支 (git checkout city-vuex)) 写代码
  - 引入vuex 在src下新建一个 `store` 数据仓库 在入口文件引入并将store挂载在vue实例上 
  - 将选择的城市存入localstorage (localstorage需要trycatch包裹,因为有些浏览器抽风) 以便再次访问不用重选 
  - 将state 和 mutations 抽离成单独的js 导出
  - 再优化写法 嫌$store.state.xxx 太长 那么
  - 按需导入 `import { mapState } from 'vuex'` 然后再计算属性中展开 `...mapState(['city'])` 就可以直接使用`city了`
  - 按需导入 `import { mapMutations } from 'vuex'` 然后在方法(methods)中展开 `...mapMutations(['changeCity'])` 就可以直接`this.changeCity(xxx)`了
  - 做完莫得问题就 合并分支 
     + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
     + 同步完先切换到主分支 git checkout master
     + 再将city-vuex合并到主分支 git merge origin/city-vuex
---
## 使用keepalive优化请求
  -  先在码云上建了一个分支(city-keepalive) 然后拉倒本地(git pull) 切换到分支 (git checkout city-keepalive)) 写代码
  -  发现每次在切换路由时 都会再次发一次请求 不太好 所以可以使用keepalive包裹住router-view 大意是缓存起来
  -  但是从城市选择页面跳转到首页 如果不是和上次的选一样的城市 那么肯定是要再发一次请求的
  -  有个对应keepalive的钩子函数 activated 在这里面判断好 再决定是否再次发请求
  - 做完莫得问题就 合并分支 
     + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
     + 同步完先切换到主分支 git checkout master
     + 再将city-keepalive合并到主分支 git merge origin/city-keepalive
---
## 详情页 版心布局级画廊组件封装
  - 先在码云上建了一个分支(detail-banner) 然后拉倒本地(git pull) 切换到分支 (git checkout detail-banner)) 写代码
  - banner基本布局 
  - 点击小图片图标 弹出画廊组件 单独封装 以便复用 
  - //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      `observer: true`,
      `observeParents: true`
  - 做完莫得问题就 合并分支 
     + 先将此分支代码添加到存储库(git add .) 提交到仓库(git commit -m "") 推送到远程仓库(git push)
     + 同步完先切换到主分支 git checkout master
     + 再将detail-banner合并到主分支 git merge origin/detail-banner
---
