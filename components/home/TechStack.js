export default function TechStack() {
  return (
    <div className='py-2 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-600'>Preferred Stack</dt>
      <dd className='mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2 grid grid-cols-4'>
        {techStack.map((tech) => (
          <div key={tech.name} className='flex flex-col overflow-hidden'>
            <div className='flex-1 py-1 mr-3'>
              <img
                className='h-10'
                src={tech.logo}
                alt={tech.name}
                width={tech.width}
                height={tech.height}
              />
            </div>
          </div>
        ))}
      </dd>
    </div>
  );
}

const techStack = [
  {
    name: 'Javascript',
    logo: '/images/tech-stack/javascript.svg',
    height: 48,
    width: 48,
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'NodeJS',
    logo: '/images/tech-stack/nodejs.svg',
    height: 48,
    width: 75,
    docs: 'https://nodejs.org/dist/latest-v14.x/docs/api/',
  },
  {
    name: 'expressJS',
    logo: '/images/tech-stack/expressjs.svg',
    height: 48,
    width: 100,
    docs: 'https://expressjs.com/en/4x/api.html',
  },
  {
    name: 'MongoDB',
    logo: '/images/tech-stack/mongodb.svg',
    height: 48,
    width: 150,
    docs: 'https://docs.mongodb.com/drivers/node/current/',
  },
  {
    name: 'React',
    logo: '/images/tech-stack/react.svg',
    height: 48,
    width: 55,
    docs: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    name: 'NextJS',
    logo: '/images/tech-stack/nextjs.svg',
    height: 48,
    width: 55,
    docs: 'https://nextjs.org/docs',
  },
];
