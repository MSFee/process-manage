<template>
	<view class="content">
		<button @click="isoTest">IOS测试工具</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		},
		methods: {
			isoTest() {
				uni.showToast({
					title: "测试IOS是否能够正常相应事件!"
				})
			},
			async test() {
				const db = uniCloud.database();
				const arr = await db.collection('users').get();
				console.log(arr);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
