import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const fetchBar = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar 组件返回 ajax 数据');
    }, 1000);
  });
};

function createStore() {
  const store = new Vuex.Store({
    state: {
      xxx: ''
    },

    mutations: {
      'SET_BAR'(state, data) {
        state.bar = data;
      }
    },

    actions: {
      fetchBar({ commit }) {
        return fetchBar().then((data) => {
          commit('SET_BAR', data);
        }).catch((err) => {
          console.error(err);
        })
      }
    }
  });

  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    console.log('window.__INITIAL_STATE__', window.__INITIAL_STATE__);
    // 替换store中的根state状态
    store.replaceState(window.__INITIAL_STATE__);
  }else{
    store.replaceState({
        bar: ''
    });
  }
  
  return store;
}

export default createStore;

