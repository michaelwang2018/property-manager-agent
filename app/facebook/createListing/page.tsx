"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, File } from "lucide-react";
import { uploadFile } from "@/app/actions";
import { useState } from "react";

export default function Component() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Facebook Marketplace Rental Listing</h1>
      <form action={uploadFile} className="flex flex-col gap-4">
        {/* Image Upload Section */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Property Images
          </Label>
          <div className="relative">
            <input
              id="file-upload"
              name="file"
              type="file"
              className="sr-only"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              aria-describedby="file-upload-desc"
            />
            <Label
              htmlFor="file-upload"
              className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md cursor-pointer hover:bg-gray-50"
            >
              <File className="w-4 h-4" />
              Choose Images
            </Label>
            {selectedFiles.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                Selected files: {selectedFiles.map(file => file.name).join(", ")}
              </div>
            )}
            <p id="file-upload-desc" className="mt-1 text-xs text-gray-500">
              Select multiple images for the listing
            </p>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid gap-4 mt-4">
          <div>
            <Label htmlFor="address">Property Address</Label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full p-2 border rounded-md mt-1"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="beds">Bedrooms</Label>
              <input
                id="beds"
                name="beds"
                type="number"
                min="0"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="baths">Bathrooms</Label>
              <input
                id="baths"
                name="baths"
                type="number"
                min="0"
                step="0.5"
                className="w-full p-2 border rounded-md mt-1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="rent">Monthly Rent</Label>
            <div className="relative">
              <span className="absolute left-3 top-[calc(50%-0.5rem)]">$</span>
              <input
                id="rent"
                name="rent"
                type="number"
                min="0"
                className="w-full p-2 pl-8 border rounded-md mt-1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="rent">Square Feet</Label>
            <div className="relative">
              <input
                id="sqft"
                name="sqft"
                type="number"
                min="0"
                className="w-full p-2 pl-8 border rounded-md mt-1"
                required
              />
            </div>
          </div>

          {/* Private Room Option */}
          <div className="grid gap-2">
            <Label>Private Room in Shared Property</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="privateRoom"
                  value="yes"
                  className="form-radio"
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="privateRoom"
                  value="no"
                  className="form-radio"
                  required
                />
                No
              </label>
            </div>
          </div>

          {/* Pets Allowed Option */}
          <div className="grid gap-2">
            <Label>Pets Allowed</Label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="petsAllowed"
                  value="yes"
                  className="form-radio"
                  required
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="petsAllowed"
                  value="no"
                  className="form-radio"
                  required
                />
                No
              </label>
            </div>
          </div>
        </div>

        <Button className="mt-4">
          <Upload className="mr-2 h-4 w-4" /> Create Listing
        </Button>
      </form>
    </div>
  );
}