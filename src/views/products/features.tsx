import { Icon } from '@iconify/react';

export default function ProductFeature() {
  return (
    <ul className='flex flex-col gap-3'>
      <li className='flex items-center gap-1'><Icon className='text-rose-500' width={24} icon="ph:truck" /> Quick Delivery</li>
      <li className='flex items-center gap-1'><Icon className='text-rose-500' width={24} icon="ph:handshake" /> 100% Money-back guarantee</li>
      <li className='flex items-center gap-1'><Icon className='text-rose-500' width={24} icon="mdi:support" /> Customer support</li>
      <li className='flex items-center gap-1'><Icon className='text-rose-500' width={24} icon="solar:card-linear" /> Secure payment method</li>
    </ul>
  );
}