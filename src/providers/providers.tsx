import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import { store } from '../redux';

export const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
        {children}
      </ToastProvider>
    </Provider>
  );
};
