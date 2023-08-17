import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
        slidesToSlide: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 6,
        slidesToSlide: 6
    },
    desktop2: {
        breakpoint: { max: 1280, min: 960 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 960, min: 600 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};




const SectionCarousel = () => {

    return (
        <section className="section">
            
            <div className="carousel_title">
                <h2>Recommend for You</h2>
                <p>Based on your history, we think you'll like these titles.</p>
                <a href="#">See More</a>
            </div>
            <Carousel 
            className='carousel' 
            responsive={responsive}
            draggable={false}
            infinite={true}
            rewind={true}
            showDots={true}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        </section>
    )
}

export default SectionCarousel