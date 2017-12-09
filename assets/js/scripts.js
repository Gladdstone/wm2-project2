/**
 * File: scripts.js
 * Author: Joseph Farrell
 * Description:
 *      Client-side JavaScript
 */

/**
 * Variable declaration
 */
var countyClosed = true,
	pointsClosed = true;

// On page load
setYear();


// Close mobile navigation
function closeNav() {
    // Clean up open dropdowns
    document.getElementById("mobile_county").style.height = "0";
    countyClosed = true;
    // Close menu
    document.getElementById("mobile_menu_button").classList.toggle("change");
    document.getElementById("mobilemenu").style.width = "0";
}


// Dropdown toggle
function dropdownInterest() {
	document.getElementById("dropdown_interest").classList.toggle("show");
}


// Dropdown toggle
function dropdownRegions() {
	document.getElementById("dropdown_regions").classList.toggle("show");
}


// Open menu
function openMenu(elem) {
    elem.classList.toggle("change");
    openNav()
}


// Open mobile navigation
function openNav() {
    document.getElementById("mobilemenu").style.width = "280px";
}


// Set year in copyright footer
function setYear() {
    var today = new Date(),
	year = today.getFullYear(),
    	text = document.getElementById("copyright").innerText;

    document.getElementById("copyright").innerText = text + " " + year;
}


// Toggle county dropdown in mobile
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

// Toggle points dropdown in mobile
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
