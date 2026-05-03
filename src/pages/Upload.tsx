// ...existing code...
      {/* Footer */}
      <footer className="mt-12 text-center text-muted-foreground text-sm opacity-80">
        Made with <span className="text-red-500">❤️</span> by Synaptic-Surge
      </footer>
// ...existing code...
import { useState } from "react";
import { Upload as UploadIcon, Image, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [opticalFile, setOpticalFile] = useState<File | null>(null);
  const [thermalFile, setThermalFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDrop = (e: React.DragEvent, type: "optical" | "thermal") => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      if (type === "optical") setOpticalFile(file);
      else setThermalFile(file);
      
      toast({
        title: "File uploaded",
        description: `${file.name} uploaded successfully`,
      });
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>, type: "optical" | "thermal") => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "optical") setOpticalFile(file);
      else setThermalFile(file);
      
      toast({
        title: "File uploaded",
        description: `${file.name} uploaded successfully`,
      });
    }
  };

  const startProcessing = () => {
    if (!opticalFile || !thermalFile) {
      toast({
        title: "Missing files",
        description: "Please upload both optical and thermal images",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Starting co-registration",
      description: "Processing your images...",
    });

    setTimeout(() => {
      navigate("/processing");
    }, 1000);
  };

  const UploadZone = ({ 
    type, 
    file, 
    onDrop, 
    onFileInput 
  }: { 
    type: "optical" | "thermal"; 
    file: File | null; 
    onDrop: (e: React.DragEvent) => void;
    onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <Card
      className={`p-8 border-2 border-dashed transition-all duration-300 ${
        file 
          ? "border-accent bg-accent/5" 
          : "border-border hover:border-accent hover:bg-accent/5"
      }`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <input
        type="file"
        id={`${type}-upload`}
        className="hidden"
        accept=".tiff,.tif,.png,.jpg,.jpeg"
        onChange={onFileInput}
      />
      <label htmlFor={`${type}-upload`} className="cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          {file ? (
            <>
              <div className="p-4 rounded-full bg-accent">
                <Check className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-full bg-secondary">
                <UploadIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground mb-1">
                  Upload {type === "optical" ? "Optical" : "Thermal"} Image
                </p>
                <p className="text-sm text-muted-foreground">
                  Drag & drop or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Supported: TIFF, PNG (Max 20MB)
                </p>
              </div>
            </>
          )}
        </div>
      </label>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Data Upload Portal</h1>
          <p className="text-lg text-muted-foreground">
            Upload optical and thermal images for super-resolution processing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <UploadZone
            type="optical"
            file={opticalFile}
            onDrop={(e) => handleDrop(e, "optical")}
            onFileInput={(e) => handleFileInput(e, "optical")}
          />
          <UploadZone
            type="thermal"
            file={thermalFile}
            onDrop={(e) => handleDrop(e, "thermal")}
            onFileInput={(e) => handleFileInput(e, "thermal")}
          />
        </div>

        <Card className="p-6 bg-secondary/50">
          <div className="flex items-start gap-4 mb-4">
            <Image className="h-5 w-5 text-accent mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Upload Guidelines</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ensure both images cover the same geographical area</li>
                <li>• Images should be properly georeferenced</li>
                <li>• Maximum file size: 20MB per image</li>
                <li>• Recommended formats: TIFF (preferred), PNG</li>
                <li>• Processing typically takes 2-5 minutes</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="flex justify-end mt-8">
          <Button
            size="lg"
            onClick={startProcessing}
            disabled={!opticalFile || !thermalFile}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
          >
            Start Co-Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
