var catObject = {
    "cat_1": {
        "name": "Xuxa",
        "image": "images/Kitten1.jpg",
        "numClick": 0,
    },
    "cat_2": {
        "name": "Abby",
        "image": "images/Kitten2.jpg",
        "numClick": 0,
    },
    "cat_3": {
        "name": "Tiger",
        "image": "images/Kitten3.jpg",
        "numClick": 0,
    },
    "cat_4": {
        "name": "Daisy",
        "image": "images/Kitten4.jpg",
        "numClick": 0,
    },
    "cat_5": {
        "name": "Kitty",
        "image": "images/Kitten5.jpg",
        "numClick": 0,
    }
}
var octopus = {
    init: function() {
        //call model and view
        view.init();

    },
    getNav: function() {
        //loop through nav and build dom
        //call view to push dom
        var navmenu = [];
        for (i = 1; i <= Object.keys(catObject).length; i++) {
            var catIndex = 'cat_' + i;
            var catName = catObject[catIndex]['name'];
            navmenu.push('<a id="catmenu" href="#' + catIndex + '" onclick="return view.render(' + "'" + catIndex + "'" + ');">' + catName + '</a>')
        }
        return navmenu;
    },
    getSelectedCat: function(content) {
        //return cat, build dom, call view
        this.catlist = $("#catmenu");
        var catName = catObject[content]['name'];
        var catImage = catObject[content]['image'];
        var catClick = catObject[content]['numClick'];

        //build dom
        var divbody = '<div id="' + content + '" style="display:block"><h3> Current Number of clicks for ' + catName + '</h3> <h3 id="click' + content + '">' + catClick + '</h3><div class="pic"><img id="img' + content + '" onclick="return view.update(' + "'" + content + "'" + ')" src="' + catImage + '" ></div > </div>';
        return divbody;
    },
    increaseCounter: function(content) {
        //click function, call view
        if (content in catObject) {
            catObject[content]['numClick'] = catObject[content]['numClick'] + 1

        } else { console.log("No key returned") }
        return catObject[content]['numClick'];
    }

}

var view = {
    init: function() {
        //nav
        var navmenu = octopus.getNav();
        $("#sidenav:last").append(navmenu);
        //view.render();
    },
    render: function(selectedCat) {
        //div for selected cat
        var divbody = octopus.getSelectedCat(selectedCat);
        $(".catdisplay").html('');
        $(".catdisplay").append(divbody);
    },
    update: function(selectedCat) {
        //update counter??
        var catClickID = 'click' + selectedCat
        var catClick = octopus.increaseCounter(selectedCat);
        document.getElementById(catClickID).innerHTML = catClick;
    }

};

octopus.init();