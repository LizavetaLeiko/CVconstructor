<template>
  <NuxtLayout :name="pages">
  <div class="user__container">
    <div class="user__left">
      <div class="user__left__base">
        <div class="user__img__wrap">
          <img src="../../public/imgs/defaultPhotoCV.jpg" alt="User photo">
        </div>
        <div class="user__chapter less">
          <DefaultInput placeholder="My name" v-model="userStore.userData.name" :pValue="userStore.userData.name"/>
          <div>
            <h4>Speciality</h4>
            <DefaultInput placeholder="Frontend dev" v-model="userStore.userData.speciality" :pValue="userStore.userData.speciality"/>
          </div>
          <div>
            <h4>Experience (years)</h4>
            <DefaultInput placeholder="1" v-model="userStore.userData.experiens" :pValue="userStore.userData.experiens"/>
          </div>
          <div>
            <h4>Contacts</h4>
            <div class="list">
              <Contacts :edit="true" v-for="contact in contactsAmount" :key="generateId" />
            </div>
            <DefaultBtn @click="increaseContactsAmount" class="btn">One more</DefaultBtn>
          </div>
        </div>
      </div>
      <div class="user__chapter">
        <div>
          <h3>Hard skills</h3>
          <div class="list">
            <DefaultInput v-for="(skill, index) in skillsAmount" :key="generateId" placeholder="Skill" :value="userStore.userData.hardSkills[index]" />
          </div>
          <DefaultBtn class="btn" @click="increaseSkillsAmount">One more</DefaultBtn>
          </div>
        <div>
          <h3>About me</h3>
          <DefaultTextarea v-model="userStore.userData.aboutMe" :pValue="userStore.userData.aboutMe"/>
        </div>
        <div>
          <h3>Education</h3>
          <DefaultTextarea v-model="userStore.userData.education" :pValue="userStore.userData.education"/>
        </div>
      </div>
    </div>
    <div class="user__right user__chapter">
      <div>
        <h3>Work experience</h3>
        <div class="list">
          <WorkPlaceInfo :edit="true" v-for="work in worksAmount" :key="generateId"/>
        </div>
        <DefaultBtn class="btn" @click="increaseWorksAmount">One more</DefaultBtn>
      </div>
      <div>
        <h3>More about technologes</h3>
        <div class="list">
          <MoreAboutTech :edit="true"  v-for="tech in techsAmount" :key="generateId"/>
        </div>
        <DefaultBtn @click="increaseTechsAmount" class="btn">One more</DefaultBtn>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script>
import { useIsEditableStore } from '~~/store/edit'; 
import { useUserStore } from '~/store/user';
import { v4 as uuidv4 } from 'uuid';


export default {
  name: 'UserId',
  data(){
    return{
      contactsAmount: this.userStore.userData.contacts.length > 0 ? this.userStore.userData.contacts.length : 1,
      skillsAmount: this.userStore.userData.hardSkills.length > 0 ? this.userStore.userData.hardSkills.length : 1,
      worksAmount: this.userStore.userData.work.length > 0 ? this.userStore.userData.work.length : 1,
      techsAmount: this.userStore.userData.technologes.length > 0 ? this.userStore.userData.technologes.length : 1,
    }
  },
  methods:{
    increaseContactsAmount(){
      this.contactsAmount++
    },
    increaseSkillsAmount(){
      this.skillsAmount++
    },
    increaseWorksAmount(){
      this.worksAmount++
    },
    increaseTechsAmount(){
      this.techsAmount++
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
    gap: 20px
    display: flex
    justify-content: start
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
  justify-content: start
  flex-direction: column
  align-items: stretch
</style>