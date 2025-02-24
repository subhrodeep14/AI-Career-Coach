import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronDownIcon, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"


const Header = () => {
  return (
    <header className="fixed top-0 supports-[backdrop-filter]:bg-background/40 bg-background/80 w-full  border-b backdrop-blur-md z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 h-16">
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={200} height={60}
            className="h-12 py-1 w-auto object-contain"
          />

        </Link>

        <div className="flex items-center space-x-2 md:space-x-6">
          <SignedIn>
            <Link href='/dashboard'>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className=" hidden md:block">
                  Industry Insights
                </span>

              </Button>
            </Link>
         
        
        <DropdownMenu className="relative">
          <DropdownMenuTrigger asChild>
          <Button>
                <StarIcon className="h-4 w-4" />
                <span className=" hidden md:block">
                  Growth Tools
                </span>
                <ChevronDownIcon className="h-4 w-4" />
           </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem className="p-2">
              <Link href="/resume" className="flex items-center gap-2">
              
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2">
              <Link href="/ai-cover-letter" className="flex items-center gap-2">
              
                  <PenBox className="h-4 w-4" />
                  <span>Ai cover letter</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-2">
              <Link href="/interview" className="flex items-center gap-2">
              
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview prep</span>
              </Link>
            </DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
        </SignedIn>

        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{elements:{
                avatarBox:"w-10 h-10",
                userButtonAvatarBox:"shadow-xl",
                userPreviewMainIdentifier:"font-semibold",
              }}}
              afterSignOutUrl="/"
              />
            </SignedIn>
        </div>
      </nav>


    </header>
  )
}

export default Header
