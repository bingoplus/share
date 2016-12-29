/**
 * Created on 2016/12/27
 * Time: 13:55
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
import login from './page/login';
import register from './page/register';
import forget from './page/forget';
export default {
  mode:'history',
  linkActiveClass: 'active',
  base:__dirname,
  routes:[
    {
      path:'/',
      component:login
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/forget',
      component:forget
    },
    {
      path:'*',
      component:login
    }
  ]
}
