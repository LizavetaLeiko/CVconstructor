<template>
  <NuxtLayout :name="pages">
  <div class="user__container">
    <div class="user__left">
      <div class="user__left__base">
        <div class="user__img__wrap">
          <img src="../../public/imgs/defaultPhotoCV.jpg" alt="User photo">
        </div>
        <div class="user__chapter less" style="margin-top: -10px;">
          <div class="field">
            <h4>Name</h4>
            <DefaultInput  placeholder="My name" :value="name"/>
          </div>
          <div class="field">
            <h4>Speciality</h4>
            <DefaultInput placeholder="Frontend dev"  :value="speciality"/>
          </div>
          <div class="field">
            <h4>Experience (years)</h4>
            <DefaultInput placeholder="1" :value="experiens"/>
          </div>
          <div class="field">
            <h4 class="field">Contacts</h4>
            <div class="list">
              <Contacts :edit="true" v-for="contact in contacts.length" :key="generateId" :contact="contact"/>
            </div>
            <DefaultBtn @click="increaseContactsAmount" class="btn">One more</DefaultBtn>
          </div>
        </div>
      </div>
      <div class="user__chapter">
        <div>
          <h3>Hard skills</h3>
          <div class="list">
            <DefaultInput v-for="(skill, index) in hardSkills.length" :key="generateId" placeholder="Skill" :value="skill" />
          </div>
          <DefaultBtn class="btn" @click="increaseSkillsAmount">One more</DefaultBtn>
          </div>
        <div class="field">
          <h3>About me</h3>
          <DefaultTextarea v-model="aboutMe" :value="aboutMe"/>
        </div>
        <div>
          <h3>Education</h3>
          <DefaultTextarea v-model="education" :value="education"/>
        </div>
      </div>
    </div>
    <div class="user__right user__chapter" style="margin-top: -10px;">
      <div class="field">
        <h3>Work experience</h3>
        <div class="list">
          <WorkPlaceInfo :edit="true" v-for="userWork in work" :key="generateId" :place="userWork"/>
        </div>
        <DefaultBtn class="btn" @click="increaseWorksAmount">One more</DefaultBtn>
      </div>
      <div class="field">
        <h3>More about technologes</h3>
        <div class="list">
          <MoreAboutTech :edit="true"  v-for="tech in technologes" :key="generateId" :tech="tech"/>
        </div>
        <DefaultBtn @click="increaseTechsAmount" class="btn">One more</DefaultBtn>
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
    }
  },
  methods:{
    increaseContactsAmount(){
      this.contacts = [...this.contacts, []]
    },
    increaseSkillsAmount(){
      this.hardSkills = [...this.hardSkills, []]
    },
    increaseWorksAmount(){
      this.work = [...this.work, {company: '', role: '', date:{ since: '',to: ''},techs: '', desc: ""}]
    },
    increaseTechsAmount(){
      this.technologes = [...this.technologes, []]
    },
    generateId() {
      const id = uuidv4();
      return id
    }
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
h4
  font-size: 20px
  font-weight: 300
  margin-bottom: 7px
.field
  padding: 10px 0

.user
  &__container
    padding: 30px 15px 
    display: flex
    justify-content: flex-stretch
    align-items: flex-start
    gap: 30px
  &__left
    width: 40%
    &__base
      gap: 15px
      display: flex
      justify-content: stretch
      align-items: flex-start
      margin-bottom: 30px
  &__chapter
    gap: 20px
    display: flex
    justify-content: flex-start
    flex-direction: column
    align-items: stretch
  &__right
    width: 60%
.less
  gap: 10px
.btn
  max-width: 140px
  padding: 5px
  font-size: 16px
  margin-top: 15px
.list
  gap: 15px
  display: flex
  justify-content: flex-start
  flex-direction: column
  align-items: stretch
</style>