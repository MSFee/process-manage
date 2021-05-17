<template>
	<view class="content">
		<button @click="isoTest">IOS测试工具</button>
		<hans-tabbar :list="list" style="position:fixed;bottom:0;width:100%;left:0;right:0;" @tabChange="tabChange"></hans-tabbar>
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
				title: 'Hello',
                list: [{
                     "text": "申请",
                   },
                   {
                     "text": "历史",
                     },
					],
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
            tabChange(index) {
                console.log(index)
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

</style>
