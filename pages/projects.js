import Head from "next/head"


export default function projects() {
    return (
        <div>
            <Head>
                <title>Attic GIS Malawi</title>
                <meta name="description" content="man" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col ">
                <div className="flex justify-center text-center">
                    <h1 className="font-bold text-4xl">Projects</h1>
                </div>
            </main>
        </div>
    )
}
