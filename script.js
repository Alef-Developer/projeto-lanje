
const toast = document.getElementById('toast');
function showToast(msg){
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2200);
}
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const value = btn.dataset.copy;
    try{
      await navigator.clipboard.writeText(value);
      showToast('Pix copiado!');
    }catch{
      showToast('Pix: ' + value);
    }
  });
});
const menuBtn=document.querySelector('.mobile-btn');
const menu=document.querySelector('.menu');
if(menuBtn){
  menuBtn.addEventListener('click',()=>{
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menu.style.position='absolute';
    menu.style.top='70px';
    menu.style.left='0';
    menu.style.right='0';
    menu.style.padding='20px';
    menu.style.background='#fff';
    menu.style.flexDirection='column';
    menu.style.boxShadow='0 12px 25px rgba(0,0,0,.08)';
  });
}
