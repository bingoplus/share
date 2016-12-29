/**
 * Created on 2016/12/28
 * Time: 14:48
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
<template>
  <userBase title="注册账号">
    <div class="inner" slot="inner">
      <mu-text-field v-model="nickname" label="昵称" hintText="请输入昵称" type="text" icon="person" fullWidth labelFloat/><br/>
      <mu-text-field v-model="email" label="邮箱" hintText="请输入邮箱" type="email" icon="email" fullWidth labelFloat/><br/>
      <div class="inner-code">
        <div class="code-left">
          <mu-text-field v-model="code" label="验证码" hintText="请输入验证码" icon="keyboard" type="text" fullWidth labelFloat/>
        </div>
        <div class="code-right">
          <mu-raised-button :label="codeText" class="demo-raised-button" fullWidth :disabled="codeTag"/>
        </div>
      </div>
      <mu-text-field v-model="password" label="密码" hintText="请输入密码" icon="vpn_key" type="key" fullWidth labelFloat/><br/>
      <mu-text-field v-model="confirmPassword" label="确认密码" hintText="请输入确认密码" icon="vpn_key" type="password" fullWidth labelFloat/><br/>
    </div>
    <div slot="button">
      <mu-raised-button :label="submitTitle" :disabled="submitTag" class="demo-raised-button" fullWidth primary/>
    </div>
  </userBase>
</template>

<script>
  import userBase from '../components/user-base';
  export default {
    data(){
      return {
        nickname:'',
        email:'',
        password:'',
        confirmPassword:'',
        code:'',
        codeTag: true,
        codeText: "获取验证码",
        submitTitle:"注册",
        submitTag: true
     }
    },
    methods:{
      submit(){
        console.log(11);
      }
    },
    components:{
      userBase
    }
  }
</script>
