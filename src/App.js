import React from 'react';
import './App.css';
import Button from "./components/Button/Button";

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
        </>
    );
}

export default App;



