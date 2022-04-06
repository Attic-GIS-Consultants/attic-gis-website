import Head from 'next/head'
import Image from 'next/image'
import ServiceCard from '../components/home/serviceCard'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Attic GIS Malawi</title>
        <meta name="description" content="man" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col ">
        <div className="flex flex-row justify-around mt-24 px-32 flex-wrap">
          <div className='flex flex-col'>
            <p className='text-5xl font-bold '>Locate.</p>
            <p className='text-5xl font-bold mt-10'>Analyze.</p>
            <p className='text-5xl font-bold mt-10'>Implement.</p>
            <p className='text-2xl w-full md:text-2xl font-light  mt-10'>Attic GIS provides a range of GIS services, you locational data needs analyzing and who else than us.</p>
          </div>
          <div className='rounded  md:w-1/4  shadow-xl'>
            
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-24">
          <h2 className="text-2xl font-bold leading-7 text-gray-900   md:text-4xl">Our Story</h2>

          <div className="px-6 py-2 text-center md:px-64">
            <p className="font-normal md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          </div>

        </div>

        <div className="flex flex-col justify-center items-center mt-12 ">
          <h2 className="text-2xl font-bold leading-7 text-gray-900  md:text-4xl">Our Services</h2>

          <div className="flex flex-col  gap-8 mt-4 md:flex-row items-center">
            <ServiceCard title="Software Dev" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
            <ServiceCard title="Data Analysis" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
            <ServiceCard title="Consulting" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
          </div>

        </div>

      </main>


      <footer >

      </footer>
    </div>
  )
}
