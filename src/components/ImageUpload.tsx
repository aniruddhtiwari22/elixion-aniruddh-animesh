import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Upload, X, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageUpload = ({ isOpen, onClose }: ImageUploadProps) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    // Filter only image files
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== files.length) {
      toast({
        title: "Invalid Files",
        description: "Only image files are allowed.",
        variant: "destructive"
      });
    }

    // Create preview URLs
    const newPreviewUrls = imageFiles.map(file => URL.createObjectURL(file));
    
    setUploadedImages(prev => [...prev, ...imageFiles]);
    setPreviewUrls(prev => [...prev, ...newPreviewUrls]);

    toast({
      title: "Images Uploaded",
      description: `Successfully uploaded ${imageFiles.length} image(s).`,
    });
  };

  const removeImage = (index: number) => {
    // Revoke the URL to free memory
    URL.revokeObjectURL(previewUrls[index]);
    
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      const event = {
        target: { files: imageFiles }
      } as any;
      handleFileSelect(event);
    }
  };

  const processImages = () => {
    if (uploadedImages.length === 0) {
      toast({
        title: "No Images",
        description: "Please upload at least one image.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, you would upload these to a server
    toast({
      title: "Images Processed",
      description: `${uploadedImages.length} images have been processed and added to the gallery.`,
    });
    
    // Clear uploads
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setUploadedImages([]);
    setPreviewUrls([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-primary" />
            Upload Car Images
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Upload Area */}
          <Card 
            className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Upload className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Images</h3>
              <p className="text-muted-foreground text-center mb-4">
                Drag and drop images here, or click to select files
              </p>
              <Button variant="outline" className="border-primary/30">
                Select Files
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </CardContent>
          </Card>

          {/* Preview Grid */}
          {previewUrls.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Uploaded Images ({previewUrls.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-border"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(index);
                      }}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={processImages}
              className="coral-button"
              disabled={uploadedImages.length === 0}
            >
              Process Images ({uploadedImages.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};