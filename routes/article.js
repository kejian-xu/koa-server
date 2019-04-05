const router = require('koa-router')()
const multer = require('koa-multer');
router.prefix('/article')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },

    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });

router.post('/uploadImg', upload.single('file'), async (ctx, next) => {
    ctx.body = {
      url: `http://${ctx.request.host}/images/${ctx.req.file.filename}`//返回文件名
    }
})

module.exports = router
