
// components
import Nav from './components/Nav';
import Footer from './components/Footer';

// sections
import LandingSection from './sections/LandingSection';
import RoomsSection from './sections/RoomsSection';
import BlogSection from './sections/BlogSection';
import ServiceSection from './sections/ServiceSection';
import ReviewsSection from './sections/ReviewsSection';

// stylings
import GlobalStyles from './GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <LandingSection />
      <ServiceSection />
      <RoomsSection />
      <BlogSection />
      <ReviewsSection />

      <Footer />
    </>
  );
}

export default App;
