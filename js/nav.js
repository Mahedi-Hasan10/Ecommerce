const createNav = () =>{
    let nav = document.getElementById('navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="images/img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="images/img/user.png" alt=""></a>
        <a href="#"><img src="images/img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"> <a href="#" class="link">Home</a></li>
    <li class="link-item"> <a href="#" class="link">Women</a></li>
    <li class="link-item"> <a href="#" class="link">men</a></li>
    <li class="link-item"> <a href="#" class="link">kids</a></li>
    <li class="link-item"> <a href="#" class="link">accessories</a></li>
</ul>
    `;
}
createNav();