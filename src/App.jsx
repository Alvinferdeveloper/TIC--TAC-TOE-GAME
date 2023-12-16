
import '../dist/output.css'
import SquareContainer from './components/SquareContainer'


function App() {
 
  return (
   <div className='h-screen w-screen bg-blue-950 flex flex-col justify-center items-center gap-y-10'>
    <p className=' text-2xl text-white'>Bienvenidos a tres en raya</p>
    <SquareContainer/>
   </div>
  )
}

export default App
