export default function IconsGrid() {
  const icons = ['react', 'flutter', 'tailwind', 'html', 'dart', 'css', 'js', 'figma'];
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-12 justify-items-center px-4 w-full max-w-lg mx-auto">
      {icons.map((icon) => (
        <div key={icon} className="p-1">
          <img 
            src={`https://skillicons.dev/icons?i=${icon}`} 
            alt={icon} 
            className="w-14 h-14 md:w-20 md:h-20 transition-transform hover:scale-110" 
          />
        </div>
      ))}
    </div>
  );
}
