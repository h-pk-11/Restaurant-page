import '../style/menu.css';
const menu1Img = await import('../image/menu-1.webp');

function menu(){
    return `

        <header class="menu">
            <div class="menu-introduction">
                <img loading="lazy" src="${menu1Img.default}" alt="about image">
            </div>
        </header>

        <section class="menu-body">
            <div class="menu-content">
                <span class="menu-heading">Signature dishes</span>
                <div class="menu_list_wrap">

                    <div class="menu_item">
                        <div class="vi_name">
                            Nộm Ngó Sen Gà Xé
                        </div>
                        <div class="en_name">
                            Marinated Lotus Root with Shredded Chicken "Nom"
                        </div>
                    </div>
                
                    <div class="menu_item">
                        <div class="vi_name">
                            Bún Chả Phố Cổ                            
                        </div>
                        <div class="en_name">
                            Hanoian Grilled Pork with Vermicelli                                            
                        </div>
                    </div>
                
                    <div class="menu_item">
                        <div class="vi_name">
                            Nem Cua Bể                                            
                        </div>
                        <div class="en_name">
                            Deep-fried Sea Crab Spring Rolls                                            
                        </div>
                    </div>
                
                    <div class="menu_item">
                        <div class="vi_name">
                            Chả Cá Thăng Long                                            
                        </div>
                        <div class="en_name">
                            Traditional Grilled Herbal Fish with Shrimp Paste                                            
                        </div>
                    </div>
                
                    <div class="menu_item">
                        <div class="vi_name">
                            Gỏi Sứa Trộn Cóc Non                                            
                        </div>
                        <div class="en_name">
                            Sweet and Sour Jellyfish with Ambarella "Goi"                                            
                        </div>
                    </div>
                
                    <div class="menu_item">
                        <div class="vi_name">
                            Nem Lụi Cuốn Bánh Tráng                                            
                        </div>
                        <div class="en_name">
                            Grilled Pork Lemongrass Skewer with Rice Paper                                            
                        </div>
                    </div>
                    <div class="menu_item">
                        <div class="vi_name">
                            Cánh Gà Chiên Mắm                                            
                        </div>
                        <div class="en_name">
                            Fried Chicken Wings with Fish Sauce                                            
                        </div>
                    </div>
                    <div class="menu_item">
                        <div class="vi_name">
                            Há Cảo Tôm Nõn Chiên                                            
                        </div>
                        <div class="en_name">
                            Deep-fried Shrimp Dumpling                                            
                        </div>
                    </div>
                        
                </div>


            </div>

        </section>

    `;
};

export default menu();