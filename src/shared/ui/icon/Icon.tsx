interface IconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ name, width=20, height=20, className }: IconProps) => {
  const symbolId = `#icon-assets-${name}`;

  return (
    <svg className={className} name={name} width={width} height={height}>
      <use href={symbolId} />
    </svg>
  );
}

export default Icon;
