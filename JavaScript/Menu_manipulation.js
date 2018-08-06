let menu_btn, wraper;
let menu_open = false;
let data;

function Menu_manipulation() {
  btn = select(".navigation_toggle");
  wraper = select(".wraper");
  btn.mousePressed(changeMenu);
}

function changeMenu () {
  if(menu_open) {
    wraper.removeClass("menu_open");
    menu_open = false;
  } else {
    menu_open = true;
    wraper.addClass("menu_open");
  }
}

function Course_syllabus_adjust() {
  let syllabus_holder = select(".course_finder");
  let w = syllabus_holder.width;
  let points = selectAll('.course_point');
  let clickboxes = selectAll('.point_clickbox');
  let l = w / points.length;
  for (let i = 0; i < points.length; i++) {
    points[i].style('width',  l + 'px');
    clickboxes[i].style('width', l + 'px');
    clickboxes[i].mouseClicked(function() {
      if((' ' + points[i].class() + ' ').indexOf(" point_active ") == -1) {
        Course_syllabus_activate(points, i);
      }
    });
  }
}


function Course_syllabus_activate(array, pos) {
  array[pos].removeClass("point_after_active");
  array[pos].addClass("point_active");
  for(let i = 0; i < pos; i++) {
    array[i].removeClass("point_active");
    if((' ' + array[i].class() + ' ').indexOf(" point_after_active ") == -1) {
      array[i].addClass("point_after_active");
    }
  }
  for(let i = pos+1; i < array.length; i++) {
    array[i].removeClass("point_active");
    array[i].removeClass("point_after_active");
  }
  let title = select("#selected_lesson_title");
  let description = select("#selected_lesson_description");
  title.html(data.lessons[pos].title);
  description.html(data.lessons[pos].description);
}

function Create_course() {
  let template = '<li class = "course_point"><a style = "text-decoration:none; outline: none;"><div class = "point_clickbox"></div><h3>Lorem Ipsum</h3></a></li>';
  let list = select(".course_positions");
  for(prop in data) {
    if(prop!="lessons") {
      let item = select('#' + prop);
      item.html(data[prop]);
    }
  }
  let active = 0;
  for(let i = 0; i < data.lessons.length; i++) {
    let element = '<li class = "course_point';
    if(i==active) {
      element += ' point_active';
    } else if(i < active) {
      element += ' point_after_active';
    }
    element += ('"><a style = "text-decoration:none; outline: none;"><div class = "point_clickbox"></div><h3>' +
    data.lessons[i].title +
    '</h3></a></li>');
    list.html(element, true);
  }
  let lesson_title = select("#selected_lesson_title");
  let lesson_description = select("#selected_lesson_description");
  lesson_title.html(data.lessons[active].title);
  lesson_description.html(data.lessons[active].description);
}
