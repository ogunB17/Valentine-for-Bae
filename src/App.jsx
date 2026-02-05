import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WhimsicalProposal from './pages/WhimsicalProposal'
import PuppyEyesPlea from './pages/PuppyEyesPlea'
import ReasonsToSayYes from './pages/ReasonsToSayYes'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whimsical" element={<WhimsicalProposal />} />
        <Route path="/puppy" element={<PuppyEyesPlea />} />
        <Route path="/reasons" element={<ReasonsToSayYes />} />
      </Routes>
    </Router>
  )
}

export default App
