import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      collapsed: false,
      userAccount: {
        fullname: '',
        role: '',
        loadingTable: false,
      },
      listAccount: [],
      numberOfAccount: 0,
      activeSideBar: true,
      showAddMessage: false,
      showUpdateMessage: false,
      showRemoveMessage: false,
      failedMessage: false,
      detailAccount: null,
      requestAddAccount: {
        id: '',
        name: '',
        phone: '',
        iban: '',
        pin: '',
        address: '',
        balance: '',
        email: '',
        date: '',
      },
      requestEditAccount: {
        id: '',
        name: '',
        phone: '',
        iban: '',
        pin: '',
        address: '',
        balance: '',
        email: '',
        date: '',
      },
      requestRemoveAccount: {
        id: '',
      },
    };
  },
  mutations: {
    setActiveSideBar(state) {
      state.activeSideBar = !state.activeSideBar;
    },
    setListAccount(state, dataAccount) {
      state.listAccount = dataAccount;
    },
    setDetailAccount(state, dataAccount) {
      state.detailAccount = dataAccount;
    },
    setNumberOfAccount(state, numberOfAccount) {
      state.numberOfAccount = numberOfAccount;
    },
  },
  getters: {
    activeSideBar(state) {
      return state.activeSideBar;
    },
    getMovieByYear: (state) => (inputVal) => {
      return state.listMovie.filter(
        (mov) => mov.release_date.slice(0, 4) == inputVal
      );
    },
  },
  actions: {
    setActiveSideBar({ commit }) {
      commit('setActiveSideBar');
    },

    async getListAccount({ commit, state }, { pageAccount, showEntries }) {
      state.loadingTable = true;
      const dataAccount = await axios
        .get(
          `${process.env.VUE_APP_SERVICE_URL}/account/getallaccount?page=${pageAccount}&showentries=${showEntries}`
        )
        .then((accountResponse) => accountResponse.data);

      commit('setListAccount', dataAccount);
      state.loadingTable = false;
    },

    async getDetailAccount({ commit }, { id }) {
      const dataAccount = await axios
        .get(
          `${process.env.VUE_APP_SERVICE_URL}/account/getdetailaccount?id=${id}`
        )
        .then((accountResponse) => accountResponse.data);

      commit('setDetailAccount', dataAccount);
    },

    async searchAccount(
      { commit, state },
      { textInput, pageAccount, showEntries }
    ) {
      state.loadingTable = true;
      const dataAccount = await axios
        .get(
          `${process.env.VUE_APP_SERVICE_URL}/account/searchaccount?query=${textInput}&page=${pageAccount}&showentries=${showEntries}`
        )
        .then((accountResponse) => accountResponse.data);

      commit('setListAccount', dataAccount);
      state.loadingTable = false;
    },

    async getNumberOfAccount({ commit }) {
      const numberOfAccount = await axios
        .get(`${process.env.VUE_APP_SERVICE_URL}/account/getnumberofaccount`)
        .then((accountResponse) => accountResponse.data.result);

      commit('setNumberOfAccount', numberOfAccount);
    },
  },
});

export default store;
