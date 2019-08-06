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
        swiperData: Array(5).fill({
            rank: '1',
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564747834250&di=7b88515903421ad246913952740655bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa211a222889d4945b4c9806216f23b99f4a6baba.jpg',
        }),
        icon: Array(5).fill({
            url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564846655828&di=67642b0b7df41f1ba10ac507b0467f97&imgtype=0&src=http%3A%2F%2Fpic1.nipic.com%2F2008-12-05%2F200812584425541_2.jpg',
            name: '故事'
        }),
    }
    state = {
        loaded: true,
        loading: false,
        lastItemId: 0,
        hasMore: true
    }
    constructor(props) {
        super(props);
        this.state = {
            hasMore: true,
            floor: Array(20).fill({
                id: 10011,
                img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564836572&di=42869f31ddd9a05e6a4973ea2b81c4e4&src=http://pic1.nipic.com/2008-12-05/200812584425541_2.jpg',
                name: '快来陪我玩啊',
                title:'这是简介。。。。。。。。。。。',

            })
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
        const { icon } = this.config
        return (
            <View style={{display:'flex',flexWrap:'wrap',flexDirection:'row',padding:'0 20px 0',marginTop:'20px'}}>
                {
                    icon.map((e, i) => {
                        return (
                            <View onClick={this.handlePrevent} style={{ display:'flex',flexDirection:'column',alignItems:'center',marginRight:'27px',}}>
                                <Image style={{width:'40px',height:'40px'}} src={e.url} />
                                <Text style={{fontSize:'12px'}}>{e.name}</Text>
                            </View>
                        )
                    })
                }
            </View>

        )
    }

    render() {
        const { floor } = this.state
        const { swiperData } = this.config

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

                    <View style={{ padding: '0 10px', background: '#ffffff' }} onClick={this.handlePrevent}>
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
