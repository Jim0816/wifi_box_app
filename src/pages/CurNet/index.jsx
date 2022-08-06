import React, { Component } from 'react'
import curnet from './index.module.css'
import Dashboard from '../../components/Chart/Dashboard'
import person from '../../asserts/photo/curnet/person.png'
import find from '../../asserts/photo/curnet/find.png'
import interrupt from '../../asserts/photo/curnet/interrupt.png'
import mycs from '../../asserts/photo/curnet/mycs.png'
import xfw from '../../asserts/photo/curnet/xfw.png'


export default class index extends Component {

  state = {
  };


  constructor(props) {
    super(props)
   }

   componentDidMount() {

   }

 
  render() {
    return (
      <div className={curnet.container}>
        <div className={curnet.top}>
          <span className={curnet.top_span_1}>当前网络</span>
          <span className={curnet.top_span_2} style={{color: '#666666', fontWeight: 'normal'}}>网络地图</span>
          <span className={curnet.top_span_3}>
            <img src={person} style={{width: '100%', height: '100%'}}/>
          </span>
        </div>
        <div className={curnet.center}>
          <Dashboard/>
        </div>
        <div className={curnet.bottom_1}>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>IP:</label>
            <label style={{marginLeft: '1rem'}}>127.0.0.1</label>
          </span>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>频率:</label>
            <label style={{marginLeft: '1rem'}}></label>
          </span>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>MAC:</label>
            <label style={{marginLeft: '1rem'}}></label>
          </span>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>信道:</label>
            <label style={{marginLeft: '1rem'}}></label>
          </span>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>DNS:</label>
            <label style={{marginLeft: '1rem'}}></label>
          </span>
          <span className={curnet.bottom_1_item}>
            <label style={{color: '#333333'}}>网关:</label>
            <label style={{marginLeft: '1rem'}}></label>
          </span>
        </div>
        <div className={curnet.bottom_2}>
          <span className={curnet.bottom_2_item}>
            <span className={curnet.bottom_2_item_top}>
              <img src={find} style={{width: '100%', height: '100%'}}/>
            </span>
            <span className={curnet.bottom_2_item_center}>找蹭网</span>
            <span className={curnet.bottom_2_item_bootom}>熊孩子在蹭网</span>
          </span>

          <span className={curnet.bottom_2_item}>
            <span className={curnet.bottom_2_item_top}>
              <img src={interrupt} style={{width: '100%', height: '100%'}}/>
            </span>
            <span className={curnet.bottom_2_item_center}>看干扰</span>
            <span className={curnet.bottom_2_item_bootom}>信号强度图</span>
          </span>

          <span className={curnet.bottom_2_item}>
            <span className={curnet.bottom_2_item_top}>
              <img src={mycs} style={{width: '100%', height: '100%'}}/>
            </span>
            <span className={curnet.bottom_2_item_center}>漫游测试</span>
            <span className={curnet.bottom_2_item_bootom}>网络漫游切换</span>
          </span>

          <span className={curnet.bottom_2_item}>
            <span className={curnet.bottom_2_item_top}>
              <img src={xfw} style={{width: '100%', height: '100%'}}/>
            </span>
            <span className={curnet.bottom_2_item_center}>寻网络</span>
            <span className={curnet.bottom_2_item_bootom}>附近网络地图</span>
          </span>
        </div>
      </div>
    )
  }

}
