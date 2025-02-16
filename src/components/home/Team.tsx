
export const Team = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 flex w-full max-w-full flex-col items-stretch justify-center px-16 py-28 max-md:px-5">
      <h2 className="text-center text-[40px] font-bold leading-[48px] bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent max-w-[768px] mx-auto">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-2xl mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Team member"
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <p className="text-white text-sm">Product Manager</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
          <p className="text-sm text-gray-600">Product Manager</p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-2xl mb-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Team member"
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <p className="text-white text-sm">Technical Lead</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Alex Chen</h3>
          <p className="text-sm text-gray-600">Technical Lead</p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-2xl mb-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Team member"
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <p className="text-white text-sm">UI/UX Designer</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Maya Patel</h3>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>
        <div className="flex flex-col items-center group">
          <div className="relative overflow-hidden rounded-2xl mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
              alt="Team member"
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <p className="text-white text-sm">Career Advisor</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">David Kim</h3>
          <p className="text-sm text-gray-600">Career Advisor</p>
        </div>
      </div>
    </section>
  );
};
