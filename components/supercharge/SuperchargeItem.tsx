import Image from 'next/image'
import React from 'react'
import { IListItem } from 'types'

const SuperchargeItem = ({ title, desc, imageUrl }: IListItem) => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Image
        width={0}
        height={0}
        sizes="100vh"
        src={imageUrl}
        alt=""
        className="mb-6 w-auto"
      />
      <h5>{title}</h5>
      <p className="max-w-md text-grayishBlue">{desc}</p>
    </div>
  )
}

export default SuperchargeItem
