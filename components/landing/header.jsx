import {NetflixLogo} from "../svg";

const Header = () => {
    return (
        <header className={'p-7 px-14 items-between'}>
            <NetflixLogo className={'w-[134px] h-[36px] fill-current text-primary'}/>
            <button className={'px-[17px] py-[7px] rounded-[3px] bg-primary text-white'}>
                Sign in
            </button>
        </header>
    )
}
export default Header