interface HeaderAreaProps {
  children: any;
}
const HeaderArea = ({ children }: HeaderAreaProps) => {
  return <section className='header'>{children}</section>;
};

export default HeaderArea;
