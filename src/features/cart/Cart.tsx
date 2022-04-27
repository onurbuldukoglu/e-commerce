export const Cart = (): JSX.Element => {
  return (
    <div className="flex flex-col items-end">
      <h1>Sepet/180₺</h1>
      <div className="bg-white w-52 absolute top-32 border-gray-200 border-solid border shadow-md rounded-md flex flex-col justify-center items-center divide-y">
        <div>
          <div className="w-full p-4 flex justify-between items-center">
            <img alt="thumbnail"></img>
            <div>
              <p>Ürün 1</p>
              <p>
                1 x <span className="font-bold">100₺</span>
              </p>
            </div>
            <button className="border border-gray-200 rounded-full w-6 h-6 hover:bg-gray-200">
              X
            </button>
          </div>
          <div className="w-full p-4 flex justify-between items-center">
            <img alt="thumbnail"></img>
            <div>
              <p>Ürün 2</p>
              <p>
                1 x <span className="font-bold">80₺</span>
              </p>
            </div>
            <button className="border border-gray-200 rounded-full w-6 h-6 hover:bg-gray-200">
              X
            </button>
          </div>
        </div>

        <div className="w-full text-center">
          <p className="py-4 font-bold">Ara toplam: 180₺</p>
        </div>
        <div className="flex flex-col items-center justify-between w-full py-4">
          <button className="border border-gray-200 w-32 rounded-md mb-2 h-8  px-2 hover:bg-gray-200">
            Sepeti Görüntüle
          </button>
          <button className="border border-gray-200 w-32 rounded-md h-8 px-2 hover:bg-gray-200">
            Ödeme
          </button>
        </div>
      </div>
    </div>
  );
};
