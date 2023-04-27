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
      contacts: [
        // ['CV', 'http://localhost:3000/user/1']
        ],
      hardSkills: [],
      aboutMe: '',
      education: '',
      work: [
        // {company: 'freelance', 
        // role: 'frontend', 
        // date:{ 
        //   since: '2022',
        //   to: 'now'
        //   },
        // techs: 'git, javascript',
        // desc: "Since February 2022 I've been studying  FrontEnd courses and I am also have been studying on my own. This occupation has become my main hobby and goal.Previously  I worked as a sales manager, so I'm very stress-resistant and sociable. I graduated from school with a gold medal and then I was working and studing in the same time, so I am not afraid of a many tasks and mental work! I have experience of communication with native English speakers and work to improve my English. I continue to develop my hard skills by udemy courses and documentations, and also practice a lot. Now I'm actively learning Node.js, for example."
        // }
      ],
      technologes: [
        // ['git', 'use it always'], ['react', 'with next']
      ],
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
        const response = await axios.post('http://localhost:8000/api/registration', { email: login, password: password })
        console.log(response)
        this.userBase.email = response.data.email
        this.userBase.id = response.data.id 
        this.userBase.userDataId = response.data.userDataId       
        localStorage.setItem('token', response.data.accessToken);
      } catch (error) {
        return error
      }
    },
    async loginUser(login, password) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', { email: login, password: password  })
        this.userBase.email = response.data.email
        this.userBase.id = response.data.id
        this.userData = response.data.userDataId      
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
        this.userBase.email = response.data.email
        this.userBase.id = response.data.id
        this.userBase.password = response.data.password
        this.userData = response.data.userDataId      
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