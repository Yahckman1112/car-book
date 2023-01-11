import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
function FormInput({children,type,placeHolder}) {
    return (
        <div>
                  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={children}
    />
    <Input size='lg' type={type} placeholder={placeHolder} />
  </InputGroup>  
        </div>
    );
}

export default FormInput;       