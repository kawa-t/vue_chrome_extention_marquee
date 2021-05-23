<template>
  <div class="marquee">
    <div
      class="marquee_text"
      :style="`animation-duration:${duration}s;` + `width:${textWidth}px;`"
    >
      <div>||　　now xrp chart {{ xrpData[1] }} yan</div>
      <div>||　　24h hegh price {{ xrpData[2] }} yan</div>
      <div>||　　24h low price {{ xrpData[3] }} yan　　||</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      textMessage: "コンポーネントです",
      duration: "",
      textWidth: "",
      xrpData: [],
    };
  },
  methods: {
    getData: function() {
      const targetUrl =
        "https://script.google.com/macros/s/AKfycbxMw7wofgG4CT3Po_ISXgm28K4LxfeJuPLPzVGydCutMBi6uhF1yqRBvFVlnbbNx4E8/exec";

      axios.get(targetUrl).then((response) => {
        // console.log(response.data);
        this.xrpData = response.data;
      });
    },
    resize: function() {
      let consider = this.textMessage.length;
      // 画面幅と文字列全体の幅から、文字が流れる速度を決める
      // この値を小さくすればより速く流れるようになります
      this.duration = Math.trunc(window.innerWidth / 60) + consider / 10;
      // 1文字の幅を16pxとして、文字列全体の幅をざっくり算出
      // フォントサイズが変わるならここを適宜調整する
      this.textWidth = consider * 16;
      // 流れる文字要素の幅とアニメーションの秒数を要素のスタイルに指定
    },
  },
  mounted: function() {
    this.getData(); // データを取得する
    this.resize(); // 画面リサイズ時のスタイル更新処理を呼び出す
  },
};
</script>

<style>
.marquee {
  width: 100%; /** 幅は親要素に合わせる */
  overflow: hidden; /** 親要素からはみ出した部分は非表示とする */
  padding-top: 7px;
}

.marquee_text {
  padding-left: 100%; /** 表示する要素が完全に画面右端からはみ出すように位置を調整 */
  text-align: left;
  white-space: nowrap;
  display: flex;

  animation-name: marquee; /** 流れる文字のアニメーション設定 */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes marquee {
  from {
    transform: translate(0%);
  }
  100%,
  to {
    transform: translate(-120%); /* 画面左端まで移動する */
  }
}
</style>
