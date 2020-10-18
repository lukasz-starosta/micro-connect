import React, {useEffect} from 'react';

export interface IComponentProps {
  // TODO: type should be URL I think
  src: string;
}


function Component({src}: IComponentProps): JSX.Element {

  useEffect(() => {
    if (document.body.querySelectorAll(`script[src="${src}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  }, [])

  return <div>wuja</div>;
}

export default Component;