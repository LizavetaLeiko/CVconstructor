<template>
  <NuxtLayout :name="pages">
  <div class="user__container">
    <div class="user__left">
      <div class="user__left__base">
        <div class="user__img__wrap">
          <img src="../../public/imgs/defaultPhotoCV.jpg" alt="User photo">
        </div>
        <div class="user__chapter less">
          <p class="name">{{name}}</p>
          <div>
            <p class="value" style="margin-top: -13px;">{{speciality}}</p>
          </div>
          <div class="user__chapter__experience">
            <h4 style="margin-bottom: 0;">Experience</h4>
            <p>-</p>
            <p class="value">{{experiens}}</p>
          </div>
          <div v-if="contacts.length > 0">
            <h4 style="margin-bottom: 10px;">Contacts</h4>
            <div class="list">
              <Contacts v-for="contact in contacts" :key="generateId" :contact="contact"/>
            </div>
          </div>
        </div> 
      </div>
      <div class="user__chapter">
        <div>
          <h3>Hard skills</h3>
          <div class="list grid">
            <p v-for="(skill, index) in userData.hardSkills" :key="generateId">{{ hardSkills[index] }}</p>
          </div>
          </div>
        <div>
          <h3>About me</h3>
          <p>{{aboutMe}}</p>
        </div>
        <div v-if="education">
          <h3>Education</h3>
          <p>{{education}}</p>
        </div>
      </div>
    </div>
    <div class="user__right user__chapter">
      <div>
        <h3>Work experience</h3>
        <div class="list">
          <WorkPlaceInfo v-for="userWork in work" :key="generateId" :place="userWork"/>
        </div>
      </div>
      <div v-if="technologes.length > 0">
        <h3>More about technologes</h3>
        <div class="list">
          <MoreAboutTech v-for="userTech in technologes" :key="generateId" :tech="userTech"/>
        </div>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script>
import { useUserStore } from '~/store/user';
import { v4 as uuidv4 } from 'uuid';


export default {
  name: 'UserId',
  data(){
    return{
      photo: '',
      name: '',
      speciality: '',
      experiens: '',
      contacts: [],
      hardSkills: [],
      aboutMe: '',
      education: '',
      work: [],
      technologes: []
    }
  },
  methods:{
    generateId() {
      const id = uuidv4();
      return id
    }
  },
  computed:{
    userData(){
      this.photo = this.userStore.userData.photo,
      this.name = this.userStore.userData.name,
      this.speciality = this.userStore.userData.speciality,
      this.experiens = this.userStore.userData.experiens,
      this.contacts = this.userStore.userData.contacts,
      this.hardSkills = this.userStore.userData.hardSkills,
      this.aboutMe = this.userStore.userData.aboutMe,
      this.education = this.userStore.userData.education,
      this.work = this.userStore.userData.work,
      this.technologes = this.userStore.userData.technologes
      return this.userStore.userData
    },

  },
  setup(){
    const userStore = useUserStore();
    return{
      userStore
    }
  }
};

definePageMeta({
    layout: "pages",
  })
</script>

<style lang="sass" scoped>
h3
  font-size: 22px
  font-weight: 400
  margin-bottom: 15px
.value
  font-size: 22px
  font-weight: 400
h4
  font-size: 20px
  font-weight: 400
  margin-bottom: 7px
.name
  font-size: 30px
  font-weight: 400
.user
  &__container
    padding: 30px 15px 
    display: flex
    justify-content: stretch
    align-items: flex-start
    gap: 20px
  &__left
    width: 40%
    &__base
      gap: 15px
      display: flex
      justify-content: stretch
      align-items: flex-start
      margin-bottom: 30px
  &__chapter
    gap: 30px
    display: flex
    justify-content: start
    flex-direction: column
    align-items: stretch
    &__experience
      display: flex
      align-items: center
      justify-content: flex-start
      gap: 10px
  &__right
    width: 60%
.less
  gap: 20px
.btn
  max-width: 140px
  padding: 5px
  font-size: 16px
  margin-top: 15px
.list
  gap: 10px
  display: flex
  justify-content: start
  flex-direction: column
  align-items: stretch
.grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
</style>