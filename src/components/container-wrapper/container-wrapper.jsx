import './container-wrapper.scss';

function ContainerWrapper(props) {
  return (
    <div className={'container_wrapper ' + props.className}>
      {props.children}
    </div>
  );
}

export default ContainerWrapper;
