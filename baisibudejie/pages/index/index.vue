<template>
	<view class="content">
		<view class="topNav">
			<!--当topType为0  则selected在第一个地方-->
			<view :class="[topType==0?'selected':null]" @tap="topType=0">推荐</view>
			<view :class="[topType==1?'selected':null]" @tap="topType=1">视频</view>
			<view :class="[topType==2?'selected':null]" @tap="topType=2">图片</view>
			<view :class="[topType==3?'selected':null]" @tap="topType=3">笑话</view>
		</view>
		<view class="bottomContent">
			<!--swiper 轮播图-->
			<swiper class="indexSwiper" :current="topType" @change="swiperChange">
				<swiper-item >推荐的内容</swiper-item>
				<swiper-item >视频的内容</swiper-item>
				<swiper-item >图片的内容</swiper-item>
				<swiper-item >
					<view class="jokeItem" v-for="(item,index) in jokeList" :key="index">
						<view class="topUser">
							<image :src="item.u.header[0]" class="topUserPhoto"></image>
							<text class="topUserName">{{item.u.name}}</text>
						</view>
						<view class="jokeText">
							<text>#{{item.cate}}#</text>{{item.text}}
							</view>
							<view class="reply">
								<view class="replyUser">
								<image src="../../static/images/01.png" class="topUserPhoto"></image>
								<text class="topUserName">无敌</text>
								<view class="right">
									<text class="icon-zan iconfont">544</text>
								</view>
							</view>
							<view class="replyText">
								楼主骗你们的！！！！
							</view>
							</view>
							<view class="bottomZanCai">
								<view>
								<text class="icon-zan iconfont"></text>
									{{item.up}}
								</view>
								<view>
								<text class="icon-cai iconfont"></text>
									{{item.down}}
								</view>
								<view>
								<text class="icon-forward iconfont"></text>
									{{item.forward}}
								</view>
					</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		//data代表页面上所有的数据，也就是MVC数据驱动页面的所有数据
		data() {
			return {
				//说明第一个备选中了，则说明第一个需要添加的selected的样式
				//现在的0说明起始页面是  推荐  界面
				topType:3,
				jokeList: []
			}
		},
		onLoad() {
			var url = "https://www.softeem.xin/s/v2/topic/list/29/25362079-29587762/budejie-android-8.0.1/0-25.json?device=MIX&t=1560323033309&appname=budejie&market=baidu&client=android&uid=&udid=863595494315117&from=android&ver=8.0.1&jdk=1"
			uni.request({
				url:url,
				success: res=>{
					this.jokeList = res.data.list;
				}
			});
		},
		methods: {
			swiperChange(event){
				//事件对象  得知当前滚动到哪一边
				this.topType = event.detail.current;
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
		overflow: auto;  /*超出部分给一个滚动条*/
	}
	.topNav{
		display: flex;
		height: 80upx;
		background-color: #FFFFFF;
		justify-content: space-around;
		border-bottom: 2upx solid #d3d3d3;
	}
	.topNav view{
		height: 80upx; /*与父级元素高度保持一致*/
		display: flex;  /*默认横轴为主轴*/
		align-items: center; /*副轴居中*/
		font-size: 28upx;
	}
	.topNav view.selected{
		font-weight: bold;
		border-bottom: 2px solid #ff0000;
		box-sizing: border-box;
	}
	.content{
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;  /*弹性盒子   默认横排*/
		flex-direction: column;  /*让里面的元素竖着排列*/
	}
	.bottomContent{
		flex: 1;  /*父级元素必须是弹性盒子  所以给content样式*/
		
	}
	.indexSwiper{
		height: 100%;
	}
	.jokeItem{
		background-color: white;
		padding: 20upx;
		box-sizing: border-box;  /*保持盒子大小不改变*/
		margin-top: 20upx;
	}
	.topUserPhoto{
		width: 60upx;
		height: 60upx;
		border-radius: 60upx;
	}
	.topUserName{
		font-size: 28upx;
		margin-left: 20upx;
	}
	.topUser{
		display: flex;
		height: 60upx;
		align-items: center;
	}
	.jokeText{
		font-size: 28upx;
		font-weight: bold;
		line-height: 52upx;
	}
	.jokeText text{
		color: #ffa500;
		margin-right: 10upx;
	}
	.bottomZanCai{
		height: 64upx;
		display: flex;
		justify-content: space-around;
		font-size: 20upx;
		align-items: center;
	}
	.reply{
		background-color: #F2F2F2;
		padding: 8upx;
		box-sizing: border-box;
	}
	.replyUser{
		display: flex;
		height: 60upx;
		align-items: center;
	}
	.replyUser .right{
		font-size: 20upx;
	}
	.replyUser .topUserName{
		flex: 1;  /*中间撑开*/
	}
	.replyText{
		font-size: 20upx;
		line-height: 40upx;
		margin-top: 10upx;
	}
</style>

		