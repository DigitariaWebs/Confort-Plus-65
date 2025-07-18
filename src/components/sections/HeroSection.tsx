import Image from "next/image";
import { Heart, Shield, BadgeCheck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-30 min-h-[700px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Care That Makes <br className="hidden lg:block"/>
            <span className="text-emerald-600">A Real Difference</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Specializing in personalized care and services for individuals aged 65 and older. We help seniors
            maintain their independence and well-being in the comfort of their own homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg h-14 px-8">
              <Heart className="h-6 w-6 mr-3" />
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent text-lg h-14 px-8"
              asChild
            >
              <a href="tel:+15145551234">
                <Phone className="h-6 w-6 mr-3" />
                Call 514-555-1234
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center">
              <BadgeCheck className="h-5 w-5 text-emerald-600 mr-2"/>
              <span className="text-gray-700">Licensed Professionals</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-emerald-600 mr-2"/>
              <span className="text-gray-700">24/7 Availability</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/Hero.jpg"
            alt="Compassionate caregiver assisting a senior woman with walking at home"
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
