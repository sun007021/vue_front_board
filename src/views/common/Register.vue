<template>
  <div>
    <div>
      <h2>Please Register</h2>
      <div id="registerForm">
        <form @submit.prevent="fnRegister">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
          </p>
          <p>
            <input class="w3-input" name="username" placeholder="Enter your NAME" v-model="user_name"><br>
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">Register</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {register} from '@/service/register';

export default {
  data() {
    return {
      user_id: '',
      user_pw: '',
      user_name: '',
    };
  },
  methods: {

    async fnRegister() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      if (this.user_name === '') {
        alert('이름을 입력하세요.')
        return
      }
    
      const userData = {
        user_id: this.user_id,
        user_pw: this.user_pw,
        user_name: this.user_name,
      };

      const { data } = await register(userData);
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      this.initForm();
      this.goToPages();

    },
    initForm() {
      this.user_id = '';
      this.user_pw = '';
      this.user_name = '';
    },
    goToPages() {
      this.$router.push({
        name: 'List'
      })
    }
  },
  computed: {
    ...mapGetters({
      errorState: 'getErrorState'
    })
  }
}
</script>

<style>
#registerForm {
  width: 500px;
  margin: auto;
}
</style>