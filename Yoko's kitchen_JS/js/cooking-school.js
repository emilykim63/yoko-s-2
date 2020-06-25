const COURSES = [
	{
		id: "course-1",
		course_title: "Japanese Vegetarian",
		course_subtitle: "Five week course",
		course_description: "A five week introduction to traditional Japanese vegetarian meals, teaching you a selection of rice and noodle dishes.",
		image: "images/bok-choi.jpg",
		image_title: "Bok Choi"
	},
	{
		id: "course-2",
		course_title: "Sauces Masterclass",
		course_subtitle: "One day workshop",
		course_description: "An intensive one-day course looking at how to create the most delicious sauces for use in a range of Japanese cookery.",
		image: "images/teriyaki.jpg",
		image_title: "Teriyaki Sauce"
	},
	{
		id: "course-3",
		course_title: "Gyoza Japanese Dumplings",
		course_subtitle: "Half a day workshop",
		course_description: "A practical course looking at how to make dumplings that you can pan-fry, steam, boil, deep fry, or simply add a couple to your noodle soup!",
		image: "images/gyoza.jpg",
		image_title: "Gyoza Dumplings"
	},
	{
		id: "course-4",
		course_title: "Sushi at Home",
		course_subtitle: "Four weeks course",
		course_description: "These classes are a fantastic introduction to sushi rolling. The focus of the class is on Maki Sushi. Maki means roll and you will learn four different type of Maki sushi in this class. ",
		image: "images/suhi.jpg",
		image_title: "Sushi"
	},
	{
		id: "course-5",
		course_title: "Learn All about Sashimi",
		course_subtitle: "5 days",
		course_description: "Learn deeper techniques of sashimi preparation to making a platter in just five days.",
		image: "images/sashimi.jpg",
		image_title: "Sashimi"
	},
 ];

/* TASK 1 */

/* Creates the HTML required for display each course information */
function createCourseHTML(courses) {

	let courseHTML = $("<article>");
	$("coursesList").append(courseHTML)

	let coursefigure = $("<figure>");
	courseHTML.append(coursefigure);

	let courseImg = $("<img>"); 
	courseImg.attr("src", courses.image, "alt", courses.image_title);
	coursefigure.append(courseImg);
	
	let courseFigcap = $("<figcaption>");
	courseFigcap.text(courses.image_title);
	coursefigure.append(courseFigcap);

	let courseheader = $("<h2>");
	courseheader.text(courses.course_title);
	courseHTML.append(courseheader);

	let courseheaderthree = $("<h3>");
	courseheaderthree.text(courses.course_subtitle);
	courseHTML.append(courseheaderthree);

	let coursePara = $('<p>');
	coursePara.addClass("hidden");
	coursePara.attr("id", "desc_" + courses.id);
	coursePara.text(courses.course_description);
	//coursePara.on("click", toggleDescription);
	courseHTML.append(coursePara);

/*
	output += '<p style="display:none" id="desc_' + course.id + '">' + course.course_description + '</p>';
	output += '<div id="' + course.id + '" onclick="toggleDescription(this)" >Learn more</div>';*/

	let forToggle = $('<div>');
	forToggle.attr("id", courses.id);
	forToggle.on("click", toggleDescription);
	forToggle.text("Learn more");
	courseHTML.append(forToggle);

	/* TASK 2 */

	/* END OF TASK 2 */

	return courseHTML;
}

/* Displays all courses */
function displayCourses(courses) {

	let coursesList = $("#coursesList");

	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
	}
}

/* END OF TASK 1 */

/* TASK 2 */

function toggleDescription() {
	let title = $(this); 

	$("#desc_" + title.attr("id")).toggle(0, function() {
		if(title.text() == "Learn more") {
			title.text("Show less");
		} else {
			title.text("Learn more");
		}
	});
}

/* END OF TASK 2 */

/* TASK 3 */


function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
			for(let course of COURSES) {
				let coursetitle = course.course_title;
				coursetitle = course.course_title.toLowerCase(); 

				if(coursetitle.includes(query)) {
					matches.push(course)
				}
			}
		displayCourses(matches);
}
/*
function search() {
	let query = $("#searchText").val();
	query = query.toLowerCase().trim();
	//console.log(data);		
	
	let matches = [];
	$.getJSON("./data.json", function (data) {
		console.log(data.COURSES); console.log(typeof data.COURSES)
		data.COURSES.forEach((course) => {
			if (course.course_title.toLowerCase().indexOf(query) > -1) {
				//console.log(course);
				matches.push(course);
			}
			
		});
		/**
		data.COURSES.filter(function(course){
			return course.course_title.toLowerCase().indexOf(query) > -1;
		})
		**//*
		console.log(matches);
		displayCourses(matches);
	});*/
/* END OF TASK 3 */

$(document).ready(function(){
	let mainCourses = [COURSES[0], COURSES[1], COURSES[2], COURSES[3], COURSES[4], COURSES[5]];

	displayCourses(mainCourses);
});
