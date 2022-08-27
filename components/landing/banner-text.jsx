import {ChevronRightIcon} from "@heroicons/react/24/outline";

const BannerText = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={'center pt-10  space-y-6 text-white text-center flex-col'}>
            <div className={'space-y-3 '}>
                <h1 className={'text-[3.125rem] max-w-[640px] leading-[1.1] font-medium'}>
                    Unlimited movies, TV shows, and more.
                </h1>
                <h2 className={'text-[1.625rem] font-light'}>Watch anywhere. Cancel anytime.</h2>
            </div>

            <form onSubmit={handleSubmit} action="" className={'space-y-4'}>
                <label htmlFor="email" className={'text-[1.2rem] font-'}>
                    Ready to watch? Enter your email to create or restart your membership.
                </label>

                <div className={'flex w-[650px] h-[3.7rem] m-auto rounded-[1.5px] overflow-hidden'}>
                    <input id={"email"} type="text" className={'w-full outline-none pl-3 text-red-500 h-full'}
                           placeholder={'Email address'}/>
                    <button style={{backgroundImage :"linear-gradient(180deg,#e50914,#db0510)"}}
                            type={"submit"} className={'center px-8 space-x-2'}>
                        <span className={'font-light whitespace-nowrap text-[1.625rem]'}> Get Started</span>
                        <ChevronRightIcon className={'h-6 w-6'} />
                    </button>
                </div>
            </form>
        </div>
    )
}
export default BannerText;