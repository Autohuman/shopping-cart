
let recomClassGroup = [
{id:1234,name:"Haoke的Q币",src:"images/class1.png"},
{id:123,name:"新鲜的Dingzhiwei",src:"images/class2.png"},
{id:12345,name:"大只的yangweibin",src:"images/class3.jpg"}];
let recomCommGroup = [
{id:1234561,classid:123,src:"images/1.jpg",info:"最强大的HaoKeHAHAHAHAHA",price:19999.00},
{id:1234562,classid:123,src:"images/2.png",info:"最强大的HaoKeHAHAHAHAHA",price:18888.00},
{id:1234563,classid:123,src:"images/3.png",info:"最强大的HaoKeHAHAHAHAHA",price:17777.70},
{id:1234564,classid:123,src:"images/4.png",info:"最强大的HaoKeHAHAHAHAHA",price:17677.70},
{id:123451,classid:1234,src:"images/5.png",info:"DDDDDDD",price:1999.00},
{id:123452,classid:1234,src:"images/6.jpg",info:"DDDDDDD",price:1777.70},
{id:123453,classid:1234,src:"images/7.jpg",info:"DDDDDDD",price:1988.00},
{id:123454,classid:1234,src:"images/8.png",info:"DDDDDDD",price:1988.00},
{id:12341,classid:12345,src:"images/9.jpg",info:"HahahahahaHHHA",price:15489.00},
{id:12342,classid:12345,src:"images/10.jpg",info:"HahahahahaHHHA",price:15789.00},
{id:12343,classid:12345,src:"images/11.png",info:"HahahahahaHHHA",price:15489.00},
{id:12344,classid:12345,src:"images/12.png",info:"HahahahahaHHHA",price:15489.00}
];
if (recomCommGroup.length == 0) {
  document.querySelector(".recommend").innerHTML += "<div class='alertInfo'>“暂无可推荐商品，快去购物吧”</div>";
}
else {
  for (let i = 0; i < recomClassGroup.length; i++) {
    let classInfoObj = "<div class='commodityType'><div class='adItemCaption'><a href='#'><img src='";
    classInfoObj += recomClassGroup[i].src;
    classInfoObj += "' /></a><a href='#'>";
    classInfoObj += recomClassGroup[i].name;
    classInfoObj += "</a><p>";
    classInfoObj += recomClassGroup[i].id;
    classInfoObj += "</p><i>Ha:)Ha:)Ha:)</i>";
    classInfoObj += "</div><ul>";

    let recomCommInfoObjContainer = "";
    for (let x = 0; x < recomCommGroup.length; x++) {
      if (recomCommGroup[x].classid == recomClassGroup[i].id) {
        let recomCommInfoObj = "<li><img src='";
        recomCommInfoObj += recomCommGroup[x].src;
        recomCommInfoObj += "' /><div class='adItemName'><a style='text-decoration: none;' href='#'>";
        recomCommInfoObj += recomCommGroup[x].info;
        recomCommInfoObj += "</a></div><div class='adItemInfo'><span><i>￥</i><p>";
        recomCommInfoObj += recomCommGroup[x].price;
        recomCommInfoObj += "</p></span><a href='#' ><i class='fa fa-shopping-bag' aria-hidden='true'></i></a></div></li>";
        recomCommInfoObjContainer += recomCommInfoObj;
      }

    }
    document.querySelector(".recommend").innerHTML += classInfoObj + recomCommInfoObjContainer;

  }
}
