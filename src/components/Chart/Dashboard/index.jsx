import React, { Component } from 'react'
import chart from './index.module.css'
import { message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import wifi_logo from '../../../asserts/photo/curnet/wifi.png'
import upload from '../../../asserts/photo/curnet/upload.png'
import download from '../../../asserts/photo/curnet/download.png'
import speed from '../../../asserts/photo/curnet/speed.png'
import delay from '../../../asserts/photo/curnet/delay.png'
import bg from '../../../asserts/photo/curnet/bg.png'
import down from '../../../asserts/photo/curnet/down.png'

import {Picker } from 'antd-mobile';

const basicColumns = [
  [
    { label: 'TP-LINK-1111', value: 'TP-LINK-1111' },
    { label: 'TP-LINK-1112', value: 'TP-LINK-1112' },
    { label: 'TP-LINK-1113', value: 'TP-LINK-1113' },
    { label: 'TP-LINK-1114', value: 'TP-LINK-1114' },
    { label: 'TP-LINK-1115', value: 'TP-LINK-1115' },
  ]
]


export default class index extends Component {

  state = {
    pickerVisible: false,
    pickerValue: 'TP-LINK-1113'
  }

  componentDidMount(){

  }

  render() {
    let {pickerVisible, pickerValue} = this.state
    return (
      <div className={chart.container}>
        <div className={chart.box}>
          <ReactEcharts option={this.getOption()} style={{width: '100%', height: '100%'}}/>
        </div>
        <div className={chart.overlay_2}>
          <div style={{position: 'relative', width: '100%', height: '100%'}}>
            <span className={chart.overlay_2_bg}>
              <img src={bg} style={{width: '100%', height: '100%'}}/>
            </span>
            <label className={chart.overlay_2_text}>再测一次</label>
          </div>
        </div>
        <div className={chart.overlay} style={{width: '50rem', height: '5rem'}}>
          <span style={{marginLeft: '0rem', width: '4rem', height: '4rem'}}>
            <img src={wifi_logo} style={{width: '100%', height: '100%'}}/>
          </span>
          <label onClick={this.openPicker} style={{marginLeft: '1.625rem', color: '#333333', fontSize: '2.7rem', lineHeight: '5rem', fontWeight: 'bolde'}}>{pickerValue}</label>
          <span style={{marginTop: '0.9rem', marginLeft: '1.025rem', width: '3.5rem', height: '3.5rem'}}>
            <img onClick={this.openPicker} src={down} style={{width: '100%', height: '100%'}}/>
          </span>
          <Picker 
            columns={basicColumns} 
            visible={pickerVisible}
            value={pickerValue}
            onCancel={this.closePicker}
            onConfirm={(value) => {this.confirmPicker(value)}}
            style={{
              height: '40rem',
              "--item-height": '5rem',
              "--header-button-font-size": '3rem', 
              "--item-font-size": '3rem', 
              "--title-font-size": '3rem'}} />
        </div>

        <div className={chart.overlay_1}>

          <span className={chart.overlay_1_item}>
            <span className={chart.overlay_1_item_top}>
              <label style={{color: '#333333', fontSize: '2.5rem', fontWeight: 'bold'}}>4.9</label>
              <label style={{color: '#666666', fontSize: '2rem'}}>mb/s</label>
            </span>
            <span className={chart.overlay_1_item_bottom}>
              <span style={{float: 'left', width: '2.5rem', height: '2.5rem'}}>
                <img src={upload} style={{width: '100%', height: '100%'}}/>
              </span>
              <span style={{float: 'left', marginLeft: '0.5rem', height: '3rem', color: '#333333', fontSize: '2.0rem', lineHeight: '2.5rem'}}>上传</span>
            </span>
          </span>

          <span className={chart.overlay_1_item}>
            <span className={chart.overlay_1_item_top}>
              <label style={{color: '#333333', fontSize: '2.5rem', fontWeight: 'bold'}}>2.1</label>
              <label style={{color: '#666666', fontSize: '2rem'}}>mb/s</label>
            </span>
            <span className={chart.overlay_1_item_bottom}>
              <span style={{float: 'left', width: '2.5rem', height: '2.5rem'}}>
                <img src={download} style={{width: '100%', height: '100%'}}/>
              </span>
              <span style={{float: 'left', marginLeft: '0.5rem', height: '3rem', color: '#333333', fontSize: '2.0rem', lineHeight: '2.5rem'}}>下载</span>
            </span>
          </span>

          <span className={chart.overlay_1_item}>
            <span className={chart.overlay_1_item_top}>
              <label style={{color: '#333333', fontSize: '2.5rem', fontWeight: 'bold'}}>800</label>
              <label style={{color: '#666666', fontSize: '2rem'}}>mbps</label>
            </span>
            <span className={chart.overlay_1_item_bottom}>
              <span style={{float: 'left', width: '2.5rem', height: '2.5rem'}}>
                <img src={speed} style={{width: '100%', height: '100%'}}/>
              </span>
              <span style={{float: 'left', marginLeft: '0.5rem', height: '3rem', color: '#333333', fontSize: '2.0rem', lineHeight: '2.5rem'}}>速率</span>
            </span>
          </span>

          <span className={chart.overlay_1_item}>
            <span className={chart.overlay_1_item_top}>
              <label style={{color: '#333333', fontSize: '2.5rem', fontWeight: 'bold'}}>-53</label>
              <label style={{color: '#666666', fontSize: '2rem'}}>ms</label>
            </span>
            <span className={chart.overlay_1_item_bottom}>
              <span style={{float: 'left', width: '2.5rem', height: '2.5rem'}}>
                <img src={delay} style={{width: '100%', height: '100%'}}/>
              </span>
              <span style={{float: 'left', marginLeft: '0.5rem', height: '3rem', color: '#333333', fontSize: '2.0rem', lineHeight: '2.5rem'}}>延迟</span>
            </span>
          </span>

        </div>
      </div>
    )
  }

  getOption = () => {
    let option = {
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'auto'
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };
    return option
  }

  openPicker = () => {
    this.state.pickerVisible = true
    this.forceUpdate()
  }

  closePicker = () => {
    this.state.pickerVisible = false
    this.forceUpdate()
  }

  confirmPicker = (value) => {
    let val = value[0]
    this.state.pickerValue = val
    this.state.pickerVisible = false
    this.forceUpdate()
  }

  
}
