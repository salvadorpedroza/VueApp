import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInfo: {
      name: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      postalCode: '',
      address: ''
    },
    classAge: '',
    date: ''
  },
  mutations: {
    SET_PERSONAL_INFO(state, status){
      console.log("vuex ");
      state.personalInfo = status;
    },
    SET_CLASS_AGE(state, status){
      state.classAge = status;
    },
    SET_DATE(state, status){
      state.date = status;
    }
  },
  actions: {
    setPersonalInfo(context, personalInfo){
      context.commit('SET_PERSONAL_INFO', personalInfo)
    },
    setClassAge(context, classAge){
      context.commit('SET_CLASS_AGE', classAge)
    },
    setDate(context, date){
      context.commit('SET_DATE', date)
    },
  },
  modules: {

  },
});
