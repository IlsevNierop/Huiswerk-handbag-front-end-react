import React from 'react';
import './App.css';
import Button from "./components/Button/Button";
import handbag1 from './assets/bag_1.png';
import handbag2 from './assets/bag_2.png';
import handbag3 from './assets/bag_3.png';
import handbag4 from './assets/bag_4.png';
import Article from "./components/Article/Article";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonType="button" isDisabled={false}
                        buttonClickHandler={() => console.log("To the collection!")}>To the collection</Button>
                <Button buttonType="button" isDisabled={false} buttonClickHandler={() => console.log("Shop all bags")}>Shop
                    all bags</Button>
                <Button buttonType="button" isDisabled={true}
                        buttonClickHandler={() => console.log("Pre-orders")}>Pre-orders</Button>
            </nav>
            <main>
                <Article
                    tag="Best Seller"
                    image={handbag1}
                    subTitle="The handy bag"
                    price="€400,-"
                />
                <Article
                    tag="Best Seller"
                    image={handbag2}
                    subTitle="The stylish bag"
                    price="€250,-"
                />
                <Article
                    tag="New Collection"
                    image={handbag3}
                    subTitle="The simple bag"
                    price="€300,-"
                />
                <Article
                    tag="New Collection"
                    image={handbag4}
                    subTitle="The trendy bag"
                    price="€150,-"
                />
            </main>
        </>
    );
}

export default App;



