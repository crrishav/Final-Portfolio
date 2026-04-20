import { Magnetic } from './animations';

export default function IconsGrid() {
  const icons = ['react', 'nextjs', 'tailwind', 'html', 'nodejs', 'css', 'js', 'figma'];
  
  return (
    <div className="grid grid-cols-4 gap-6 md:gap-16 justify-items-center px-4 w-full max-w-2xl mx-auto">
      {icons.map((icon) => (
        <div key={icon}>
          <Magnetic strength={0.3}>
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-black/5 transition-colors hover:border-black/20">
              <img 
                src={`https://skillicons.dev/icons?i=${icon}`} 
                alt={icon} 
                className="w-10 h-10 md:w-16 md:h-16" 
              />
            </div>
          </Magnetic>
        </div>
      ))}
    </div>
  );
}
