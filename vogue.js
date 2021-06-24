var tabIndex = 0;

var shoeIndex = 0; // при нажатии на конкретную туфлю обновление
var yearIndex = 0; // обновление годов
var propsIndex = 0; // обновление кнопки справа

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
    { imgSrc: "9.png", text: "Vogue Femme", hint: "5475.06 likes" },
    { imgSrc: "10.png", text: "Old Way", hint: "126 likes" },
    { imgSrc: "11.png", text: "New Way", hint: "2752.6333 likes" },
    {
      imgSrc: "12.png",
      text: "Runway",
      hint: "4073.7666 likes",
    },
  ],
  [
    { imgSrc: "13.png", text: "Vogue Femme", hint: "143.54 dislikes" },
    { imgSrc: "14.png", text: "Old Way", hint: "3.3 dislikes" },
    { imgSrc: "15.png", text: "New Way", hint: "53.4666 dislikes" },
    {
      imgSrc: "16.png",
      text: "Runway",
      hint: "149.2333 dislikes",
    },
  ],
];

var shoeDataSets = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  // shoe 1
  [
    // shoe 1 + 2011
    [
      // shoe 1 + 2011 + views
      [
        { imgSrc: "1_2011_views_1.png", text: "Catwalk", hint: "8023 views" },
        { imgSrc: "1_2011_views_2.png", text: "Duckwalk", hint: "15791 views" },
        { imgSrc: "1_2011_views_3.png", text: "Spins&Dips", hint: "261643 views" },
        { imgSrc: "1_2011_views_4.png", text: "Hands Performance", hint: "23962 views" },
        { imgSrc: "1_2011_views_5.png", text: "Floor Performance", hint: "227918 views" },
      ],
      // shoe 1 + 2011 + videos
      [
        { imgSrc: "1_2011_videos_1.png", text: "Catwalk", hint: "5 videos" },
        { imgSrc: "1_2011_videos_2.png", text: "Duckwalk", hint: "2 videos" },
        { imgSrc: "1_2011_videos_3.png", text: "Spins&Dips", hint: "3 videos" },
        { imgSrc: "1_2011_videos_4.png", text: "Hands Performance", hint: "3 videos" },
        { imgSrc: "1_2011_videos_5.png", text: "Floor Performance", hint: "1 videos" },
      ],
      // shoe 1 + 2011 + likes
      [
        { imgSrc: "1_2011_likes_1.png", text: "Catwalk", hint: "57 likes" },
        { imgSrc: "1_2011_likes_2.png", text: "Duckwalk", hint: "354 likes" },
        { imgSrc: "1_2011_likes_3.png", text: "Spins&Dips", hint: "3600 likes" },
        { imgSrc: "1_2011_likes_4.png", text: "Hands Performance", hint: "502 likes" },
        { imgSrc: "1_2011_likes_5.png", text: "Floor Performance", hint: "1900 likes" },
      ],
      // shoe 1 + 2011 + dislikes
      [
        { imgSrc: "1_2011_dislikes_1.png", text: "Catwalk", hint: "2 dislikes" },
        { imgSrc: "1_2011_dislikes_2.png", text: "Duckwalk", hint: "29 dislikes" },
        { imgSrc: "1_2011_dislikes_3.png", text: "Spins&Dips", hint: "202 dislikes" },
        { imgSrc: "1_2011_dislikes_4.png", text: "Hands Performance", hint: "5 dislikes" },
        { imgSrc: "1_2011_dislikes_5.png", text: "Floor Performance", hint: "35 dislikes" },
      ],
    ],
    // shoe 1 + 2012
    [
      // shoe 1 + 2012 + views
      [
        { imgSrc: "1_2012_views_1.png", text: "Catwalk", hint: "363 views" },
        { imgSrc: "1_2012_views_2.png", text: "Duckwalk", hint: "119157 views" },
        { imgSrc: "1_2012_views_3.png", text: "Spins&Dips", hint: "14516 views" },
        { imgSrc: "1_2012_views_4.png", text: "Hands Performance", hint: "26575 views" },
        { imgSrc: "1_2012_views_5.png", text: "Floor Performance", hint: "17933 views" },
      ],
      // shoe 1 + 2012 + videos
      [      
        { imgSrc: "1_2012_videos_1.png", text: "Catwalk", hint: "1 videos" },
        { imgSrc: "1_2012_videos_2.png", text: "Duckwalk", hint: "2 videos" },
        { imgSrc: "1_2012_videos_3.png", text: "Spins&Dips", hint: "3 videos" },
        { imgSrc: "1_2012_videos_4.png", text: "Hands Performance", hint: "19 videos" },
        { imgSrc: "1_2012_videos_5.png", text: "Floor Performance", hint: "4 videos" },
      ],
      // shoe 1 + 2012 + likes
      [
        { imgSrc: "1_2012_likes_1.png", text: "Catwalk", hint: "1 likes" },
        { imgSrc: "1_2012_likes_2.png", text: "Duckwalk", hint: "3 likes" },
        { imgSrc: "1_2012_likes_3.png", text: "Spins&Dips", hint: "133 likes" },
        { imgSrc: "1_2012_likes_4.png", text: "Hands Performance", hint: "498 likes" },
        { imgSrc: "1_2012_likes_5.png", text: "Floor Performance", hint: "404 likes" },
      ],
      // shoe 1 + 2012 + dislikes
      [
        { imgSrc: "1_2012_dislikes_1.png", text: "Catwalk", hint: "0 dislikes" },
        { imgSrc: "1_2012_dislikes_2.png", text: "Duckwalk", hint: "0 dislikes" },
        { imgSrc: "1_2012_dislikes_3.png", text: "Spins&Dips", hint: "8 dislikes" },
        { imgSrc: "1_2012_dislikes_4.png", text: "Hands Performance", hint: "5 dislikes" },
        { imgSrc: "1_2012_dislikes_5.png", text: "Floor Performance", hint: "3 dislikes" },
      ],

    ],
    // shoe 1 + 2013
    [
      // shoe 1 + 2013 + views
      [
        { imgSrc: "1_2013_views_1.png", text: "Catwalk", hint: "4323 views" },
        { imgSrc: "1_2013_views_2.png", text: "Duckwalk", hint: "105820 views" },
        { imgSrc: "1_2013_views_3.png", text: "Spins&Dips", hint: "13747 views" },
        { imgSrc: "1_2013_views_4.png", text: "Hands Performance", hint: "314195 views" },
        { imgSrc: "1_2013_views_5.png", text: "Floor Performance", hint: "7304 views" },
      ],
      // shoe 1 + 2013 + videos
      [
        { imgSrc: "1_2013_videos_1.png", text: "Catwalk", hint: "14 videos" },
        { imgSrc: "1_2013_videos_2.png", text: "Duckwalk", hint: "7 videos" },
        { imgSrc: "1_2013_videos_3.png", text: "Spins&Dips", hint: "3 videos" },
        { imgSrc: "1_2013_videos_4.png", text: "Hands Performance", hint: "37 videos" },
        { imgSrc: "1_2013_videos_5.png", text: "Floor Performance", hint: "6 videos" },
      ],
      // shoe 1 + 2013 + likes
      [
        { imgSrc: "1_2013_likes_1.png", text: "Catwalk", hint: "41 likes" },
        { imgSrc: "1_2013_likes_2.png", text: "Duckwalk", hint: "860 likes" },
        { imgSrc: "1_2013_likes_3.png", text: "Spins&Dips", hint: "165 likes" },
        { imgSrc: "1_2013_likes_4.png", text: "Hands Performance", hint: "4800 likes" },
        { imgSrc: "1_2013_likes_5.png", text: "Floor Performance", hint: "20 likes" },
      ],
      // shoe 1 + 2013 + dislikes
      [
        { imgSrc: "1_2013_dislikes_1.png", text: "Catwalk", hint: "1 dislikes" },
        { imgSrc: "1_2013_dislikes_2.png", text: "Duckwalk", hint: "31 dislikes" },
        { imgSrc: "1_2013_dislikes_3.png", text: "Spins&Dips", hint: "8 dislikes" },
        { imgSrc: "1_2013_dislikes_4.png", text: "Hands Performance", hint: "548 dislikes" },
        { imgSrc: "1_2013_dislikes_5.png", text: "Floor Performance", hint: "1 dislikes" },
      ],
    // shoe 1 + 2014
    [
      // shoe 1 + 2014 + views
      [
        { imgSrc: "1_2014_views_1.png", text: "Catwalk", hint: "7220 views" },
        { imgSrc: "1_2014_views_2.png", text: "Duckwalk", hint: "696 views" },
        { imgSrc: "1_2014_views_3.png", text: "Spins&Dips", hint: "1987 views" },
        { imgSrc: "1_2014_views_4.png", text: "Hands Performance", hint: "23908 views" },
        { imgSrc: "1_2014_views_5.png", text: "Floor Performance", hint: "812 views" },
      ],
      // shoe 1 + 2014 + videos
      [
        { imgSrc: "1_2014_videos_1.png", text: "Catwalk", hint: "11 videos" },
        { imgSrc: "1_2014_videos_2.png", text: "Duckwalk", hint: "2 videos" },
        { imgSrc: "1_2014_videos_3.png", text: "Spins&Dips", hint: "1 videos" },
        { imgSrc: "1_2014_videos_4.png", text: "Hands Performance", hint: "33 videos" },
        { imgSrc: "1_2014_videos_5.png", text: "Floor Performance", hint: "1 videos" },
      ],
      // shoe 1 + 2014 + likes
      [],
      // shoe 1 + 2014 + dislikes
      [],

    ],
    // shoe 1 + 2015
    [
      // shoe 1 + 2015 + views
      [],
      // shoe 1 + 2015 + videos
      [],
      // shoe 1 + 2015 + likes
      [],
      // shoe 1 + 2015 + dislikes
      [],

    ],
    // shoe 1 + 2016
    [
      // shoe 1 + 2016 + views
      [],
      // shoe 1 + 2016 + videos
      [],
      // shoe 1 + 2016 + likes
      [],
      // shoe 1 + 2016 + dislikes
      [],

    ],
    // shoe 1 + 2017
    [
      // shoe 1 + 2017 + views
      [],
      // shoe 1 + 2017 + videos
      [],
      // shoe 1 + 2017 + likes
      [],
      // shoe 1 + 2017 + dislikes
      [],

    ],
    // shoe 1 + 2018
    [
      // shoe 1 + 2018 + views
      [],
      // shoe 1 + 2018 + videos
      [],
      // shoe 1 + 2018 + likes
      [],
      // shoe 1 + 2018 + dislikes
      [],

    ],
    // shoe 1 + 2019
    [
      // shoe 1 + 2019 + views
      [],
      // shoe 1 + 2019 + videos
      [],
      // shoe 1 + 2019 + likes
      [],
      // shoe 1 + 2019 + dislikes
      [],

    ],
    // shoe 1 + 2020
    [
      // shoe 1 + 2020 + views
      [],
      // shoe 1 + 2020 + videos
      [],
      // shoe 1 + 2020 + likes
      [],
      // shoe 1 + 2020 + dislikes
      [],

    ],
  ],
  // shoe 2
  [
    // shoe 2 + 2012
    [
      // shoe 2 + 2012 + views
      [],
      // shoe 2 + 2012 + videos
      [],
      // shoe 2 + 2012 + likes
      [],
      // shoe 2 + 2012 + dislikes
      [],

    ],
    // shoe 2 + 2013
    [
      // shoe 2 + 2013 + views
      [],
      // shoe 2 + 2013 + videos
      [],
      // shoe 2 + 2013 + likes
      [],
      // shoe 2 + 2013 + dislikes
      [],

    ],
    // shoe 2 + 2014
    [
      // shoe 2 + 2014 + views
      [],
      // shoe 2 + 2014 + videos
      [],
      // shoe 2 + 2014 + likes
      [],
      // shoe 2 + 2014 + dislikes
      [],

    ],
    // shoe 2 + 2015
    [
      // shoe 2 + 2015 + views
      [],
      // shoe 2 + 2015 + videos
      [],
      // shoe 2 + 2015 + likes
      [],
      // shoe 2 + 2015 + dislikes
      [],

    ],
    // shoe 2 + 2016
    [
      // shoe 2 + 2016 + views
      [],
      // shoe 2 + 2016 + videos
      [],
      // shoe 2 + 2016 + likes
      [],
      // shoe 2 + 2016 + dislikes
      [],

    ],
    // shoe 2 + 2017
    [
      // shoe 2 + 2017 + views
      [],
      // shoe 2 + 2017 + videos
      [],
      // shoe 2 + 2017 + likes
      [],
      // shoe 2 + 2017 + dislikes
      [],

    ],
    // shoe 2 + 2018
    [
      // shoe 2 + 2018 + views
      [],
      // shoe 2 + 2018 + videos
      [],
      // shoe 2 + 2018 + likes
      [],
      // shoe 2 + 2018 + dislikes
      [],

    ],
    // shoe 2 + 2019
    [
      // shoe 2 + 2019 + views
      [],
      // shoe 2 + 2019 + videos
      [],
      // shoe 2 + 2019 + likes
      [],
      // shoe 2 + 2019 + dislikes
      [],

    ],
    // shoe 2 + 2020
    [
      // shoe 2 + 2020 + views
      [],
      // shoe 2 + 2020 + videos
      [],
      // shoe 2 + 2020 + likes
      [],
      // shoe 2 + 2020 + dislikes
      [],

    ],
  ],
  // shoe 3
  [
    // shoe 3 + 2011
    [
      // shoe 3 + 2011 + views
      [],
      // shoe 3 + 2011 + videos
      [],
      // shoe 3 + 2011 + likes
      [],
      // shoe 3 + 2011 + dislikes
      [],

    ],
  ];

var years = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
var properties = ["views", "videos", "likes", "dislikes"];

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
