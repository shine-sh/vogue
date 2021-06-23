var tabIndex = 0;

var shoeIndex = 0;
var yearIndex = 0;
var propsIndex = 0;

var tabs = ["views", "videos", "likes", "dislikes"];

var tabSets = [
  [
    { imgSrc: "1.png", text: "Vogue Femme", hint: "123 views" },
    { imgSrc: "2.png", text: "Old Way", hint: "222 views" },
    { imgSrc: "3.png", text: "New Way", hint: "333 views" },
    { imgSrc: "4.png", text: "Runway", hint: "4444 views" },
  ],
  [
    { imgSrc: "5.png", text: "Vogue Femme", hint: "11.96 videos" },
    { imgSrc: "6.png", text: "Old Way", hint: "1.9 videos" },
    { imgSrc: "7.png", text: "New Way", hint: "7.2333 videos" },
    { imgSrc: "8.png", text: "Runway", hint: "2.4333 videos" },
  ],
  [
    { imgSrc: "1.png", text: "Vogue Femme", hint: "5475.06 likes" },
    { imgSrc: "1.png", text: "Old Way", hint: "126 likes" },
    { imgSrc: "1.png", text: "New Way", hint: "2752.6333 likes" },
    {
      imgSrc: ".png",
      text: "Runway",
      hint: "4073.7666 likes",
    },
  ],
  [
    { imgSrc: "4.png", text: "Vogue Femme", hint: "143.54 dislikes" },
    { imgSrc: "4.png", text: "Old Way", hint: "3.3 dislikes" },
    { imgSrc: "4.png", text: "New Way", hint: "53.4666 dislikes" },
    {
      imgSrc: "4.png",
      text: "Runway",
      hint: "149.2333 dislikes",
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
