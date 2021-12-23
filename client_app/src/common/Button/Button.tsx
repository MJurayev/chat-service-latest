import React, { PropsWithChildren } from 'react';
import Ripple from '../Ripple/Ripple';
import "./Button.css"
interface IButton {
    variant:"primary"|"danger" | "success"
}
export default function Button(props:PropsWithChildren<IButton>) {
  return (
    <Ripple>
      <button className='btn' {...props}></button>
    </Ripple>
  );
}
