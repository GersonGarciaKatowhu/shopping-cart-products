import './DefaultToImg.css'

function DefaultToImg({src, alt}) {
  return (
    <img className="default-img" src={src} alt={alt} onError={e => e.currentTarget.src = '../../public/pexels-efrem-efre-2786187-20074914.jpg'} />
  )
}

export default DefaultToImg
