// トッピング画像のソース情報取得
import Icon_circle from "./img/circle.png";
import Icon_triangle from "./img/triangle.png";
import Icon_square from "./img/square.png";

import Icon_cheese1 from "./img/topping/cheese1.png";
import Icon_Veg1 from "./img/topping/Veg1.png";
import Icon_Broccoli from "./img/topping/Broccoli.png";
import Icon_Meat1 from "./img/topping/Meat1.png";
import Icon_Ika1 from "./img/topping/Ika1.png";
import Icon_Tomata from "./img/topping/Tomato.png";

export default function Getimage_src(obj) {
  // console.log(obj);
  // var n = obj.IndexOf(".png");
  // 文字列が画像かどうかチェック

  // 文字列を加工

  // サイドメニュー画像の変更用
  // インポートした画像オブジェクトを、返却用のオブジェクトにそれぞれ設定して返す。
  // 返却するのは現在選択中のトッピングの種類、と番号によって取得したインデックスのもの
  var Img_list = {
    veg: {
      1: { 1: Icon_Veg1, 2: Icon_Broccoli, 3: Icon_Tomata },
      2: { 1: Icon_circle, 2: Icon_triangle, 3: Icon_square }
    },
    meat: {
      1: { 1: Icon_Meat1, 2: Icon_Ika1, 3: Icon_triangle },
      2: { 1: Icon_circle, 2: Icon_triangle, 3: Icon_square }
    },

    cheese: {
      1: { 1: Icon_cheese1, 2: Icon_cheese1, 3: Icon_cheese1 },
      2: { 1: Icon_circle, 2: Icon_triangle, 3: Icon_square }
    }
  };

  var type = obj["type"];
  var n = obj["num"];

  var result = Img_list[type][n];

  return result;
}
