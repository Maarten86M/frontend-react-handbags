import React from 'react';
import './App.css';
import Button from "./Button";
import TheHandyBag from './assets/bag_1.png';
import TheStylishBag from './assets/bag_2.png';
import TheTrendyBag from './assets/bag_3.png';
import TheSimpleBag from './assets/bag_4.png';
import BrandImg from './assets/brand.png';
import StoryImg from './assets/our_story.png';
import Product from "./Product";
import Tile from "./Tile";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonName="to the collection" disabled={false}/>
                <Button buttonName="shop all bags" disabled={false}/>
                <Button buttonName="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    bestSeller={true}
                    newCollection={false}
                    img={TheHandyBag}
                    articleName="The Handy Bag"
                    price={450}
                />

                <Product
                    bestSeller={true}
                    newCollection={false}
                    img={TheStylishBag}
                    articleName="The Stylish Bag"
                    price={250}
                />

                <Product
                    bestSeller={false}
                    newCollection={true}
                    img={TheTrendyBag}
                    articleName="The Trendy Bag"
                    price={300}
                />

                <Product
                    bestSeller={false}
                    newCollection={true}
                    img={TheSimpleBag}
                    articleName="The Simple Bag"
                    price={150}
                />
            </main>

            <footer>
                <Tile
                    textHead="The Brand"
                    textArticle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iste! Consectetur adipisicing elit. Hic, iste!"
                    textArticleTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iste! Consectetur adipisicing elit. Hic, iste!"
                />
                <Tile
                    imgBig={BrandImg}
                    altText= "The Brand"
                />
            </footer>

            <footer>
                <Tile
                    imgBig={StoryImg}
                    altText= "Our Story"
                />
                <Tile
                    textHead="Our Story"
                    textArticle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iste!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iste! consectetur adipisicing elit. Hic, iste!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, iste!"
                />
            </footer>

        </>
    );
}

export default App;



