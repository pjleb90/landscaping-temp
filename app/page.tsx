import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <div>
        <div className="container flex flex-col mx-auto bg-green-100 mt-8 mb-8 rounded-md">
            <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
                    <div className="flex items-center justify-center mb-4 lg:justify-normal">
                        <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">Sit back and let us do the heavy lifting</h4>
                    </div>
                    <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">Greater Landscaping</h1>
                    <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                        Say goodbye to spending your weekends taking care of your lawn. We work 7 days a week and love what we do. Seriously.
                    </p>
                    <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <Link href="/contact">
                        <Button className="flex items-center py-4 text-sm font-bold text-white transition duration-300 rounded-xl">
                            Get your free quote now.
                        </Button>
                        </Link>
                        <div className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
                            </svg>
                            or call us at 1-519-555-5555
                        </div>
                    </div>
                </div>
                <div className="items-center justify-end hidden col-span-1 md:flex">
                    <Image className="w-4/5 rounded-md" src="/landing.jpeg"
                    alt="header image" width={500} height={500}/>
                </div>
            </div>
        </div>
    </div>
  )
}
