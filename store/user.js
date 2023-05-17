import { defineStore } from 'pinia'
import { backend } from '~~/axios/axios';

export const useUserStore = defineStore('user', {
  state: () => ({ 
    isLoading: false,
    isLogined: false,
    userBase: {
      email: '',
      id: '',
      userDataId: '',
    },
    userData:{
      _id: '',
      photo: '',
      name: '',
      speciality: '',
      experiens: '',
      contacts: [['','']],
      hardSkills: [''],
      aboutMe: '',
      education: '',
      work: [
        {company:" ",
        role:" ",
        date:{
          since:" ",
          to:" "
          },
        techs:" ",
        desc:" "
      }],
      technologes: [['',' ']],
      __v: 0,
    }
  }),
  getters: {
    getIsLogined: (state) => state.isLogined,
  },
  actions: {
    async refresh () {
      try {
        const responce = await backend.get('/refresh');
        localStorage.setItem('token', responce.data.accessToken);
        this.userBase.email = responce.data.user.email
        this.userBase.id = responce.data.user.id
        this.userData = responce.data.user.userDataId  
        // this.isLogined = true
        return responce.data;
      } catch (error) {
        this.isLogined = false
        return error;
      }
    },
    setUser(data) {
      try {
        this.userBase.email = data.email
        this.userBase.id = data.id
        this.userData = data.userDataId     
      } catch (error) {
        return error
      }
    },
    async getUserQuery(id) {
      try {
        this.isLoading = true
        const response = await backend.get(`/user/${id}`)
        this.userBase.email = response.data.email
        this.userBase.id = response.data.id
        this.userData = response.data.userDataId     
        this.isLoading = false
      } catch (error) {
        return error
      }
    },
    async getUserDataQuery(DataId) {
      try {
        const response = await backend.get(`/userdata/${DataId}`) 
        this.userData = response.data     
      } catch (error) {
        return error
      }
    },
    async setUserDataQuery(info) {
      try {
        const response = await backend.put(`/userdata`, info) 
        this.userData = response.data     
      } catch (error) {
        return error
      }
    },
  },
})