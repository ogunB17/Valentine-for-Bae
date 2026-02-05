import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 font-handwritten">
            Valentine's Proposals ❤️
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your favorite way to say "Be Mine"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/whimsical"
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-red-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🧸</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Whimsical Bear</h3>
            <p className="text-gray-600 text-sm">
              A cute teddy bear with treats!
            </p>
          </Link>

          <Link
            to="/puppy"
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🐶</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Puppy Eyes Plea</h3>
            <p className="text-gray-600 text-sm">
              Irresistible puppy dog eyes
            </p>
          </Link>

          <Link
            to="/reasons"
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">💝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Reasons to Say Yes</h3>
            <p className="text-gray-600 text-sm">
              All the reasons why you're amazing
            </p>
          </Link>
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p className="text-sm">Made with ❤️ for someone special</p>
        </div>
      </div>
    </div>
  )
}
