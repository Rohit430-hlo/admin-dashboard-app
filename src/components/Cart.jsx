// import React, { useContext, useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import { cartData } from "../data/dummy";
// import { IoMdAdd } from "react-icons/io";
// import { RiSubtractLine } from "react-icons/ri";
// import { stateContext } from "../context/ContextProvider";
// import { toast } from "react-toastify";

// const Cart = () => {
//   const { currentColor, isClicked, setIsClicked } = useContext(stateContext);

//   const [quantity, setQuantity] = useState(cartData.map(() => 0));

//   const handleIncrement = (index) => {
//     const newQuantity = [...quantity];
//     newQuantity[index]++;
//     setQuantity(newQuantity);
//   };

//   const handleDecrement = (index) => {
//     const newQuantity = [...quantity];
//     if (newQuantity[index] > 0) {
//       newQuantity[index]--;
//       setQuantity(newQuantity);
//     }
//   };

//   const handlePlacedOrder = () => {
//     toast.success("Your order has been placed!");
//     setIsClicked(false);
//   };

//   const totalPrice = cartData.reduce((total, item, index) => {
//     //  console.log('Item Price:', item.price, 'Quantity:', quantity[index]);
//     const price = parseFloat(item.price.replace("$", "")) || 0;
//     {
//       /* to convert $ to number*/
//     }
//     return (total = total + price * quantity[index]);
//   }, 0);

//   return (
//     <div className="z-50 bg-half-transparent fixed w-full top-0 right-0">
//       <div className="float-right h-screen bg-white w-80">
//         <div className="flex justify-between p-4 ml-4 items-center">
//           <p className="font-semibold text-xl">Shopping Cart</p>
//           <button
//             type="button"
//             onClick={() => setIsClicked(false)}
//             style={{ color: "rgb(153 , 171 , 180)", borderRadius: "50%" }}
//             className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
//           >
//             <MdOutlineCancel />
//           </button>
//         </div>

//         <div>
//           {cartData.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="mt-4 p-4 flex  justify-between border-b-1"
//               >
//                 <div>
//                   <img
//                     className="w-20 h-20 rounded-xl"
//                     src={item.image}
//                     alt=""
//                   />
//                 </div>
//                 <div>
//                   <p>{item.name}</p>
//                   <p>{item.category}</p>

//                   <div className="flex gap-x-4 items-center">
//                     <p>{item.price}</p>
//                     <div className="flex items-center">
//                       <button
//                         className="px-3 py-2 border"
//                         onClick={() => handleIncrement(index)}
//                       >
//                         <IoMdAdd />
//                       </button>
//                       <p className="px-4 py-1 border">{quantity[index]}</p>
//                       <button
//                         className="px-3 py-2 border"
//                         onClick={() => handleDecrement(index)}
//                       >
//                         <RiSubtractLine />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex justify-between p-4">
//           <p className="font-semibold">Total Amount</p>
//           <p className="font-semibold">${totalPrice.toFixed(2)}</p>
//         </div>

//         <div className="text-center mt-8 ">
//           <button
//             onClick={handlePlacedOrder}
//             className="px-4 py-3 text-lg font-semibold text-white rounded-xl cursor-pointer"
//             style={{ backgroundColor: currentColor }}
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// with dark Mode 


import React, { useContext, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { cartData } from "../data/dummy";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { stateContext } from "../context/ContextProvider";
import { toast } from "react-toastify";

const Cart = () => {
  const { currentColor, isClicked, setIsClicked } = useContext(stateContext);
  const [quantity, setQuantity] = useState(cartData.map(() => 0));

  const handleIncrement = (index) => {
    const newQuantity = [...quantity];
    newQuantity[index]++;
    setQuantity(newQuantity);
  };

  const handleDecrement = (index) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 0) {
      newQuantity[index]--;
      setQuantity(newQuantity);
    }
  };

  const handlePlacedOrder = () => {
    toast.success("Your order has been placed!");
    setIsClicked(false);
  };

  const totalPrice = cartData.reduce((total, item, index) => {
    const price = parseFloat(item.price.replace("$", "")) || 0;
    return total + price * quantity[index];
  }, 0);

  return (
    <div className="z-50 bg-half-transparent fixed w-full top-0 right-0">
      <div className="float-right h-screen w-80 bg-white dark:bg-[#1e2637] shadow-lg rounded-l-xl overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between p-4 ml-4 items-center border-b dark:border-gray-700">
          <p className="font-semibold text-xl text-gray-800 dark:text-gray-100">
            Shopping Cart
          </p>
          <button
            type="button"
            onClick={() => setIsClicked(false)}
            style={{ color: "rgb(153 , 171 , 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Items */}
        <div>
          {cartData.map((item, index) => (
            <div
              key={index}
              className="mt-4 px-4 py-3 flex justify-between items-start border-b dark:border-gray-700"
            >
              <div>
                <img
                  className="w-20 h-20 rounded-xl object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex-1 ml-4">
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </p>

                <div className="flex gap-x-4 items-center mt-2">
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    {item.price}
                  </p>
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                      onClick={() => handleIncrement(index)}
                    >
                      <IoMdAdd />
                    </button>
                    <p className="px-4 py-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                      {quantity[index]}
                    </p>
                    <button
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                      onClick={() => handleDecrement(index)}
                    >
                      <RiSubtractLine />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between p-4 border-t dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-100 text-lg">
          <p>Total Amount</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>

        {/* Place Order */}
        <div className="text-center mt-8 px-4">
          <button
            onClick={handlePlacedOrder}
            className="w-full px-4 py-3 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition duration-200"
            style={{ backgroundColor: currentColor }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
