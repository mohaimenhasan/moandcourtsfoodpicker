import { GiphyFetch } from "@giphy/js-fetch-api";
import { Carousel } from "@giphy/react-components";

const giphyFetch = new GiphyFetch("n1DdXberGaQtYZXDopf1Mh9XuaMVahmW");

function CarouselVal(val, limitVal, gifHeightVal=300) {
    const fetchGifs = () =>
      giphyFetch.search(val, { limit: limitVal });
    return <Carousel fetchGifs={fetchGifs} gifHeight={gifHeightVal} gutter={20} />;
}

export {CarouselVal};