export default function IconsGrid() {
  const icons = ['react', 'flutter', 'tailwind', 'html', 'dart', 'css', 'js', 'figma'];
  return (
    <div className="grid grid-cols-4 gap-8 md:gap-12 justify-items-center">
      {icons.map((icon) => (
        <img 
          key={icon} 
          src={`https://skillicons.dev/icons?i=${icon}`} 
          alt={icon} 
          className="w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-110" 
        />
      ))}
    </div>
  );
}
