
import { Briefcase, MapPin, SearchIcon, Filter, X, Check } from "lucide-react";
import { useState, useRef } from "react";

interface JobCard {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  skills: string[];
  experience: string;
}

const sampleJobs: JobCard[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Bangalore, India",
    description: "We're looking for a passionate Software Engineer to join our growing team. You'll work on cutting-edge projects and help shape the future of our products.",
    type: "Full-time",
    skills: ["React", "TypeScript"],
    experience: "3+ years"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Solutions",
    location: "Chennai, India",
    description: "Join our creative team to build beautiful and responsive web applications using modern technologies.",
    type: "Full-time",
    skills: ["Vue.js", "CSS"],
    experience: "2+ years"
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Cloud Systems",
    location: "Hyderabad, India",
    description: "Looking for an experienced backend developer to work on scalable cloud solutions.",
    type: "Full-time",
    skills: ["Node.js", "AWS"],
    experience: "4+ years"
  }
];

const Jobs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [jobs, setJobs] = useState(sampleJobs);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setOffsetX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(offsetX) > 100) {
      // Threshold for swipe
      const newIndex = offsetX > 0 ? currentIndex - 1 : currentIndex + 1;
      if (newIndex >= 0 && newIndex < jobs.length) {
        setCurrentIndex(newIndex);
      }
    }
    setOffsetX(0);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < jobs.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filter Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2 text-gray-500" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Swipeable Job Cards */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="relative h-[500px] flex items-center justify-center">
          {jobs[currentIndex] && (
            <div
              ref={cardRef}
              className="absolute w-full bg-white p-6 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(${offsetX}px) rotate(${offsetX * 0.1}deg)`,
                opacity: Math.max(1 - Math.abs(offsetX) / 500, 0.5)
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={handleMouseStart}
              onMouseMove={handleMouseMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900">
                  {jobs[currentIndex].title}
                </h3>
                <div className="mt-2 flex items-center text-gray-500">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span className="mr-4">{jobs[currentIndex].company}</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{jobs[currentIndex].location}</span>
                </div>
                <p className="mt-4 text-gray-600 flex-grow">
                  {jobs[currentIndex].description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {jobs[currentIndex].type}
                  </span>
                  {jobs[currentIndex].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {jobs[currentIndex].experience}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Swipe Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleSwipe('left')}
            className="p-4 bg-red-100 rounded-full text-red-500 hover:bg-red-200 transition-colors"
            disabled={currentIndex === 0}
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="p-4 bg-green-100 rounded-full text-green-500 hover:bg-green-200 transition-colors"
            disabled={currentIndex === jobs.length - 1}
          >
            <Check className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {jobs.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
