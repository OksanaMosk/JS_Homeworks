const arrayMovie = [
  {
    backdrop_path: "/uQ4lG7E7mlyKsGvbASftQ6Hu2IX.jpg",
    id: 100088,
    name: "The Last of Us",
    original_name: "The Last of Us",
    overview:
      "Twenty years after modern civilization has been de…ted States and depend on each other for survival.",
    image: "https://image.tmdb.org/t/p/w500/uQ4lG7E7mlyKsGvbASftQ6Hu2IX.jpg",
  },
  {
    backdrop_path: "/aESb695wTIF0tB7RTGRebnYrjFK.jpg",
    id: 1098006,
    name: "Fountain of Youth",
    original_name: "Fountain of Youth",
    overview:
      "A treasure-hunting mastermind assembles a team for…ne even smarter than he is: his estranged sister.",
    image: "https://image.tmdb.org/t/p/w500/aESb695wTIF0tB7RTGRebnYrjFK.jpg",
  },
  {
    backdrop_path: "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    id: 60625,
    name: "Rick and Morty",
    original_name: "Rick and Morty",
    overview:
      "Rick is a mentally-unbalanced but scientifically g…nts cause Morty much distress at home and school.",
    image: "https://image.tmdb.org/t/p/w500/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
  },
  {
    backdrop_path: "/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    id: 1232546,
    name: "Until Dawn",
    original_name: "Until Dawn",
    overview:
      "One year after her sister Melanie mysteriously dis…selves back at the beginning of the same evening.",
    image: "https://image.tmdb.org/t/p/w500/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
  },
  {
    backdrop_path: "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    id: 552524,
    name: "Lilo & Stitch",
    original_name: "Lilo & Stitch",
    overview:
      "The wildly funny and touching story of a lonely Ha…gitive alien who helps to mend her broken family.",
    image: "https://image.tmdb.org/t/p/w500/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
  },
  {
    backdrop_path: "/qspghhpOyaBGgZDJoCbV2o9WNMU.jpg",
    id: 1001414,
    name: "Fear Street: Prom Queen",
    original_name: "Fear Street: Prom Queen",
    overview:
      "Who will be voted queen at Shadyside High's 1988 p…before someone starts killing off the candidates.",
    image: "https://image.tmdb.org/t/p/w500/qspghhpOyaBGgZDJoCbV2o9WNMU.jpg",
  },
  {
    backdrop_path: "/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    id: 575265,
    name: "Mission: Impossible - The Final Reckoning",
    original_name: "Mission: Impossible - The Final Reckoning",
    overview:
      "Ethan Hunt and team continue their search for the …nt the world as we know it from changing forever.",
    image: "https://image.tmdb.org/t/p/w500/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
  },
  {
    backdrop_path: "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    id: 950387,
    name: "A Minecraft Movie",
    original_name: "A Minecraft Movie",
    overview:
      "Four misfits find themselves struggling with ordin… quest with an unexpected, expert crafter, Steve.",
    image: "https://image.tmdb.org/t/p/w500/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
  },
  {
    backdrop_path: "/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
    id: 1233413,
    name: "Sinners",
    original_name: "Sinners",
    overview:
      "Trying to leave their troubled lives behind, twin …ven greater evil is waiting to welcome them back.",
    image: "https://image.tmdb.org/t/p/w500/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
  },
  {
    backdrop_path: "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
    id: 37854,
    name: "One Piece",
    original_name: "ワンピース",
    overview:
      "Years ago, the fearsome Pirate King, Gol D. Roger …get the One Piece and become King of the Pirates!",
    image: "https://image.tmdb.org/t/p/w500/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
  },
];

const butPrev = document.getElementsByTagName("button")[0];
const butNext = document.getElementsByTagName("button")[1];

let listOfMovie = document.createElement("ul");
listOfMovie.classList.add("items");
for (let i = 0; i < arrayMovie.length; i++) {
  let item = document.createElement("li");

  item.classList.add("everyItem");

  let itemName = document.createElement("h2");
  itemName.innerText = arrayMovie[i].name;
  itemName.classList.add("everyTitle");

  let itemImg = document.createElement("img");
  itemImg.src = arrayMovie[i].image;
  itemImg.alt = arrayMovie[i].name;

  item.append(itemName, itemImg);
  listOfMovie.append(item);
}

butPrev.insertAdjacentElement("afterend", listOfMovie);
