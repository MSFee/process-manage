<template>
	<view class="histor_main">
		<view class="container">
			<view class="item" v-for="item in dataList" :key="item._id">
				<view class="detail">{{ item.content }}</view>
				<view>未审批</view>
				<view>{{ $pmDate.formatData(item.createTime) }}</view>
			</view>
		</view>
		<uni-popup ref="popup" :mask-click="false">
			<text>Popup</text>
		</uni-popup>
		<hans-tabbar :list="list" class="tabbar" @tabChange="tabChange"></hans-tabbar>
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
				dataList: [],
				list: [{
						"text": "申请",
					},
					{
						"text": "历史",
					},
				],
			}
		},
		created() {
			this.getList()
		},
		methods: {
			open() {
				this.$refs.popup.open('top')
			},
			close() {
				this.$refs.popup.close()
			},
			tabChange(index) {
				console.log(index)
			},
			async getList() {
				const db = uniCloud.database();
				const arr = await db.collection('apply_infos').where('status == 1').get();
				if (arr.success) {
					this.dataList = arr.result.data;
				} else {
					uni.showModal({
						title: "查询失败"
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		right: 0;
		background-color: transparent;
	}

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
</style>
