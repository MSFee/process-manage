<template>
	<view class="user_history">
		<view class="container">
			<view v-for="item in dataList" :key="item._id" class="item">
				<view class="detail">{{ item.content }}</view>
				<view>{{ checkStatus(item.status) }}</view>
				<view>{{ $pmDate.formatData(item.createTime) }}</view>
			</view>
		</view>
		<hans-tabbar :currIndex="1" :list="list" class="tabbar" @tabChange="tabChange"></hans-tabbar>
	</view>
</template>

<script>
	import hansTabbar from '../../components/hans-tabbar/hans-tabbar.vue'
	const statusMap = {
		1: '未审批',
		2: '已通过',
		3: '已驳回',
		4: '已撤销'
	}
	export default {
		components: {
			hansTabbar,
		},
		data() {
			return {
				list: [{
						"text": "申请",
					},
					{
						"text": "历史",
					},
				],
				dataList: [],
			}
		},
		created() {
			this.getHistory()
		},
		methods: {
			tabChange(index) {
				if(index === 0) {
					uni.reLaunch({
						
						url: './index'
					})
				}
			},
			async getHistory() {
				const db = uniCloud.database();
				const res = await db.collection('apply_infos').get();
				if(res.success) {
					this.dataList = res.result.data;
				}else {
					uni.showModal({
						title:"查询失败"
					})
				}
			},
			checkStatus(value) {
				return statusMap[value]
			}
		}
	}
</script>

<style scoped lang="scss">
.user_history {
	height: 100vh;
	.tabbar {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		right: 0;
		background-color: transparent;
	}
	.container {
		max-width: calc(100vh - 62px);
		overflow-y: auto;
		.item {
			height: 150rpx;
			background-color: #2C405A;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: #fff;
			font-size: 30rpx;
			border-top: 1px solid #ccc;
			.detail {
				width: 150rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
}
</style>
