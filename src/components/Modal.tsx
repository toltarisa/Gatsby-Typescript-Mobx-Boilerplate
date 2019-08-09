import * as React from 'react';
import { observer, inject } from 'mobx-react';


export interface ModalProps {
  
}
 
export interface ModalState {
  
}
@observer
@inject('store')
class Modal extends React.Component<ModalProps, ModalState> {
  
  render() { 
    console.log(this.props);
    return ( 
      <div>
        Hello
      </div>
     );
  }
}
 
export default Modal;