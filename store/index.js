import { defineStore } from 'pinia'

export const useIsEditableStore = defineStore('edit', {
  state: () => ({ 
    userBase: {
      email: '',
      password: '',
      id: '',
      userDataId: '',
    },
    userData:{
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
    }
  }),
  getters: {
    getUserBase: (state) => state.userBase,
    getUserData: (state) => state.userData,
  },
  actions: {
    setEmail(email){
      this.state.userBase.email = email
    },
    setPassword(password){
      this.state.userBase.password = password
    },
    setPhoto(photo){
      this.state.userData.photo = photo
    },
    setName(name){
      this.state.userData.name = name
    },
    setSpeciality(speciality){
      this.state.userData.speciality = speciality
    },
    setExperiens(experiens){
      this.state.userData.experiens = experiens
    },
    setContacts(contacts){
      this.state.userData.contacts = contacts
    },
    setHardSkills(hardSkills){
      this.state.userData.hardSkills = hardSkills
    },
    setAboutMe(aboutMe){
      this.state.userData.aboutMe = aboutMe
    },
    setEducation(education){
      this.state.userData.education = education
    },
    setWork(work){
      this.state.userData.work = work
    },
    setTechnologes(technologes){
      this.state.userData.technologes = technologes
    },
    setUserData(userData){
      this.state.userData = userData
    },
  },
})