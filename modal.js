const projects_container = document.querySelector('.Project-Cards');
const works = [
  {
    title: 'Multi-post Stories1',
    description:
     " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
    detail:
     " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
     featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-Post Stories2',
    description:
     " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
    detail:
     " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-Post Stories3',
    description:
     " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
    detail:
     " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
  {
    title: 'Multi-Post Stories4',
    description:
     " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
    detail:
     " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
    lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
    source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
    live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
  },
];

const workCardShouldReverse = (index) => {
    if (index % 2 === 0) {
      return 'row-reverse work-item-2';
    }
    return 'work-item-1';
  };
  
  const languageHtml = (workObj, key, langList = '') => {
    /* eslint-disable no-restricted-syntax */
    for (const lang in workObj[key].lang_list) {
      if (lang-4) {
        langList += `<li><span>${workObj[key].lang_list[lang]}</span></li>`;
      }
    }
    /* eslint-enable no-restricted-syntax */
    return langList;
  };

  const languageHtml2 = (workObj, key, langList = '') => {
    /* eslint-disable no-restricted-syntax */
    for (const lang in workObj[key].lang_list) {
      if (lang) {
        langList += `<li><span>${workObj[key].lang_list[lang]}</span></li>`;
      }
    }
    /* eslint-enable no-restricted-syntax */
    return langList;
  };
  
  let workCard = '';
  
  
  const appendWorks = (works) => {
    for (let i = 0; i < works.length; i += 1) {
      workCard += ` <section class="main-project-1 ${workCardShouldReverse(i)}">
         <img class="Wimage" src="${works[i].featured_image}" alt="${works[i].title}" />
        <div class="card work-card">
          <h3 class="font-style">${works[i].title}</h3>
         <p class="font-style card-description">
            ${works[i].description}
          </p>
          <ul class="card-languages" id="card-languages">
            ${languageHtml(works, i)}
          </ul>
          <button type="button" data-work="${i}" class="btn buttonW" onclick="blurOut(), popUpDiv(${[i]}), href='#wrap-header';">      
            See Project
          </button>
        </div>
      </section>`;
    }
  };
  appendWorks(works);
  projects_container.innerHTML = workCard;

function popUpDiv(j) {
  const  closs=document.getElementsByClassName("wrapper");
  const wrap = document.createElement("section");
  const wrap1 = document.createElement("div");
  wrap.classList.add("wrap")
  wrap1.classList.add("wrap1")
  wrap1.innerHTML= ` <section class="wrap"><div class="wrap1">
  <div id="wrap-header" class="wrap-header"><h3>${works[j].title}</h3><div class="xx"><img class="xx-img" src="images/Cancel.png" alt="Close" onclick="removeBlur()" /></div></div>
  <div class="wrap1-img"><img class="wrap1-img-img" src="${works[j].featured_image}" alt="${works[j].title}" /></div>
  <div class="wrap-bottom"><p class="wrap-detail">${works[j].detail}</p>
    <ul >${languageHtml(works, j)}</ul>
      <div class="btnD"><button type="submit" id="live" class=" btnPP live"><a href="${works[j].live_demo}"><span class="spanL">See Live</span><img class="btnPP-imgL" src="images/live.png" alt=""></a></button> 
      <button type="submit" id="source" class="btnPP source"><a href="${works[j].source}"><span class="spanS">See Source</span><img class="btnPP-imgS" src="images/github.png" alt=""></a></button> </div>
    </div>
    <div class="Enclipe10"></div>
        <div class="Enclipe20"></div>
    </div>
  </section>`;
  wrap.appendChild(wrap1);
  document.body.appendChild(wrap);
  document.documentElement.scrollTop=0;
   }

  function blurOut() {
    const blur = document.querySelector('.wrapper');
    blur.setAttribute('id', 'blur');
  }

function removeBlur() {
    document.querySelector('.wrapper').removeAttribute('id');
    document.querySelector('.wrapper').removeAttribute('id');
    const shut=document.querySelector(".wrap");
   shut.remove()
   
}
    