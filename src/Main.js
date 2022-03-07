import DarkMode from './components/DarkToggle';
import Slider from './components/Slider';
import { Fragment } from 'react';
import '../src/scss/App.scss';
import ItemListContainer from './components/ItemListContainer';

const Main = () => {

    return (
    <main>
        <div id="presentacion">
            <Slider/>
        </div>
        <Fragment className="App">
                <ItemListContainer greeting="Proximamente mas productos!"/>
        </Fragment>
        <div>
            <DarkMode/>
        </div>
    </main>
    )
}

export default Main;
