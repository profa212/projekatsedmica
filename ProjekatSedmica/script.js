






const rezultati = [
  
  {
  predmet: "Matematički model za elektronski izbor najboljeg projekta",
  ocjena: 0,
},
{
  predmet:"Model pametne sobe kontrolisan Arduinom",
  ocjena: 0,
},
{
  predmet:"Izrada kviza iz elektrostatike u programskom jeziku C",
  ocjena: 0,
},

{
  predmet:`Posjeta preduzeća "Alumina"`,
  ocjena: 0,
},

{
  predmet:`Grecov ispravljač kontrolisan Arduino Uno kontrolerom"`,
  ocjena: 0,
},

{
  predmet:"Izrada probnog stola za alternator",
  ocjena: 0,
},

{
  predmet:"Voda za život",
  ocjena: 0,
},

{
  predmet:"Određivanje vlažnosti vazduha",
  ocjena: 0,
},

{
  predmet:"Izrada automehaničarskog stola",
  ocjena: 0,
},
{
  predmet:"Bezbjednostna vožnja u zimskim uslovima",
  ocjena: 0,
},
{
  predmet:"Transport opasnih materija",
  ocjena: 0,
},

{
  predmet:"Teoretska obuka za vozača",
  ocjena: 0,
},

{
  predmet:`Posjeta preduzeću "Euro Petrol"`,
  ocjena: 0,
},

{
  predmet:"Romantizam u očima Puškina",
  ocjena: 0,
},

{
  predmet:"Animacija funkcija u PowerPoint-u",
  ocjena: 0,
},
{
  predmet:"Fukoovo klatno",
  ocjena: 0,
},

{
  predmet:`Tajna prošlih vremena - "Dušan Silni"`,
  ocjena: 0,
},
{
  predmet:"Sportska takmičenja",
  ocjena: 0,
},

]


rezultati.sort((a, b) => b.ocjena - a.ocjena);

const projektiContainer = document.querySelector(".rezultati")


const medalje = ['🥇', '🥈', '🥉'];

// Iterirajte kroz sortiran niz rezultata i kreirajte HTML elemente
rezultati.forEach((rezultat, index) => {
  const projektDiv = document.createElement('div');
  projektDiv.classList.add('projekt');
 if(index == 0){
  projektDiv.classList.add('prvo');
 }else if(index == 1){
  projektDiv.classList.add('drugo');
 }
 else if(index == 2){
  projektDiv.classList.add('trece');
 }
  const mjestoP = document.createElement('p');
  mjestoP.classList.add('mjesto');

  // Postavite emoji za prva tri mjesta, inače postavite broj
  mjestoP.textContent = index < 3 ? medalje[index] : (index + 1).toString();

  const textP = document.createElement('p');
  textP.classList.add('text');
  textP.textContent = rezultat.predmet;

  const ocjenaP = document.createElement('p');
  ocjenaP.classList.add('ocjena');
  ocjenaP.textContent = rezultat.ocjena.toFixed(2);

  projektDiv.appendChild(mjestoP);
  projektDiv.appendChild(textP);
  projektDiv.appendChild(ocjenaP);

  projektiContainer.appendChild(projektDiv);
});

const labels = rezultati.map(el => el.predmet);

let displayedData = {
  labels: labels,
  datasets: [
    {
      axis: 'y',
      label: 'Ocjena',
      data: rezultati.map(el => el.ocjena),
      fill: false,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)',
        'rgba(255, 0, 0)',
        'rgba(0, 255, 0)',
        'rgba(0, 0, 255)',
        'rgba(128, 128, 0)',
        'rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgb(75, 192, 192)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgb(255, 159, 64)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)',
      ],
    },
  ],
};

const config = {
  type: 'bar',
  data: displayedData,
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    
    responsive: true,
    maintainAspectRatio: false,
    
  },
};

const ctx = document.getElementById('myChart').getContext('2d');


new Chart(ctx, config);









const grf = document.querySelector(".grf");
const ime = document.querySelector(".ime");
const pro = document.querySelector(".pro");
const hero = document.querySelector(".hero");

grf.addEventListener("click", function() {
  scrollTo(grf, 1000)
});

pro.addEventListener("click", function() {
 scrollTo(ime, 1000)
});


const scrollTo = (element, duration) => {
  const targetPosition = element.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
};

grf.addEventListener("click", function() {
  const targetElement = document.querySelector(".ime");
  scrollTo(targetElement, 1000); // Adjust the duration as needed (in milliseconds)
});

pro.addEventListener("click", function() {
  const targetElement = document.querySelector(".hero");
  scrollTo(targetElement, 1000); // Adjust the duration as needed (in milliseconds)
});

