import { Categories } from '../categories/Categories';
import { Cart } from '../cart/Cart';

export const Header = (): JSX.Element => {
  return (
    <div className="text-xs">
      <div className="bg-orange-300 flex justify-center">
        <div className="flex justify-between items-center bg-transparent h-24 w-full max-w-7xl px-28">
          <a href="/" className="text-3xl">
            Store
          </a>
          <div>
            <button className="mr-2">Giriş Yap</button>
            <button>Kayıt Ol</button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center">
        <div className="flex justify-between items-center bg-transparent h-8 w-full max-w-7xl px-28">
          <Categories />
          <Cart />
        </div>
      </div>
    </div>
  );
};
