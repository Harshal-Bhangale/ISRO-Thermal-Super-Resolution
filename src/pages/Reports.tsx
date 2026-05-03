// ...existing code...
      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm opacity-80">
        Made with <span className="text-red-500">❤️</span> by Synaptic-Surge
      </footer>
// ...existing code...
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const [title, setTitle] = useState("");
  const [datasetId, setDatasetId] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleExport = () => {
    if (!title || !datasetId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Report Generated",
      description: "Your research report has been created successfully",
    });
  };

  const recentReports = [
    {
      id: "RPT-2024-001",
      title: "Himalayan Glacier Monitoring",
      date: "2024-01-15",
      model: "CNN",
      accuracy: "92.3%"
    },
    {
      id: "RPT-2024-002",
      title: "Coastal Heat Analysis",
      date: "2024-01-14",
      model: "GAN",
      accuracy: "94.1%"
    },
    {
      id: "RPT-2024-003",
      title: "Urban Heat Island Study",
      date: "2024-01-12",
      model: "CNN",
      accuracy: "91.8%"
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Research Reports</h1>
          <p className="text-lg text-muted-foreground">
            Generate and manage scientific documentation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Report Form */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Create New Report
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Project Title *</Label>
                <Input
                  id="title"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="dataset">Dataset ID *</Label>
                <Input
                  id="dataset"
                  placeholder="e.g., DATASET-2024-001"
                  value={datasetId}
                  onChange={(e) => setDatasetId(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="notes">Research Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any additional notes or observations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-medium text-foreground mb-2">Report Includes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Processing methodology</li>
                  <li>✓ Quality metrics (PSNR, SSIM, RMSE)</li>
                  <li>✓ Before/after image comparison</li>
                  <li>✓ Model configuration details</li>
                  <li>✓ Geographic metadata</li>
                </ul>
              </div>

              <Button 
                onClick={handleExport}
                className="w-full bg-accent hover:bg-accent/90"
              >
                <FileText className="mr-2 h-4 w-4" /> Generate Report
              </Button>
            </div>
          </Card>

          {/* Recent Reports */}
          <div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Reports</h3>
              
              <div className="space-y-3">
                {recentReports.map((report, idx) => (
                  <div
                    key={report.id}
                    className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground">{report.title}</p>
                        <p className="text-sm text-muted-foreground">{report.id}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>Model: {report.model}</span>
                      <span>•</span>
                      <span>Accuracy: {report.accuracy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 mt-6 bg-accent/10 border-accent">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent" />
                Export Options
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">PDF Format</span>
                  <span className="text-foreground font-medium">✓ Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">LaTeX Source</span>
                  <span className="text-foreground font-medium">✓ Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">JSON Data</span>
                  <span className="text-foreground font-medium">✓ Available</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Report Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">47</p>
              <p className="text-sm text-muted-foreground">Total Reports</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">23</p>
              <p className="text-sm text-muted-foreground">This Month</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">92.5%</p>
              <p className="text-sm text-muted-foreground">Avg. Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">156</p>
              <p className="text-sm text-muted-foreground">Datasets Processed</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
