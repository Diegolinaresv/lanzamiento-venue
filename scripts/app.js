
const icono = document.querySelector('#icono');
const tooltip = document.querySelector('#tooltip');

const calcularPosicionTooltip = () => {
	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip());
window.addEventListener('resize', () => calcularPosicionTooltip());

icono.addEventListener('mouseenter', () => {
	tooltip.classList.add('activo');
	calcularPosicionTooltip();
});

let timer;
icono.addEventListener('mouseleave', () => {
	timer = setTimeout(() => {
		tooltip.classList.remove('activo');
	}, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));



/**2**/
const i2 = document.querySelector('#icono2');
const t2 = document.querySelector('#tooltip2');

const calcularPosicionTooltip2 = () => {
	// Calculamos las coordenadas del icono.
	const x = i2.offsetLeft;
	const y = i2.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t2.clientWidth;
	const altoTooltip = t2.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	t2.style.left = `${izquierda}px`;
	t2.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip2());
window.addEventListener('resize', () => calcularPosicionTooltip2());

i2.addEventListener('mouseenter', () => {
	t2.classList.add('activo2');
	calcularPosicionTooltip2();
});

let timer2;
i2.addEventListener('mouseleave', () => {
	timer2 = setTimeout(() => {
		t2.classList.remove('activo2');
	}, 500);
});

t2.addEventListener('mouseenter', () => clearTimeout(timer2));
t2.addEventListener('mouseleave', () => t2.classList.remove('activo2'));

/**3**/

const i3 = document.querySelector('#icono3');
const t3 = document.querySelector('#tooltip3');

const calcularPosicionTooltip3 = () => {
	// Calculamos las coordenadas del icono.
	const x = i3.offsetLeft;
	const y = i3.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t3.clientWidth;
	const altoTooltip = t3.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	t3.style.left = `${izquierda}px`;
	t3.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip3());
window.addEventListener('resize', () => calcularPosicionTooltip3());

i3.addEventListener('mouseenter', () => {
	t3.classList.add('activo3');
	calcularPosicionTooltip3();
});

let timer3;
i3.addEventListener('mouseleave', () => {
	timer3 = setTimeout(() => {
		t3.classList.remove('activo3');
	}, 500);
});

t3.addEventListener('mouseenter', () => clearTimeout(timer3));
t3.addEventListener('mouseleave', () => t3.classList.remove('activo3'));


/** 4 **/

const i4 = document.querySelector('#icono4');
const t4 = document.querySelector('#tooltip4');

const calcularPosicionTooltip4 = () => {
	// Calculamos las coordenadas del icono.
	const x = i4.offsetLeft;
	const y = i4.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t4.clientWidth;
	const altoTooltip = t4.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 120) + 150;
	const arriba = y - altoTooltip - 20;

	t4.style.left = `${izquierda}px`;
	t4.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip4());
window.addEventListener('resize', () => calcularPosicionTooltip4());

i4.addEventListener('mouseenter', () => {
	t4.classList.add('activo4');
	calcularPosicionTooltip4();
});

let timer5;
i4.addEventListener('mouseleave', () => {
	timer5 = setTimeout(() => {
		t4.classList.remove('activo4');
	}, 500);
});

t4.addEventListener('mouseenter', () => clearTimeout(timer5));
t4.addEventListener('mouseleave', () => t4.classList.remove('activo4'));

/** 5 **/
const i5 = document.querySelector('#icono5');
const t5 = document.querySelector('#tooltip5');

const calcularPosicionTooltip5 = () => {
	// Calculamos las coordenadas del icono.
	const x = i5.offsetLeft;
	const y = i5.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t5.clientWidth;
	const altoTooltip = t5.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 2) + 15;
	const arriba = y - altoTooltip - 20;

	t5.style.left = `${izquierda}px`;
	t5.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip5());
window.addEventListener('resize', () => calcularPosicionTooltip5());

i5.addEventListener('mouseenter', () => {
	t5.classList.add('activo5');
	calcularPosicionTooltip5();
});

let timer6;
i5.addEventListener('mouseleave', () => {
	timer6 = setTimeout(() => {
		t5.classList.remove('activo5');
	}, 500);
});

t5.addEventListener('mouseenter', () => clearTimeout(timer6));
t5.addEventListener('mouseleave', () => t5.classList.remove('activo5'));


/** 6 **/
const i6 = document.querySelector('#icono6');
const t6 = document.querySelector('#tooltip6');

const calcularPosicionTooltip6 = () => {
	// Calculamos las coordenadas del icono.
	const x = i6.offsetLeft;
	const y = i6.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t6.clientWidth;
	const altoTooltip = t6.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 120) + 150;
	const arriba = y - altoTooltip - 20;

	t6.style.left = `${izquierda}px`;
	t6.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip6());
window.addEventListener('resize', () => calcularPosicionTooltip6());

i6.addEventListener('mouseenter', () => {
	t6.classList.add('activo6');
	calcularPosicionTooltip6();
});

let timer7;
i6.addEventListener('mouseleave', () => {
	timer6 = setTimeout(() => {
		t6.classList.remove('activo6');
	}, 500);
});

t6.addEventListener('mouseenter', () => clearTimeout(timer7));
t6.addEventListener('mouseleave', () => t6.classList.remove('activo6'));

/** 7 **/
const i7 = document.querySelector('#icono7');
const t7 = document.querySelector('#tooltip7');

const calcularPosicionTooltip7 = () => {
	// Calculamos las coordenadas del icono.
	const x = i7.offsetLeft;
	const y = i7.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t7.clientWidth;
	const altoTooltip = t7.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / -50) + 90;
	const arriba = y - altoTooltip - 100;

	t7.style.left = `${izquierda}px`;
	t7.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip7());
window.addEventListener('resize', () => calcularPosicionTooltip7());

i7.addEventListener('mouseenter', () => {
	t7.classList.add('activo7');
	calcularPosicionTooltip7();
});

let timer8;
i7.addEventListener('mouseleave', () => {
	timer7 = setTimeout(() => {
		t7.classList.remove('activo7');
	}, 500);
});

t7.addEventListener('mouseenter', () => clearTimeout(timer7));
t7.addEventListener('mouseleave', () => t7.classList.remove('activo7'));

/** 8 **/
const i8 = document.querySelector('#icono8');
const t8 = document.querySelector('#tooltip8');

const calcularPosicionTooltip8 = () => {
	// Calculamos las coordenadas del icono.
	const x = i8.offsetLeft;
	const y = i8.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t8.clientWidth;
	const altoTooltip = t8.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / -50) + 90;
	const arriba = y - altoTooltip - 100;

	t8.style.left = `${izquierda}px`;
	t8.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip8());
window.addEventListener('resize', () => calcularPosicionTooltip8());

i8.addEventListener('mouseenter', () => {
	t8.classList.add('activo8');
	calcularPosicionTooltip8();
});

let timer9;
i8.addEventListener('mouseleave', () => {
	timer9 = setTimeout(() => {
		t8.classList.remove('activo8');
	}, 500);
});

t8.addEventListener('mouseenter', () => clearTimeout(timer9));
t8.addEventListener('mouseleave', () => t8.classList.remove('activo8'));

/** 9 **/
const i9 = document.querySelector('#icono9');
const t9 = document.querySelector('#tooltip9');

const calcularPosicionTooltip9 = () => {
	// Calculamos las coordenadas del icono.
	const x = i9.offsetLeft;
	const y = i9.offsetTop;

	// Calculamos el tamaño del tooltip.
	const anchoTooltip = t9.clientWidth;
	const altoTooltip = t9.clientHeight;

	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / 150) + 590;
	const arriba = y - altoTooltip - 50;

	t9.style.left = `${izquierda}px`;
	t9.style.top = `${arriba}px`;
};

window.addEventListener('load', () => calcularPosicionTooltip9());
window.addEventListener('resize', () => calcularPosicionTooltip9());

i9.addEventListener('mouseenter', () => {
	t9.classList.add('activo9');
	calcularPosicionTooltip9();
});

let timer10;
i9.addEventListener('mouseleave', () => {
	timer10 = setTimeout(() => {
		t9.classList.remove('activo9');
	}, 500);
});

t9.addEventListener('mouseenter', () => clearTimeout(timer10));
t9.addEventListener('mouseleave', () => t9.classList.remove('activo9'));






function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

 
  function openCitys(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();





  /** carrusel scroll horizontal **/



const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
