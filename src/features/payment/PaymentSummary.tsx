export const PaymentSummary = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-2xl mb-8">Siparişiniz</h1>
      <div className="border border-gray-200 rounded-sm w-96 p-8">
        <table className="text-bold w-full font-bold mt-4">
          <thead>
            <tr className="border-y-2">
              <td className="py-2">Ürün</td>
              <td>Ara Toplam</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2">
              <td className="py-2">
                <span className="font-light">Ürün 1</span> x 1
              </td>
              <td>100₺</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-2">
                <span className="font-light">Ürün 2</span> x 1
              </td>
              <td>80₺</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-2">Ara Toplam</td>
              <td>180₺</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-2">Gönderim Ücreti</td>
              <td>Ücretsiz</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-2">Toplam</td>
              <td>180₺</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col w-full">
          <div>
            <input
              type={'radio'}
              id={'payment-card'}
              name={'payment-method'}
              className="m-2"
            />
            <label htmlFor="payment-card">Kredi Kartı ile</label>
          </div>
          <div>
            <input
              type={'radio'}
              id={'payment-transfer'}
              name={'payment-method'}
              className="m-2"
            />
            <label htmlFor="payment-card">Havale ile</label>
          </div>
        </div>
        <input type={'checkbox'} id={'terms-and-conditions'} className="m-2" />
        <label htmlFor="terms-and-conditions">
          Şartlar ve koşulları okudum ve kabul ediyorum.
        </label>
      </div>
    </div>
  );
};
