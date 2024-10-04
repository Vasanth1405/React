import './App.css';
import NavBarView from './TopNavBar/navBarView';
import CarouselView from './ManiCarouselView/mainCarouselView';
import ReviewsByPlatform from './ReviewsByPlatform/reviewsByPlatform';
import ContentPage from './ContentPage/contentPage';

function App() {
  return (
    <div className="App">
      <NavBarView></NavBarView>
      <CarouselView></CarouselView>
      <ReviewsByPlatform display={"flex"}></ReviewsByPlatform>
      <ContentPage></ContentPage>
    </div>
  );
}

export default App;
