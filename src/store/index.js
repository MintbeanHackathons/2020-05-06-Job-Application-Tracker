import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
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
    show: (state) => state.show,
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
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
      state.form = {
        id: null,
        status: "Applied",
        jobTitle: "",
        company: "",
        jobPostingURL: "",
        notes: "",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
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

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
