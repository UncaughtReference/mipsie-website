import { Button } from "@/components/ui/button"

export default function App() {
    return (
       <main className="h-full w-full animated-gradient light">
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="flex w-full flex-col items-center min-h-screen justify-center">
                    <img src="/logo.png" className="ml-7" />
                    <p className="text-7xl"><strong>mipsie</strong></p>
                    <p className="text-xl pl-2 pr-2 text-center">open source, highly customizable SM64 MIPS IDE</p>
                    <div className="mt-4 flex w-full flex-col items-center gap-2">
                        <a href="/mipsie-1.0.0-setup.exe" download>
                            <Button className="h-[60px] w-max text-2xl">
                            <img src="/windows.svg" className="w-[40px]" />
                            Download for Windows
                            </Button>
                        </a>
                        <a href="https://github.com/UncaughtReference/mipsie/releases">
                            <Button className="h-[60px] w-max text-2xl">
                                <img src="/github.svg" className="w-[40px]" />
                                View on Github
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
