let shopGroup = [{id:13579,name:"京东自营"}];   /*店铺列表*/
let commidityGroup = [{src:"你猜啊",name:"良心商家良心商家良心商家良心商家良心商家",info:"颜色；赤橙黄绿青蓝紫.大小：超级大",price:19999.00,shopid:13579,ordercount:1}];    /*商品列表*/


for (let i = 0; i < shopGroup.length; i++) {
  let object = "<div class='shopGoods'>";
  let shopInfoOjb = "<div class='shopCategory'><span><input class='checkbox' name='shopCheck' type='checkbox' /><p class='shopname'>";
  let endSignal = "</div>";

  shopInfoOjb += shopGroup[i].name;
  shopInfoOjb += "</p></span></div>";
  document.querySelector("#body-cart").innerHTML += object;
  document.querySelector("#body-cart").innerHTML += shopInfoOjb;
  for (let m = 0; m < commidityGroup.length; m++) {
    if (commidityGroup[m].shopid == shopGroup[i].id) {
      let commidityInfoObj = "<div class='commodity'><!--同一商家下添加商品，添加一个ul列表--><ul class='commodityList'><li class='CommodityList1'><input name='selectCommodity' class='checkbox' type='checkbox' /></li><li class='CommodityList2'><div class='CommodityItemImg'><img class='CommodityItemImage' src='images/CommodityItemImg1.jpg' /></div><a class='CommodityItemName' href='#'>";
      commidityInfoObj += commidityGroup[m].name;
      commidityInfoObj += "</a><div class='CommodityItemInfo'>";
      commidityInfoObj += commidityGroup[m].info;
      commidityInfoObj += "</div></li><li class='CommodityList3'>￥";
      commidityInfoObj += commidityGroup[m].price;
      commidityInfoObj += "</li><li class='CommodityList4'><button class='button button-square button-tiny'><i class='fa fa-minus'></i></button><input type='text' class='commodityNumInput' /><button class='button button-square button-tiny'><i class='fa fa-plus'></i></button></li><li class='CommodityList5'>￥51996.00<br/>22.88kg</li><li class='CommodityList6'><a class='#'>删除商品</a><a class='#'>加入我的关注</a></li></ul></div>";
      document.querySelector("#body-cart").innerHTML += commidityInfoObj;
    }
  }
  document.querySelector("#body-cart").innerHTML += endSignal;
}
