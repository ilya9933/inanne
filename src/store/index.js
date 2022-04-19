import Vue from 'vue'
import Vuex from 'vuex'
import userTeam from '../static/team.js'
import cardTechnology from '../static/technology.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    team: userTeam,
    card: cardTechnology,
  },
  getters: {
    getTeam: (state) => state.team,
    getCard: (state) => state.card,
  },
  mutations: {},
  actions: {},
  modules: {},
})
