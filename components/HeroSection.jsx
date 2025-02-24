"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"


const HeroSection = () => {
    const imageRef= useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;

        const handelscroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThresold = 100;

        if (scrollPosition > scrollThresold) {
            imageElement.classList.add("scrolled");
        }else{
            imageElement.classList.remove("scrolled");
        }
        };

    window.addEventListener("scroll", handelscroll);
    return () => {
        window.removeEventListener("scroll", handelscroll);
    }
    }, []);
  return (
    <section className="width-full pt-36 md:pt-48 pb-10">
    <div className="text-center space-y-6">
        <div className=" space-y-6 mx-auto">
            <h1 className="gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"> Your AI Career Coach
            <br />
            Professional Success
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Advance your career with AI-powered tools that help you create a resume, cover letter, and prepare for interviews.
            </p>
        </div>
        <div className="flex justify-center space-x-4">
            <Link href={'/dashboard'}>
            <Button className="px-8" size="lg">
                Get Started
            </Button>
            </Link>
            <Link href={'/'}>
            <Button className="px-8"  size="lg" variant="outline">
                Get Started
            </Button>
            </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef} className="hero-image">
                <Image
                src={"/banner.jpeg"}
                width={1280}
                height={720}
                alt="banner"
                priority
                className="rounded-lg shadow-2xl border mx-auto"
                />
            </div>
        </div>
      
    </div>
    </section>
  )
}

export default HeroSection
