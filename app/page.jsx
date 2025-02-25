import HeroSection from "@/components/HeroSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <div className="grid-background">
      </div>
      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl mb-12 tracking-tighter font-bold text-center">
            Powerful Features for your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card key={index}
                  className="border-2 hover:border-primary transition-colors duration-300 ease-in-out"
                >
                  <CardContent className="text-center flex  items-center flex-col pt-6">
                    <div className="flex items-center justify-center flex-col" >
                      {feature.icon}
                      <h3 className="text-xl mb-2 font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>

                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center speace-y-4">
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-muted-foreground">Industries Cover</p>
            </div>
            <div className="flex flex-col items-center justify-center speace-y-4">
              <h3 className="text-4xl font-bold">1000+</h3>
              <p className="text-muted-foreground">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center speace-y-4">
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center speace-y-4">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Support</p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl mb-4 font-bold">
              How it Works
            </h2>
            <p className="text-muted-foreground">Four simple steps to accelerate your career growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((items, index) => {
              return (
                <div className=" flex flex-col items-center text-center space-y-4" key={index}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {items.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{items.title}</h3>
                  <p className="text-muted-foreground">{items.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl mb-12 tracking-tighter font-bold text-center">
            What our users say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
            {testimonial.map((test, index) => {
              return (
                <Card key={index}
                  className="bg-background"
                >
                  <CardContent className=" pt-6">
                    <div className="flex space-y-4 flex-col" >
                      <div className=" flex items-center space-x-4">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image src={test.image} alt={test.author} width={40} height={40} className="rounded-full object-cover border-2 border-primary/50" />
                        </div>
                        <div>
                          <p className="font-bold">{test.author}</p>
                          <p className="text-sm text-muted-foreground">{test.role}</p>
                          <p className="text-sm text-primary">{test.company}</p>
                        </div>
                      </div>

                      <blockquote>
                        <p className="text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left -2">
                            &quot;</span>
                          {test.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>

                        </p>

                      </blockquote>
                    </div>
                  </CardContent>

                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl mb-4 font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">Find answers to common questions about our platform</p>
          </div>
          <div className=" max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((items, index) => {
              return (
                <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{items.question}</AccordionTrigger>
                <AccordionContent>
                  {items.answer}
                </AccordionContent>
              </AccordionItem>
              )
            })}
           
           </Accordion>
          </div>
        </div>
      </section>

      
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className=" flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto ">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to accelerate your career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">Join thousands of professionals who are advancing their careers with AI-powerd guidance.</p>
            <Link href={"/dashboard"} passHref>
              <Button
              size="lg"
              variant="secondary"
              className="h-11 mt-5 animate-bounce">
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
            
            </Link>
          </div>
         
        </div>
      </section>


    </div>
  );
}
