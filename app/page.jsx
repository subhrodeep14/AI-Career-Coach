import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";



export default function Home() {
  return (
    <div>
      <div className="grid-background">
      </div>
      <HeroSection/>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl mb-12 tracking-tighter font-bold text-center">
            Powerful Features for your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) =>{
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
            <div>
              
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}
