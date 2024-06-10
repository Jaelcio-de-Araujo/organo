import BannerImage from "../../../public/imagens/banner.png";
import './Banner.css';

function Banner() {
    return (
        <header className="banner">
            <img src={BannerImage} alt="Banner do site" />
        </header>
    );
}
export default Banner;
