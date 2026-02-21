export default function HamburgerMenuButton() {
    return (
        <button
            style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
            }}
            aria-label="Menu"
        >
            <svg
                width="48"
                height="48"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Circle */}
                <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="black"
                    strokeWidth="5"
                />

                {/* Hamburger lines */}
                <line x1="40" y1="48" x2="80" y2="48" stroke="black" strokeWidth="4" strokeLinecap="round" />
                <line x1="40" y1="60" x2="80" y2="60" stroke="black" strokeWidth="4" strokeLinecap="round" />
                <line x1="40" y1="72" x2="80" y2="72" stroke="black" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </button>
    );
}