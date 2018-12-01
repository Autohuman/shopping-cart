let storeGroup = document.getElementsByName("shopCheck");

for (let i = 0; i < storeGroup.length; i++) {

  storeGroup[i].onclick = function() {
    let sss = storeGroup[i].parentNode;
    let storeCommodityGroup = storeGroup[i].parents('shopCategory').next().children().firstChild.firstChild;
    let status = storeGroup[i].checked;
    if (status) {
      for (let s = 0; s < storeCommodityGroup.length; s++) {
        storeCommodityGroup[s].checked = true;
      }
    }
    else {
      let group = document.getElementsByName("selectAll");
      for (var s = 0; s < group.length; s++) {
        group[s].checked = false;
      }
      for (var s = 0; s < storeCommodityGroup.length; s++) {
        storeCommodityGroup[s].checked = false;
      }
    }
  }
}

/*检验函数是否在数组中存在*/
function contains(arr, obj) {  
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}
