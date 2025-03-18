// components/CategoryGrid.tsx
import Image from 'next/image';
import Link from 'next/link';

// Define the props for the CategoryGrid component
interface CategoryGridProps {
  reverse?: boolean; // Optional prop to reverse the layout
}

// Main CategoryGrid component
export default function CategoryGrid({ reverse }: CategoryGridProps) {
  return (
    <div className={`max-w-5xl mx-auto grid grid-cols-8 gap-3 h-64 ${reverse ? 'flex flex-col-reverse md:flex-row-reverse' : ''}`}>
      
      {/* Main Rectangle (4/8) for Concerts category */}
      <Link 
        href="/categories/concerts" 
        className="col-span-4 relative rounded-lg overflow-hidden group"
      >
        <Image
          src="/images/cat-concerts.jpg"
          alt="Concerts"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
          <h3 className="text-white font-bold text-xl">Concerts</h3>
        </div>
      </Link>

      {/* Square Sections (2/8 each) for Theatre and Sport categories */}
      <div className="col-span-4 grid grid-cols-2 gap-3 h-full">
        
        {/* Theatre category */}
        <Link 
          href="/categories/theatre" 
          className="relative aspect-square rounded-lg overflow-hidden group"
        >
          <Image
            src="/images/cat-theatre.jpg"
            alt="Théâtre"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
            <h3 className="text-white font-medium text-lg">Théâtre</h3>
          </div>
        </Link>
        
        {/* Sport category */}
        <Link 
          href="/categories/sport" 
          className="relative aspect-square rounded-lg overflow-hidden group"
        >
          <Image
            src="/images/cat-sport.jpg"
            alt="Sport"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
            <h3 className="text-white font-medium text-lg">Sport</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
