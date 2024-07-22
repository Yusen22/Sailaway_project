import planeIcon from '../../assets/plane-icon.jpg'
const NavLogo = () => {
  return (
    <div className="flex items-center justify-start w-fit animate-flip-down">
      <h3 className='font-extrabold text-3xl'>Sail<span className='text-sky-600'>Away</span></h3>
        <img src={planeIcon} className='w-12'></img>
    </div>
  )
}
export default NavLogo