import { Home, Users, Heart, Shield, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Our Commitment to Care
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-emerald-600">Confort Plus 65</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our dedicated team is committed to offering comfort, safety, and an enhanced quality of life for seniors,
          whether at home, in retirement residences, or long-term care facilities.
        </p>
      </div>

      {/* Two-Column Layout for Story + Stats */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <Image
            src="/About.jpg"
            alt="Our care team assisting seniors with activities"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-6 text-lg">
            At Confort Plus 65, we understand that every senior deserves to live with dignity and independence. 
            Our compassionate approach combines professional expertise with genuine care to support seniors 
            in maintaining their quality of life.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-gray-600">Licensed Staff</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Value Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Home className="h-8 w-8 text-emerald-600" />,
            title: "Home Care",
            content: "Professional support in the comfort and familiarity of your own home environment.",
            badge: "Most Popular"
          },
          {
            icon: <Users className="h-8 w-8 text-emerald-600" />,
            title: "Personalized Care",
            content: "Tailored services that respect individual needs, values, and dignity of each senior.",
            badge: "Custom Approach"
          },
          {
            icon: <Heart className="h-8 w-8 text-emerald-600" />,
            title: "Compassionate Team",
            content: "Qualified professionals who act with kindness, attentiveness, and respect.",
            badge: "Certified"
          }
        ].map((item, index) => (
          <Card 
            key={index}
            className="border-2 border-emerald-50 hover:shadow-lg transition-all"
          >
            <CardHeader className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <CardTitle className="text-emerald-800 text-2xl">{item.title}</CardTitle>
              {item.badge && (
                <span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full mt-2">
                  {item.badge}
                </span>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Trust Section */}
      <div className="mt-20 bg-emerald-50 rounded-xl p-8 text-center">
        <BadgeCheck className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
          We believe that quality care goes beyond just meeting basic needs. Our team is dedicated to 
          providing comprehensive support that enhances the overall well-being and happiness of every 
          senior we serve.
        </p>
        <p className="font-semibold">Trusted by families across the community</p>
      </div>
    </div>
  </section>
);

export default AboutSection;