import Image from "next/image";
import { Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-30 min-h-[700px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Care that makes a <span className="text-emerald-600">difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Specializing in personalized care and services for individuals aged 65 and older. We help seniors
            maintain their independence and well-being in the comfort of their own homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Heart className="h-5 w-5 mr-2" />
              Get Care Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Hero.jpg"
            alt="Senior care professional with elderly client"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl"
            priority
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Trusted Care</p>
                <p className="text-sm text-gray-600">Professional & Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
