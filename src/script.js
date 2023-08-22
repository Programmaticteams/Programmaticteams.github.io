document.addEventListener("DOMContentLoaded", function () {
  const formbar = document.getElementById('formbar');
  const openPopupButton = document.getElementById('open-popup-btn');
  const overlay = document.getElementById('overlay');
  const closePopupButton = document.getElementById('close-popup-btn')
  openPopupButton.addEventListener('click', () => {
    formbar.style.right = "0"; 
    overlay.style.display = "block";
    setTimeout(() => {
      overlay.style.opacity = "0.60";
    }, 10);;
    
    document.body.classList.add('overflow-hidden-compensate', 'pointer-events-none', 'fixed', 'inset-0', 'pr-2.5');


  });
  const form = document.getElementById('inputForm');

  form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const enrolled = document.querySelector('input[name="message"]:checked').value;
      const response = await fetch('http://localhost:5050/form/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, enrolled })
      });

      if (response.status === 204) {
          alert('Form submitted successfully!');
          form.reset();
          closeformbar();
      } else {
          alert('Failed to submit form.');
      }
  });


  closePopupButton.addEventListener('click', () => { 
    closeformbar();
  });

  function closeformbar() {
    formbar.style.right = "-400px"; 
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
    document.body.classList.remove('overflow-hidden-compensate', 'pointer-events-none', 'fixed', 'inset-0', 'pr-2.5')
    formbar.removeEventListener('click', closeformbar); 
  }


  // const open_btn = document.querySelector(".open-popup-btn");
  // const close_btn = document.querySelector(".close-btn");
  // const popup = document.querySelector(".popup");
  // const main_popup = document.querySelector(".main-popup");



  // open_btn.addEventListener("click", () => {
  //   popup.style.display = "flex";
  //   main_popup.style.cssText =
  //     "animation:slide-in .5s ease; animation-fill-mode: forwards;";
  // });

  // close_btn.addEventListener("click", () => {
  //   main_popup.style.cssText =
  //     "animation:slide-out .5s ease; animation-fill-mode: forwards;";
  //   setTimeout(() => {
  //     popup.style.display = "none";
  //   }, 500);
  // });

  // window.addEventListener("click", (e) => {
  //   if (e.target == document.querySelector(".popup-overlay")) {
  //     main_popup.style.cssText =
  //       "animation:slide-out .5s ease; animation-fill-mode: forwards;";
  //     setTimeout(() => {
  //       popup.style.display = "none";
  //     }, 500);
  //   }
  // });
});