<template>
  <div class="container game-wrapper">
    <div class="inner-content">
      <div class="game-box">
        <p class="my-score">我的积分：120</p>
        <ul class="game-goods">
          <li class="game-index-0" data-goods="包包">
            <img src="static/img/integ.png" alt="">
          </li>
          <li class="game-index-1" data-goods="键盘">
            <img src="static/img/img_indiana.png" alt="">
          </li>
          <li class="game-index-2" data-goods="20M流量">
            <img src="static/img/mylog.png" alt="">
          </li>
          <li class="game-index-7" data-goods="笔记本">
            <img src="static/img/img_indiana_goods.png" alt="">
          </li>
          <li class="game-index-3" data-goods="显示屏">
            <img src="static/img/img_indiana.png" alt="">
          </li>
          <li class="game-index-6" data-goods="蓝牙键盘">
            <img src="static/img/img_indiana.png" alt="">
          </li>
          <li class="game-index-5" data-goods="盒子">
            <img src="static/img/integ.png" alt="">
          </li >
          <li class="game-index-4" data-goods="平板电脑">
            <img src="static/img/img_indiana_goods.png" alt="">
          </li>
        </ul>
        <div class="game-start ">
          <p>抽奖</p>
          <span>10积分/次</span>
        </div>
      </div>
      <div class="game-reward">
        <p class="my-reward"><img src="../../assets/images/award1/text1.png" alt=""></p>
        <div class="reward-box">
          <div class="reward-title"><img src="../../assets/images/award1/text2.png" alt=""></div>
          <div class="reward-content">
            <div class="reward-bg">
              <div class="reward-list">
                <div class="list-header">
                  <span>用户名</span>
                  <span>奖品</span>
                </div>
                <div class="list-wrapper">
                  <ul class="list-content">
                    <li>
                      <span>136******38</span>
                      <span>20积分</span>
                    </li>
                    <li>
                      <span>136******38</span>
                      <span>30积分</span>
                    </li>
                    <li>
                      <span>136******38</span>
                      <span>40积分</span>
                    </li>
                    <li>
                      <span>136******38</span>
                      <span>50积分</span>
                    </li>
                    <li>
                      <span>136******38</span>
                      <span>60积分</span>
                    </li>
                    <li>
                      <span>136******38</span>
                      <span>70积分</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div class="game-rule">
          <p class="rule-title">
            <img src="../../assets/images/award1/text3.png" alt="">
          </p>
          <div class="rule-info">
            <div class="rule-list">
              <p>1、每次抽奖扣除10积分;</p>
              <p>2、抽中实体奖品后须在1个工作日内领取，过期自动视为放弃领取</p>
              <p>3、填写信息后1-3工作日内工作人员安排发货</p>
              <p>4、每次抽奖扣除10积分;</p>
              <p>5、抽中实体奖品后须在1个工作日内领取，过期自动视为放弃领取</p>
              <p>6、填写信息后1-3工作内工作人员安排发货;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'hello',
      data () {
        return {
          msg: '数据'
        }
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
  .game-wrapper {
    background: linear-gradient(to bottom, #d30fd5 0%, #6710d2 50%);
    background-color: #6810D2;
    min-height: 100%;
  }
  .game-wrapper .inner-content {
    background-size: 100% auto;
    background: url("../../assets/images/award1/img_background.png") no-repeat, url("../../assets/images/award1/xyppc_01.png") no-repeat, url("../../assets/images/award1/xyppc_02.png") no-repeat;
    background-size: 100% auto,100% auto,100% auto;
    background-position: center 0,center 0.6rem,center 7.66rem;
    padding-top: 0.6rem;
  }
  .game-wrapper .game-box {
    background-size: 100% auto;
    padding-top: 1.95rem;
    box-sizing: border-box;
    position: relative;
  }
  .game-wrapper .game-box .my-score {
    font-size: 0.28rem;
    padding: 0.1rem 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
  .game-wrapper .game-box .game-goods {
    width: 5.9rem;
    height: 5rem;
    margin: 0.63rem auto;
    margin-bottom: 0;
    position: relative;
  }
  .game-wrapper .game-box .game-goods li {
    background: url("../../assets/images/award1/img_prize_box.png") no-repeat center center;
    background-size: 100% 100%;
    width: 1.88rem;
    height: 1.55rem;
    border: 0.08rem solid transparent;
    border-radius: 8px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .game-wrapper .game-box .game-goods li.active {
    border: 0.08rem solid #9637ED;
  }
  .game-wrapper .game-box .game-goods li img {
    width: 100%;
    height: 98%;
    display: block;
  }
  .game-wrapper .game-box .game-goods li:nth-child(2) {
    top: 0;
    left: 2rem;
  }
  .game-wrapper .game-box .game-goods li:nth-child(3) {
    top: 0;
    left: 4rem;
  }
  .game-wrapper .game-box .game-goods li:nth-child(4) {
    top: 1.7rem;
    left: 0;
  }
  .game-wrapper .game-box .game-goods li:nth-child(5) {
    top: 1.7rem;
    left: 4rem;
  }
  .game-wrapper .game-box .game-goods li:nth-child(6) {
    top: 3.4rem;
    left: 0;
  }
  .game-wrapper .game-box .game-goods li:nth-child(7) {
    top: 3.4rem;
    left: 2rem;
  }
  .game-wrapper .game-box .game-goods li:nth-child(8) {
    top: 3.4rem;
    left: 4rem;
  }
  .game-wrapper .game-box .game-start {
    width: 1.88rem;
    height: 1.55rem;
    background: url("../../assets/images/award1/btn_lucky_draw.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 4.8rem;
    left: 2.8rem;
    transition: all ease .5s;
  }
  .game-wrapper .game-box .game-start p {
    color: #3c6df8;
    font-size: 0.48rem;
    font-weight: bold;
    padding-bottom: 0.2rem;
  }
  .game-wrapper .game-box .game-start span {
    font-size: 0.26rem;
    color: #3c6df8;
  }
  .game-wrapper .game-box .game-start.start {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  .game-wrapper .game-reward .my-reward {
    text-align: center;
    padding-top: 0.6rem;
    margin-bottom: 1.5rem;
  }
  .game-wrapper .game-reward .my-reward img {
    display: inline-block;
    width: 2.38rem;
  }
  .game-wrapper .game-reward .reward-box {
    width: 5.88rem;
    margin: 0 auto;
    background-color: #F52F6A;
  }
  .game-wrapper .game-reward .reward-box .reward-content {
    background-image: url("../../assets/images/award1/img_box-.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center top;
    padding-top: 0.1rem;
  }
  .game-wrapper .game-reward .reward-box .reward-content .reward-bg {
    background-color: #fff;
    padding: 0 0.5rem 0.35rem .5rem;
  }
  .game-wrapper .game-reward .reward-box .reward-title {
    text-align: center;
    margin-bottom: 0.3rem;
  }
  .game-wrapper .game-reward .reward-box .reward-title img {
    display: inline-block;
    width: 2.44rem;
  }
  .game-wrapper .game-reward .reward-box .reward-list {
    color: #3c6df8;
    overflow: hidden;
    background-position: center 0;
  }
  .game-wrapper .game-reward .reward-box .reward-list .list-header {
    background: #fff;
    padding: 0.23rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.3rem ;
    font-weight: bold;
    border-bottom: dashed 1px #3c6df8;
  }
  .game-wrapper .game-reward .reward-box .reward-list .list-wrapper {
    overflow: hidden;
    height: 1.3rem;
  }
  .game-wrapper .game-reward .reward-box .reward-list .list-content {
    padding-top: 0.08rem;
    background: #FFFFFF;
  }
  .game-wrapper .game-reward .reward-box .reward-list .list-content li {
    padding-bottom: 0.12rem;
    color: #3c6df8;
    display: flex;
    justify-content: space-between;
    font-size: 0.2rem ;
  }
  .game-wrapper .game-reward .game-rule {
    background-color: #F52F6A;
    margin: 0 0.23rem 0 0.25rem;
    overflow: hidden;
  }
  .game-wrapper .game-reward .game-rule .rule-title {
    text-align: center;
    margin: 0.4rem 0;
  }
  .game-wrapper .game-reward .game-rule .rule-title img {
    width: 2.08rem;
    display: inline-block;
  }
  .game-wrapper .game-reward .game-rule .rule-info {
    width: 5.88rem;
    margin: 0 auto;
    margin-bottom: 0.26rem;
  }
  .game-wrapper .game-reward .game-rule .rule-info .rule-list {
    padding: 0.5rem 0.3rem;
    background: #fff;
  }
  .game-wrapper .game-reward .game-rule .rule-info .rule-list p {
    font-size: 0.26rem;
    color: #3c3c3c;
    line-height: 1.5em;
  }
</style>
