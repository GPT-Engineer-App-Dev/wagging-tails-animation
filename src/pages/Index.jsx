import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Paw, Heart, Dog } from 'lucide-react';

const DogFact = ({ fact }) => (
  <Card className="w-full max-w-md mb-8 transform transition-all duration-500 hover:scale-105">
    <CardHeader>Did you know?</CardHeader>
    <CardContent>{fact}</CardContent>
  </Card>
);

const AnimatedIcon = ({ Icon }) => (
  <div className="animate-bounce">
    <Icon size={48} />
  </div>
);

const LandingPage = () => {
  const [currentFact, setCurrentFact] = useState('');
  const dogFacts = [
    "Dogs have a sense of time and miss you when you're gone.",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Dogs can understand up to 250 words and gestures.",
    "The Basenji is the only dog breed that can't bark.",
    "Greyhounds can run up to 45 miles per hour."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFact(dogFacts[Math.floor(Math.random() * dogFacts.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">
        Welcome to the Wonderful World of Dogs!
      </h1>

      <div className="flex justify-center space-x-8 mb-12">
        <AnimatedIcon Icon={Paw} />
        <AnimatedIcon Icon={Heart} />
        <AnimatedIcon Icon={Dog} />
      </div>

      <img 
        src="/placeholder.svg" 
        alt="Happy dog" 
        className="mx-auto object-cover w-64 h-64 rounded-full mb-8 transform transition-all duration-500 hover:scale-110"
      />

      <DogFact fact={currentFact} />

      <Button 
        className="mt-8 animate-bounce"
        onClick={() => alert("Woof! Thanks for your interest in dogs!")}
      >
        Learn More About Dogs
      </Button>
    </div>
  );
};

export default LandingPage;