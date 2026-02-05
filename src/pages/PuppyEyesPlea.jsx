import { useNavigate } from 'react-router-dom'

export default function PuppyEyesPlea() {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden shadow-2xl bg-background-light">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <div 
          className="text-primary flex size-12 shrink-0 items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          Valentine's Plea
        </h2>
      </div>

      {/* Puppy Illustration Hero */}
      <div className="px-4 py-3 flex-1 flex flex-col justify-center">
        <div className="relative group">
          {/* Floating Hearts Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
            <span className="material-symbols-outlined text-primary text-6xl absolute -top-4 -left-2 rotate-12">
              favorite
            </span>
            <span className="material-symbols-outlined text-primary text-4xl absolute bottom-10 -right-4 -rotate-12">
              favorite
            </span>
          </div>
          <div 
            className="w-full aspect-square bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 shadow-lg border-4 border-white"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZbTkFEBUqmWCY_CGFVpw5PeutQJytqa2-QGAbQFOHaFl_tMFnF0uzac7V1Ibs16lv3Zeffk5_oY7ECOhVVIP3t90Gjwj2bcaF52INy2_l4S1kTKbWgAcBb4xIhG3zmbyM2lHTilpuRE6FnMfB2vdrTeD0Sx0FH-Vb1qoqSrWIuAVUXxjt0-vvuDAUrok1qS0-zDzij0lumOa5CPGysUUTZqTJQGgSCn-MJ4tL4GeRvatd4sO8bI1fnkYobbSK3EStR0CEkx2V9AU")'
            }}
          />
        </div>
      </div>

      {/* Headline */}
      <div className="px-4 text-center">
        <h1 className="text-[#1c0d10] tracking-tight text-4xl font-extrabold leading-tight pb-2 pt-6">
          Are you sure? <span className="inline-block">🥺</span>
        </h1>
      </div>

      {/* Body Message */}
      <div className="px-8 text-center">
        <p className="text-[#1c0d10]/80 text-lg font-medium leading-relaxed pb-8 pt-1">
          I'll be the best Valentine ever! I promise to give you all the snuggles and treats. ❤️
        </p>
      </div>

      {/* Interactive Buttons Section */}
      <div className="px-4 pb-12 pt-4 flex flex-col items-center gap-6">
        {/* Oversized Yes Button */}
        <button className="flex min-w-[280px] w-full max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-20 px-8 bg-primary text-white text-2xl font-black leading-normal tracking-wide shadow-[0_10px_30px_-5px_rgba(244,37,71,0.5)] transform active:scale-95 transition-all">
          <span className="truncate uppercase tracking-widest">Yes, I'm sure! ❤️</span>
        </button>

        {/* Tiny, Greyed Out No Button */}
        <button className="flex min-w-[60px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-transparent border border-gray-300 text-gray-400 text-[10px] font-bold leading-normal tracking-tight opacity-50 hover:opacity-100 transition-opacity">
          <span className="truncate">no, sorry</span>
        </button>
      </div>

      {/* Decorative Footer Space */}
      <div className="h-6 bg-transparent"></div>

      {/* Bottom Indicator (iOS style) */}
      <div className="mx-auto mb-2 h-1.5 w-32 rounded-full bg-gray-300 opacity-50"></div>
    </div>
  )
}
