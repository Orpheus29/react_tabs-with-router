import { Outlet } from 'react-router-dom';

export const Container: React.FC = () => {
  return (
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
