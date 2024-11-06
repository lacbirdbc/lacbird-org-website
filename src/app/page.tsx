import LacbirdLogo from "@/components/logo/lacbird-logo"
import { Navbar } from "@/components/navbar/navbar"
import { Selector } from "@/components/selector/selector"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center w-full h-16">
          <div className="flex">
            <div className="flex items-center">
              <LacbirdLogo/>
              <p className="font-economica text-3xl text-gray-600 select-none font-semibold">Lacbird</p>
            </div>
            <Navbar/>
          </div>
          <div className="flex items-center space-x-2">
            <Selector/>
            <Switch id="airplane-mode" className="h-6" />
            <Button className="h-10 w-32 rounded-xl bg-orange-400 hover:bg-orange-300" >Exchange</Button>
          </div>
        </header>

      </div>
    </div>
  )
}

