<template>
    <header>
      <div v-if="!isEdit">
        <NuxtLink :to="`/user/${$route.params.id}/edit`">
          <BtnWithoutBg>Edit resume</BtnWithoutBg>
        </NuxtLink>
      </div>
      <div v-else>
        <NuxtLink :to="`/user/${$route.params.id}`">
          <BtnWithoutBg @click="userStore.setUserDataQuery">Save</BtnWithoutBg>
        </NuxtLink>
      </div>
      <DefaultBtn @click="logout" class="btn">Logout</DefaultBtn>
    </header>
    <slot/>
</template>
·
<script>
import { useUserStore } from '~~/store/user'
import { backend } from '~~/axios/axios'
import { userBase, userData} from '~/store/defaultState'

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
    const userStore = useUserStore()
    const router = useRouter();
    return{
      router,
      userStore
    }
  },
  methods:{
    async logout () {
      try {
        const responce = await backend.post('/logout');
        localStorage.removeItem('token');
        this.userStore.userBase = userBase;
        this.userStore.userData = userData;
        this.userStore.isLogined = false;
        this.userStore.isLoading = false;
        this.router.push({ path: `/` })
        return responce.data;
      } catch (error) {
        return error;
      }
    },
  }
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