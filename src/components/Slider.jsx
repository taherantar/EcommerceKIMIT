import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

function Slider() {

    
    return (
        <div className='carouselHome'>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <Image src='https://cdn.winsightmedia.com/platform/files/public/2022-07/background/800x1000/Amazon%20Fresh-resized_0.jpg?VersionId=8.NQLCLUAiKPogcDQAuxR1FLUZBf6Ry8' width="80%" height="500" alt='Photo' />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <Image src='https://asset-lasamcd.dfs.com/image/upload/f_auto/q_auto/v1690796011/PTS_PRIX_AOUT_SITE_HERO_FR_1440x600.png' width="80%" height="500" alt='Photo' />

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <Image src='https://certi.news/images/articles/maxresdefault.jpg' width="80%" height="500" alt='Photo' />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;