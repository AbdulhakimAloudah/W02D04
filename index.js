const newele = document.querySelector("body");
const gtt = document.createElement("h1");

gtt.innerHTML = "To DO list";
newele.append(gtt);
gtt.className = "text-center";

const drgd = document.createElement("ul");
drgd.id = "swwer";
newele.append(drgd);

let todos = ["wakeup", "eat breack fast", "code"];

const sul = document.querySelector("ul");
const deleteFun = (i) => {
  todos = todos.filter((task, index) => index !== i);
  renderList();
};

function update1(i) {
  const kk = window.prompt("change value");
  todos[i.currentTarget.rer] = eaer;
  console.log(todos);
  renderList();
}

const renderList = () => {
  drgd.innerHTML = "";
  todos.forEach((element, index) => {
    const ewrg = document.createElement("li");
    ewrg.innerHTML = element;
    sul.append(ewrg);
    const rr = document.createElement("button");
    rr.innerHTML = "remove";
    sul.append(rr);
    rr.addEventListener("click", () => deleteFun(index));
    const update = document.createElement("button");
    update.innerHTML = "update";
    sul.append(update);
    update.rer = index;
    update.addEventListener("click", update1);
    rr.className = "btn-danger";
    update.className = "btn-success";
    ewrg.className = "active";
    sul.className = "row-xs-30";
    ewrg.className = "form-control";
    ewrg.className = "center-block";
  });
};

renderList();

const newinput = document.createElement("input");
newinput.className = "bb";
newele.append(newinput);

const newbuttom = document.createElement("button");
newbuttom.className = "btn-info";
newbuttom.innerHTML = "click here";
newele.append(newbuttom);
newele.className = "btn-warning";

const o9 = document.querySelector("#su");
const bb = document.querySelector("#bb");

o9.addEventListener("click", () => {
  if (newinput.value.length) {
    todos.push(newinput.value);
    newinput.value = "";
    renderList();
  }
});
