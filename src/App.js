import React, {useState} from "react";
import "the-new-css-reset/css/reset.css"
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Title from "./components/Title";
import styles from './App.module.css';

function App() {
    const data = require('./data/data.json');
    const [cardSelected, setCardSelected] = useState(null);

    const handleSelectedCard = (card) => {
        setCardSelected(card);
    }

    const handleClosedCard = () => {
        setCardSelected(null);
    }

    return (
        <div>
            <header className={styles.appTitleSection}>
                <Title/>
            </header>
            <main>
                {
                    cardSelected &&
                    <section className={styles.appCardExpanded}>
                        <Card key={cardSelected.Id} item={cardSelected} cardStyle={'expanded'}
                              closedCardHandler={handleClosedCard}/>
                    </section>
                }


                <Carousel numItemsToShow={3} isFinite={true}>
                    {
                        data.Data.map((item) => {
                            return (
                                <Card key={item.Id} item={item} clickedCardHandler={handleSelectedCard}/>
                            );
                        })
                    }
                </Carousel>
            </main>
        </div>
    );
}

export default App;
