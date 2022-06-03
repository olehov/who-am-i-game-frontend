import clsx from 'clsx';
import './container-wrapper.scss';

function ContainerWrapper(props) {
  return (
    <div className={clsx('container_wrapper', props.className)}>
      {props.children}
    </div>
  );
}

export default ContainerWrapper;
