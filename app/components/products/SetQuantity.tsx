'use client'

import { CartProductType } from "../../product/[productId]/ProductDetails";

interface SetQtyProps{
    cartCounter?: boolean;
    cartProduct:CartProductType;
    handleQtyIncrease:()=>void;
    handleQtyDecrease:()=>void;
}
const btnStyle='border-2 border-gray-300 px-2 rounded'
const SetQuantity:React.FC <SetQtyProps> = ({
    cartProduct,cartCounter,handleQtyDecrease,handleQtyIncrease
}) => {
    return ( <div className="flex gap-8 items-center">
        {
            cartCounter ? null : <div className="font-semibold">QUANTITY:</div>
        }
        <div className="flex gap-4 items-center text-base">
            <button className={btnStyle}  onClick={handleQtyDecrease}>-</button>
            <div>{cartProduct.quantity}</div>
            <button className={btnStyle}  onClick={handleQtyIncrease}>+</button>
        </div>
    </div> );
}
 
export default SetQuantity;