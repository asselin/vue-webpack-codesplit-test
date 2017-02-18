import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Hello = resolve => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(['components/Hello'], () => {
    resolve(require('components/Hello'))
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
