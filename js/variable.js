let shopGroup = [{id:13579,name:"京东自营"},{id:12345,name:"郝轲"}];   /*店铺列表*/
let commidityGroup = [{id:123456789,src:"images/tamako.jpg",name:"良心商家良心商家良心商家良心商家良心商家",info:"颜色；赤橙黄绿青蓝紫.大小：超级大",price:19999.00,shopid:13579,ordercount:100},{id:12345678,src:"images/CommodityItemImg1.jpg",name:"无敌是多么的寂寞无敌是多么的寂寞无敌是多么的寂寞",info:"无敌是多么的寂寞无敌是多么的寂寞",price:19999.00,shopid:12345,ordercount:10},{id:123456789,src:"images/tamako.jpg",name:"良心商家良心商家良心商家良心商家良心商家",info:"颜色；赤橙黄绿青蓝紫.大小：超级大",price:19999.00,shopid:13579,ordercount:1},{id:12345678,src:"images/CommodityItemImg1.jpg",name:"无敌是多么的寂寞无敌是多么的寂寞无敌是多么的寂寞",info:"无敌是多么的寂寞无敌是多么的寂寞",price:19999.00,shopid:12345,ordercount:10}];    /*商品列表*/
// let commidityGroup = [];
if (commidityGroup.length == 0) {
  document.querySelector("#body-cart").innerHTML += "<div class='alertInfo'>“购物车中没有商品，快去添加吧”</div>";
}
else{
  for (let i = 0; i < shopGroup.length; i++) {
    let object = "<div class='shopGoods'>";
    let shopInfoOjb = "<div class='shopCategory'><span><input class='checkbox' name='shopCheck' type='checkbox' /><p class='shopname'>";
    let endSignal = "</div>";
    let commidityInfoObjSum = "";

    shopInfoOjb += shopGroup[i].name;
    shopInfoOjb += "</p></span></div>";


    for (let m = 0; m < commidityGroup.length; m++) {
      if (commidityGroup[m].shopid == shopGroup[i].id) {
        let commidityInfoObj = "<div class='commodity' id='";
        commidityInfoObj += commidityGroup[m].id;
        commidityInfoObj += "'><!--同一商家下添加商品，添加一个ul列表--><ul class='commodityList'><li class='CommodityList1'><input name='selectCommodity' class='checkbox' type='checkbox' /></li><li class='CommodityList2'><div class='CommodityItemImg'><img class='CommodityItemImage' src='";
        commidityInfoObj += commidityGroup[m].src;
        commidityInfoObj += "' /></div><a class='CommodityItemName' href='#'>";
        commidityInfoObj += commidityGroup[m].name;
        commidityInfoObj += "</a><div class='CommodityItemInfo'>";
        commidityInfoObj += commidityGroup[m].info;
        commidityInfoObj += "</div></li><li class='CommodityList3'>￥";
        commidityInfoObj += commidityGroup[m].price;
        commidityInfoObj += "</li><li class='CommodityList4'><button class='button button-minus button-square button-tiny'><i class='fa fa-minus'></i></button><input type='text' class='commodityNumInput' value='";
        commidityInfoObj += commidityGroup[m].ordercount;
        commidityInfoObj += "' /><button class='button button-square button-plus button-tiny'><i class='fa fa-plus'></i></button></li><li class='CommodityList5'><p class='smallCalcu'>";
        commidityInfoObj += "￥" + commidityGroup[m].ordercount * commidityGroup[m].price;
        commidityInfoObj += "</p></li><li class='CommodityList6'><a class='#'>删除商品</a><a class='#'>加入我的关注</a></li></ul></div>";
        commidityInfoObjSum += commidityInfoObj;
        }
      }
    object += shopInfoOjb + commidityInfoObjSum + endSignal;
    document.querySelector("#body-cart").innerHTML += object;
    }
}
/*输入框内修改数量功能*/
let commodityNumInputGroup = document.getElementsByClassName("commodityNumInput");
for (let i = 0; i < commodityNumInputGroup.length; i++) {
  commodityNumInputGroup[i].onblur = function(){
    let commodityNum = commodityNumInputGroup[i].value;
    let reg = /^[1-9][0-9]*$/
    if (!reg.test(commodityNum)) {
      alert("Please enter avaliable number");
      commodityNumInputGroup[i].value = 1;
    }
    else if (commodityNum >= 10000) {
      alert("Number should below 10000")
      commodityNumInputGroup[i].value = 1;
    }
  }
  let commidityID = commodityNumInputGroup[i].parentNode.parentNode.parentNode.id;
  let itsPrice = "";
  for (var m = 0; m < commidityGroup.length; m++) {
    if (commidityGroup[m].id == commidityID) {
      itsPrice = commidityGroup[m].price;
    }
  }
  commodityNumInputGroup[i].onchange = function(event){
    event.target.parentNode.parentNode.childNodes[4].firstChild.textContent = event.target.value * itsPrice;
  }
}

/*数量加减按钮功能*/
let buttonMinusGroup = document.getElementsByClassName("fa-minus");
let buttonPlusGroup = document.getElementsByClassName("fa-plus");
let smallCalcuGroup = document.getElementsByClassName("smallCalcu");
for (var i = 0; i < buttonMinusGroup.length; i++) {
  buttonPlusGroup[i].onclick = function (event) {
    let object = event.target.parentNode.parentNode.childNodes[1];
      object.value ++
    let commidityID =  event.target.parentNode.parentNode.parentNode.parentNode.id;
    let itsPrice = "";
    for (var m = 0; m < commidityGroup.length; m++) {
      if (commidityGroup[m].id == commidityID) {
        commidityGroup[m].ordercount = object.value;
        itsPrice = commidityGroup[m].price;
      }
    }
    event.target.parentNode.parentNode.parentNode.childNodes[4].firstChild.textContent = itsPrice * object.value;
  }

  buttonMinusGroup[i].onclick = function (event) {
    let object = event.target.parentNode.parentNode.childNodes[1];
    if (object.value > 1) {
      object.value --
    }
    let commidityID =  event.target.parentNode.parentNode.parentNode.parentNode.id;
    let itsPrice = "";
    for (var m = 0; m < commidityGroup.length; m++) {
      if (commidityGroup[m].id == commidityID) {
        commidityGroup[m].ordercount = object.value;
        itsPrice = commidityGroup[m].price;
      }
    }
    event.target.parentNode.parentNode.parentNode.childNodes[4].firstChild.textContent = itsPrice * object.value;
  }
}
