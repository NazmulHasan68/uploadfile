import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useUploadImageMutation } from "../../reduxApi/upoadApi";

export function ServiceForImage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadImage, { data, error, isLoading }] = useUploadImageMutation();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    try {
      await uploadImage({ formData, setProgress }).unwrap();
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <Card className="w-[400px] mx-auto mt-32 p-4">
      <CardHeader>
        <CardTitle>Upload Your Image</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image">Select Image</Label>
              <Input id="image" type="file" accept="image/*" onChange={handleChange} />
            </div>

            {preview && <img src={preview} alt="Preview" className="w-full h-40 object-cover mt-2 rounded-md" />}

            {isLoading && (
              <div className="w-full mt-2">
                <Progress value={progress} className="h-2" />
                <p className="text-center mt-1 text-sm text-gray-600">{progress}%</p>
              </div>
            )}
          </div>

          <CardFooter className="flex justify-between mt-6">
            <Button variant="outline" type="button" onClick={() => setImage(null)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? `Uploading... ${progress}%` : "Upload"}
            </Button>
          </CardFooter>

          {data && <p className="text-green-500 mt-2">Upload successful! ✅</p>}
          {error && <p className="text-red-500 mt-2">Upload failed! ❌</p>}
        </form>
      </CardContent>
    </Card>
  );
}
