import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { HomeTitle } from '../../components'

import { Loading } from '@components'
import { connect } from '@tarojs/redux'
import { getWindowHeight } from '../../utils/style'

import Banner from './banner'
import Recommend from './recommend'
import './home.scss'

const RECOMMEND_SIZE = 20

// @connect(state => state.home, { ...actions, dispatchCartNum })

class Home extends Component {
    config = {
        navigationBarTitleText: '故事',
    }
    state = {
        loaded: true,
        loading: false,
        lastItemId: 0,
        hasMore: true
    }
    constructor(props) {
        super(props);
        this.swiperData = {
            swiperData: [{
                rank: '1',
                img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564747834250&di=7b88515903421ad246913952740655bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa211a222889d4945b4c9806216f23b99f4a6baba.jpg',
            }, {
                rank: '2',
                img: 'http://vimg2.ws.126.net/image/snapshot/2018/3/3/V/VDB9TEF3V.jpg'
            }, {
                rank: '3',
                img: 'http://vimg1.ws.126.net/image/snapshot/2018/3/S/1/VDB9RPMS1.jpg'
            }, {
                rank: '4',
                img: 'http://vimg2.ws.126.net/image/snapshot/2016/4/C/4/VBILQ3FC4.jpg'
            }, {
                rank: '5',
                img: 'http://img2.cache.netease.com/m/newsapp/topic_icons/T1486732282730.png'
            },

            ]
        };
        this.icon = {
            icon: [{
                url: 'https://cdn.duitang.com/uploads/item/201410/16/20141016202155_5ycRZ.thumb.700_0.jpeg',
                name: '故事'
            }, {
                url: 'https://cdn.duitang.com/uploads/item/201608/25/20160825214118_nMzNT.thumb.700_0.jpeg',
                name: '知识'
            }, {
                url: 'https://b-ssl.duitang.com/uploads/item/201809/16/20180916230614_jrgfq.jpg',
                name: '儿歌'
            }, {
                url: 'https://cdn.duitang.com/uploads/item/201410/16/20141016202155_5ycRZ.thumb.700_0.jpeg',
                name: '童话'
            }, {
                url: 'https://b-ssl.duitang.com/uploads/item/201508/04/20150804211608_KLFV2.jpeg',
                name: '动画'
            }, {
                url: 'https://b-ssl.duitang.com/uploads/item/201709/04/20170904011231_G2XxB.png',
                name: '图片'
            }, {
                url: 'https://cdn.duitang.com/uploads/item/201410/16/20141016202155_5ycRZ.thumb.700_0.jpeg',
                name: '童话'
            }, {
                url: 'https://b-ssl.duitang.com/uploads/item/201508/04/20150804211608_KLFV2.jpeg',
                name: '动画'
            }, {
                url: 'https://b-ssl.duitang.com/uploads/item/201709/04/20170904011231_G2XxB.png',
                name: '图片'
            },
            ],
        };
        this.state = {
            hasMore: true,
            floor: [
                {
                    id: 10011,
                    img: 'https://b-ssl.duitang.com/uploads/item/201506/27/20150627172404_ETte2.jpeg',
                    name: '什么都别说',
                    title: '什么不都不想写',
                },{
                    id: 10012,
                    img: 'https://b-ssl.duitang.com/uploads/item/201504/10/20150410H0209_wjMdJ.thumb.700_0.jpeg',
                    name: '蝴蝶少女',
                    title: '青春的畅想曲',
                },{
                    id: 10013,
                    img: 'https://b-ssl.duitang.com/uploads/item/201501/11/20150111171353_tFH5s.jpeg',
                    name: '122344',
                    title: '你您稍等是那么的我',
                },{
                    id: 10014,
                    img: 'https://b-ssl.duitang.com/uploads/item/201408/24/20140824234322_avBfh.jpeg',
                    name: '你是男是女是',
                    title: '是你们打死你们那上面对你one前两年的',
                },{
                    id: 10015,
                    img: 'https://b-ssl.duitang.com/uploads/item/201408/24/20140824234322_avBfh.jpeg',
                    name: '您撒是看是能看到我去',
                    title: '啊啊啊撒奥所2你就暗示你打算 试试',
                },{
                    id: 10016,
                    img: 'https://b-ssl.duitang.com/uploads/item/201501/30/20150130155420_ZrY3M.jpeg',
                    name: '飒飒啊',
                    title: '撒撒旦的礼物呢我还能见面萨姆森windSam大',
                },{
                    id: 10017,
                    img: 'https://b-ssl.duitang.com/uploads/item/201509/29/20150929223400_u84Mi.jpeg',
                    name: '你什么柠檬酸钠，吴娜，没事，按时',
                    title: '是实打实的那我们， 你',
                },{
                    id: 10018,
                    img: 'https://b-ssl.duitang.com/uploads/item/201409/05/20140905202927_WvCcR.thumb.700_0.jpeg',
                    name: '谁身上所所所所所所所所所',
                    title: 'Sam木木木木木木木',
                },{
                    id: 10019,
                    img: 'https://b-ssl.duitang.com/uploads/item/201601/03/20160103205923_ECwZ3.jpeg',
                    name: '谁身上所所所所所所所所所 啊啊啊所',
                    title: '是撒啊呜3人生大事多撒',
                },{
                    id: 10020,
                    img: 'https://b-ssl.duitang.com/uploads/item/201601/30/20160130233816_EJmCc.jpeg',
                    name: '飒飒妹子么么么',
                    title: '飒飒我就去哪2222AAS',
                },{
                    id: 10022,
                    img: 'http://img1.imgtn.bdimg.com/it/u=2357912857,682090914&fm=26&gp=0.jpg',
                    name: '谁身上所所所所所所',
                    title: '东西吃下自成蹊这次买吴娜，额 ',
                },{
                    id: 100211,
                    img: 'http://img4.imgtn.bdimg.com/it/u=3550594336,2107565062&fm=26&gp=0.jpg',
                    name: '啧啧啧啧啧啧做做做做做做做做做做做做做做',
                    title: '反反复复付付付付付付付',
                },
                
            ]
        }
    }



    loadRecommend = () => {

        this.setState({
            loading: false,
            floor: this.state.floor.concat(this.state.floor)
        });

    }

    componentDidMount() {
        this.setState({ loaded: true })
        this.setState({ loading: true })
    }

    renderIconGroup = () => {
        const { icon } = this.icon
        return (
            <View className='home_iconArr'>
                {
                    icon.map((e, i) => {
                        return (
                            <View onClick={this.handlePrevent} className='home_first'>
                                <Image className='home_iconArr-img' src={e.url} />
                                <Text className='home_text'>{e.name}</Text>
                            </View>
                        )
                    })
                }
            </View>

        )
    }

    render() {
        const { floor } = this.state
        const { swiperData } = this.swiperData

        return (
            <View className='home'>
                <ScrollView
                    scrollY
                    className='home_wrap'
                    onScrollToLower={this.loadRecommend}
                    style={{ height: getWindowHeight() }}>
                    <View onClick={this.handlePrevent}>
                        <Banner list={swiperData} />
                    </View>
                    {this.renderIconGroup()}

                    <View className='home__title' onClick={this.handlePrevent}>
                        <HomeTitle
                            title='栏目标题'
                            link='#'
                        />
                    </View>
                    <Recommend list={floor} />
                    {this.state.loading &&
                        <View className='home__loading'>
                            <Text className='home__loading-txt'>正在加载中...</Text>
                        </View>
                    }
                    {!this.state.hasMore &&
                        <View className='home__loading home__loading--not-more'>
                            <Text className='home__loading-txt'>更多内容，敬请期待</Text>
                        </View>
                    }
                </ScrollView>
            </View>


        )
    }

    handlePrevent = () => {
        // XXX 时间关系，首页只实现底部推荐商品的点击
        Taro.showToast({
            title: '敬请期待',
            icon: 'none'
        })
    }
}

export default Home
