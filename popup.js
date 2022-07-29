const works = [
    {
      title: 'Multi-Post Stories1',
      description:
       " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
      featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
      lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
      source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
      live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
    },
    {
      title: 'Multi-Post Stories2',
      description:
       " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
      featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
      lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
      source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
      live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
    },
    {
      title: 'Multi-Post Stories3',
      description:
       " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
      featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
      lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
      source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
      live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
    },
    {
      title: 'Multi-Post Stories4',
      description:
       " A daily selection of privately Personalized reads; no accounts or Signups required, has been the industry's standard dummy text eveer since the 1500s, when an unknown Printer took a standard dummy text.",
      featured_image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg",
      lang_list: ['css', 'html', 'bootsrap', 'Ruby', 'Github'],
      source: 'https://github.com/canon20paul/My-Portfolio-setup-Desktop-version',
      live_demo: 'https://canon20paul.github.io/My-Portfolio-setup-Desktop-version/',
    },
  ];




function blurOut() {
    const blur = document.querySelector('.wrapper');
    blur.setAttribute('id', 'blur');
  }

  function removeBlur() {
    document.querySelector('.wrapper').removeAttribute('id');
  }
  
  function popUpDiv(id) {
    // here i created the necessary divs and classes
  
    const mainDiv = document.createElement('div');
    const divTitle = document.createElement('h1');
    const divExitBtn = document.createElement('img');
    const divImage = document.createElement('img');
    const divParagraph = document.createElement('p');
    const divlang = document.createElement('div');
    const divLiveBtn = document.createElement('a');
    const divSourceBtn = document.createElement('a');
    
    
    
    
    divTitle.innerText = `${works[id].title}`;
    divTitle.classList.toggle('popup-title');
    divParagraph.innerText = `${works[id].description}`;
    divParagraph.classList.toggle('popup-paragraph');
    divLiveBtn.textContent = 'see live';
    divLiveBtn.className = 'live';
    divLiveBtn.classList.add('popup-btn', 'live');
    divLiveBtn.href = `${works[id].live_demo}`;
    divSourceBtn.innerText = 'see source';
    divSourceBtn.className = 'source';
    divSourceBtn.classList.add('popup-btn', 'popup-margin', 'source');
    divSourceBtn.href = `${works[id].source}`;
    divImage.src = `${works[id].featured_image}`;
    divImage.classList.toggle('popup-img');
    divlang.innerText = `<ul>${languageHtml2(works, i)}</ul>`;
    divLang.className = 'card-languages';
    divExitBtn.src = './images/Cancel.png';
    divExitBtn.className = 'icon';
    function closed() {
      mainDiv.style.display = 'none';
      document.body.style.overflow = 'unset';
      removeBlur();
    }
    divExitBtn.addEventListener('click', closed);
    mainDiv.classList.toggle('popup');
  
  
    mainDiv.appendChild(divTitle);
    mainDiv.appendChild(divExitBtn);
    mainDiv.appendChild(divLang);
    mainDiv.appendChild(divImage);
    mainDiv.appendChild(divParagraph);
    mainDiv.appendChild(divLiveBtn);
    mainDiv.appendChild(divSourceBtn);
    document.body.appendChild(mainDiv);
    
  }

popUpDiv();
blurOut();