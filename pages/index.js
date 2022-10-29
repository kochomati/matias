import Head from 'next/head';

import Favicons from '../components/Favicons';
import SocialMediaIcons from '../components/home/SocialMediaIcons';
import TechStack from '../components/home/TechStack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Matías Kochlowski</title>
        <Favicons />
      </Head>
      <header className=''></header>
      <main className=''>
        <div className='max-w-5xl mx-auto pt-4 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 border overflow-hidden rounded-lg'>
            <div className='px-4 py-5 sm:px-6 flex items-center justify-between'>
              <div className='flex items-center'>
                <img
                  className='h-16 w-16 rounded-full mr-4 border-2 border-gray-300'
                  src='/images/matiasKochlowski.jpg'
                  alt=''
                  width={300}
                  height={300}
                />
                <h3 className='text-lg leading-none font-medium text-gray-900 dark:text-white dark:text-white'>
                  Matías Kochlowski
                </h3>
              </div>
            </div>
          </div>
          <div className='bg-white dark:bg-gray-800 border overflow-hidden rounded-lg mt-5'>
            <div className='px-4 pb-5 sm:p-0'>
              <dl className='divide-y divide-gray-200 dark:divide-black'>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-600'>E-mail</dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    matias@kochlowski.com
                  </dd>
                </div>
                <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-600'>
                    Profession
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
                    Full-Stack Web Developer: Javascript
                  </dd>
                </div>
                <TechStack />

                <SocialMediaIcons />
              </dl>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
