import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import baoxiu from '@/views/modules/baoxiu/list'
        import dictionary from '@/views/modules/dictionary/list'
        import fangwu from '@/views/modules/fangwu/list'
        import fangwuCollection from '@/views/modules/fangwuCollection/list'
        import fangwuLiuyan from '@/views/modules/fangwuLiuyan/list'
        import forum from '@/views/modules/forum/list'
        import huanjing from '@/views/modules/huanjing/list'
        import jiaofei from '@/views/modules/jiaofei/list'
        import tongzhi from '@/views/modules/tongzhi/list'
        import yonghu from '@/views/modules/yonghu/list'
        import yuangong from '@/views/modules/yuangong/list'
        import config from '@/views/modules/config/list'
        import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
        import dictionaryBaoxiuWeixiu from '@/views/modules/dictionaryBaoxiuWeixiu/list'
        import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
        import dictionaryForum from '@/views/modules/dictionaryForum/list'
        import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
        import dictionaryHuanjing from '@/views/modules/dictionaryHuanjing/list'
        import dictionaryJiaofei from '@/views/modules/dictionaryJiaofei/list'
        import dictionaryJiaofeiShifou from '@/views/modules/dictionaryJiaofeiShifou/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryTongzhi from '@/views/modules/dictionaryTongzhi/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型名称',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuWeixiu',
        name: '是否维修',
        component: dictionaryBaoxiuWeixiu
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型名称',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型名称',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuanjing',
        name: '环境类型名称',
        component: dictionaryHuanjing
    }
    ,{
        path: '/dictionaryJiaofei',
        name: '缴费类型名称',
        component: dictionaryJiaofei
    }
    ,{
        path: '/dictionaryJiaofeiShifou',
        name: '是否缴费',
        component: dictionaryJiaofeiShifou
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTongzhi',
        name: '通知类型名称',
        component: dictionaryTongzhi
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangwu',
        name: '房屋',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '房屋收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuLiuyan',
        name: '房屋留言',
        component: fangwuLiuyan
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/huanjing',
        name: '小区环境',
        component: huanjing
      }
    ,{
        path: '/jiaofei',
        name: '缴费',
        component: jiaofei
      }
    ,{
        path: '/tongzhi',
        name: '通知',
        component: tongzhi
      }
    ,{
        path: '/yonghu',
        name: '住户',
        component: yonghu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
