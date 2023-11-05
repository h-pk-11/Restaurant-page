import '../style/home.css';
const intro1Img = await import('../image/intro-1.jpg');
const intro2Img = await import('../image/intro-2.jpg');
const intro3Img = await import('../image/intro-3.jpg');
const dish1Img = await import('../image/dish-1.jpg');
const dish2Img = await import('../image/dish-2.jpg');
const dish3Img = await import('../image/dish-3.jpg');
const dish4Img = await import('../image/dish-4.jpg');
const dish5Img = await import('../image/dish-5.jpg');
const dish6Img = await import('../image/dish-6.jpg');
const dish7Img = await import('../image/dish-7.jpg');
const dish8Img = await import('../image/dish-8.jpg');
const dish9Img = await import('../image/dish-9.jpg');

function home(){

    return `
        <header class="home">
            <div class="header-introduction">
                <ul class="header-introduction__image-list">

                    <li class="header-introduction__image-item header-introduction__image-item--active">
                        <img class="homeSlide" loading="lazy" src="${intro1Img.default}" alt="intro image 1">
                    </li>

                    <li class="header-introduction__image-item">
                        <img class="homeSlide" loading="lazy" src="${intro2Img.default}" alt="intro image 1">
                    </li>

                    <li class="header-introduction__image-item">
                        <img class="homeSlide" loading="lazy" src="${intro3Img.default}" alt="intro image 1">
                    </li>

                </ul>

                <ul class="header-introduction__point-list">
                    <li class="header-introduction__point-item header-introduction__point-item--active" data-index="0"></li>
                    <li class="header-introduction__point-item" data-index="1"></li>
                    <li class="header-introduction__point-item" data-index="2"></li>
                </ul>
                
            </div>
        </header>


        <section class="home home-body">
            <div class="home-body-content">
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish1Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish2Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish3Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish4Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish5Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish6Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish7Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish8Img.default}" alt="main course">
                </figure>
                <figure class="home-body-image">
                    <img loading="lazy" src="${dish9Img.default}" alt="main course">
                </figure>
            </div>
        </section>

        <section class="home home-address">

            <a class="home-address-link" href="https://www.google.com/maps/place/Quan+An+Ngon/@21.0259963,105.8414005,17.25z/data=!4m6!3m5!1s0x3135ab96d8d973cf:0x47a4f29ec2c4f739!8m2!3d21.0263017!4d105.8433763!16s%2Fg%2F11qxxy0b71!5m1!1e4?hl=en&entry=ttu" >
                <span>18 - Phan Boi Chau - Cua Nam</span>
                <br>
                <span>Hoan Kiem - Hanoi.111103</span>
            </a>

        </section>
    `;
}

export default home();

export function handleSlideShow(){
    const imageList = document.querySelector('.header-introduction__image-list');

    const imageItems = imageList.querySelectorAll('.header-introduction__image-item');

    const pointList = document.querySelector('.header-introduction__point-list');

    const pointItems = pointList.querySelectorAll('.header-introduction__point-item');

    let activeIndex = +pointList.querySelector('.header-introduction__point-item--active').dataset.index;

    pointItems.forEach((item, index) => {
        item.onclick = function(){
            showSlide(index);
        };
    });

    function showSlide(index){

        if(activeIndex !== index){

            pointItems[activeIndex].classList.remove('header-introduction__point-item--active');

            pointItems[index].classList.add('header-introduction__point-item--active');

            imageItems[activeIndex].classList.remove('header-introduction__image-item--active');

            imageItems[index].classList.add('header-introduction__image-item--active');

            activeIndex = index;
        }

    }

    function showSlideAuto(){

        let currentIndex = activeIndex;

        ++activeIndex;

        if(activeIndex == pointItems.length){
            activeIndex = 0;
        }

        pointItems[currentIndex].classList.remove('header-introduction__point-item--active');

        pointItems[activeIndex].classList.add('header-introduction__point-item--active');

        imageItems[currentIndex].classList.remove('header-introduction__image-item--active');

        imageItems[activeIndex].classList.add('header-introduction__image-item--active');


        setTimeout(() => {
            showSlideAuto();
        }, 15000);
    };

    setTimeout(() => {
        showSlideAuto();
    }, 15000);

}