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
        <mu-list-item v-for="(list,index) in lists" :title="list.title" toggleNested>
          <mu-icon slot="left" :value="icons[index]" />
          <mu-list-item v-for="(subTitle,index) in list.subTitles" slot="nested" :value="subTitle" :title="subTitle">
            <mu-icon slot="left" value="label_outline"/>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </div>
 	  <div class="index-right" :class="{'index-right-hidden': show }">
      <div class="index-right-top">
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
      <div class="index-right-bottom">
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="tab1" title="收录内容"/>
          <mu-tab value="tab2" title="学习资源"/>
          <mu-tab value="tab3" title="知识图谱"/>
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
          <h2>Tab One</h2>
          <p>
            这是第一个 tab
          </p>
        </div>
        <div v-if="activeTab === 'tab2'">
          <h2>Tab Two</h2>
          <p>
            这是第二个 tab
          </p>
        </div>
        <div v-if="activeTab === 'tab3'">
          <h2>Tab Three</h2>
          <p>
            这是第三个 tab
          </p>
        </div>
      </div>
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
 			value:"Angular",
 			activeTab: 'tab1',
 			icons:["computer","swap_vert","storage","keyboard","cloud_done"],
 			lists:[
 			{title:"前端",subTitles:["Angular","Vue","React","CSS&预处理","Javascript"]},
 			{title:"后端",subTitles:["Spring","Mybatis","Dubbo","Maven","RabbitMQ","Log4j","Ehcache","Redis"]},
 			{title:"数据库",subTitles:["SQL Server","MySQL","DB2","Oracle","Sybase","MongoDB","HBase"]},
 			{title:"Linux",subTitles:["Linux系统管理","Linux网络服务","MySQL数据库管理","Linux Shell脚本编程","Linux运维与监控","Linux集群与存储技术","Linux性能调优"]},
 			{title:"爬虫",subTitles:["爬虫入门","爬虫实战","爬虫利器","爬虫进阶"]}
 			]
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
        console.log(val)
      },
      handleTabChange (val) {
        this.activeTab = val
      }
 	}
 }
 </script>
