<template>
  <NuxtLayout :name="pages">
  <div class="user__container">
    <div class="user__left">
      <div class="user__left__base">
        <div class="user__img__wrap">
          <img src="../../public/imgs/defaultPhotoCV.jpg" alt="User photo">
        </div>
        <div class="user__chapter less">
          <DefaultInput placeholder="My name"/>
          <div>
            <h4>Speciality</h4>
            <DefaultInput placeholder="Frontend dev"/>
          </div>
          <div>
            <h4>Experience (years)</h4>
            <DefaultInput placeholder="1"/>
          </div>
          <div>
            <h4>Contacts</h4>
            <div>
              <Contacts/>
            </div>
            <DefaultBtn class="btn">One more</DefaultBtn>
          </div>
        </div>
      </div>
      <div class="user__chapter">
        <div>
          <h3>Hard skills</h3>
          <div>
            <DefaultInput placeholder="Skill"/>
          </div>
          <DefaultBtn class="btn">One more</DefaultBtn>
          </div>
        <div>
          <h3>About me</h3>
          <DefaultTextarea/>
        </div>
        <div>
          <h3>Education</h3>
          <DefaultTextarea/>
        </div>
      </div>
    </div>
    <div class="user__right user__chapter">
      <div>
        <h3>Work experience</h3>
        <div>
          <WorkPlaceInfo/>
        </div>
        <DefaultBtn class="btn">One more</DefaultBtn>
      </div>
      <div>
        <h3>More about technologes</h3>
        <div>
          <MoreAboutTech/>
        </div>
        <DefaultBtn class="btn">One more</DefaultBtn>
      </div>
    </div>
  </div>
</NuxtLayout>
</template>

<script>
import { useIsEditableStore } from '~~/store/edit'; 

export default {
  name: 'UserId',
  setup(){
    const isEditableStore = useIsEditableStore();
    return{
      isEditableStore
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
    width: 100%
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
</style>