import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "lucide-react";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
      <div className="max-w-2xl">
        <Badge variant="secondary" className="mb-4 px-2 py-1 ">
          <Activity className="mr-1" />
          Give It A Go!!
        </Badge>
        {/* Heading */}
        <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight drop-shadow-sm">
          Welcome to{" "}
          <span className="text-muted-foreground">Task Tracker 🚀</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Stay organized and boost your productivity with our simple and
          effective task manager.
        </p>

        {/* Call to Action */}
        <Link to="/task-tracker">
          <Button
            size="md"
            className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-4 py-2 text-lg rounded-xl shadow-lg transition-all"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
