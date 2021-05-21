<template>
	<view class="user_main">
		<view class="main">
			<textarea placeholder="输入申请原因" class="pm_textarea" v-model="content"></textarea>
			<button @click="submit" class="pm_btn">提交申请</button>
		</view>
		<hans-tabbar :currIndex="0" :list="list" class="tabbar" @tabChange="tabChange"></hans-tabbar>
	</view>
</template>

<script>
	import hansTabbar from '../../components/hans-tabbar/hans-tabbar.vue'
	export default {
		components: {
			hansTabbar,
		},
		data() {
			return {
				content: '',
				list: [{
						"text": "申请",
					},
					{
						"text": "历史",
					},
				],
			}
		},
		methods: {
			tabChange(index) {
				if(index === 1) {
					uni.navigateTo({
						url:'./history'
					})
				}
			},
			submit() {
				if(!this.content) {
					uni.showModal({
						title: "申请内容不能为空!"
					})
				}else {
					this.insert().then(res => {
						uni.showToast({
							title: "申请提交成功!"
						})
						this.content = '';
					}).catch(err => {
						uni.showModal({
							content: "申请提交失败",
							showCancel: false
						})
					})
				}
			},
			async insert() {
				const db = uniCloud.database();
				const arr = await db.collection('apply_infos').add({
					content: this.content,
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.user_main {
		height: 100vh;
		background-color: #130f40;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30rpx;
		.tabbar {
			position: fixed;
			bottom: 0;
			width: 100%;
			left: 0;
			right: 0;
			background-color: transparent;
		}
	}
</style>
