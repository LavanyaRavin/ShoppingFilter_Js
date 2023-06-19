const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#search');

console.log(buttons);
console.log(boxes);
console.log(searchBox);

searchBox.addEventListener('keyup', search);

function search() {
  var searchText = searchBox.value.toLowerCase().trim();
  console.log(searchText);


  boxes.forEach((box) => {
    var boxItem = box.dataset.item;
    if (boxItem.includes(searchText)) {
      box.classList.add("show");
    }
    else {
      box.classList.add("hide");
    }
  })
}

buttons.forEach((button) => {

  button.addEventListener('click', match);

  function match(e) {
    var btnFilter = e.target.dataset.filter
    e.preventDefault();
    setActiveBtn(e);

    boxes.forEach((box) => {
      var boxItem = box.dataset.item;
      if (btnFilter == 'all') {
        box.classList.remove("hide");
        box.classList.add("show");
        // box.style.display = "block"
      } else if (btnFilter == boxItem) {
        box.classList.remove("hide");
        box.classList.add("show");
        // box.style.display = "block"
      }
      else {
        box.classList.remove("show");
        box.classList.add("hide");
        // box.style.display = "none"

      }
    })
  }
})

function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
}

