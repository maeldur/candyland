import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    candidate: null
  },
  mutations: {
    candidate: function(state, c) {
      state.candidate = c;
    }
  },
  actions: {
    async loadCandidate(context) {
      let resp = await axios.get("/api/candidate");
      if (resp && resp.data.candidate) {
        context.commit("candidate", resp.data.candidate);
      }
    },
    async updateCandidate(context, data) {
      let resp = await axios.put("/api/candidate", data);
      return resp && resp.data.success;
    }
  }
});
