function preload() {
  data = loadJSON("JavaScript/Course_data.json");
}

function setup() {
  Create_course();
  Background_setup(255, tan(PI/18));
  Menu_manipulation();
  Course_syllabus_adjust();
}

function draw() {
  Background_draw();
}

function windowResized() {
  holder = select('#canvas');
  resizeCanvas(holder.width, holder.height);
  Course_syllabus_adjust();
}
