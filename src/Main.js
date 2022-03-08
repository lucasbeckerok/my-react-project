import ItemListContainer from './components/ItemListContainer'
import DarkMode from './components/DarkToggle';
import Slider from './components/Slider';
import '../src/scss/App.scss';

const Main = () => {

    return (
    <main>
        <div id="presentacion">
            <Slider/>
        </div>
        <ItemListContainer/>
    </main>
    )
}

export default Main;
