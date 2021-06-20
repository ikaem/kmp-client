export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header className='bg-light px-3 py-2 text-uppercase'>
        <div className='container p-0 p-sm-2'>
          <h1 className='m-0'>Customer list</h1>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};
