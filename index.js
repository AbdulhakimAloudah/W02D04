const body = document.querySelector("body");
const h1 = document.createElement("h1");

h1.innerHTML = "Todo List";
body.append(h1);

const ul = document.createElement("ul");
ul.className = "myUl";
body.append(ul);

const toDos = ["wake up", "eat breakfast", "code"];
