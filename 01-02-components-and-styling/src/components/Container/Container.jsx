import s from './Container.module.css';

const Container = (props) => {
  const { children } = props;
  console.log('props container :>> ', props);
  const isActive = true;
  const buildClass = () =>
    `${isActive && s.active} ${s.box}`;
  return (
    <div
      className={buildClass()}
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   flexDirection: 'column',
      //   width: '40vw',
      //   margin: '0 auto',
      // }}
    >
      {children}
    </div>
  );
};
export default Container;
