import Image from "next/image";

const gallery = () => {
    return (
      <div>
        <div className="p-[20px]">
          <div className="flex items-center justify-center">
            <div className="container">
              <div className="mt-8 grid grid-cols-2 gap-2 rounded-xl bg-white p-2 lg:grid-cols-4 w-full h-full">
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape1.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape2.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape5.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape4.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape3.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500}/>
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape6.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500}/>
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape7.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
                <div className="group relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-green-400/20"></div>
                  <Image src="/landscape8.jpeg"
                  className="h-auto w-full" alt="Nasi lemak cover" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
                <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Greater Landscaping
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                Whether commercial or residential, we take great pride in each job that we do.
              </p>
            </div>

            <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  Residential Jobs
                </h3>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  No job is too small.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  Commercial Contracts
                </h3>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Our commercial contracts will have us on site as little or often as your business needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  Commercial Jobs
                </h3>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  No job is too large.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default gallery;