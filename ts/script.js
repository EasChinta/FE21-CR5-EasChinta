/*
As you will see, I am kind of good in finding workarounds when I am missing actual knowledge
that we either haven't learned yet or I haven't been able to discover myself either.
I hard a bit of hard time figuring out the sorting by date since the sorting was not really working with
the date being a "string" and neither with the date being a "number". As a number from this: 21.09.2021, it would only
take the "21.09" and leave the rest out. Therefore I found another way of making it look as good and also making it
sortable with the sort function.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//////////////////////////BASE CLASS//////////////////////////
var content = [];
var Locations = /** @class */ (function () {
    function Locations(city, zip, address, img, visited, time) {
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.visited = visited;
        this.time = time;
        content.push(this);
    }
    Locations.prototype.title = function () {
        return "\n    <h1>Places</h1>\n    ";
    };
    Locations.prototype.display = function () {
        return "\n    \n    <div class=\"col col-12 col-md-6 col-lg-3 d-flex\">\n      <div class=\"card\" style=\"width: 18rem; margin-top: 2vh;\"><h1>" + this.city + "</h1>\n          <div class=\"card h-100\">\n            <a href=\"#\"><img src=\"" + this.img + "\" class=\"card-img-top img-fluid d-none d-md-inline\" alt=\"...\" style=\"width:284px; height:188px\"></a>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.city + "</h5>\n              <p class=\"card-text\">" + this.zip + " <br> " + this.address + "</p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Visited: " + this.visited + ".2020  <b>" + this.time + "</b></small>\n            </div>\n          </div>\n        </div>\n    </div>\n            \n    ";
    };
    return Locations;
}());
//////////////////////////BASE CLASS//////////////////////////
//////////////////////////CLASS//////////////////////////
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, zip, address, img, visited, phoneNr, cuisine, website, time) {
        var _this = _super.call(this, city, zip, address, img, visited, time) || this;
        _this.phoneNr = phoneNr;
        _this.cuisine = cuisine;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.display = function () {
        return "\n    <div class=\"col col-12 col-md-6 col-lg-3 d-flex\">\n      <div class=\"card\" style=\"width: 18rem;margin-top: 2vh;\"><h1>" + this.address + "</h1>\n          <div class=\"card h-100\">\n          <a href=\"#\"><img src=\"" + this.img + "\" class=\"card-img-top img-fluid d-none d-md-inline\" alt=\"...\"\n            style=\"width:284px; height:188px\"></a>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.city + "</h5>\n              <p class=\"card-text\">" + this.zip + " <br> " + this.address + "</p>\n              <p class=\"card-text\">" + this.cuisine + " <br> " + this.phoneNr + " <br> <a href=\"#\">" + this.website + "</a></p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Visited: " + this.visited + ".2020  <b>" + this.time + "</b></small>\n            </div>\n          </div>\n        </div>\n    </div>\n    ";
    };
    return Restaurants;
}(Locations));
//////////////////////////CLASS//////////////////////////
//////////////////////////CLASS//////////////////////////
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip, address, img, visited, dateHour, price, website, time) {
        var _this = _super.call(this, city, zip, address, img, visited, time) || this;
        _this.dateHour = dateHour;
        _this.price = price;
        _this.website = website;
        return _this;
    }
    Events.prototype.display = function () {
        return "\n    <div class=\"col col-12 col-md-6 col-lg-3 d-flex\">\n      <div class=\"card\" style=\"width: 18rem;margin-top: 2vh;\"><h1>" + this.address + "</h1>\n          <div class=\"card h-100\">\n          <a href=\"#\"><img src=\"" + this.img + "\" class=\"card-img-top img-fluid d-none d-md-inline\" alt=\"...\"\n            style=\"width:284px; height:188px\"></a>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.city + "</h5>\n              <p class=\"card-text\">" + this.zip + " <br> " + this.address + "</p>\n              <p class=\"card-text\">" + this.dateHour + " <br> " + this.price + " \u20AC<br> \n              <a href=\"#\">" + this.website + "</a></p>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Visited: " + this.visited + ".2020  <b>" + this.time + "</b></small>\n            </div>\n          </div>\n        </div>\n    </div>\n    ";
    };
    return Events;
}(Locations));
//////////////////////////CLASS//////////////////////////
//////////////////////////Objects//////////////////////////
var Athens = new Locations("Athens", 14569, "Acropolis Center", "../img/archaeology-4881001__340.jpg", 12.07, "11:34");
var Athens2 = new Locations("Athens", 14323, "Monastiraki Ancient Market Str", "../img/athens-2476281__340.jpg", 15.07, "12:14");
var Athens3 = new Locations("Athens", 14691, "Peiraus Area", "../img/port-2176428__340.jpg", 15.07, "13:45");
var Athens4 = new Locations("Athens", 14323, "Monastiraki Square", "../img/istockphoto-1055006212-612x612.jpg", 20.07, "10:09");
var Restaurant1 = new Restaurants("Nea Makri, Athens", 13567, "Apollonas", "../img/rest1.jpg", 23.07, 210814159, "Traditional Greek Cuisine", "www.apollonas.gr", "16:23");
var Restaurant2 = new Restaurants("Gazi, Athens", 12353, "To Koutouki", "../img/rest2.jpg", 27.07, 2108141573, "Greek Cuisine", "www.tokoutouki.gr", "16:32");
var Restaurant3 = new Restaurants("Glyfada, Athens", 11121, "Arxontiko", "../img/rest3.jpg", 21.07, 2116453234, "High-End Greek Cuisine", "www.arxontiko.gr", "19:21");
var Restaurant4 = new Restaurants("Exarcheia, Athens", 11231, "Mitsos", "../img/rest4.jpg", 16.07, 2124356789, "Traditional Greek Cuisine", "www.mitsos.gr", "13:15");
var Event1 = new Events("Gazi, Athens <br> Arctic Monkey Live", 12353, "Gazi Events Stage", "../img/event1.jpg", 17.07, "Sat. 21.06.2021 - 21:00", 35, "www.gazievents.gr", "15:31");
var Event2 = new Events("Votanikos, Athens <br> Amusement Park Exhibition Market", 14536, "Votanikos", "../img/event2.jpg", 6.07, "21 June - 11 July, 8AM-11PM", 21, "www.alloufunpark.gr", "15:29");
var Event3 = new Events("Olympic Stadium, Athens <br> AEK - OLYMPIAKOS", 12312, "OAKA Stadium", "../img/event3.jpg", 25.07, "Sun. 02.06.2021 - 19:30", 15, "www.oaka.gr", "14:55");
var Event4 = new Events("Gazi, Athens <br> Louis CK Live", 12353, "Beacon Theater", "../img/event4.jpg", 15.07, "Fri. 06.06.2021 - 18:00", 39, "www.beacontheater.gr", "17:56");
//////////////////////////Objects//////////////////////////
//Printing on Browser//
for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
    var val = content_1[_i];
    document.getElementById("myCards").innerHTML +=
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
    content.sort(function (a, b) {
        return a.visited - b.visited;
    });
    for (var _i = 0, content_2 = content; _i < content_2.length; _i++) {
        var val = content_2[_i];
        document.getElementById("myCards").innerHTML +=
            val.display();
    }
}
function sort2() {
    document.getElementById("myCards").innerHTML = "";
    content.sort(function (a, b) {
        return b.visited - a.visited;
    });
    for (var _i = 0, content_3 = content; _i < content_3.length; _i++) {
        var val = content_3[_i];
        document.getElementById("myCards").innerHTML +=
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
