import Image from "next/image";
import {NetflixLogo} from "../svg";
import Header from "./header";
import BannerText from "./banner-text";

const Landing = () =>{
    return (
        <section className={'bg-black/60 relative overflow-hidden  h-[83.3vh]'}>
            <Image src={'/images/background.jpg'} alt={'background'}
                   className={' mix-blend-color-burn'} layout={'fill'} />

            <div className={'absolute space-y-20 inset-0 '}>
                <Header/>
                <BannerText/>
            </div>
        </section>
    )
}
export default Landing;