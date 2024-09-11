import './App.css';
import NavBarView from './TopNavBar/navBarView';
import CarouselView from './ManiCarouselView/mainCarouselView';
import ReviewsByPlatform from './ReviewsByPlatform/reviewsByPlatform';

function App() {
  return (
    <div className="App">
      <NavBarView></NavBarView>
      <CarouselView></CarouselView>
      <ReviewsByPlatform></ReviewsByPlatform>
    </div>
  );
}

export default App;
