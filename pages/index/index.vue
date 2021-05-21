<template>
	<view class="login_main">
		<view class="header">流程管理</view>
		<view class="box">
			<input v-model="account" class="pm_input" placeholder="输入权限码"/>
			<button @click="login" class="pm_btn">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
			}
		},
		methods: {
			login() {
				if(!this.account) {
					uni.showModal({
						title: "权限码不能为空",
					})
				}else if(this.account === '1') {
					uni.navigateTo({
						url: "../main/index",
					})
				}else if(this.account === '2') {
					uni.navigateTo({
						url: '../user/index'
					})
				}else {
					uni.showModal({
						title: "权限码错误!"
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.login_main {
	height: 100vh;
	background-image: url(../../imgs/login_background.jpg);
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 30rpx;
	.header {
		width: 300rpx;
		height: 300rpx;
		border-radius: 50%;
		text-align: center;
		margin-top: -200rpx;
		margin-bottom: 150rpx;
		line-height: 300rpx;
		animation: circleRoate 5s infinite linear;
		color: #fff;
		font-size: 20px;
		background-color: #d35400;
		opacity: 0.5;
	}
}
@keyframes circleRoate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
