function showForm(){
  (document.querySelector('.search-form-invisible').style.display !== 'none')
  ?document.querySelector('.search-form-invisible').style.display = 'none'
  :document.querySelector('.search-form-invisible').style.display = 'flex'
}
showForm();