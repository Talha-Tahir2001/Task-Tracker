import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-start p-6">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-muted-foreground">
            About This App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-700">
          <p>
            Welcome to the{" "}
            <span className="font-semibold">Habit & Task Tracker</span> app! 🎯
          </p>
          <p>
            This app is built with{" "}
            <span className="font-semibold">React 19</span>,{" "}
            <span className="font-semibold">React Router Dom</span>,{" "}
            <span className="font-semibold">JavaScript</span>, and{" "}
            <span className="font-semibold">TailwindCSS</span>, using{" "}
            <span className="font-semibold">shadcn/ui</span> for modern UI
            components.
          </p>
          <p>
            You can track your daily tasks, monitor your habits, and stay
            productive with a clean and minimal interface.
          </p>
          <p className="italic text-sm text-gray-500">
            🚀 Built as a practice project to learn modern frontend development!
          </p>

          {/* Centered button inside the card */}
          <div className="flex justify-center pt-4">
            <Link to="/task-tracker">
              <Button className="cursor-pointer" size="lg">
                Try It Out
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
