import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  mutations
});

export const commit = action => {
  store.commit(action.type, action.payload);
};
