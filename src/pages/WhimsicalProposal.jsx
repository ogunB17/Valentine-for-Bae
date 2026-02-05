import { useNavigate } from 'react-router-dom'

export default function WhimsicalProposal() {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#fcf8f9]">
      {/* Background Decorative Elements */}
      <span className="material-symbols-outlined floating-heart heart-1">favorite</span>
      <span className="material-symbols-outlined floating-heart heart-2">favorite</span>
      <span className="material-symbols-outlined floating-heart heart-3">favorite</span>
      <span className="material-symbols-outlined floating-heart heart-4">favorite</span>
      <span className="material-symbols-outlined floating-heart heart-5">favorite</span>

      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between z-10">
        <div 
          className="text-primary flex size-12 shrink-0 items-center justify-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="material-symbols-outlined text-3xl">favorite</span>
        </div>
        <h2 className="text-[#1c0d10] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Valentine Proposal
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8 z-10">
        {/* Hero Illustration (The Bear) */}
        <div className="w-full max-w-sm">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm border-4 border-white shadow-xl shadow-primary/10">
            <div 
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt7UWFJJe6CiSI1-9JpuCrGwAZVFugjUairAXmB86IJEunezRtd_ChYh3Hi6cOCZVKN35H06QmbAVmW8j6dFNB_Vgn3UlGYU7IO33bY5vP1FiNr9MGjhHL1cGbbWC5HkXUXAH8L2kDkrMM_D4SqvRHzR9nZOk5BAgKmdmCGuG-O1oOnt8lbRCNYeKJPJ1SFYBzSTYaOJEstYTXZ2jjQlZ2MSsZq1FchNio6_k_H5g61ymWaO6GJdwM5hsgrtEHDF4sswvuaiYk7dM")'
              }}
            />
          </div>
        </div>

        {/* Headline Section */}
        <div className="text-center space-y-2">
          <h1 className="text-primary font-handwritten text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-sm">
            Will you be my Valentine?
          </h1>
          <p className="text-[#9c4957] text-sm font-medium leading-normal italic">
            (Choose wisely, I have treats!)
          </p>
        </div>

        {/* Interaction Buttons */}
        <div className="flex flex-col items-center w-full max-w-[480px] gap-4 mt-4">
          {/* Yes Button (Primary) */}
          <button className="group relative flex min-w-[200px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-8 bg-primary text-white text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/40">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined">favorite</span>
              YES, OF COURSE!
              <span className="material-symbols-outlined">favorite</span>
            </span>
            {/* Subtle Glow effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* No Button (The Playful One) */}
          <div className="relative w-full flex justify-center h-12">
            <button className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#f4e7e9] text-[#1c0d10] text-base font-bold transition-all hover:opacity-80">
              <span className="truncate">No</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="p-6 text-center">
        <div className="flex justify-center gap-2 text-primary/40">
          <span className="material-symbols-outlined">pets</span>
          <span className="material-symbols-outlined">celebration</span>
          <span className="material-symbols-outlined">pets</span>
        </div>
        <div className="h-8"></div> {/* Safe area spacing */}
      </div>
    </div>
  )
}
