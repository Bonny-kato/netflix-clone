import Image from "next/image";
import Header from "./header";
import BannerText from "./banner-text";
import Head from "next/head";

const Landing = () =>{
    return (
        <section className={'bg-black/60 relative overflow-hidden  h-[83.3vh]'}>
            <Head>
                <link rel="icon" href="/images/favicon.ico" type="image/ico"/>
                <title>Wisiflix Movies, Always Get Latest Movies. </title>
            </Head>
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