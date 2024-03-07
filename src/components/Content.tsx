import { IImage } from "./interface"

interface IProps {
    url:IImage
  }

const Content = ({url}:IProps) => {
  return (
    <>
    <div key={url.id} className="m-5 container">
        <img className='container mb-4 rounded h-96 w-96' 
        src={url.Url} alt="Product Image"/>
    </div>
    </>
  )
}

export default Content