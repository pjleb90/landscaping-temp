import { MdPool, MdConstruction } from "react-icons/md"
import { LuLampWallDown } from "react-icons/lu"
import { FaArrowUpFromWaterPump } from "react-icons/fa6"
import { FaDoorOpen } from "react-icons/fa";
import { TbGardenCartOff } from "react-icons/tb";

const services = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We get the job done.</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Greater Landscaping we focus on getting the job done to your standards.
                            We aren&apos;t satisfied until you are.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FaDoorOpen className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Entrances & Driveways</h3>
                            <p className="text-gray-500 dark:text-gray-400">With the right design and build, an entranceway makes a welcoming first impression, adds to the curb
                                appeal of a home, and is easily maintained for decades.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <TbGardenCartOff className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="black" viewBox="0 0 20 20" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Gardens</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our designers consider light and water availability, plant shape and size, colour cohesion, and the
                                desired mature garden style when creating a custom garden design.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <LuLampWallDown className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20"/>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Lighting</h3>
                            <p className="text-gray-500 dark:text-gray-400">Adding lighting to your landscape extends the utility of outdoor areas into the nights of summer and bring
                                safety and visibility during the winter months.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <FaArrowUpFromWaterPump className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor"/>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Water Features</h3>
                            <p className="text-gray-500 dark:text-gray-400">Whether your water feature is part of a new landscape plan or is being incorporated into an existing
                                landscape, our designers take detailed measurements and grade information to ensure your feature&apos;s functionality.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <MdConstruction className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Decks & Patios</h3>
                            <p className="text-gray-500 dark:text-gray-400">Getting the most out of your space starts by extending the indoors, outside. Our decks are designed to
                                flawlessly transition you from indoor entertainment to outdoor enjoyment.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <MdPool className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Pools</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our pools are custom designed to fit your needs incorporating elements such as tanning ledges,
                                benches and builtin water features.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default services;