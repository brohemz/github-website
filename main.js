function addProjects(){
  var carberry =
    "<div class='proj'> CarberryPI: <a href='https://github.com/brohemz/carberry-pi'>https://github.com/brohemz/carberry-pi</a> </div>"

  var image_search =
    "<div class='proj'> image_search: <a href='https://github.com/brohemz/image_search'>https://github.com/brohemz/image_search</a> </div>"

  var movies_app =
    "<div class='proj'> movies_app: <a href='https://github.com/brohemz/movies-app'>https://github.com/brohemz/movies-app</a> </div>"

  var plagiarism_checker =
    "<div class='proj'> plagiarism_checker: <a href='https://github.com/brohemz/Program_Plagiarism_Checker'>https://github.com/brohemz/Program_Plagiarism_Checker</a> </div>"

  document.getElementById("projects").innerHTML = carberry + image_search + movies_app + plagiarism_checker;
}

function addHello(id){
  document.getElementById(id).innerHTML = "HELLO";
  console.log(id)
}

window.onload = () => {
  console.log("wow")
}
