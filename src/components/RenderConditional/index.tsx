type RenderConditionalProps = {
  children: any;
  condition: boolean;
};

const RenderConditional = ({ children, condition }: RenderConditionalProps): JSX.Element | null => {
  return <>{condition ? children : null}</>;
};

export default RenderConditional;
