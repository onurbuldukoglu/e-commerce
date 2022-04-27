import { Login } from './Login';
import { Signup } from './Signup';

export const Account = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-28 flex justify-around mt-8">
        <Login />
        <Signup />
      </div>
    </div>
  );
};
