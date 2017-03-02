## 1. 顯示時間
製作一個表格顯示時間

## 2. 拋體運動
寫一個物件導向的模擬球斜拋的運動，並呈現 t, x, y

## 3. 猜拳
寫一個物件導向程式讓兩個人猜拳100次，並呈現輸贏結果。

## 4. 生存遊戲
在 10*10 的網格地圖中，隨機分布 20 個人，每個人每一回合隨機朝四周 8 個方向移動一單位。
每一回合只要兩個以上的人碰面，就進行猜拳，贏的人留在地圖上，輸的人被淘汰移除。不斷進行直到剩下一人。
顯示進行 100 場遊戲，每場產生勝利者 (1) 需要花多少回合 (2) 擊敗對手數量

提示：人為一個物件，地圖為一個物件

## 5. 三門問題
題目連結：https://zh.wikipedia.org/wiki/%E8%92%99%E6%8F%90%E9%9C%8D%E7%88%BE%E5%95%8F%E9%A1%8C

實現三門問題，計算換門或不換門，各玩 1000 局下來，最後贏的比例

## 6. D3.js 統計圖
將第 4 題生存遊戲，將遊戲中最後勝利者碰到對手的次數、平手的次數、贏過的人數都紀錄下來，然後統計 1000 次畫成長條圖。
長條圖參考 `lineChartSample.html` 
### 指定閱讀
嵌入 js：
- http://javascript.info/tutorial/adding-script-html

D3.js 原理：
- http://www.oxxostudio.tw/articles/201410/svg-d3-js.html
- http://www.oxxostudio.tw/articles/201410/svg-d3-info.html
- http://www.oxxostudio.tw/articles/201411/svg-d3-01-data.html
- http://www.oxxostudio.tw/articles/201509/svg-d3-19-bar-chart.html

## 7. Grids Visualization
將第 4 題生存遊戲視覺化，讓不同顏色的格子代表不同玩家，藉此模擬遊戲進行。

採用 D3.js 的話可以參考:
- https://tigercosmos.github.io/fun_game/game_of_life/
- https://tigercosmos.github.io/fun_game/eatting_snake/
- http://bl.ocks.org/tjdecke/5558084
- http://bl.ocks.org/oyyd/859fafc8122977a3afd6
- http://bl.ocks.org/NPashaP/f1e73faef87bee899b47

或使用 Canvas 也可以。

## 8. 網格系統
Bootstrap 廣泛運用在網頁版型開發上。了解如何使用 Bootstrap。
此外使用 Bootstrap 也可以輕鬆做到響應式網站，也就是會隨視窗大小調整區塊位置，大小螢幕都可以調整成適合閱讀的樣子。

參考：
- [W3C Bootstrap 教學](https://www.w3schools.com/bootstrap/default.asp ) : `try it yourself` 點開自己玩玩看
- http://cythilya.blogspot.tw/2014/10/rwd.html

## 9. HTTP Method
先了解甚麼是 HTTP Method：參考 [這篇](http://data-sci.info/2015/10/24/%E5%B8%B8%E8%A6%8B%E7%9A%84http-method%E7%9A%84%E4%B8%8D%E5%90%8C%E6%80%A7%E8%B3%AA%E5%88%86%E6%9E%90%EF%BC%9Agetpost%E5%92%8C%E5%85%B6%E4%BB%964%E7%A8%AEmethod%E7%9A%84%E5%B7%AE%E5%88%A5/)
和 [這篇](https://blog.toright.com/posts/1203/%E6%B7%BA%E8%AB%87-http-method%EF%BC%9A%E8%A1%A8%E5%96%AE%E4%B8%AD%E7%9A%84-get-%E8%88%87-post-%E6%9C%89%E4%BB%80%E9%BA%BC%E5%B7%AE%E5%88%A5%EF%BC%9F.html)

此外還要認識一下 `JSON` 格式是啥。看一下 [這篇](https://blog.wu-boy.com/2011/04/%E4%BD%A0%E4%B8%8D%E5%8F%AF%E4%B8%8D%E7%9F%A5%E7%9A%84-json-%E5%9F%BA%E6%9C%AC%E4%BB%8B%E7%B4%B9/)

所謂的 API 就是前端透過 HTTP Method 去和後端做溝通。而溝通的資訊以 `JSON` 格式傳遞。

至於前端如何採用 HTTP Method 呼叫 API？ 這篇提供你一個簡單的方式，參考 [這篇](https://www.w3schools.com/jquery/jquery_ajax_get_post.asp)。

試著練習用這個 [氣象資訊 API](https://works.ioa.tw/weather/api/doc/index.html) 裡面的 API，
做一個表格顯示所有鄉鎮市目前的累積雨量為多少。這邊你只需要用到 `GET` 這個 HTTP Method 就可以拿到你要的資料了。

有時間可以呈現更多花樣 (例如有很多區塊，分別呈現不同資訊)，試著練習用 Bootstrap 做一些版面的配置。

## 10. jQuery 
`jQuery` 是一種 JS 的框架，讓 JS 操作 HTML `DOM` 更加容易，在一些小網站中特別好用。
比較古老的大型網站也還有採用。大網站比較新穎的方式是採用 `Angular 2` 、`React JS` 或是 `Vue.JS`

參考：https://www.w3schools.com/jquery/

看看他跟一般呼叫 `DOM` 有甚麼差異。

順帶一提，`bootstrap` 有使用到 `jQuery` 所以引入函式庫的時候要先放 `jQuery` 再放 `bootstrap`
