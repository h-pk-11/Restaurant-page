import '../style/about.css';
const about1Img = await import('../image/about-1.webp');

function about(){
    return `
        <header class="about">
            <div class="about-introduction">
                <img loading="lazy" src="${about1Img.default}" alt="about image">
            </div>
        </header>

        <section class="about about-body">
            <div class="about-content">
                <p class="about-content_para">
                    The “Rythyms”, meaning a “delicious restaurant”, is a Vietnamese restaurant at 18 Phan Boi Chau Street in Hanoi’s French Quarter. Its extensive menu featuring authentic cuisines from the north, central, and south Vietnam has made it one of the busiest restaurants in the city.
                </p>
                <p class="about-content_para">
                    Conveniently located at a corner of a tree-line street, within five minute-walk from the historical Hoa Lo Prison and Hanoi Train Station, Quan An Ngon can accommodate up to 500 guests. Its sittings are available at an outdoor courtyard, and in air-conditioned dinning spaces within the imposing French colonial house.
                </p>
            </div>
        </section>

    `;
}

export default about();