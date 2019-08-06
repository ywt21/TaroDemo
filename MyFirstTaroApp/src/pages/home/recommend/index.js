import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list:[]
    // Array(20).fill({
    //   id: 10011,
    //     img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564836572&di=42869f31ddd9a05e6a4973ea2b81c4e4&src=http://pic1.nipic.com/2008-12-05/200812584425541_2.jpg',
    //     name: '幾大爺',
    // })
  }

  handleClick = (id) => {
    Taro.navigateTo({
      // url: `/pages/item/item?itemId=${id}`
    })
  }

  render() {
    const { list } = this.props
    return (
      <View className='home-recommend'>
        <View className='home-recommend__list'>
          {
            list.map(item =>( 
            <View
              key={item.id}
              className='home-recommend__list-item'
              onClick={this.handleClick.bind(this, item.id)}
            >
              <Image className='home-recommend__list-item-img' src={item.img} />
              <View className='home-recommend__list-item-info'>
                <Text className='home-recommend__list-item-name' numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className='home-recommend__list-item-detailname' numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </View>
            )
            )
          }
          
        </View>
      </View>
    )
  }
}
