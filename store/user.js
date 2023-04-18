import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({ 
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
      contacts: [],
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
    async registerUser(login, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/registration', { login, password })
        this.userBase.email = response.data.user.email
        this.userBase.id = response.data.user.id 
        this.userBase.userDataId = response.data.user.userDataId       
        localStorage.setItem('token', response.data.accessToken);
      } catch (error) {
        return error
      }
    },
    async loginUser(login, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', { login, password })
        this.userBase.email = response.data.user.email
        this.userBase.id = response.data.user.id
        this.userData = response.data.user.userDataId      
        localStorage.setItem('token', response.data.accessToken);
      } catch (error) {
        return error
      }
    },
    async refresh () {
      try {
        const responce = await axios.get('http://localhost:8000/api/refresh');
        localStorage.setItem('token', responce.data.accessToken);
        return responce.data;
      } catch (error) {
        return error;
      }
    },
    async getUserQuery(id) {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/${id}`)
        this.userBase.email = response.data.user.email
        this.userBase.id = response.data.user.id
        this.userBase.password = response.data.user.password
        this.userData = response.data.user.userDataId      
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
    // setPhoto(photo){
    //   this.state.userData.photo = photo
    // },
    // setName(name){
    //   this.state.userData.name = name
    // },
    // setSpeciality(speciality){
    //   this.state.userData.speciality = speciality
    // },
    // setExperiens(experiens){
    //   this.state.userData.experiens = experiens
    // },
    // setContacts(contacts){
    //   this.state.userData.contacts = contacts
    // },
    // setHardSkills(hardSkills){
    //   this.state.userData.hardSkills = hardSkills
    // },
    // setAboutMe(aboutMe){
    //   this.state.userData.aboutMe = aboutMe
    // },
    // setEducation(education){
    //   this.state.userData.education = education
    // },
    // setWork(work){
    //   this.state.userData.work = work
    // },
    // setTechnologes(technologes){
    //   this.state.userData.technologes = technologes
    // },
  },
})