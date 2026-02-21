import HamburgerMenuButton from './hamburgerMenuButton';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between w-full h-[45px] px-8 pt-12 pb-8 bg-white">
            <div className="text-2xl font-bold tracking-tight text-black">
                Logo
            </div>
            <div>
                <HamburgerMenuButton onClick={() => console.log('Menu Toggle')} />
            </div>
        </nav>
    );
}
