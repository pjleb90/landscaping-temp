const Special = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Monthly subscription</h2>
                    <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">$45.00</p>
                    <dl>
                        <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                        <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                            By signing up for our monthly subscription service (May - Oct) for just $45 dollars a month, we'll keep your lawn in prestine condition.
                            Your lawn will be the envy of the neighborhood while you spend time on the things ouy care about.
                        </dd>
                    </dl>
                    <dl className="flex items-center space-x-6">
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Term</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">May - Oct</dd>
                        </div>
                        <div>
                            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Payment options</dt>
                            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">We accept monthly or one time payments.</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
}

export default Special;