/**
 * Created on 2016/12/27
 * Time: 14:04
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
<template>
  <userBase title="欢迎登录">
    <div class="inner" slot="inner">
      <div class="login-logo"></div>
      <mu-text-field v-model="username" label="昵称/邮箱" hintText="请输入昵称或邮箱" type="text" icon="person" fullWidth labelFloat/><br/>
      <mu-text-field v-model="password" label="密码" hintText="请输入密码" icon="vpn_key" type="key" fullWidth labelFloat/><br/>
      <section>
        <div>
          <mu-checkbox label="自动登录" v-model="loginTag"/>
        </div>
        <div>
          <span type="text" @click="turnRegister">注册</span>
          <span class="login-inner-exp" type="text">|</span>
          <span type="text" @click="turnForget">忘记密码？</span>
        </div>
      </section>
    </div>
    <div slot="button">
      <mu-raised-button :label="submitTitle" :disabled="submitTag" @click="submit" fullWidth primary/>
    </div>
  </userBase>
</template>

<script>
import userBase from '../components/user-base';
    export default {
        data () {
            return {
                username: '',
                password: '',
                submitTag: false,
                loginTag: false,
                submitTitle:'登录'
            }
        },
        methods:{
          turnRegister(){
            this.$router.push({path:'register'});
          },
          turnForget(){
            this.$router.push({path:'forget'});
          },
          submit(){
            this.$router.push({path:'index'});
          }
        },
      components:{
        userBase
      }
    }
</script>
