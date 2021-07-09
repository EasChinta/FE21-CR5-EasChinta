
/*
As you will see, I am kind of good in finding workarounds when I am missing actual knowledge
that we either haven't learned yet or I haven't been able to discover myself either. 
I hard a bit of hard time figuring out the sorting by date since the sorting was not really working with 
the date being a "string" and neither with the date being a "number". As a number from this: 21.09.2021, it would only 
take the "21.09" and leave the rest out. Therefore I found another way of making it look as good and also making it 
sortable with the sort function.
*/



//////////////////////////BASE CLASS//////////////////////////
let content: any = [];

class Locations {
  city: string;
  zip: number;
  address: string;
  img: string;
  visited: any;
  time: string;

  constructor(
    city: string,
    zip: number,
    address: string,
    img: string,
    visited: any,
    time: string
  ) {
    this.city = city;
    this.zip = zip;
    this.address = address;
    this.img = img;
    this.visited = visited;
    this.time = time;

    content.push(this);
  }

  title() {
    return `
    <h1>Places</h1>
    `;
  }

  display() {
    return `
    
    <div class="col col-12 col-md-6 col-lg-3 d-flex">
      <div class="card" style="width: 18rem; margin-top: 2vh;"><h1>${this.city}</h1>
          <div class="card h-100">
            <a href="#"><img src="${this.img}" class="card-img-top img-fluid d-none d-md-inline" alt="..." style="width:284px; height:188px"></a>
            <div class="card-body">
              <h5 class="card-title">${this.city}</h5>
              <p class="card-text">${this.zip} <br> ${this.address}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Visited: ${this.visited}.2020  <b>${this.time}</b></small>
            </div>
          </div>
        </div>
    </div>
            
    `;
  }
}
//////////////////////////BASE CLASS//////////////////////////




//////////////////////////CLASS//////////////////////////

class Restaurants extends Locations {
  phoneNr: number;
  cuisine: string;
  website: string;
  constructor(
    city: string,
    zip: number,
    address: string,
    img: string,
    visited: any,
    phoneNr: number,
    cuisine: string,
    website: string,
    time: string
  ) {
    super(city, zip, address, img, visited, time);
    this.phoneNr = phoneNr;
    this.cuisine = cuisine;
    this.website = website;
  }

  display() {
    return `
    <div class="col col-12 col-md-6 col-lg-3 d-flex">
      <div class="card" style="width: 18rem;margin-top: 2vh;"><h1>${this.address}</h1>
          <div class="card h-100">
          <a href="#"><img src="${this.img}" class="card-img-top img-fluid d-none d-md-inline" alt="..."
            style="width:284px; height:188px"></a>
            <div class="card-body">
              <h5 class="card-title">${this.city}</h5>
              <p class="card-text">${this.zip} <br> ${this.address}</p>
              <p class="card-text">${this.cuisine} <br> ${this.phoneNr} <br> <a href="#">${this.website}</a></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Visited: ${this.visited}.2020  <b>${this.time}</b></small>
            </div>
          </div>
        </div>
    </div>
    `;
  }
}

//////////////////////////CLASS//////////////////////////




//////////////////////////CLASS//////////////////////////

class Events extends Locations {
  dateHour: string;
  price: number;
  website: string;
  constructor(
    city: string,
    zip: number,
    address: string,
    img: string,
    visited: any,
    dateHour: string,
    price: number,
    website: string,
    time: string
  ) {
    super(city, zip, address, img, visited, time);
    this.dateHour = dateHour;
    this.price = price;
    this.website = website;
  }

  display() {
    return `
    <div class="col col-12 col-md-6 col-lg-3 d-flex">
      <div class="card" style="width: 18rem;margin-top: 2vh;"><h1>${this.address}</h1>
          <div class="card h-100">
          <a href="#"><img src="${this.img}" class="card-img-top img-fluid d-none d-md-inline" alt="..."
            style="width:284px; height:188px"></a>
            <div class="card-body">
              <h5 class="card-title">${this.city}</h5>
              <p class="card-text">${this.zip} <br> ${this.address}</p>
              <p class="card-text">${this.dateHour} <br> ${this.price} €<br> 
              <a href="#">${this.website}</a></p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Visited: ${this.visited}.2020  <b>${this.time}</b></small>
            </div>
          </div>
        </div>
    </div>
    `;
  }
}

//////////////////////////CLASS//////////////////////////



//////////////////////////Objects//////////////////////////
var Athens = new Locations(
  "Athens",
  14569,
  "Acropolis Center",
  "../img/archaeology-4881001__340.jpg",
  12.07,
  "11:34"
);
var Athens2 = new Locations(
  "Athens",
  14323,
  "Monastiraki Ancient Market Str",
  "../img/athens-2476281__340.jpg",
  15.07,
  "12:14"
);
var Athens3 = new Locations(
  "Athens",
  14691,
  "Peiraus Area",
  "../img/port-2176428__340.jpg",
  15.07,
  "13:45"
);
var Athens4 = new Locations(
  "Athens",
  14323,
  "Monastiraki Square",
  "../img/istockphoto-1055006212-612x612.jpg",
  20.07,
  "10:09"
);

var Restaurant1 = new Restaurants(
  "Nea Makri, Athens",
  13567,
  "Apollonas",
  "../img/rest1.jpg",
  23.07,
  210814159,
  "Traditional Greek Cuisine",
  "www.apollonas.gr",
  "16:23"
);
var Restaurant2 = new Restaurants(
  "Gazi, Athens",
  12353,
  "To Koutouki",
  "../img/rest2.jpg",
  27.07,
  2108141573,
  "Greek Cuisine",
  "www.tokoutouki.gr",
  "16:32"
);
var Restaurant3 = new Restaurants(
  "Glyfada, Athens",
  11121,
  "Arxontiko",
  "../img/rest3.jpg",
  21.07,
  2116453234,
  "High-End Greek Cuisine",
  "www.arxontiko.gr",
  "19:21"
);
var Restaurant4 = new Restaurants(
  "Exarcheia, Athens",
  11231,
  "Mitsos",
  "../img/rest4.jpg",
  16.07,
  2124356789,
  "Traditional Greek Cuisine",
  "www.mitsos.gr",
  "13:15"
);

var Event1 = new Events(
  "Gazi, Athens <br> Arctic Monkey Live",
  12353,
  "Gazi Events Stage",
  "../img/event1.jpg",
  17.07,
  "Sat. 21.06.2021 - 21:00",
  35,
  "www.gazievents.gr",
  "15:31"
);
var Event2 = new Events(
  "Votanikos, Athens <br> Amusement Park Exhibition Market",
  14536,
  "Votanikos",
  "../img/event2.jpg",
  6.07,
  "21 June - 11 July, 8AM-11PM",
  21,
  "www.alloufunpark.gr",
  "15:29"
);
var Event3 = new Events(
  "Olympic Stadium, Athens <br> AEK - OLYMPIAKOS",
  12312,
  "OAKA Stadium",
  "../img/event3.jpg",
  25.07,
  "Sun. 02.06.2021 - 19:30",
  15,
  "www.oaka.gr",
  "14:55"
);
var Event4 = new Events(
  "Gazi, Athens <br> Louis CK Live",
  12353,
  "Beacon Theater",
  "../img/event4.jpg",
  15.07,
  "Fri. 06.06.2021 - 18:00",
  39,
  "www.beacontheater.gr",
  "17:56"
);

//////////////////////////Objects//////////////////////////






//Printing on Browser//
for (let val of content) {
  (document.getElementById("myCards") as HTMLElement).innerHTML +=
    val.display();
}




//Sorting Buttons//

var sortA = document.getElementsByClassName("sorting-btn-a");
sortA[0].addEventListener("click", function () {
  sort();
});
var sortD = document.getElementsByClassName("sorting-btn-d");
sortD[0].addEventListener("click", function () {
  sort2();
});

function sort() {
  document.getElementById("myCards").innerHTML = "";
  content.sort(function (a: { visited: number }, b: { visited: number }) {
    return a.visited - b.visited;
  });
  for (let val of content) {
    (document.getElementById("myCards") as HTMLElement).innerHTML +=
      val.display();
  }
}

function sort2() {
  document.getElementById("myCards").innerHTML = "";
  content.sort(function (a: { visited: number }, b: { visited: number }) {
    return b.visited - a.visited;
  });
  for (let val of content) {
    (document.getElementById("myCards") as HTMLElement).innerHTML +=
      val.display();
  }
}








//Other Attempt that wouldn't work//

// //Sort buttonA//
// let press: any = document.getElementById("sort");
// press.addEventListener("click", function () {
//   sort();
// });

// function sort() {
//   (document.getElementById("myCards") as HTMLElement).innerHTML =
//     "";
//   content.sort(function (a: { visited: any; }, b: { visited: any; }) {
//     return a.visited - b.visited;
//   })
//   for (let val of content) {
//     (document.getElementById("myCards") as HTMLElement).innerHTML +=
//       val.display();
//   }
// }

// //Sort ButtonB//

// let pressD: any = document.getElementById("sort2");
// pressD[0].addEventListener("click", function () {
//   sort2();
// });

// function sort2() {
//   (document.getElementById("myCards") as HTMLElement).innerHTML =
//     "";
//   content.sort2(function (a: { visited: any; }, b: { visited: any; }) {
//     return b.visited - a.visited;
//   })
//   for (let val of content) {
//     (document.getElementById("myCards") as HTMLElement).innerHTML +=
//       val.display();
//   }
// }
