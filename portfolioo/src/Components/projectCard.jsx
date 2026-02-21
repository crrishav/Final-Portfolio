import { useState } from "react";

const ProjectCard = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative flex flex-col rounded-[2rem] md:rounded-[2.5rem] p-6 w-full max-w-[350px] md:w-[400px] h-auto md:h-[420px]"
        style={{
          backgroundColor: "#D9D9D9",
          fontFamily: "'Inter', sans-serif",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.12)"
            : "0 4px 12px rgba(0,0,0,0.05)",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {/* Image placeholder */}
        <div
          className="w-full rounded-[1.5rem] md:rounded-[1.8rem] mb-6 overflow-hidden"
          style={{
            height: "150px",
            mdHeight: "180px", // Custom property for reference
            height: window.innerWidth < 768 ? "150px" : "180px",
            backgroundColor: "#A0A0A0",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Title */}
        <h3
          className="text-center text-lg md:text-xl mb-3 tracking-tight"
          style={{ fontWeight: "800", color: "#000" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-center text-sm md:text-base leading-relaxed"
          style={{ color: "#333", fontWeight: "500" }}
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;