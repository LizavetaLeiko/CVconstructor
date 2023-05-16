import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({ 
    isLoading: false,
    isLogined: false,
    userBase: {
      email: '',
      id: '',
      password: '',
      userDataId: '',
    },
    userData:{
      _id: '',
      photo: '',
      name: '',
      speciality: '',
      experiens: '',
      contacts: [
        ],
      hardSkills: [],
      aboutMe: '',
      education: '',
      work: [],
      technologes: [],
      __v: 0,
    }
  }),
  getters: {
    getUserBase: (state) => state.userBase,
    getUserData: (state) => state.userData,
  },
  actions: {
    async refresh () {
      try {
        const responce = await axios.get('http://localhost:8000/api/refresh');
        localStorage.setItem('token', responce.data.accessToken);
        this.isLogined = true
        return responce.data;
      } catch (error) {
        return error;
      }
    },
    setUser(data) {
      try {
        this.userBase.email = data.email
        this.userBase.id = data.id
        this.userBase.password = data.password
        this.userData = data.userDataId     
      } catch (error) {
        return error
      }
    },
    async getUserQuery(id) {
      try {
        this.isLoading = true
        const response = await axios.get(`http://localhost:8000/api/user/${id}`)
        this.userBase.email = response.data.email
        this.userBase.id = response.data.id
        this.userBase.password = response.data.password
        this.userData = response.data.userDataId     
        this.isLoading = false
      } catch (error) {
        return error
      }
    },
    async getUserDataQuery(DataId) {
      try {
        const response = await axios.get(`http://localhost:8000/api/userdata/${DataId}`) 
        this.userData = response.data     
      } catch (error) {
        return error
      }
    },
    async setUserDataQuery(info) {
      try {
        const response = await axios.put(`http://localhost:8000/api/userdata`, info) 
        this.userData = response.data     
      } catch (error) {
        return error
      }
    },
  },
})