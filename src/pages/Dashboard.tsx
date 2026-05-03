// ...existing code...
      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm opacity-80">
        Made with <span className="text-red-500">❤️</span> by Synaptic-Surge
      </footer>
// ...existing code...
import { Activity, Upload, CheckCircle, TrendingUp, Image, Zap } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import ActionCard from "@/components/ActionCard";
import heroImage from "@/assets/hero-satellite.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Satellite Thermal Imaging" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Optical-Guided Super-Resolution
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
              Advanced thermal imagery enhancement using deep learning fusion techniques
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Model Accuracy"
            value="92.3%"
            change="+2.1% this week"
            icon={TrendingUp}
            trend="up"
          />
          <MetricCard
            title="Processing Jobs"
            value="47"
            change="12 active"
            icon={Activity}
          />
          <MetricCard
            title="Recent Uploads"
            value="156"
            change="+23 today"
            icon={Upload}
            trend="up"
          />
          <MetricCard
            title="Completed Tasks"
            value="1,243"
            change="98.5% success rate"
            icon={CheckCircle}
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard
              title="Upload Data"
              description="Upload optical and thermal images for processing"
              icon={Upload}
              href="/upload"
              buttonText="Start Upload"
            />
            <ActionCard
              title="Run Super-Resolution"
              description="Process images with advanced fusion algorithms"
              icon={Zap}
              href="/processing"
              buttonText="Begin Processing"
            />
            <ActionCard
              title="View Analytics"
              description="Analyze results with detailed metrics and comparisons"
              icon={Image}
              href="/analytics"
              buttonText="Open Analytics"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
          <div className="bg-card rounded-lg shadow-card p-6">
            <div className="space-y-4">
              {[
                { id: "JOB-2847", status: "Completed", accuracy: "94.2%", time: "2 mins ago" },
                { id: "JOB-2846", status: "Processing", accuracy: "—", time: "5 mins ago" },
                { id: "JOB-2845", status: "Completed", accuracy: "91.8%", time: "15 mins ago" },
                { id: "JOB-2844", status: "Completed", accuracy: "93.5%", time: "1 hour ago" },
              ].map((job, idx) => (
                <div 
                  key={job.id} 
                  className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 rounded-full ${
                      job.status === "Processing" ? "bg-accent animate-pulse-glow" : "bg-green-500"
                    }`} />
                    <div>
                      <p className="font-semibold text-foreground">{job.id}</p>
                      <p className="text-sm text-muted-foreground">{job.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{job.accuracy}</p>
                    <p className="text-sm text-muted-foreground">{job.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
