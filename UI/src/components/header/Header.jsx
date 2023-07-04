function Header() {
    return (
        <>
            <header className="border-b border-solid border-gray-400">
                <div className="sticky h-14 top-0 left-0">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div>Icon</div>
                                <div><input type="text" placeholder="Search Opportunities" className="bg-gray-200 my-2 border border-solid p-2 rounded-2xl border-gray-500"></input></div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span>Learn</span>
                                <span>Practice</span>
                                <span>Mentorship</span>
                                <span>Compete</span>
                                <span>Jobs</span>
                                <button>Host</button>
                                <button>Login</button>
                                <span>Menu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header