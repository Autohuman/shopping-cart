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
