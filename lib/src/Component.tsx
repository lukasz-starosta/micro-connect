import React, {useEffect, useRef} from 'react';
import ComponentWrapper from "./ComponentWrapper";

export interface IComponentProps {
  component: ComponentWrapper;
}


function Component({component}: IComponentProps) {
  // TODO: fix using hooks (probably 2 versions of react, need to alias it)
  const elementRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (elementRef.current) {
      component.mount(elementRef.current);
    }
  }, []);

  return <div ref={elementRef}/>;
}

export default Component;