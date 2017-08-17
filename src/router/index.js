import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/views/404'
import Home from '@/views/Home/Home'
import Hello from '@/components/Hello'
import Exchange from '@/views/exchange/Exchange'
import ExchangeRecord from '@/views/exchange/ExchangeRecord'
import Treasure from '@/views/treasure/treasure'
import Task from '@/views/task/task'
import Goods from '@/views/goods/goods'
import EGoods from '@/views/goods/eGoods'
import CGoods from '@/views/goods/codeGoods'
import Order from '@/views/goods/orderDetail'
import SureOrder from '@/views/goods/sureOrder'
import Address from '@/views/goods/address'
import OrderDeal from '@/views/goods/orderSuccess'
import MOrder from '@/views/goods/matterOrder'
import EOrder from '@/views/goods/eOrder'
import COrder from '@/views/goods/codeOrderDetail'
import LoseInternet from '@/views/loseInternet'
import Test from '@/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '积分商城'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '*',
      name: 'notFound',
      component: Empty
    },
    {
      path: '/loseInternet',
      component: LoseInternet
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/exchange',
      component: Exchange
    },
    {
      path: '/exchangeRecord',
      component: ExchangeRecord
    },
    {
      path: '/treasure',
      name: 'treasure',
      component: Treasure,
      meta: {
        title: '夺宝'
      }
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
      meta: {
        title: '任务列表'
      }
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/e-goods',
      component: EGoods
    },
    {
      path: '/code-goods',
      component: CGoods
    },
    {
      path: '/order',
      component: Order,
      children: [
        {
          path: 'sureorder',
          component: SureOrder
        },
        {
          path: 'OrderDeal',
          component: OrderDeal,
          children: [
            {
              path: 'mgoods',
              component: MOrder
            },
            {
              path: 'egoods',
              component: EOrder
            },
            {
              path: 'cgoods',
              component: COrder
            }
          ]
        }
      ]
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
