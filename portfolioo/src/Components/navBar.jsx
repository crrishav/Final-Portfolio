import { useState } from 'react';
import HamburgerMenuButton from './hamburgerMenuButton';
import BluredMenu from './bluredMenu';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between w-full h-[45px] px-8 pt-12 pb-8 bg-white/70 backdrop-blur-2xl fixed top-0 left-0 right-0 z-[110]">
                <div className="text-2xl font-bold tracking-tight text-black">
                    Logo
                </div>
                <div>
                    <HamburgerMenuButton 
                        isOpen={isMenuOpen} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    />
                </div>
            </nav>
            <BluredMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
