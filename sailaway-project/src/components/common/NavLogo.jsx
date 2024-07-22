import planeIcon from '../../assets/plane-icon.jpg'

// Takes 2 args - dark which only takes argument dark, size which takes (sm, md, lg...),
// and size as a number in TWs standard numbering
const NavLogo = ({size, dark, logoWidth}) => {
  return (
    <div className='flex relative items-center justify-start text-black'>
      <h3 className={`font-extrabold text-${size}`}>Sail<span className={`${dark === 'dark' ? 'text-black' : 'text-sky-600'}`}>Away</span></h3>
        <img src={planeIcon} className={`inline mix-blend-multiply w-${logoWidth}`}></img>
    </div>
  )
} 
export default NavLogo 