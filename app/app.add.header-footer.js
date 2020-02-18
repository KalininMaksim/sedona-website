let header =`<a href="index.html">
<img class="logo" src="img/index/logo.png" alt="Логотип Седона"></a>

<nav class="main-navigation">            
<ul class="site-navigation">
   <li>
       <a href="#">
           Информация
       </a>
   </li>

   <li>
       <a href="#">
           Фото и видео
       </a>
   </li>

   <li style="visibility: hidden;">
       Логотип
   </li>

   <li>
       <a href="#">
           Карта штата
       </a>
   </li>

   <li>
       <a href="hotels.html">
           Гостиницы
       </a>
   </li> 
</ul>
</nav>`;

let footer = ` <p class="footer-instagram-link">
<a href="https://www.instagram.com/explore/tags/visitsedona/">
    #VISITSEDONA
</a>
</p>

<div class="footer-social">
<ul>
    <li>
        <img src="img/index/twitter.png" alt="Twitter">

        <a class="social-buton social-buton-twitter" 
           href="https://twitter.com/SedonaAZ"
           style="visibility: hidden;">   
            Twitter
        </a>
    </li>

    <li>
        <img src="img/index/fb-icon.png" alt="Facebook">

        <a class="social-buton social-buton-facebook" 
           href="https://www.facebook.com/VisitSedona"
           style="visibility: hidden;">
           Facebook
        </a>
    </li>

     <li>
        <img src="img/index/youtube.png" alt="YouTube">

        <a class="social-buton social-buton-youtube" 
           href="https://www.youtube.com/user/SedonaAZ1"
           style="visibility: hidden;">
            YouTube 
        </a>
    </li>
</ul>
</div>

<p class="footer-copyright">
<span>website by </span>

<a href="https://htmlacademy.ru/"> 
    <img src="img/index/logo_name.png"
         alt="Logo HTML Academy">
</a>    
</p>`

document.querySelector('header').innerHTML = header;
document.querySelector('footer').innerHTML = footer;