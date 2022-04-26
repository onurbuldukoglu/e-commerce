import { PaymentForm } from './PaymentForm';
import { PaymentSummary } from './PaymentSummary';

export const Payment = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-28 flex justify-between mt-8">
        <PaymentForm />
        <PaymentSummary />
      </div>
    </div>
  );
};
