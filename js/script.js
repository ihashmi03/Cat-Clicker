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

for (i = 1; i <= Object.keys(catObject).length; i++) {
    var catIndex = 'cat_' + i;
    var catName = catObject[catIndex]['name'];
    var catImage = catObject[catIndex]['image'];
    var catClick = catObject[catIndex]['numClick'];
    var navmenu = '<a href="#' + catIndex + '" onclick="return showContent(' + "'" + catIndex + "'" + ');">' + catName + '</a>'
    var divbody = '<div id="' + catIndex + '" style="display:none"><h3> Current Number of clicks for ' + catName + '</h3> <h3 id="click' + catIndex + '">' + catClick + '</h3><div class="pic"><img id="img' + catIndex + '" src="' + catImage + '"></div > </div>';
    $("#sidenav:last").append(navmenu);
    $(".main:last").append(divbody);
}


function showContent(content) {
    for (i = 1; i <= Object.keys(catObject).length; i++) {
        var catIndex = 'cat_' + i;
        document.getElementById(catIndex).style.display = 'none';
    }
    document.getElementById(content).style.display = 'block';
}

$("img").click(function() {
    var clickedBtnID = $(this).attr('id'); // or var clickedBtnID = this.id
    //alert('you clicked on button #' + clickedBtnID);
    var nameSplit = clickedBtnID.split("_");
    var catIndex = 'cat_' + nameSplit[1];
    var catClickID = 'click' + catIndex
    if (catIndex in catObject) {
        catObject[catIndex]['numClick'] = catObject[catIndex]['numClick'] + 1
        document.getElementById(catClickID).innerHTML = catObject[catIndex]['numClick'];
    } else { console.log("No key returned") }


});