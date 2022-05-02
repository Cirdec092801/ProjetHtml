function scroll_up(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
};

function message(){
    window.alert("Vous serez rédigé dans la section quizz du site.");
    let con =   window.confirm("Confirmez-vous cette action?");
    if(con){
        window.location.replace("Quizz.html");
    }
}



function heure(){
    setInterval(() =>{
		
		//Recuperation des elements
			let heures = document.getElementById("heures");
			let minutes = document.getElementById("minutes");
			let secondes = document.getElementById("secondes");
		
		//Creation des variables temps	
			let h = new Date().getHours();
			let m = new Date().getMinutes();
			let s = new Date().getSeconds();
		
			let hh = document.getElementById("hh");
			let mm = document.getElementById("mm");
			let ss = document.getElementById("ss");

			let hr_dot = document.getElementById('hr_dot');
			let min_dot = document.getElementById('min_dot');
			let sec_dot = document.getElementById('sec_dot');

		//Ajout de zero si l'instant est inferieur a 10
			h = (h < 10)? "0" + h: h;
			m = (m < 10)? "0" + m: m;
			s = (s < 10)? "0" + s: s;
		
		
		//Modification des variables dans le code HTML
			heures.innerHTML = h + "<br><span>Heures</span>";
			minutes.innerHTML = m + "<br><span>Minutes</span>";
			secondes.innerHTML = s + "<br><span>Secondes</span>";

			hh.style.strokeDashoffset = 440 - (440 * h) / 24;
			mm.style.strokeDashoffset = 440 - (440 * m) / 60;
			ss.style.strokeDashoffset = 440 - (440 * s) / 60;

			hr_dot.style.transform = 'rotate('+h*15+'deg)';
			min_dot.style.transform = 'rotate('+m * 6+'deg)';
			sec_dot.style.transform = 'rotate('+s * 6+'deg)';
		})
}

function filtre(){
  let list = document.querySelectorAll(".list");
  let itemBox = document.querySelectorAll(".itemBox");

  for(let i = 0 ; i<list.length;i++){
      list[i].addEventListener('click', function(){
          for(let j = 0; j<list.length; j++){
              list[j].classList.remove('active');
          }
          this.classList.add('active');

          let dataFilter = this.getAttribute('data-filter');

          for (let k = 0; k < itemBox.length; k++) {
              itemBox[k].classList.add('hide');
              itemBox[k].classList.remove('active');

              if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "Tout"){
                  itemBox[k].classList.add('active');
                  itemBox[k].classList.remove('hide');   
              }
              
          }
      })
  }
}




