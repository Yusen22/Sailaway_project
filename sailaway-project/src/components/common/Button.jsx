const Button = ({children}) => {
  return (
    <>
        <button className="w-1/2 h-9 border border-gray-500 my-1 bg-sky-600 hover:bg-white text-white hover:text-sky-600 rounded-full uppercase font-extrabold tracking-widest transition ease-out duration-200">{children}</button>
    </>
  )
}
export default Button