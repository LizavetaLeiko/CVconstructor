<template>
    <header>
      <div v-if="!isEdit">
        <NuxtLink :to="`/user/${$route.params.id}/edit`">
          <BtnWithoutBg>Edit resume</BtnWithoutBg>
        </NuxtLink>
      </div>
      <div v-else>
        <NuxtLink :to="`/user/${$route.params.id}`">
          <BtnWithoutBg>Save</BtnWithoutBg>
        </NuxtLink>
      </div>
      <DefaultBtn class="btn">Logout</DefaultBtn>
    </header>
    <slot/>
</template>
·
<script>
export default {
  name: 'LayoutPages',
  data(){
    return{
      isEdit: false,
    }
  },
  mounted(){
    if (this.$route.fullPath.split('').slice(-4).join('') === 'edit'){
      this.isEdit = true
    } else {
      this.isEdit = false
    }
  },
  setup(){
    const router = useRouter();
    return{
      router
    }
  },
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 15px
  border-bottom: .5px #000 solid
  width: 100%
  div
    display: flex
    gap: 20px
    align-items: center
.btn
  max-width: 100px
  padding: 5px
  font-size: 16px
</style>