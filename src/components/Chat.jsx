import React, { useContext } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { stateContext } from '../context/ContextProvider';
import { chatData } from '../data/dummy';

const Chat = () => {
  const { currentColor, setIsClicked } = useContext(stateContext);

  return (
    <div className='z-[99999] fixed  top-16 right-4 md:top-28 md:right-20 w-11/12 sm:w-96 bg-white dark:bg-[#1e2637] rounded-lg shadow-lg'>
      
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-3 border-b dark:border-gray-600">
        <p className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          Message
        </p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ color: "rgb(153 , 171 , 180)", borderRadius: "50%" }}
          className="text-2xl p-2 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>

      {/* Messages */}
      <div className="max-h-80 overflow-y-auto">
        {chatData.map((message, index) => (
          <div key={index} className='flex items-start gap-4 px-5 py-3 border-b dark:border-gray-600'>
            <img className='rounded-full h-10 w-10' src={message.image} alt="user" />
            <div>
              <p className='text-gray-800 dark:text-gray-100 font-medium'>{message.message}</p>
              <p className='text-gray-400 text-sm'>{message.desc}</p>
              <p className='text-gray-400 text-xs'>{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chat;
