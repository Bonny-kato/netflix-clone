import Link from "next/link"

const Projects = () => {
    return (
        <section className={'h-screen flex flex-col space-y-2 bg-black center '}>
            <p className={'text-7xl font-bold text-white'}>Project Page</p>
            <img src="/images/code.png" alt="code"/>
            <Link href={'/'}>
                <span className={'text-lg text-blue-500 cursor-pointer'}>back home</span>
            </Link>
        </section>
    )
}
export default Projects;