import Button from "../form/button/Button"
import Input from "../form/input/Input"
import Icon from "../icon/Icon"

function Header() {
    const iconsList = [
        {icon:"local_library", text: "Learn", link: "/courses"},
        {icon:"target", text: "Practice", link: "/practice"},
        {icon:"lightbulb", text: "Mentorship", link: "/mentor"},
        {icon:"leaderboard", text: "Compete", link: "/compete"},
        {icon:"work", text: "Jobs", link: "/job-portal"},
    ]
    const iconsListTwo = [
        {icon:"chat"},
        {icon:"notifications"}
    ]
    return (
        <>
            <header className="h-14">
                <div className="h-14 fixed w-full shadow-md left-0 right-0 top-0">
                    <div className="h-full max-w-7xl mx-auto">
                        <div className="h-full flex justify-between items-center">
                            <div className="flex gap-9 items-center">
                                <div>
                                    <img src="public/common/logo.svg" width={82} alt="Unstop logo" loading="lazy"></img>
                                </div>
                                <div>
                                    <Input placeholder="Search Opportunities" prefixIcon="search"></Input>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                {iconsList.map((item) => 
                                    (<a key={item.icon} aria-hidden aria-label={item.text} href={item.link} className="flex justify-center flex-col items-center">
                                        <Icon className="text-primary">{item.icon}</Icon>
                                        <span className="text-sm font-medium text-primary">{item.text}</span>
                                    </a>)
                                )}
                                <Button prefixIcon={"campaign"} size="default" type="primary">Host</Button>
                                <button>Login</button>
                                {iconsListTwo.map((item) => 
                                    (<a key={item.icon} href="" className="flex items-center justify-center">
                                        <Icon size="large" fill className="text-primary">{item.icon}</Icon>
                                    </a>)
                                )}
                                <a href="" className="flex items-center justify-center">
                                    <Icon size="large" className="text-primary" fill>apps</Icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header