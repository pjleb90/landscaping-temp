import Image from "next/image";


const about = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We love what we do</h2>
                            <p className="mb-4">It started off as just a summer job mowing lawns and that&apos;s all it took. Scott was hooked. After highschool, Scott
                            got his degree in horticulture and shortly after graduating, founded Greater Landscaping. His passion for landscaping and desire to ensure
                            that the customer beyond satisified when he the job has gotten Greater Landscaping to where we are today.</p>
                            <p>We are passionate, driven and focused. We get the job done. And we enjoy doing it.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg" width={200} height={200}
                        src="/landscape4.jpeg"
                        alt="mowing a lawn"
                        />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" width={200} height={200}
                            src="/about.jpeg"
                            alt="office content 2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default about;