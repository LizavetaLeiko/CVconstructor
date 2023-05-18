<template>
  <div class="signin">
    <h1 class="signin__title">Welcome to CV constructor</h1>
    <form class="signin__form">
      <h2 class="signin__form__title">Please, {{isSignUp ? 'sign up' : 'sign in'}} </h2>
      <div class="signin__form__inputs" >
        <DefaultInput label="Email" forForm=true v-model="email"/>
        <DefaultInput type="password" label="Password" forForm=true v-model="password"/>
      </div>
      <div>{{ isEditable }}</div>
      <DefaultBtn style="margin: 0 auto;" v-if="isSignUp" @click.prevent="registerUser(email, password)">
        Sign up
      </DefaultBtn>
      <DefaultBtn style="margin: 0 auto;" v-else @click.prevent="loginUser(email, password)">
        Sign in
      </DefaultBtn>
    </form>
    <div class="signin__bottom">
      <p>{{isSignUp ? "Already have an account?" :  "Don't have an account yet?"}}</p>
      <button @click="toggleIsSignUp">{{isSignUp ?  'SignIn' : 'SignUp'}}</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '~/store/user';
import { backend } from '~~/axios/axios';

export default {
  name: 'Index',
  data(){
    return{
      isSignUp: false,
      email: '',
      password: ''
    }
  },
  setup(){
    const userStore = useUserStore();
    const router = useRouter();
    return{
      userStore,
      router
    }
  },
  methods:{
    toggleIsSignUp(){
      this.isSignUp = !this.isSignUp
    },
    async loginUser(email, password){
      console.log(email)
      try {
        this.userStore.isLoading = true
        const response = await backend.post('/login', { email: email, password: password  })
        this.userStore.setUser(response.data.user)
        localStorage.setItem('token', response.data.accessToken);
        this.userStore.isLoading = false
        this.userStore.isLogined = true
        this.router.push({ path: `/user/${response.data.user.id}` })
      } catch (error) {
        return error
      }
    },
    async registerUser(email, password) {
      try {
        this.userStore.isLoading = true
        const response = await backend.post('/registration', { email: email, password: password })
        this.userStore.setUser(response.data.user)
        localStorage.setItem('token', response.data.accessToken);
        this.userStore.isLoading = false
        this.userStore.isLogined = true
        this.router.push({ path: `/user/${response.data.user.id}/edit` })
      } catch (error) {
        return error
      }
    },
  },
};
// definePageMeta({
//     middleware: "refresh"
//   })
</script>

<style lang="sass" scoped>
.signin
  text-align: center
  padding: 80px
  &__title
    font-size: 38px
    margin-bottom: 60px
  &__form
    width: 45%
    margin: 0 auto
    padding: 35px 20px 
    background-color: #fff
    margin-bottom: 40px
    &__title
      color: #000
      font-size: 30px
    &__inputs
      margin: 20px 0 30px
      text-align: left
      display: flex
      flex-direction: column
      gap: 20px
  &__link
    width: 100%
    height: 100%
    color: #fff
    text-decoration: none
    padding: 15px 30px
  &__bottom
    p
      font-size: 20px
    button
      cursor: pointer
      padding: 10px 5px 5px
      background: transparent
      border: none
      color: #000
      font-size: 18px
      border-bottom: .3px #000 solid
</style>