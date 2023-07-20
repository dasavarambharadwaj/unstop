import ClientList from "./ClientList"

function Home() {
    const homeHeaderOptions = [
        {"text":"Learn","icon":"Learn", "color": "#08678f"},
        {"text": "Practice","icon": "Practice", "color": "#562f95"}, 
        {"text": "Mentorships","icon": "Mentorships", "color": "#685200"}, 
        {"text": "Compete","icon": "Compete", "color": "#08678f"},
        {"text": "Jobs","icon": "Jobs", "color": "#4c3b9e"},
        {"text": "Blogs","icon": "Blogs", "color": "#a74c02"}
    ]
    return (
        <>
            <div className="flex min-h-[calc(100vh-170px)] m-auto max-w-7xl justify-between items-center">
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
                    <div className="flex gap-5 flex-wrap justify-end">
                        {homeHeaderOptions.map(({text, icon,color})=> {
                            return (
                                <div key={text} className="relative w-40 duration-300 hover:-translate-y-4 rounded-lg">
                                    <img alt={text} src={`../../public/home/${icon}.jpg`}></img>
                                    <span className="absolute left-5 top-5 font-bold text-lg" style={{color: color}} >{text}</span>
                                </div> 
                            )
                        })}
                    </div>
                </div>
            </div>
            <ClientList></ClientList>
        </>
    )
}
export default Home