
import './App.css'
import Content from './components/Content'
import Btn from './components/Ui/Btn'
import Input from './components/Ui/Input'
import { ImagesListe } from './components/data/inedx'

function App() {
 const RenderUrl = ImagesListe.map((url) =>(
  <Content  key={url.id} url={url}/>
 ))

  return (
    <>
     <h1 className='text-5xl font-semibold'>
      Alphazero </h1>

      <div className='m-9'>
         <Input />
      </div>
     
      
        <Btn className='bg-cyan-950 my-7'>
          Dashboard</Btn>
      
         <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-8 gap-5'>
          {RenderUrl}
         </div>
    </>
  )
}

export default App
