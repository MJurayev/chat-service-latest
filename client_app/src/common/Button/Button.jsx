import Ripple from '../Ripple/Ripple';
import "./Button.css"

export default function Button(props) {
  return (
    <Ripple>
      <button className='btn' {...props}></button>
    </Ripple>
  );
}
