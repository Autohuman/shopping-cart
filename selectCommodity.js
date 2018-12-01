let singleCommidityGroup = document.getElementsByName('selectCommodity');

for (let i = 0; i < singleCommidityGroup.length; i++) {

    singleCommidityGroup[i].onchange = function() {

    let commidityCheckCount = 0;


    let commidityProjectionFirst = singleCommidityGroup[i].parentNode.parentNode.parentNode.getElementsByTagName('ul');
    for (let m = 0; m < commidityProjectionFirst.length; m++) {
      let commidityProjectionSecond = commidityProjectionFirst[m].childNodes[1].firstChild;
      let status = ;
      for (var s = 0; s < commidityProjectionSecond.length; s++) {
        if (commidityProjectionSecon[s].checked) {
          commidityCheckCount++;
        }
      }
      if (commidityCheckCount == commidityProjectionSecond.length) {
        let changeobj = singleCommidityGroup[i].
        console.log(changeobj);
        // for (let n = 0; n < storeGroup.length; n++) {
        //   let changeobj =
        //   storeGroup[n].checked = true;
        // }
      }
    }
  }
}
