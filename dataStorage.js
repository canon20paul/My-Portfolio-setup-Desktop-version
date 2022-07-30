function recordD() {
  const recordOBJ = JSON.parse(localStorage.getItem('recordOBJ'));
  recordOBJ.names = document.querySelector('#names').value;
  recordOBJ.email = document.querySelector('#email').value;
  recordOBJ.Naration = document.querySelector('#Naration').value;
  localStorage.setItem('recordOBJ', JSON.stringify(recordOBJ));
}

function check() {
  if (!localStorage.getItem('recordOBJ')) {
    const recordOBJ = {
      names: '',
      email: '',
      Naration: '',
    };
    localStorage.setItem('recordOBJ', JSON.stringify(recordOBJ));
  } else {
    const recordOBJ = JSON.parse(localStorage.getItem('recordOBJ'));
    document.querySelector('#names').value = recordOBJ.names;
    document.querySelector('#email').value = recordOBJ.email;
    document.querySelector('#Naration').value = recordOBJ.Naration;
  }
}

window.onload = () => {
check();
};

document.querySelector('#names').addEventListener('keydown', recordD);
document.querySelector('#email').addEventListener('keydown', recordD);
document.querySelector('#Naration').addEventListener('keydown', recordD);