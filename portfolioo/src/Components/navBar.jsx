import { useState } from 'react';
import HamburgerMenuButton from './hamburgerMenuButton';
import BluredMenu from './bluredMenu';
import { Magnetic } from './animations';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between w-full h-[70px] px-6 md:px-12 bg-white/40 backdrop-blur-xl border-b border-black/5 fixed top-0 left-0 right-0 z-[110] transition-all duration-300">
                <Magnetic strength={0.2}>
                    <div className="text-xl md:text-2xl font-black tracking-tighter text-black cursor-pointer uppercase font-inter">
                        Rishav<span className="text-gray-400">.</span>
                    </div>
                </Magnetic>
                
                <div className="flex items-center gap-6">
                    <Magnetic strength={0.3}>
                        <HamburgerMenuButton 
                            isOpen={isMenuOpen} 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        />
                    </Magnetic>
                </div>
            </nav>
            <BluredMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
