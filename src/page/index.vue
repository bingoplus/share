/**
 * Created on 2016/12/29
 * Time: 21:56
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
 <template>
 <div class="index">
    <div class="index-left" :class="{'index-left-hidden': show }">
      <div class="index-title"  :class="{'index-hidden': show }">寻道科技技术小组</div>
      <div class="index-user">
        hello
      </div>
      <mu-list :value="value" @change="handleChange">
        <mu-list-item title="前端" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="Angular">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Vue">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="React">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="CSS&预处理">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Javascript">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="后端" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="Angular">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Vue">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="React">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="CSS&预处理">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Javascript">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="数据库" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="Angular">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Vue">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="React">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="CSS&预处理">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Javascript">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="Linux" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="Angular">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Vue">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="React">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="CSS&预处理">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Javascript">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="爬虫" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="Angular">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Vue">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="React">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="CSS&预处理">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="Javascript">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </div>
 	<div class="index-right" :class="{'index-right-hidden': show }">
 		<mu-appbar title="寻道科技技术">
 		<mu-icon-button icon='menu' @click="toggleMenu" slot="left"/>
  		<mu-text-field icon="search" @change="search()" class="appbar-search-field" slot="right" hintText="请输入搜索内容"/>
  		<mu-flat-button color="white" :label="username" @click="toggle" slot="right"/>
  		<mu-icon-menu icon="keyboard_arrow_down" slot="right" :open="open" @open="handleOpen" @close="handleClose">
    		<mu-menu-item value="1" title="用户信息" />
    		<mu-menu-item value="2" title="退出" />
  		</mu-icon-menu>
	</mu-appbar>
 	</div>
 </div>
 </template>
 <script>
 export default{
 	data(){
 		return {
 			username: '飞鸟',
 			show: false,
 			open: false,
 			value: "inbox"
 		}
 	},
 	methods:{
 	  toggleMenu(){
 			this.show = !this.show;
 		},
 		search(value){
 			console.log(value)
 		},
    	toggle () {
      		this.open = !this.open
    	},
    	handleOpen () {
      		this.open = true
    	},
    	handleClose () {
      		this.open = false
    	},
    	handleChange (val) {
        this.value = val
      }
 	}
 }
 </script>
