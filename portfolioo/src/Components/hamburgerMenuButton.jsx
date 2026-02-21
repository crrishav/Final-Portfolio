export default function HamburgerMenuButton({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="group relative z-[110]"
            style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
            }}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
            <svg
                width="48"
                height="48"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                {/* Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgba(0, 0, 0, 0.8)"
                    strokeWidth="5"
                    className="transition-all duration-500 ease-in-out group-hover:stroke-gray-400"
                />

                {/* Hamburger lines with transition to X */}
                <line 
                    x1="35" y1="48" x2="85" y2="48" 
                    stroke="black" strokeWidth="5" strokeLinecap="round"
                    className="transition-all duration-500 ease-in-out"
                    style={{
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        transform: isOpen ? "translateY(12px) rotate(45deg)" : "none"
                    }}
                />
                <line 
                    x1="35" y1="60" x2="85" y2="60" 
                    stroke="black" strokeWidth="5" strokeLinecap="round"
                    className="transition-all duration-300 ease-in-out"
                    style={{
                        opacity: isOpen ? 0 : 1,
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        transform: isOpen ? "scaleX(0)" : "none"
                    }}
                />
                <line 
                    x1="35" y1="72" x2="85" y2="72" 
                    stroke="black" strokeWidth="5" strokeLinecap="round"
                    className="transition-all duration-500 ease-in-out"
                    style={{
                        transformOrigin: "center",
                        transformBox: "fill-box",
                        transform: isOpen ? "translateY(-12px) rotate(-45deg)" : "none"
                    }}
                />
            </svg>
        </button>
    );
}