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
    // SSS为从商家复选框到其对应下的所有具体商品的复选框的“映射”的第一个阶段
    let arr = new Array(3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59);
    for (let m = 1; m < sss.length; m++) {
      if (contains(arr,m)) {
        // LAA为从SSS到具体某商家下对应的所有复选框的“映射”，选取到所有对应的复选框
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
let singleCommidityGroup = document.getElementsByName('selectCommodity');

for (let i = 0; i < singleCommidityGroup.length; i++) {

    singleCommidityGroup[i].onchange = function() {

    let commidityCheckCount = 0;


    let commidityProjectionFirst = singleCommidityGroup[i].parentNode.parentNode.parentNode.getElementsByTagName('ul');
    for (let m = 0; m < commidityProjectionFirst.length; m++) {
      let commidityProjectionSecond = commidityProjectionFirst[m].childNodes[1].firstChild;
      // for (let s = 0; s < commidityProjectionSecond.length; s++) {
      //   if (commidityProjectionSecond[s].checked) {
      //     commidityCheckCount++;
      //   }
      // }
      console.log(commidityProjectionSecond);
      // if (commidityCheckCount == commidityProjectionSecond.length) {
      //   let changeobj = singleCommidityGroup[i];
        // for (let n = 0; n < storeGroup.length; n++) {
        //   let changeobj =
        //   storeGroup[n].checked = true;
        // }

    }
  }
}
