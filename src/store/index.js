import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      collapsed: false,
      modalVisible: false,
      modalAction: '',
      loadingDetailAccount: false,
      userAccount: {
        fullname: '',
        role: '',
        loadingTable: false,
      },
      listAccount: [],
      numberOfAccount: 0,
      showAddMessage: false,
      showUpdateMessage: false,
      showRemoveMessage: false,
      failedMessage: false,
      detailAccountData: {},
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
    setListAccount(state, dataAccount) {
      state.listAccount = dataAccount;
    },
    setDetailAccountData(state, dataAccount) {
      state.detailAccountData = dataAccount;
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
    detailAccountData(state) {
      return state.detailAccountData;
    },
  },
  actions: {
    setActiveSideBar({ commit }) {
      commit('setActiveSideBar');
    },

    async getListAccount({ commit, state }) {
      state.loadingTable = true;
      const dataAccount = await axios
        .get(`${process.env.VUE_APP_SERVICE_URL}/account/getallaccount1`)
        .then((accountResponse) => accountResponse.data);

      commit('setListAccount', dataAccount);
      state.loadingTable = false;
    },

    async setDetailAccount({ commit }, { dataAccount }) {
      commit('setDetailAccountData', dataAccount);
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
