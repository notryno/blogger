import React, { useContext } from 'react'
import homeimage from '../../assets/homeimage2.jpg';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Aboutout = () => {
  const{dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  function clearCookie() {
    
    localStorage.removeItem("token");
    navigate("/");
    dispatch({ type: "LOGOUT" });


}
  return (
    <div className='bg-[#fb6719]'>
      {/* <div className='absolute w-full h-full bg-black'>
            <img src={homeimage} alt='' className='object-cover w-full h-full opacity-60'/>
        </div> */}
      <div className=' flex flex-col p-5'>
        <div className='text-white text-4xl font-bold pt-5'>
          Hello World
        </div>
        <div className='py-3'>
          <p className='font-thin text-white text-xl'>
            opadsiahsd aoshda sdiohadf foia dhfoi aio dfaiodhf adf ahdfio aidfh aodfhioa
            dfahfd oah dfuif aiodf h8iov uadfd vuiasd udvhuiad iahdv iahdioi hadv oiahdiovhia
            dah sdiov hioashdvo asdv ioasdhviuoas dv aiod voiah9v ioasdvho8a dvi ha8odvh aodviahd vuiasdv
          </p>
        </div>
        <div className='text-right p-2'>
          <button className='bg-[#ffff] py-2 px-5 rounded font-bold uppercase'>

            {/* Logout button */}
            <div className="border-t border-gray-400">
              <button onClick={clearCookie} className="block w-full py-2 px-3 text-left text-sm hover:bg-gray-100 focus:outline-none hover:text-black">Logout</button>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aboutout
