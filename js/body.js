// checkbox功能 checkbox功能 checkbox功能 checkbox功能 checkbox功能 checkbox功能 checkbox功能 checkbox功能 checkbox功能
/*全选框功能*/
let group = document.getElementsByName("selectAll");
let allCheckBox = document.getElementsByClassName("checkbox");

for (let i = 0; i < group.length; i++) {
    group[i].onclick = function(){
      let status = group[i].checked;
      if (status) {
        for (let s = 0; s < allCheckBox.length; s++) {
          allCheckBox[s].checked = true;
        }
      }
      else{
        for (let s = 0; s < allCheckBox.length; s++) {
          allCheckBox[s].checked = false;
        }
      }
  }
}

/*判断元素是否在数组中的函数*/
function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}

/*店铺下商品全选框功能*/
let storeGroup = document.getElementsByName("shopCheck");

for (let i = 0; i < storeGroup.length; i++) {
    storeGroup[i].onclick = function() {
    let status = storeGroup[i].checked;
    let sss = storeGroup[i].parentNode.parentNode.parentNode.childNodes[3].childNodes;
    let arr = new Array(3,5,7,9,11,13,15,17,19,21,23,25);
    for (let m = 1; m < sss.length; m++) {
      if (contains(arr,m)) {
        let laa = sss[m].childNodes[1].childNodes[0];
        if (status) {
            laa.checked = true;
        }
        else {
            laa.checked = false;
            let selectAllToChange = document.getElementsByClassName('selectAll');
            for (let s = 0; s < selectAllToChange.length; s++) {
              selectAllToChange[s].checked = false;
            }
        }
      }
    }
  }
  // 此处开始验证是否需要修改最大的全选复选框的checked属性
  storeGroup[i].onchange = function() {
    let storeCheckCount = 0;
    for (let m = 0; m < storeGroup.length; m++) {
      if (storeGroup[m].checked == true) {
        storeCheckCount++;
      }
    }
    if (storeCheckCount == storeGroup.length) {
      for (let n = 0; n < group.length; n++) {
        group[n].checked = true;
      }
    }
  }
}

/*具体某件商品的复选框状态设置*/
