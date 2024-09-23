import { ModeToggle } from "./theme-mode-toggle";
import { Button } from "./ui/button";

type NavBarProps = {
    updatePage: (page: 'map' | 'table') => void
}

export function NavBar({ updatePage }: NavBarProps) {
    return (
        <nav>
            <div className="flex justify-between items-center p-4 w-full">
                <div className="flex items-center gap-4">
                    <img src="/th-flag.png" alt="logo" className="h-8 w-8" />
                    <h1 className="text-2xl font-bold">Trains View</h1>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" onClick={() => updatePage('table')}>
                            Table
                        </Button>
                        <Button variant="ghost" onClick={() => updatePage('map')}>
                            Map
                        </Button>
                    </div>
                </div>
                <ModeToggle />
            </div>
        </nav>
    )
}
