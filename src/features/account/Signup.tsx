export const Signup = (): JSX.Element => {
  return (
    <div className="mt-8">
      <h1>Üye Ol</h1>
      <div className="border border-gray-300 mt-2">
        <form className="flex flex-col p-4">
          <label>
            Kullanıcı Adı
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-sm h-8 w-96 mb-4"
          />
          <label>
            E-posta adresi
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-sm h-8 w-96 mb-4"
          />
          <label>
            Parola<span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            className="border border-gray-300 rounded-sm h-8 w-96 mb-8"
          />
          <button className="rounded-full bg-orange-300 hover:bg-black hover:text-gray-200 w-36 h-10">
            Üye Ol
          </button>
        </form>
      </div>
    </div>
  );
};
