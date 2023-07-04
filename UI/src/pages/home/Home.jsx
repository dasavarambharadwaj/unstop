function Home() {
    return (
        <>
            <div className="flex min-h-[calc(100vh-160px)] m-auto max-w-7xl justify-between items-center">
                <div id="home-header-text" className="flex flex-col w-1/2 shrink-0 gap-8">
                    <div className="flex flex-col w-full">
                        <span className="text-4xl text-primary">Connecting</span>
                        <span className="text-6xl text-primary font-bold">Talent, Colleges, Recruiters</span>
                    </div>
                    <div>
                        <span className="text-primary text-xl">Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company.</span>
                    </div>
                </div>
                <div id="home-header-links" className="">
                    <div className="flex gap-2 flex-wrap justify-end">
                        {["Learn","Practice", "Mentorship", "Compete","Jobs","Blogs"].map((item)=> {
                            return (
                            <div className="w-40 h-56 border border-solid border-gray-400 rounded-lg flex items-center justify-center">{item}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home