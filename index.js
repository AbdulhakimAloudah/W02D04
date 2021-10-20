// الفكرة// الفكرة
// h2 سوف اقوم بانشاء عنوان
//  document.createElement طريق
// ul ثم اضيف القائمة
//  ثم button
//  ثم input

//  .push سوف يتم الاضافة الى القايمة عن طريق
//  button function لاضافة

//الحذف من القائمة pop
///-----------------------------------

const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerHTML = "Todo List";
body.append(h1);


//-------
const ul = document.createElement("ul");
ul.className = "uul";
const ulSelector = document.querySelector("uul");
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];


//-----
const input = document.createElement("input");
input.type = "text";
input.id = "myInput";
body.append(input);

//------
const btn = document.createElement("button");
btn.innerHTML = "Button";
body.append(btn);

//-------
function renderList() {
  for (let i = 0; i < toDos.length; i++) {}
  ulSelector.append(toDos);
}
