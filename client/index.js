import Vue from 'vue'
import Vuex from 'vuex'

import './styles/vendor.scss'
import './styles/app.scss'

import App from './components/App.jsx'
import { store } from './store'

Vue.use(Vuex)

var vm = new Vue({
  el: '#root',
  store,
  render () {
    return (
      <App />
    )
  }
})
