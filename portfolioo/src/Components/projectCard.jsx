import { useState } from "react";

const ProjectCard = ({ title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-[2.5rem] p-6 w-[350px] md:w-[400px] h-[420px]"
      style={{
        backgroundColor: "#D9D9D9",
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0,0,0,0.12)"
          : "0 4px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div
        className="w-full rounded-[1.8rem] mb-6 overflow-hidden"
        style={{
          height: "180px",
          backgroundColor: "#A0A0A0",
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Title */}
      <h3
        className="text-center text-xl mb-3 tracking-tight"
        style={{ fontWeight: "800", color: "#000" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-center text-base leading-relaxed"
        style={{ color: "#333", fontWeight: "500" }}
      >
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;