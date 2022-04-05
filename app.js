let data = [
  {
    name: "john",
    age: "23",
  },
  {
    name: "Sarah",
    age: "25",
  },
  {
    name: "Sam",
    age: "27",
  },
  {
    name: "George",
    age: "28",
  },
  {
    name: "Joseph",
    age: "29",
  },
  {
    name: "Sophia",
    age: "24",
  },
  {
    name: "Sowmiya",
    age: "30",
  },
  {
    name: "Sophi",
    age: "24",
  }
];

const info = document.querySelector("#info");
let details = data.map(function (Item) {
  return (
    "<div>" +
    Item.name +
    " " +
    "is" +
    " " +
    Item.age +
    " " +
    "years old" +
    "</div>"
  );
});

info.innerHTML = details.join("\n");
