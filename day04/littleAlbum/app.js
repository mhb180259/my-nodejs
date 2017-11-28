var express = require("express");
var app = express();
//控制器
var router = require("./controller");

//设置模板引擎
app.set("view engine", "ejs");
// views文件夹并没有提供静态服务，所以不能把外部的静态文件放到views里面

// 静态资源和页面分开放到两个不同的文件夹中
// 前台src的地址限制了静态资源express.static("./public")前面不需要路由

//路由中间件，静态页面
// 如果在此目录下找不到的话就往后找（像水管一样）
app.use(express.static("./public"));
app.use(express.static("./uploads"));
//首页
app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/up", router.doPost);


// 将抽象的写在最后面
//404页面内的href前需要加 / ，这样的话就可以被第一层拦截，来加载public内的静态资源
app.use(function (req, res) {
    res.render("err");
});

app.listen(3000);