<template>
  <div class="place__container" v-if="edit">
    <DefaultInput placeholder="Company's name" />
    <DefaultInput placeholder="Your role" />
    <div class="place__date">
      <DefaultInput style="width: 15%;" placeholder="since" />
      <span>-</span>
      <DefaultInput style="width: 15%;" placeholder="for"/>
    </div>
    <DefaultInput placeholder="Tecnologes" />
    <DefaultTextarea placeholder="Description" />
  </div>
  <div class="place__container" v-else>
    <p class="place__name">{{place.company}}</p>
    <p class="place__role">{{ place.role }}</p>
    <div v-if="place.date.since && place.date.to" class="place__date">
      <span class="place__date__item">{{ place.date.since }}</span>
      <span class="place__date__item">-</span>
      <span class="place__date__item">{{ place.date.to }}</span>
    </div>
    <div class="place__chapter">
      <p class="place__chapter__title">Technologes</p>
      <p v-if="place.techs" class="place__chapter__value">{{ place.techs }}</p>
    </div>
    <div class="place__chapter">
      <p class="place__chapter__title">About this work</p>
      <p v-if="place.desc" class="place__chapter__value">{{ place.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkPlaceInfo',
  props:{
    edit: false,
    place: null,
  }
};
</script>

<style lang="sass" scoped>
.place
  &__container
    padding: 10px 0
    border-top: 1px #000 solid
    border-bottom: 1px #000 solid
    display: flex
    justify-content: flex-start
    flex-direction: column
    align-items: stretch
  &__name
    font-size: 26px
    font-weight: 400
  &__role, &__date__item
    font-size: 20px
    font-weight: 300
  &__date
    gap: 7px
    display: flex
    justify-content: flex-start
    align-items: center
  &__chapter
    margin: 10px 0 5px 0
    &__title
      font-size: 20px
      font-weight: 400
      margin-bottom: 5px
    &__value
      font-size: 18px
      font-weight: 300

</style>