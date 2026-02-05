import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReasonsToSayYes() {
  const navigate = useNavigate()
  const [checkedItems, setCheckedItems] = useState({
    laugh: true,
    friend: false,
    heart: false,
    life: false,
    coffee: false
  })

  const handleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const reasons = [
    {
      id: 'laugh',
      title: 'Your contagious laugh',
      subtitle: "It's my favorite soundtrack."
    },
    {
      id: 'friend',
      title: "You're my best friend",
      subtitle: "There's no one else I'd rather talk to."
    },
    {
      id: 'heart',
      title: 'You have the kindest heart',
      subtitle: 'The way you care for everyone around you.'
    },
    {
      id: 'life',
      title: 'Life is better with you',
      subtitle: 'Every moment is an adventure.'
    },
    {
      id: 'coffee',
      title: 'Your coffee orders',
      subtitle: 'Even if they are overly complicated.'
    }
  ]

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bokeh-bg bg-background-light">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-background-light/80 backdrop-blur-md z-10">
        <div 
          className="text-primary flex size-12 shrink-0 items-center justify-start cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="material-symbols-outlined text-[28px]">arrow_back_ios_new</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          Reasons Why
        </h2>
      </div>

      {/* Header Image Section */}
      <div className="px-4 py-3">
        <div 
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-primary/10 rounded-xl min-h-[240px] shadow-sm relative"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8YJoJH3QgGKCjfUUf0IcXAOxuBBhaXbHDpIxPKwWAriEYfKIJDlxUV-icc0efSuuESh-BKBKOyDrIP9d6oNeBBiCnnr6Xy9sGR32RZCNnYnVkFZB5rjuECnx8u6XobWH0-5w2ScDZuDaLpBeWHbt1sg2Bwu79DB8IzNgcVN7cBhT40vYVYRctmx_PAd_r2Fw18cahx7uvmAmrCudvdwX-OWZ24KyBOJyyeCVgr8iqo2Eak37ag1ArHBPJjfK7fl5JA7giBYWES9w")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="relative p-6">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white text-xs font-bold mb-2">
              VALENTINE'S 2024
            </span>
            <h1 className="text-white text-3xl font-bold">The Little Things</h1>
          </div>
        </div>
      </div>

      {/* Headline Text */}
      <div className="px-4 pt-8 pb-4">
        <h2 className="text-primary tracking-tight text-[28px] font-bold leading-tight text-center">
          Why I Adore You
        </h2>
        <p className="text-sm opacity-70 text-center mt-2 px-8">
          Just a few of the million reasons why you're my favorite human.
        </p>
      </div>

      {/* Checklist Content */}
      <div className="flex-1 px-4 py-2">
        <div className="space-y-2">
          {reasons.map((reason) => (
            <label 
              key={reason.id}
              className="flex items-center gap-x-4 p-4 rounded-2xl bg-white shadow-sm border border-primary/5 cursor-pointer active:scale-[0.98] transition-all"
            >
              <input
                type="checkbox"
                checked={checkedItems[reason.id]}
                onChange={() => handleCheck(reason.id)}
                className="h-6 w-6 rounded-full border-primary/30 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-colors"
              />
              <div className="flex flex-col">
                <p className="text-base font-semibold leading-none">{reason.title}</p>
                <p className="text-xs opacity-60 mt-1">{reason.subtitle}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Floating Spacer for fixed bottom */}
      <div className="h-32"></div>

      {/* Sticky Bottom Button Section */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-light via-background-light/95 to-transparent">
        <div className="flex flex-col gap-3 max-w-md mx-auto">
          <div className="flex justify-center mb-1">
            <div className="flex -space-x-2">
              <div 
                className="w-8 h-8 rounded-full border-2 border-background-light bg-cover bg-center" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASNPtcgCNHJceNt-zEeH8nb9AxZS7Mms0e3vUGBXFgX7Wp7Ju-WZSZ7evH_l5okaWgdA31ociGlS49VZQJdu81JE7ue3vrRElNmDy7q_U277khJHkMBhivrjRmBhWH_0aJcnAc0aZaoOYbvNu0JTEtxTJcuI_p7UsrJGMMbGHBmXZndB4sAQuZppXPGt73NRJWlDWHtl3-M3qpeYHTloH-lhh8xN8S3b0xG-az_fN3Ee6ICtUaJTCyMf-9gNu-60fYuzKNE55mtR4")'
                }}
              />
              <div className="w-8 h-8 rounded-full border-2 border-background-light bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">favorite</span>
              </div>
            </div>
          </div>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
            <span className="truncate">So... yes?</span>
          </button>
          <p className="text-center text-[10px] uppercase tracking-widest opacity-40 font-bold">
            Waiting for your answer
          </p>
        </div>
      </div>
    </div>
  )
}
