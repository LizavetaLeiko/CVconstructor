<template>
  <NuxtLayout :name="pages">
    <div class="user__container">
      <div class="user__left">
        <div class="user__left__base">
          <div class="user__img__wrap">
            <img
              src="../../../public/imgs/defaultPhotoCV.svg"
              alt="User photo"
            />
          </div>
          <div class="user__chapter less" style="margin-top: -10px">
            <div class="field">
              <h4>Name</h4>
              <DefaultInput placeholder="My name" v-model="name" />
            </div>
            <div class="field">
              <h4>Speciality</h4>
              <DefaultInput placeholder="Frontend dev" v-model="speciality" />
            </div>
            <div class="field">
              <h4>Experience (years)</h4>
              <DefaultInput placeholder="1" v-model="experiens" />
            </div>
            <div class="field">
              <h4 class="field">Contacts</h4>
              <div class="list">
                <Contacts
                  :edit="true"
                  v-for="(contact, index) in contacts"
                  :key="generateId"
                  :contact="contacts[index]"
                />
              </div>
              <DefaultBtn @click="increaseContactsAmount" class="btn"
                >One more</DefaultBtn
              >
            </div>
          </div>
        </div>
        <div class="user__chapter">
          <div>
            <h3>Hard skills</h3>
            <div class="list">
              <DefaultInput
                v-for="(skill, index) in hardSkills"
                :key="generateId"
                :placeholder="placeholder"
                style="width: 30%"
                v-model="hardSkills[index]"
              />
            </div>
            <DefaultBtn class="btn" @click="increaseSkillsAmount"
              >One more</DefaultBtn
            >
          </div>
          <div class="field">
            <h3>About me</h3>
            <DefaultTextarea v-model="aboutMe" />
          </div>
          <div>
            <h3>Education</h3>
            <DefaultTextarea v-model="education" />
          </div>
        </div>
      </div>
      <div class="user__right user__chapter" style="margin-top: -10px">
        <div class="field">
          <h3>Work experience</h3>
          <div class="list">
            <WorkPlaceInfo
              :edit="true"
              v-for="(userWork, index) in work"
              :key="generateId"
              :place="work[index]"
            />
          </div>
          <DefaultBtn class="btn" @click="increaseWorksAmount"
            >One more</DefaultBtn
          >
        </div>
        <div class="field">
          <h3>More about technologes</h3>
          <div class="list">
            <MoreAboutTech
              :edit="true"
              v-for="(tech, index) in technologes"
              :key="generateId"
              :tech="technologes[index]"
            />
          </div>
          <DefaultBtn @click="increaseTechsAmount" class="btn"
            >One more</DefaultBtn
          >
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import { useUserStore } from "~/store/user";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "UserIdEdit",
  data() {
    return {
      photo: "",
      name: "",
      speciality: "",
      experiens: "",
      contacts: [],
      hardSkills: [],
      aboutMe: "",
      education: "",
      work: [],
      technologes: [],
    };
  },
  watch: {
    name(value) {
      this.userStore.setName(value);
    },
    photo(value) {
      this.userStore.setPhoto(value);
    },
    speciality(value) {
      this.userStore.setSpeciality(value);
    },
    experiens(value) {
      this.userStore.setExperiens(value);
    },
    contacts: {
      handler(value) {
        this.userStore.setContacts(value);
      },
      deep: true,
    },
    hardSkills: {
      handler(value) {
        console.log("watch skills", value);
        this.userStore.setHardSkills(value);
      },
      deep: true,
    },
    aboutMe(value) {
      this.userStore.setAboutMe(value);
    },
    education(value) {
      this.userStore.setEducation(value);
    },
    work: {
      handler(value) {
        this.userStore.setWork(value);
      },
      deep: true,
    },
    technologes: {
      handler(value) {
        this.userStore.setTechnologes(value);
      },
      deep: true,
    },
  },
  mounted() {
    this.userStore.getUserQuery(this.$route.params.id);
  },
  methods: {
    increaseContactsAmount() {
      this.contacts.push([' ', ' ']);
    },
    increaseSkillsAmount() {
      this.hardSkills.push(' ');
      console.log("method skills", this.userStore.userData.hardSkills);
    },
    increaseWorksAmount() {
      this.work.push({
        company: "",
        role: "",
        date: { since: "", to: "" },
        techs: "",
        desc: "",
      });
    },
    increaseTechsAmount() {
      this.technologes.push([' ', ' ']);
    },
    generateId() {
      const id = uuidv4();
      return id;
    },
  },
  setup() {
    const userStore = useUserStore();
    return {
      photo: userStore.userData.photo,
      name: userStore.userData.name,
      speciality: userStore.userData.speciality,
      experiens: userStore.userData.experiens,
      contacts: userStore.userData.contacts,
      hardSkills: userStore.userData.hardSkills,
      aboutMe: userStore.userData.aboutMe,
      education: userStore.userData.education,
      work: userStore.userData.work,
      technologes: userStore.userData.technologes,
      userStore,
    };
  },
};

definePageMeta({
  layout: "pages",
  middleware: "refresh",
});
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
    width: 100%
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
