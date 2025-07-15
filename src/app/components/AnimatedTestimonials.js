"use client";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "TechFlow Solutions transformed our e-commerce platform completely. The new system increased our conversion rates by 40% and significantly improved user experience.",
      name: "Sarah Johnson",
      designation: "CEO at RetailFlow",
      src: "https://images.unsplash.com/photo-1494790108755-2616c96ffb5e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The mobile app they developed for us has been a game-changer. Over 100,000 downloads in the first month and excellent user feedback across all platforms.",
      name: "Michael Chen",
      designation: "CTO at FinanceHub",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Their cloud infrastructure solution scaled our business from 1,000 to 50,000 concurrent users seamlessly. Outstanding technical expertise and support.",
      name: "Emily Rodriguez",
      designation: "VP of Operations at CloudTech",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The AI analytics dashboard they built gives us real-time insights that have improved our decision-making process by 60%. Highly recommend their services.",
      name: "David Kim",
      designation: "Data Director at InnovateCorp",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Professional, reliable, and innovative. They delivered our healthcare management system on time and within budget. The telemedicine features are exceptional.",
      name: "Dr. Lisa Thompson",
      designation: "Medical Director at HealthPlus",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}