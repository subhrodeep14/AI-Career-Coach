import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { LayoutDashboard } from "lucide-react"


const Header = () => {
  return (
    <header className=" top-0 supports-[backdrop-filter]:bg-background/40 bg-background/80 w-full fixed border-b backdrop-blur-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 h-16">
          <Link href='/'>
            <Image src="/logo.png" alt="logo" width={200} height={60} 
            className="h-12 py-1 w-auto object-contain"
            />
          
          </Link>

          <div>
            <SignedIn>
              <Link href='/dashboard'>
                <Button>
                  <LayoutDashboard className="h-4 w-4"/>
                  Industry Insights
                </Button>
              </Link>
            </SignedIn>
          </div>

       
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

        


      </nav>


    </header>
  )
}

export default Header
