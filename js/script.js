//****SRTYCY NAVBAR*********/
window.onscroll = () => {
  let header = document.querySelector('.heading');
  
  header.classList.toggle("sticky", window.scrollY > 100);
}