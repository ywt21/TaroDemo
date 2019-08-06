import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class SwiperBanner extends Component {
    static defaultProps = {
        list: [
            // {
            //     rank: '1',
            //     img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564836572&di=42869f31ddd9a05e6a4973ea2b81c4e4&src=http://pic1.nipic.com/2008-12-05/200812584425541_2.jpg'
            // },
            // {
            //     rank: '2',
            //     img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564747834250&di=7b88515903421ad246913952740655bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa211a222889d4945b4c9806216f23b99f4a6baba.jpg'
            // },
            // {
            //     rank: '3',
            //     img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564747834250&di=7b88515903421ad246913952740655bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa211a222889d4945b4c9806216f23b99f4a6baba.jpg'
            // },
            // {
            //     rank: '4',
            //     img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564747834250&di=7b88515903421ad246913952740655bf&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa211a222889d4945b4c9806216f23b99f4a6baba.jpg'
            // },
        ]
    }

    render() {
        const { list } = this.props
        return (
            <View className='home-banner'>
                <Swiper
                    className='home-banner__swiper'
                    circular
                    autoplay
                    indicatorDots
                    indicatorActiveColor='rgb(178, 42, 49)'
                // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
                // previousMargin
                // nextMargin
                >
                    {list.map(item => (
                        <SwiperItem
                            key={item.rank}
                            className='home-banner__swiper-item'
                        >
                            <Image
                                className='home-banner__swiper-item-img'
                                src={item.img}
                            />
                        </SwiperItem>
                    ))}
                </Swiper>
            </View>
        )
    }
}
