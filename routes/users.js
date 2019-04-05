const router = require('koa-router')()
const User = require('../app/models/User')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/addUser', async ctx => {
  let name = ctx.request.body.userName
  let password = ctx.request.body.userPassword
  let user = new User({
    name,
    password
  })
  let code
  try{
    await user.save()
    ctx.body = {
      msg:'success'
    }
  }catch(e){
    ctx.body = {
      msg:'false'
    }
  }
  
})

module.exports = router
