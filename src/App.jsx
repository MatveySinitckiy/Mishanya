import { use, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isAnimated,setIsAnimated] = useState(false)
  const [isSpinning,setIsSpinning] = useState(0)
  const [isOpened,setIsOpened] = useState(false)
  const [ImgCount,setImgCount] = useState(1)
  const imgRef = useRef(null)
  const [img,setImg] = useState('./misha.jpg')
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('rotate');
      
      const timeout = setTimeout(() => {
        imgRef.current.classList.remove('rotate');
      }, 1000); // Remove class after 1 second

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [ImgCount]);
   useEffect(() => {
   if(ImgCount === 1){
        setImg('./misha.jpg')
   }
   if(ImgCount === 2){
        setImg('./mishadr.jpg')
   }
   if(ImgCount === 3){
        setImg('./mishashaurma.jpg')
   }
   if(ImgCount === 4){
        setImg('./mishasosal.jpg')
   }

  }, [ImgCount]);
const FunSpin = () => {
  setIsSpinning(1);
  setTimeout(() => {
    setIsSpinning(2);
    setTimeout(()=>{
      setIsOpened(true)
    },2000)
  }, 5000);
};
console.log(ImgCount)
  return (
    <>
     <h1 className='text-center text-6xl font-inter-bold mt-[60%] bg-clip-text text-transparent bg-linear-60 from-purple-300 via-cyan-200 to-sky-800' >МИШАНЯ</h1>
     <h1 className='text-center text-4xl tracking-wider font-inter-bold mt-[1.5%] text-yellow-300 saturate-150' >С днем рождения!</h1>
     <button onClick={()=> setIsAnimated(true)} className='ml-[27.5%] b-anim-1 mt-[30%] overflow-hidden w-[45%] active:scale-95 active:shadow-yellow-400 transition-all  bg-yellow-300 border-t-4 shadow-2xl shadow-yellow-300  border-t-yellow-400  p-[1.75vmin] font-inter rounded-xl text-xl relative' >
      Заказать книгу про рыбалку
      <div className='absolute b-anim top-0 left-0 w-[10.5%] h-[110%] bg-amber-100/55' > </div>
     </button>
     <div className={`absolute top-[2.5%] left-[2.5%] opacity-0 shadow-2xl shadow-yellow-300/30 ${isAnimated ? 'a-anim-1':'a-anim-2'} border-3 border-yellow-300/26 rounded-xl w-[95%] h-[95%] bg-white/12 backdrop-blur-[6.5vmax]`} >
     <button onClick={()=>setIsAnimated(false)} className='relative top-[1.5%] text-yellow-300 underline opacity-60 active:scale-95 transition-all left-[3.5%] font-inter-bold' >Закрыть</button>
     <div className='mx-auto w-[92.5%] h-[20%] bg-white border-8 mt-[45%] rounded-2xl flex flex-row items-center' >
      <div className={`h-full w-[33%] relative border-r-4   flex items-center overflow-hidden shadow-2xl`} ><img className={`w-full ${isSpinning === 1 ? 'k-anim-1':isSpinning === 2 ? 'k-anim-1-1':''} opacity-0  absolute`} src='./shuka.png' ></img> </div>
      <div className={`h-full  w-[33%] border-r-4 border-l-4 flex relative items-center overflow-hidden shadow-2xl`} ><img className={`w-full ${isSpinning === 1 ? 'k-anim-1':isSpinning === 2 ? 'k-anim-1-2':''} opacity-0  absolute`} src='./shuka.png' ></img> </div>
      <div className={`h-full w-[33%] relative border-l-4   flex items-center overflow-hidden shadow-2xl`} ><img className={`w-full ${isSpinning === 1 ? 'k-anim-1':isSpinning === 2 ? 'k-anim-1-3':''} opacity-0 absolute`} src='./shuka.png' ></img> </div>
     </div>
     <button onClick={isSpinning === 0 ? FunSpin:''} className='mx-auto block p-[3vmin] text-xl font-inter-bold overflow-hidden active:scale-95 transition-all relative rounded-xl mt-[3.5%] bg-yellow-300 border-t-4   border-t-yellow-500' >Крутить
      <div className='absolute b-anim top-0 left-0 w-[10.5%] h-[110%] bg-amber-100/55' > </div>
     </button>
      
     </div>
     {isOpened ? <div className='absolute o-anim top-0 w-full h-full bg-black/70 backdrop-blur-md z-3' >
     <img ref={imgRef} className='w-[80%] h-auto mx-auto mt-[30%] border-5 shadow-2xl shadow-yellow-400 border-yellow-400 max-h-[80%]' src={img} ></img>
      <h1 className={`mt-[4.5%] text-center ${ImgCount === 1 ? '':'opacity-0'} text-4xl font-inter-bold  text-yellow-400`} >УЛОВ!!</h1>
     <div className='flex flex-row bs-anim relative bottom-[-100%] w-[80%] h-[8vh] justify-between mx-auto mt-[20%]' >
      <button  onClick={ImgCount <= 1 ? '':()=> setImgCount(ImgCount-1)} className='font-inter text-white transition-all active:scale-95 underline' >Предидущая фотка</button>
      <button  onClick={ImgCount > 4  ? '':()=> setImgCount(ImgCount+1)} className='font-inter-bold text-black transition-all shadow-2xl shadow-yellow-300/25 hover:scale-105 active:scale-95 p-[2vmin] rounded bg-yellow-400' >Следущая фотка</button></div></div>:''}
    </>
  )
}

export default App
