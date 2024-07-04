import { GlobeAltIcon } from '@heroicons/react/24/outline';
/* import { Lusitana } from '@/app/ui/fonts'; // Uncommented the import */

export default function MoneyBoardLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">MoneyBoard</p>
    </div>
  );
}
