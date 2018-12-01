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
