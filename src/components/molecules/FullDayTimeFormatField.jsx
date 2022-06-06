import React from 'react'
import FullDayTimeFormat from '../atoms/FullDayTimeFormat'
import Label from '../atoms/Label'

const FullDayTimeFormatField = (props) => {
    const {label='', id='' ,minute=''}=props;
  return (
    <div>
        <Label label={label} id={id} />
        <FullDayTimeFormat minute={minute} />
    </div>
  )
}

export default FullDayTimeFormatField
