export const PaymentForm = (): JSX.Element => {
  return (
    <div className="">
      <h1 className="text-2xl">Ödeme</h1>
      <div className="w-full mt-4">
        <form className="flex flex-col">
          <label>
            Ad<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            Soyad<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
            required
          />
          <label>Firma Adı(isteğe bağlı)</label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            Adres<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 text-sm h-8 mb-4 px-2"
            placeholder="Sokak adı, Apartman Adı, Bina ve Daire No"
          />
          <label>
            Posta Kodu<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            İlçe<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            Şehir<span className="text-red-600">*</span>
          </label>
          <input
            type={'text'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            Telefon<span className="text-red-600">*</span>
          </label>
          <input
            type={'tel'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
          <label>
            E-posta Adresi<span className="text-red-600">*</span>
          </label>
          <input
            type={'mail'}
            className="border border-gray-300 rounded-sm w-96 h-8 mb-4 px-2"
          />
        </form>
      </div>
    </div>
  );
};
