/**
* Created on 2016/12/28
* Time: 14:48
* Author: bingo
* E-mail: guobin@ebigdata.org
*/
<template>
  <userBase v-if=step1 title="忘记密码">
    <div class="inner" slot="inner">
      <mu-text-field v-model="username" label="昵称/邮箱" hintText="请输入昵称或邮箱" type="text" icon="person" fullWidth labelFloat/><br/>
      <div class="inner-code">
        <div class="code-left">
          <mu-text-field v-model="code" label="验证码" hintText="请输入验证码" icon="keyboard" type="text" fullWidth labelFloat/>
        </div>
        <div class="code-right">
          <mu-raised-button :label="codeText" class="demo-raised-button" fullWidth :disabled="codeTag"/>
        </div>
      </div>
    </div>
    <div slot="button">
      <mu-raised-button :label="submitTitle" :disabled="submitTag" @click="submit" class="demo-raised-button" fullWidth primary/>
    </div>
  </userBase>
  <userBase v-else-if=step2 title="安全验证">
    <div class="inner" slot="inner">
      <mu-checkbox label="通过验证码验证身份" class="demo-checkbox" disabled :value="true"/> <br/>
    </div>
    <div slot="button">
      <mu-raised-button :label="submitTitle" :disabled="submitTag" @click="submit" class="demo-raised-button" fullWidth primary/>
    </div>
  </userBase>
  <userBase v-else-if=step3 title="修改密码">
    <div class="inner" slot="inner">
      <mu-text-field v-model="password" label="密码" hintText="请输入密码" icon="vpn_key" type="key" fullWidth labelFloat/><br/>
      <mu-text-field v-model="confirmPassword" label="确认密码" hintText="请输入确认密码" icon="vpn_key" type="password" fullWidth labelFloat/><br/>
    </div>
    <div slot="button">
      <mu-raised-button :label="submitTitle" :disabled="submitTag" @click="submit" class="demo-raised-button" fullWidth primary/>
    </div>
  </userBase>
  <userBase v-else-if=step4 title="修改成功">
    <div class="inner" slot="inner">
      <div class="inner-tip">
        <mu-sub-header>您的密码已重置成功</mu-sub-header>
        <mu-content-block>{{five}}秒后跳转</mu-content-block>
      </div>
    </div>
  </userBase>
</template>

<script>
  import userBase from '../components/user-base';
  export default {
    data(){
      return {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        code:'',
        codeTag: true,
        codeText: "获取验证码",
        submitTitle:"下一步",
        submitTag: false,
        five:5
     }
    },
    methods:{
      submit(){
        if(this.step1){
          this.step1 = false;
          this.step2 = true;
        }else if(this.step2){
          this.step2 = false;
          this.step3 = true;
          this.submitTitle = "确定更改密码";
        }else if(this.step3){
          this.step3 = false;
          this.step4 = true;
          this.timer = setInterval(() => {
            this.five--;
            if (this.five === 0) this.$router.replace({path:'login'});
          }, 1000)
        }
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    components:{
      userBase
    }
  }
</script>
