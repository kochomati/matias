import { icons } from '../icons';

export default function SocialMediaIcons() {
  return (
    <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-600'>Social</dt>
      <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2'>
        <div className='space-x-6 md:order-2 flex items-center'>
          {social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-700 dark:text-white dark:hover:text-gray-300'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
      </dd>
    </div>
  );
}

const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/matiaskochlowski',
    icon: icons.github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matias-kochlowski-62034679',
    icon: icons.linkedIn,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/matiaskochlowski',
    icon: icons.instagram,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/matikochlowski',
    icon: icons.twitter,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/matiaskochlowski',
    icon: icons.facebook,
  },
];
