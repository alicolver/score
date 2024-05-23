export default async function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-10">
            <div className="z-10 w-full items-center justify-between text-sm lg:flex">
                PREDICTABALL.LIVE
            </div>
            <div className="w-full text-center">
                <div className="text-6xl mt-40">
                    Football Just Got <p
                    className="bg-gradient-to-r from-blue-600 to-green-300 inline-block text-transparent bg-clip-text">Funner</p>
                </div>
                <div>
                    A Euro 2024 Score Predictor.
                </div>
            </div>
        </main>
    );
}
