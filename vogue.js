var tabIndex = 0;

var shoeIndex = 0;
var yearIndex = 0;
var propsIndex = 0;

var tabs = ["views", "likes", "dislikes", "videos"];

var tabSets = [
  [
    { imgSrc: "1.png", text: "Vogue Femme", hint: "123 views" },
    { imgSrc: "2.png", text: "Old Way", hint: "222 views" },
    { imgSrc: "3.png", text: "New Way", hint: "333 views" },
    { imgSrc: "4.png", text: "Runway", hint: "4444 views" },
  ],
  [
    { imgSrc: "4.png", text: "Vogue Femme", hint: "5555 views" },
    { imgSrc: "3.png", text: "Old Way", hint: "66 views" },
    { imgSrc: "2.png", text: "New Way", hint: "777 views" },
    { imgSrc: "1.png", text: "Runway", hint: "3332323 views" },
  ],
  [
    { imgSrc: "1.png", text: "Vogue Femme", hint: "1 views" },
    { imgSrc: "1.png", text: "Old Way", hint: "999 views" },
    { imgSrc: "1.png", text: "New Way", hint: "838383 views" },
    {
      imgSrc: "1.png",
      text: "Runway",
      hint: "444444444 views",
    },
  ],
  [
    { imgSrc: "4.png", text: "Vogue Femme", hint: "1 views" },
    { imgSrc: "4.png", text: "Old Way", hint: "999 views" },
    { imgSrc: "4.png", text: "New Way", hint: "838383 views" },
    {
      imgSrc: "4.png",
      text: "Runway",
      hint: "444444444 views",
    },
  ],
];

var shoeDataSets = [
  // shoe 1
  [
    // shoe 1 + 2012
    [
      // shoe 1 + 2012 + views
      [],
      // shoe 1 + 2012 + likes
      [],
      // shoe 1 + 2012 + dislikes
      [],
      // shoe 1 + 2012 + videos
      [],
    ],
    // shoe 1 + 2013
    [
      // shoe 1 + 2013 + views
      [],
      // shoe 1 + 2013 + likes
      [],
      // shoe 1 + 2013 + dislikes
      [],
      // shoe 1 + 2013 + videos
      [],
    ],
  ],
  // shoe 2
  [
    // shoe 2 + 2012
    [
      // shoe 2 + 2012 + views
      [],
      // shoe 2 + 2012 + likes
      [],
      // shoe 2 + 2012 + dislikes
      [],
      // shoe 2 + 2012 + videos
      [],
    ],
    // shoe 2 + 2013
    [
      // shoe 2 + 2013 + views
      [],
      // shoe 2 + 2013 + likes
      [],
      // shoe 2 + 2013 + dislikes
      [],
      // shoe 2 + 2013 + videos
      [],
    ],
  ],
];

var years = ["2012", "2013"];
var properties = ["views", "likes", "dislikes", "videos"];

var children = document.querySelectorAll(".child img");

function updateView() {
  var set = tabSets[tabIndex];

  set.forEach(function (item, itemIndex) {
    children[itemIndex].src = item.imgSrc;
    children[itemIndex].alt = item.text;
    children[itemIndex].title = item.hint;
  });
}

var buttons = document.querySelector(".buttons");

function renderTabs() {
  tabs.forEach(function (tab, index) {
    var tabButton = document.createElement("button");
    tabButton.classList.add("tab-button");
    tabButton.innerHTML = tab;
    buttons.appendChild(tabButton);

    tabButton.addEventListener("click", function () {
      tabIndex = index;
      updateView();
    });
  });
}

// рисует кнопки с годами
function renderYears() {}
// рисует боковое
function renderProps() {}

renderTabs();
updateView();
