document.addEventListener('DOMContentLoaded', () => {
  // 1) animate box
  const box = document.getElementById('box');
  const btnAnimate = document.getElementById('btnAnimate');
  btnAnimate?.addEventListener('click', () => {
    box?.classList.toggle('is-active');
  });

  // 2) flip card (button controls it)
  const card = document.getElementById('flipCard');
  const btn  = document.getElementById('btnFlip');
  btn?.addEventListener('click', () => {
    const flipped = card?.classList.toggle('is-flipped');
    if (card) card.setAttribute('aria-pressed', String(!!flipped));
  });

  // 3) loading spinner start/stop
  const spinner  = document.getElementById('spinner');
  const btnStart = document.getElementById('btnStart');
  const btnStop  = document.getElementById('btnStop');
  btnStart?.addEventListener('click', () => spinner?.classList.add('is-on'));
  btnStop?.addEventListener('click',  () => spinner?.classList.remove('is-on'));

  // 4) modal open/close
  const modal        = document.getElementById('modal');
  const btnOpenModal = document.getElementById('btnOpenModal');
  const btnCloseModal= document.getElementById('btnCloseModal');

  btnOpenModal?.addEventListener('click', () => {
    if (modal && typeof modal.showModal === 'function') modal.showModal();
  });
  btnCloseModal?.addEventListener('click', (e) => {
    e.preventDefault();
    modal?.close?.();
  });

  // (optional) quick sanity log
  // console.log('wired:', { box, btnAnimate, card, btn, spinner, btnStart, btnStop, modal, btnOpenModal, btnCloseModal });
});

