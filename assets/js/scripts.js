/**
 * File:
 * Author:
 * Description:
 */

/**
 * Variable declaration
 */
var countyClosed = true,
	pointsClosed = true;

setYear();


function closeNav() {
    // Clean up open dropdowns
    document.getElementById("mobile_county").style.height = "0";
    countyClosed = true;
    // Close menu
    document.getElementById("mobile_menu_button").classList.toggle("change");
    document.getElementById("mobilemenu").style.width = "0";
}

function dropdownInterest() {
	document.getElementById("dropdown_interest").classList.toggle("show");
}

function dropdownRegions() {
	document.getElementById("dropdown_regions").classList.toggle("show");
}

function openMenu(elem) {
    elem.classList.toggle("change");
    openNav()
}

function openNav() {
    document.getElementById("mobilemenu").style.width = "280px";
}

function setYear() {
    var today = new Date(),
	year = today.getFullYear(),
    	text = document.getElementById("copyright").innerText;

    document.getElementById("copyright").innerText = text + " " + year;
}

function toggleCounty() {
	if(countyClosed) {
        document.getElementById("mobile_county").style.height = "380px";
        document.getElementById("county_arrow").innerHTML = "&#x25BC;";
        countyClosed = false;
    }
    else {
        document.getElementById("mobile_county").style.height = "0";
        document.getElementById("county_arrow").innerHTML = "&#x25B2;";
        countyClosed = true;
	}
}

function togglePoints() {
	if(pointsClosed) {
		document.getElementById("mobile_points").style.height = "150px";
        document.getElementById("points_arrow").innerHTML = "&#x25BC;";
		pointsClosed = false;
	}
	else {
		document.getElementById("mobile_points").style.height = "0";
        document.getElementById("points_arrow").innerHTML = "&#x25B2;";
		pointsClosed = true;
	}
}
