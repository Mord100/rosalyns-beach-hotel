import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg';

const features = [
  {
    title: 'Private Paradise',
    description:
      'Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.',
  },
  {
    title: 'Luxury Comfort',
    description:
      'Indulge in luxury and comfort with our meticulously designed rooms, offering modern amenities and stunning views to elevate your stay.',
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-slate-100 py-24 lg:px-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto border-l-4 px-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-12 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Luxury Redefined</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="relative">
                    <dt className="font-medium text-gray-900">{feature.title}</dt>
                    <dd className="inline mt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Luxury room"
            src={Image5}
            className="w-full h-auto rounded-xl shadow-xl object-cover lg:ml-12"
          />
        </div>
        <div className="mx-auto py-10 border-l-4 px-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-12 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Unparalleled Experience</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="relative">
                    <dt className="font-medium text-gray-900">{feature.title}</dt>
                    <dd className="inline mt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Luxury room"
            src={Image5}
            className="w-full h-auto rounded-xl shadow-xl object-cover lg:ml-12"
          />
        </div>
      </div>
    </div>
  );
}
