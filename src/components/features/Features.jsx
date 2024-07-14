
import Image5 from '../../assets/WhatsApp Image 2024-06-30 at 18.37.54 (1).jpeg'

const features = [
  {
    description:
      'Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.',
  },
  {
    description:
      'Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.',
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-slate-100 py-24 lg:px-20 sm:py-32">
      <div className="mx-auto border-l-4 max-w-7xl px-6  lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">Luxury Redefined</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={Image5}
            width={2432}
            height={1442}
            className="w-full max-w-none rounded-xl shadow-xl sm:w-full lg:my-auto md:-ml-4 lg:-ml-20"
          />
        </div>
      </div>
    </div>
  )
}