import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
    return <header className='w-full border-b'>
        <div className='mx-auto w-full px-4 md:px-8 flex justify-between items-center'>
            <div className='flex items-center'>
                <Link href='/' className='flex items-center'>
                <Image src='/images/logo.svg' alt={'${APP_NAME} logo'}
                height={48} width={48} priority={true}/>
                <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
                </Link>
            </div>
            <Menu/>
        </div>
    </header>;
}
export default Header;