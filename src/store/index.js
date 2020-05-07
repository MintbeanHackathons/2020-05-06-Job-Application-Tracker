import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    data: [],
    show: false,
    form: {
      id: null,
      status: "Applied",
      jobTitle: "",
      company: "",
      jobPostingURL: "",
      notes: "",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  },
  getters: {
    data: (state) => state.data,
    form: (state) => state.form,
    show: (state) => state.show
  },
  mutations: {
    add(state) {
      state.data.push({
        status: state.form.status,
        jobTitle: state.form.jobTitle,
        company: state.form.company,
        jobPostingURL: state.form.jobPostingURL,
        notes: state.form.notes,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    },
    edit(state, payload) {
      state.data[payload] = state.form;
    },
    remove(state, payload) {
      state.data.splice(payload, 1);
    },
    populateEditForm(state, payload) {
      state.form = state.data[payload];
    },
    showForm(state) {
      state.show = true;
    },
    closeForm(state) {
      state.show = false;
    },
  },
  actions: {
    add(context, payload) {
      context.commit("add", payload);
    },
    edit(context, payload) {
      context.commit("edit", payload);
    },
    remove(context, payload) {
      context.commit("remove", payload);
    },
    populateEditForm(context, payload) {
      context.commit("showForm");
      context.commit("populateEditForm", payload);
    },
    closeForm(context) {
      context.commit("closeForm");
    },
    showForm(context) {
      context.commit("showForm");
    },
  },
});
