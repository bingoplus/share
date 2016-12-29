/**
 * Created on 2016/12/29
 * Time: 21:56
 * Author: bingo
 * E-mail: guobin@ebigdata.org
 */
 <template>
 <div class="index">
 	<div class="index-left">
 		<mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
    		<mu-raised-button label="关闭弹框" @click="close('left')" primary fullWidth/>
  		</mu-popup>
 	</div>
 	<div class="index-right">
 		<mu-appbar title="寻道科技技术">
 		<mu-icon-button icon='menu' slot="left"/>
  		<mu-text-field icon="search" @change="search()" class="appbar-search-field" slot="right" hintText="请输入搜索内容"/>
  		<mu-flat-button color="white" :label="username" @click="toggle" slot="right"/>
  		<mu-icon-menu icon="" slot="right" :open="open" @open="handleOpen" @close="handleClose">
    		<mu-menu-item value="1" title="Refresh" />
    		<mu-menu-item value="2" title="Send feedback" />
    		<mu-menu-item value="3" title="Settings" />
    		<mu-menu-item value="4" title="Help" />
    		<mu-menu-item value="5" title="Sign out" />
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
 			leftPopup: true,
 			open: false
 		}
 	},
 	methods:{
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
    	close (position) {
      		this[position + 'Popup'] = false
    	}
 	}
 }
 </script>