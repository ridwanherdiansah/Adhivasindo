export default function Mobile() {
    return(
        <div>
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mobile</title>
            </header>
            <div className="bg-yellow-200 flex justify-center items-center">
                <div className="w-full h-full bg-white flex-col lg:w-[500px] md:w-[500px] p-6">
                    {/* header */}
                    <div className="flex justify-between item-center p-2 mb-4">
                        <img src="" alt="" />
                        <p>Sylhet, Banglades</p>
                        <p>Search</p>
                    </div>
                    {/* card header main */}
                    <div className="bg-yellow-300 rounded-lg border p-4 mb-4">
                        <p className="text-2xl font-bold text-slate-950">Free Home</p>
                        <p className="text-2xl font-bold text-red-500">
                            Delivery <span className="text-slate-950">Service</span>
                        </p>
                    </div>
                    {/* card slider */}
                    <div class="flex space-x-4 mb-4">
                        <div className="p-7 rounded-lg bg-yellow-100 flex flex-col">
                            <div>Icon</div>
                            <p>Burger</p>
                        </div>
                        <div className="p-7 rounded-lg bg-yellow-100 flex flex-col">
                            <div>Icon</div>
                            <p>Burger</p>
                        </div>
                        <div className="p-7 rounded-lg bg-yellow-100 flex flex-col">
                            <div>Icon</div>
                            <p>Burger</p>
                        </div>
                        <div className="p-7 rounded-lg bg-yellow-100 flex flex-col">
                            <div>Icon</div>
                            <p>Burger</p>
                        </div>
                    </div>
                    {/* Card Burger */}
                    <div className="flex flex-wrap gap-4">
                    {/* Card */}
                    <div className="p-6 rounded-lg bg-yellow-100 flex flex-col items-center drop-shadow-lg">
                        {/* Header */}
                        <div className="flex justify-between items-center w-full mb-4">
                        <p className="text-gray-700">Bintang</p>
                        <p className="text-red-500">Love</p>
                        </div>
                        {/* Image Placeholder */}
                        <div className="w-32 h-32 bg-gray-200 border flex items-center justify-center rounded-lg mb-4">
                        <p className="text-gray-500">Image</p>
                        </div>
                        {/* Burger Name */}
                        <p className="text-black font-bold text-2xl text-center">Name Burger</p>
                    </div>

                    {/* Card */}
                    <div className="p-6 rounded-lg bg-yellow-100 flex flex-col items-center drop-shadow-lg">
                        {/* Header */}
                        <div className="flex justify-between items-center w-full mb-4">
                        <p className="text-gray-700">Bintang</p>
                        <p className="text-red-500">Love</p>
                        </div>
                        {/* Image Placeholder */}
                        <div className="w-32 h-32 bg-gray-200 border flex items-center justify-center rounded-lg mb-4">
                        <p className="text-gray-500">Image</p>
                        </div>
                        {/* Burger Name */}
                        <p className="text-black font-bold text-2xl text-center">Name Burger</p>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}