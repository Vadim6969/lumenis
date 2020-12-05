const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');
const selectCurrent = document.querySelector('.select__current');


const select = () => {
  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  })
  function selectToggle (){
    this.parentElement.classList.toggle('open');
  }
  selectItem.forEach(item => {
    item.addEventListener('click', function() {
      selectCurrent.textContent = this.textContent;
      const select = this.closest('.select');
      select.classList.remove('open')
    })
  })

}
select();
