import React, {useLayoutEffect, useRef} from 'react';
import ComponentWrapper from "./ComponentWrapper";

export interface IComponentProps {
  component: ComponentWrapper;
}


function Component({component}: IComponentProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);


  useLayoutEffect(() => {
    if (elementRef.current) {
      component.mount(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        component.unmount(elementRef.current);
      }
    }
  }, []);

  return <div ref={elementRef}/>;
}

export default Component;