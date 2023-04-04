<template>
    <header>
      <div>
        <BtnWithoutBg @click="setIsEditble">Edit resume</BtnWithoutBg>
        <BtnWithoutBg>Edit colors</BtnWithoutBg>
      </div>
      <DefaultBtn class="btn">Logout</DefaultBtn>
    </header>
    <slot/>
</template>

<script>
export default {
  name: 'LayoutPages',
  methods:{
    ...mapMutations({
      setIsEditble: 'pages/setIsEditble',
    }),
  },
  computed: {
    ...mapState({
      isEditble: state => state.pages.isEditble,
    }),
    ...mapGetters({
      getIsEditable: 'pages/getIsEditable',
    })
  },
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 15px
  border-bottom: .5px #fff solid
  div
    display: flex
    gap: 20px
    align-items: center
.btn
  max-width: 100px
  padding: 5px
  font-size: 16px
</style>