import { ExternalLink, GitBranch } from "lucide-react";
import { ParallaxImage, Magnetic } from "./animations";

const ProjectCard = ({ title, description, image, link, liveLink }) => {
  return (
    <div
      className="group relative flex flex-col bg-[#F5F5F5] rounded-[2.5rem] overflow-hidden project-card-shadow transition-all duration-500 w-full max-w-[450px] aspect-[4/5] md:aspect-[3/4]"
    >
      {/* Image Section */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <ParallaxImage 
          src={image} 
          alt={title} 
          className="w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-8 md:p-10 justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-black mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed line-clamp-3 md:line-clamp-4">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          {liveLink && (
            <Magnetic strength={0.2}>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
              >
                Live <ExternalLink size={14} />
              </a>
            </Magnetic>
          )}
          <Magnetic strength={0.2}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full text-sm font-bold hover:bg-black/5 transition-colors"
            >
              Repo <GitBranch size={14} />
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
