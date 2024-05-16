
{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      const parent = dt.parentNode;
      if (parent instanceof HTMLElement) 
        parent.classList.toggle('appear');
      
      dts.forEach(el =>{
        const elParent= dt.parentNode;
        if(dt!==el) el?.parentNode?.classList.remove('appear')
      })
    });
  })
}
