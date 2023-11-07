import '../style/root.css';
const desertImg = await import('../image/desert.webp');
const michelinImg = await import('../image/michelin.png');

export default function root(...args){
    const content = args.join('');
    return `
        <nav class="nav-desktop">
            <div class="nav-wrapper">
                <div class="nav-logo">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000.000000 303.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,303.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                            <path d="M2094 3001 c-80 -36 -74 59 -74 -1271 0 -1301 -4 -1226 61 -1264 78
                            -46 221 -26 260 38 18 30 19 61 19 809 l0 778 358 -3 c353 -3 357 -3 394 -26
                            25 -16 46 -42 65 -80 l28 -57 5 -695 c6 -767 2 -725 67 -767 38 -25 178 -25
                            216 0 65 42 62 3 65 736 2 401 -1 701 -7 755 -18 157 -84 261 -215 340 -137
                            82 -124 80 -571 86 l-400 5 -5 277 c-5 261 -6 278 -26 305 -11 15 -36 33 -55
                            40 -52 18 -138 15 -185 -6z"/>
                            <path d="M9166 3010 c-15 -5 -37 -17 -48 -27 -50 -44 -48 -4 -48 -1255 0
                            -1097 1 -1175 18 -1207 30 -60 62 -76 156 -76 90 0 121 13 153 62 17 25 18 81
                            21 806 l3 778 352 -3 c407 -3 399 -2 452 -98 l30 -55 5 -700 c6 -772 2 -730
                            67 -772 41 -27 181 -25 220 3 65 48 63 18 63 769 0 702 -3 759 -42 863 -40
                            107 -185 221 -337 266 -46 13 -116 16 -432 16 l-377 0 -4 273 c-3 297 -5 305
                            -63 343 -30 19 -146 28 -189 14z"/>
                            <path d="M13794 3002 c-80 -38 -74 58 -74 -1272 0 -1307 -4 -1232 63 -1267 83
                            -43 220 -21 258 41 18 30 19 61 19 809 l0 778 358 -3 c349 -3 358 -4 393 -25
                            23 -15 46 -43 65 -80 l29 -58 5 -695 c6 -767 2 -725 67 -767 38 -25 178 -25
                            216 0 65 42 62 4 65 732 2 433 -1 693 -8 755 -18 163 -81 264 -211 341 -145
                            87 -125 83 -574 89 l-400 5 -5 275 c-5 293 -7 303 -57 335 -42 28 -157 31
                            -209 7z"/>
                            <path d="M71 2984 c-66 -47 -69 -223 -4 -274 25 -19 39 -20 329 -20 l304 0 0
                            -1067 c0 -1018 1 -1070 19 -1109 26 -56 73 -77 172 -78 84 0 126 17 163 67
                            l21 28 3 1080 2 1079 301 0 c196 0 307 4 321 11 30 16 48 71 48 149 0 76 -16
                            122 -49 140 -13 7 -288 10 -813 10 -717 0 -796 -2 -817 -16z"/>
                            <path d="M7030 2982 c-62 -24 -87 -64 -95 -155 -3 -39 -5 -572 -3 -1184 3
                            -1106 3 -1112 24 -1140 36 -50 78 -64 176 -61 69 2 92 7 115 24 61 45 58 -21
                            61 1152 l3 1073 372 -3 c420 -4 422 -4 476 -78 43 -60 51 -115 51 -359 0 -239
                            -9 -294 -56 -351 -53 -62 -64 -64 -346 -70 -254 -5 -257 -5 -282 -29 -48 -45
                            -60 -145 -27 -217 10 -23 25 -45 32 -50 8 -5 81 -11 163 -14 l148 -5 313 -525
                            c222 -371 322 -530 342 -542 63 -39 177 -4 251 76 47 51 54 93 26 149 -9 18
                            -131 220 -271 451 -139 230 -252 420 -251 421 2 2 32 20 68 40 131 76 185 135
                            231 250 23 58 24 71 27 390 3 273 1 343 -12 398 -35 150 -109 240 -259 311
                            -51 24 -113 49 -139 55 -31 7 -220 11 -570 10 -469 0 -528 -2 -568 -17z"/>
                            <path d="M12763 2859 c-65 -32 -73 -63 -73 -289 l0 -190 -89 0 c-111 0 -134
                            -15 -150 -93 -17 -84 12 -167 65 -187 14 -6 59 -10 100 -10 l74 0 0 -612 c0
                            -377 4 -638 11 -677 20 -128 83 -217 187 -270 115 -58 177 -73 322 -78 153 -5
                            175 1 202 57 34 67 15 196 -30 216 -9 4 -66 10 -127 13 -125 8 -160 21 -189
                            71 -20 34 -21 51 -24 658 l-3 622 151 0 c164 0 197 8 217 53 34 73 27 170 -14
                            211 -25 25 -28 26 -187 28 l-161 3 -5 205 c-6 230 -11 249 -75 276 -52 21
                            -152 18 -202 -7z"/>
                            <path d="M11010 2396 c-62 -18 -82 -30 -119 -71 -24 -28 -31 -45 -31 -78 0
                            -31 83 -259 317 -872 l316 -829 -28 -86 c-47 -138 -83 -160 -263 -160 -57 0
                            -112 -5 -123 -10 -66 -36 -71 -202 -7 -255 29 -24 34 -25 176 -25 161 0 252
                            15 337 54 54 25 122 80 155 126 15 21 507 1648 599 1979 25 91 17 135 -33 179
                            -46 40 -151 69 -198 53 -70 -23 -69 -23 -258 -656 -98 -328 -180 -598 -183
                            -601 -5 -5 -147 339 -358 870 -102 256 -149 362 -165 373 -32 20 -82 24 -134
                            9z"/>
                            <path d="M4376 2375 c-131 -33 -276 -136 -329 -234 -53 -97 -57 -138 -57 -716
                            0 -576 3 -613 55 -716 53 -104 180 -198 315 -234 43 -12 128 -15 385 -15 373
                            0 395 3 526 71 153 80 232 192 249 353 20 191 -19 246 -172 246 -118 0 -168
                            -46 -168 -157 0 -73 -18 -124 -59 -164 -54 -54 -104 -61 -394 -57 -275 4 -295
                            8 -346 78 -16 22 -34 64 -40 91 -14 66 -14 947 0 1009 15 65 53 118 102 141
                            38 17 68 19 315 19 304 0 318 -2 369 -64 45 -55 53 -96 53 -279 l0 -166 -292
                            -3 c-316 -3 -325 -5 -353 -58 -19 -37 -19 -130 -1 -175 28 -66 31 -66 474 -63
                            452 3 443 2 492 89 24 42 25 51 28 259 5 289 -6 401 -51 494 -56 117 -128 175
                            -292 233 l-80 28 -335 2 c-265 2 -347 -1 -394 -12z"/>
                            <path d="M16076 2369 c-22 -5 -72 -25 -110 -44 -144 -70 -218 -148 -256 -272
                            -19 -63 -20 -92 -20 -795 0 -809 -3 -770 67 -804 50 -24 165 -24 210 0 72 37
                            67 -9 73 781 5 697 5 711 26 756 14 30 35 54 60 70 37 23 50 24 213 27 229 5
                            272 -11 318 -113 17 -37 18 -94 23 -740 5 -635 7 -703 22 -731 45 -82 224 -96
                            294 -23 l29 30 5 707 5 707 30 60 c46 92 65 99 259 103 87 2 179 1 202 -3 52
                            -7 97 -42 127 -99 22 -41 22 -43 27 -751 5 -657 6 -713 23 -738 50 -77 225
                            -86 293 -16 l29 30 3 717 c3 763 2 793 -45 887 -41 85 -111 149 -227 207 -104
                            53 -139 58 -402 58 -270 0 -298 -5 -421 -70 l-73 -39 -72 39 c-119 63 -162 70
                            -434 69 -132 -1 -257 -5 -278 -10z"/>
                            <path d="M18800 2360 c-191 -69 -286 -154 -342 -306 -18 -51 -21 -81 -22 -224
                            -1 -145 2 -174 22 -237 41 -131 138 -217 314 -281 72 -26 79 -26 398 -32 350
                            -5 355 -6 407 -62 40 -42 53 -91 53 -194 0 -118 -13 -166 -60 -215 -26 -27
                            -48 -39 -88 -48 -68 -14 -494 -15 -562 0 -96 20 -147 93 -157 221 -6 85 -21
                            114 -68 134 -46 19 -177 18 -215 -1 -51 -26 -60 -50 -60 -155 0 -162 38 -259
                            137 -350 71 -64 159 -113 250 -135 53 -14 121 -16 420 -13 404 4 411 5 540 89
                            112 74 170 152 198 271 18 75 20 293 4 370 -29 136 -116 244 -249 310 -146 71
                            -145 71 -470 75 -162 2 -310 6 -328 9 -42 7 -100 58 -123 109 -14 30 -19 65
                            -19 140 0 109 16 160 61 202 54 49 80 53 356 53 269 -1 310 -6 355 -47 36 -32
                            68 -113 68 -174 0 -107 66 -157 193 -145 63 6 102 22 132 56 17 19 20 34 18
                            115 -5 198 -83 326 -252 414 -135 70 -145 71 -520 71 -309 -1 -340 -2 -391
                            -20z"/>
                        </g>
                    </svg>
                </div>

                <ul class="nav__list">
                    <li class="nav__item">
                        <a class="nav__item-link" data-content="about" href="#">About
                            <span></span>
                        </a>
                    </li>

                    <li class="nav__item">
                        <a class="nav__item-link" data-content="menu" href="#">Menu
                            <span></span>
                        </a>
                        
                    </li>

                    <li class="nav__item">
                        <a class="nav__item-link" data-content="career" href="#">Career
                        <span></span>
                        </a>
                        
                    </li>

                </ul>
            </div>

            <div class="nav-links-wrapper">
                <ul class="nav-links__list">
                    <li class="nav-links__item">
                        <a href="#">
                            <i class="fa-brands fa-square-facebook"></i>
                        </a>
                    </li>
                    <li class="nav-links__item">
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </nav>

        ${content}

        <footer>

            <figure class="footer-image">
                <img loading="lazy" src="${desertImg.default}" alt="desert">
            </figure>

            <div class="footer-content">
                <img loading="lazy" src="${michelinImg.default}" alt="michelin star">

                <p class="footer-content__para">
                    <span class="footer-content__para--white">
                        <strong>Sunday + Monday Closed</strong>
                    </span>
                </p>

                <p class="footer-content__para">
                    <span class="footer-content__para--white">
                        Open Tuesday-Saturday
                        <br>
                        <strong>5pm-10pm</strong>
                    </span>
                </p>

                <p class="footer-content__para">
                    <span class="footer-content__para--white">
                        18 - Phan Boi Chau - Cua Nam
                        <br>
                        Hoan Kiem - Hanoi.111103
                    </span>
                </p>

                <p class="footer-content__para">
                    <span class="footer-content__para--white">
                        Contact
                        <br>
                        <strong>therythms@therythms.com</strong>
                    </span>
                </p>

                <p class="footer-content__para">
                    <span class="footer-content__para--white">
                        <strong>
                            For inquiries related to existing reservations please contact us at reservations@therythms.com
                        </strong>
                    </span>
                    
                </p>

            </div>

        </footer>
    `;
}

export function addScrollEvents(){
    const headerNav = document.querySelector('.nav-desktop');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function(){
        let scrollTop = window.scrollY || this.document.documentElement.scrollTop;

        if(headerNav.classList.contains('scrolled-down')){
            headerNav.classList.remove('scrolled-down');
        }

        if(headerNav.classList.contains('scrolled-up')){
            headerNav.classList.remove('scrolled-up');
        }

        if(headerNav.classList.contains('scrolled-top')){
            headerNav.classList.remove('scrolled-top');
        }

        if(scrollTop > lastScrollTop){
            headerNav.classList.add('scrolled-down');
        }else{
            headerNav.classList.remove('scrolled-down');
            headerNav.classList.add('scrolled-up');
            if(scrollTop === 0){
                headerNav.classList.add('scrolled-top');
            }
        }

        lastScrollTop = scrollTop;
    });
    
}