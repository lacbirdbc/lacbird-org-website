import LacbirdLogo from "@/components/logo/lacbird-logo"
import { Navbar } from "@/components/navbar/navbar"


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <header className="flex justify-between items-center w-full h-14">
          <div className="flex">
            <div className="flex items-center">
              <LacbirdLogo/>
              <p className="font-economica text-3xl text-gray-950">Lacbird</p>
            </div>
            <Navbar/>
          </div>
          <div>Tesst</div>
        </header>

      </div>
    </div>
  )
}

