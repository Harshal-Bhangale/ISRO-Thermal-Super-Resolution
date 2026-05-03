import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useToast } from "@/hooks/use-toast";
import afterImg from "../assets/after.png";
import beforeImg from "../assets/before.png";

const Analytics = () => {
  const { toast } = useToast();

  const metricsData = [
    { name: "PSNR", value: 34.2, unit: "dB" },
    { name: "SSIM", value: 0.89, unit: "" },
    { name: "RMSE", value: 12.3, unit: "" },
  ];

  const radarData = [
    { metric: "Sharpness", value: 92 },
    { metric: "Contrast", value: 88 },
    { metric: "Detail", value: 94 },
    { metric: "Noise", value: 85 },
    { metric: "Color", value: 90 },
  ];

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Enhanced image is being downloaded",
    });
  };

  const handleExport = () => {
    toast({
      title: "Report Generated",
      description: "PDF report has been created successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Analytics & Evaluation
            </h1>
            <p className="text-lg text-muted-foreground">
              Detailed metrics and quality assessment
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleDownload} className="bg-accent hover:bg-accent/90">
              <Download className="mr-2 h-4 w-4" /> Download Image
            </Button>
            <Button onClick={handleExport} variant="outline">
              <FileText className="mr-2 h-4 w-4" /> Export Report
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {metricsData.map((metric, idx) => (
            <Card key={idx} className="p-6 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{metric.name}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {metric.value}
                    <span className="text-lg text-muted-foreground ml-1">{metric.unit}</span>
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-gradient-accent">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-accent rounded-full transition-all duration-1000"
                  style={{ width: `${(metric.value / (metric.unit === "dB" ? 40 : 1)) * 100}%` }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quality Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metricsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="value" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Enhancement Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
                <Radar 
                  name="Score" 
                  dataKey="value" 
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent))" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Image Comparison */}
        <Card className="p-6">
  <h3 className="text-lg font-semibold text-foreground mb-4">
    Before / After Comparison
  </h3>
  <div className="grid grid-cols-2 gap-6">
    {/* Original Thermal */}
    <div>
      <p className="text-sm font-medium text-muted-foreground mb-3">
        Original Thermal
      </p>
      <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={beforeImg}
          alt="Before"
          className="object-contain w-full h-full rounded-lg shadow"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
      </div>
    </div>

    {/* Enhanced Output */}
    <div>
      <p className="text-sm font-medium text-muted-foreground mb-3">
        Enhanced Output
      </p>
      <div className="aspect-video bg-white border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
        <img
          src={afterImg}
          alt="After"
          className="object-contain w-full h-full rounded-lg"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
        />
      </div>
    </div>
  </div>
</Card>


        {/* Technical Details */}
        <Card className="p-6 mt-6 bg-secondary/50">
          <h3 className="font-semibold text-foreground mb-4">Processing Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Model</p>
              <p className="font-semibold text-foreground">CNN-Based</p>
            </div>
            <div>
              <p className="text-muted-foreground">Processing Time</p>
              <p className="font-semibold text-foreground">2m 34s</p>
            </div>
            <div>
              <p className="text-muted-foreground">Resolution Increase</p>
              <p className="font-semibold text-foreground">4x</p>
            </div>
            <div>
              <p className="text-muted-foreground">Job ID</p>
              <p className="font-semibold text-foreground">JOB-2847</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm opacity-80">
        Made with <span className="text-red-500">❤️</span> by Synaptic-Surge
      </footer>
    </div>
  );
};

export default Analytics;
