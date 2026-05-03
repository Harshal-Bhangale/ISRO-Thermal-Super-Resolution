// ...existing code...
      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm opacity-80">
        Made with <span className="text-red-500">❤️</span> by Synaptic-Surge
      </footer>
// ...existing code...
import { useState, useEffect } from "react";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Processing = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("preprocessing");
  const [model, setModel] = useState("cnn");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 30) setStage("preprocessing");
    else if (progress < 60) setStage("coregistration");
    else if (progress < 90) setStage("fusion");
    else setStage("complete");
  }, [progress]);

  const stageNames: Record<string, string> = {
    preprocessing: "Preprocessing Images",
    coregistration: "Co-registration & Alignment",
    fusion: "Deep Learning Fusion",
    complete: "Processing Complete"
  };

  const logs = [
    "Initializing preprocessing pipeline...",
    "Applying noise reduction filters...",
    "Starting geometric alignment...",
    "Rotation correction: ±2.3°",
    "Loading CNN model weights...",
    "Performing multi-scale fusion...",
    "Generating super-resolution output...",
    "Quality assessment: PSNR 34.2dB",
    "Processing complete!"
  ];

  const handleComplete = () => {
    toast({
      title: "Processing Complete",
      description: "Your enhanced image is ready for analysis",
    });
    navigate("/analytics");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Fusion & Super-Resolution
          </h1>
          <p className="text-lg text-muted-foreground">
            Deep learning processing in progress
          </p>
        </div>

        {/* Model Selection */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Zap className="h-6 w-6 text-accent" />
              <div>
                <h3 className="font-semibold text-foreground">Model Type</h3>
                <p className="text-sm text-muted-foreground">Select processing algorithm</p>
              </div>
            </div>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cnn">CNN (Recommended)</SelectItem>
                <SelectItem value="gan">GAN</SelectItem>
                <SelectItem value="transformer">Transformer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Progress Card */}
        <Card className="p-8 mb-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {stageNames[stage]}
              </h3>
              <span className="text-2xl font-bold text-accent">{progress}%</span>
            </div>
            
            <Progress value={progress} className="h-3" />

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                {progress === 100 ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                )}
                <span className="text-muted-foreground">
                  {progress === 100 ? "Complete" : "Processing..."}
                </span>
              </div>
              <span className="text-muted-foreground">
                ETA: {Math.ceil((100 - progress) / 2)} seconds
              </span>
            </div>
          </div>
        </Card>

        {/* Processing Logs */}
        <Card className="p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Processing Log</h3>
          <div className="bg-background rounded-lg p-4 font-mono text-sm space-y-2 h-[300px] overflow-y-auto">
            {logs.slice(0, Math.floor(progress / 11)).map((log, idx) => (
              <div 
                key={idx} 
                className="text-muted-foreground animate-slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-accent">[{new Date().toLocaleTimeString()}]</span> {log}
              </div>
            ))}
          </div>
        </Card>

        {/* Image Preview */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3">Low Resolution</h3>
            <div className="aspect-video bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={beforeImg}
                alt="Before"
                className="object-contain w-full h-full rounded-lg shadow"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              Enhanced Output
              {progress === 100 && <CheckCircle className="h-4 w-4 text-green-500" />}
            </h3>
            <div className="aspect-video bg-gradient-accent rounded-lg flex items-center justify-center relative overflow-hidden">
              {progress === 100 ? (
                <img
                  src={afterImg}
                  alt="After"
                  className="object-contain w-full h-full rounded-lg shadow"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              )}
            </div>
          </Card>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <Button
            size="lg"
            disabled={progress < 100}
            onClick={handleComplete}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
          >
            View Analytics <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Processing;
