import React from 'react'
import './Verify.css'
import { useSearchParams } from 'react-router-dom'

const verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    console.log(success,orderId);

  return (
    <div>
      
    </div>
  )
}

export default verify
