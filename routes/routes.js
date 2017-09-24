var City = function(_obj) {
	
	this.id = _obj != undefined ? _obj.id : "";
	this.name = _obj != undefined ? _obj.name : "";
	this.title = _obj != undefined ? _obj.title : "";
	this.headline = this.name;
	this.images = _obj != undefined ? _obj.images : [];
}

var cities_list = [];
var city_add = new City({
	id: "paris",
	name: "Paris",
	title: "",
	headline: "", 
	images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
});

cities_list.push(city_add);

city_add = new City({
	id: "madrid",
	name: "Madrid",
	title: "",
	headline: "",
	images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
});

cities_list.push(city_add);

city_add = new City({
	id: "berlin",
	name: "Berlin",
	title: "",
	headline: "",
	images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
});

cities_list.push(city_add);

city_add = new City({
	id: "london",
	name: "London",
	title: "",
	headline: "",
	images: ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.jpg"]
});

cities_list.push(city_add);

city_add = new City({
	id: "newyork",
	name: "New York",
	title: "",
	headline: "",
	images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
});

cities_list.push(city_add);


exports.home = function(req, res) {
	res.render("home", {
		title: "iLoveMyCity", 
		headline: "Every city has some wonder to share with the world"
	});
};

exports.city = function(req, res) {
	var city_req = req.params.city;
	var _match;

	for (var k=0; k < cities_list.length; k++) {
		if (cities_list[k].id === city_req) {
			_match = cities_list[k];
		}
	}
	res.render("city", _match);

};