/**
 * Created on 2016/12/28
 * Time: 15:22
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
<template>
  <div class="user-base">
    <div class="user-base-title">{{title}}</div>
    <slot name="inner"></slot>
    <slot name="button"></slot>
  </div>
</template>

<script>
  export default {
    props: ['title'],
  }
</script>
