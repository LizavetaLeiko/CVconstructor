<template>
  <div class="place__container" v-if="edit">
    <DefaultInput placeholder="Company's name" :value="place.company"/>
    <DefaultInput placeholder="Your role" :value="place.role"/>
    <div class="place__container__date">
      <DefaultInput style="width: 15%;" placeholder="since" :value="place.date.since"/>
      <span>-</span>
      <DefaultInput style="width: 15%;" placeholder="for" :value="place.date.to"/>
    </div>
    <DefaultInput placeholder="Tecnologes" :value="place.techs"/>
    <DefaultTextarea placeholder="Description" :value="place.desc"/>
  </div>
  <div class="place__container" v-else>
    <p>{{place.company}}</p>
    <p>{{ place.role }}</p>
    <div class="place__container__date">
      <span>{{ place.date.since }}</span>
      <span>-</span>
      <span>{{ place.date.to }}</span>
    </div>
    <p>{{ place.techs }}</p>
    <p>{{ place.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'WorkPlaceInfo',
  props:{
    edit: false,
    place: {
      // company: 'freelance', 
      // role: 'frontend', 
      // date:{ 
      //   since: '2022',
      //   to: 'now'
      // },
      // techs: 'git, javascript',
      // desc: "Since February 2022 I've been studying  FrontEnd courses and I am also have been studying on my own. This occupation has become my main hobby and goal.Previously  I worked as a sales manager, so I'm very stress-resistant and sociable. I graduated from school with a gold medal and then I was working and studing in the same time, so I am not afraid of a many tasks and mental work! I have experience of communication with native English speakers and work to improve my English. I continue to develop my hard skills by udemy courses and documentations, and also practice a lot. Now I'm actively learning Node.js, for example."
    }
  }
};
</script>

<style lang="sass" scoped>
.place__container
  padding: 10px 0
  border-top: 1px #fff solid
  border-bottom: 1px #fff solid
  gap: 20px
  display: flex
  justify-content: start
  flex-direction: column
  align-items: stretch
  &__date
    gap: 7px
    display: flex
    justify-content: start
    align-items: center

</style>