const Data = {
    names: '',
    email: '',
    Naration: '',
  };
  
  form.addEventListener('change', () => {
    Data.names = document.querySelector('#names').value;
    Data.email = document.querySelector('#email').value;
    Data.textArea = document.querySelector('#Naration').value;
  
    localStorage.setItem('stored', JSON.stringify(Data));
  });
  const storedData = JSON.parse(localStorage.getItem('stored'));
  if (storedData) {
    document.querySelector('#email').value = storedObject.email;
    document.querySelector('#names').value = storedObject.names;
    document.querySelector('#Naration').value = storedObject.textArea;
  }