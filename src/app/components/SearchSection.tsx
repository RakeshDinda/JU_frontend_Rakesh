import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
  Search,
  Upload,
  Mic,
  FileImage,
  FileText,
  Volume2,
  Loader2,
  Clock,
  TrendingUp,
  X,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { SearchResults } from "./SearchResults";

const recentSearches = [
  "neural networks",
  "semantic embeddings",
  "vector databases",
  "FAISS indexing",
];

const trendingQueries = [
  "multimodal AI",
  "transformer architecture",
  "RAG systems",
  "embedding models",
];

const searchSuggestions = [
  "artificial intelligence in healthcare",
  "natural language processing techniques",
  "computer vision applications",
  "deep learning optimization",
  "semantic search algorithms",
];

export function SearchSection() {
  const [textQuery, setTextQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  const suggestions = searchSuggestions.filter((s) =>
    s.toLowerCase().includes(textQuery.toLowerCase())
  );

  const handleTextSearch = () => {
    if (!textQuery.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    setIsSearching(true);
    setCurrentQuery(textQuery);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
      toast.success("Search completed!");
    }, 1500);
  };

  const handleImageUpload = (file: File) => {
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);

    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success(`Image "${file.name}" uploaded successfully`);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    } else {
      toast.error("Please upload a valid image file");
    }
  };

  const handleImageSearch = () => {
    if (!selectedImage) {
      toast.error("Please upload an image");
      return;
    }
    setIsSearching(true);
    setCurrentQuery(selectedImage.name);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
      toast.success("Image search completed!");
    }, 1500);
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedAudio(file);
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            toast.success(`Audio "${file.name}" uploaded successfully`);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleAudioSearch = () => {
    if (!selectedAudio) {
      toast.error("Please upload an audio file");
      return;
    }
    setIsSearching(true);
    setCurrentQuery(selectedAudio.name);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
      toast.success("Audio search completed!");
    }, 1500);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, var(--heading-gradient-from), var(--heading-gradient-via), var(--heading-gradient-to))" }}
          >
            Experience Semantic Search
          </h2>
          <p className="text-xl text-surface-text-secondary">
            Upload text, images, or audio and discover the power of multimodal AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1.5 bg-surface-card border border-surface-border">
              <TabsTrigger
                value="text"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Text Search</span>
                <span className="sm:hidden">Text</span>
              </TabsTrigger>
              <TabsTrigger
                value="image"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
              >
                <FileImage className="w-4 h-4" />
                <span className="hidden sm:inline">Image Search</span>
                <span className="sm:hidden">Image</span>
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
              >
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:inline">Audio Search</span>
                <span className="sm:hidden">Audio</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-6">
              {/* Search Box */}
              <div className="relative">
                <div className="relative group">
                  <Input
                    placeholder="Search for anything... (e.g., artificial intelligence in healthcare)"
                    value={textQuery}
                    onChange={(e) => {
                      setTextQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={(e) => e.key === "Enter" && handleTextSearch()}
                    className="h-14 pr-32 bg-surface-card border-surface-border text-surface-text placeholder:text-surface-text-tertiary focus:border-primary/40 focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                  {textQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-24 top-1/2 -translate-y-1/2 h-8 w-8 text-surface-text-secondary hover:text-surface-text"
                      onClick={() => { setTextQuery(""); setShowSuggestions(false); }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    onClick={handleTextSearch}
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-hover text-white shadow-sm"
                  >
                    {isSearching ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </div>

                {/* Autocomplete */}
                <AnimatePresence>
                  {showSuggestions && textQuery && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-2 bg-popover backdrop-blur-xl border border-surface-border rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-2">
                        <div className="text-xs text-surface-text-tertiary px-3 py-2 flex items-center gap-2">
                          <Sparkles className="w-3 h-3" />
                          Suggestions
                        </div>
                        {suggestions.slice(0, 5).map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => { setTextQuery(suggestion); setShowSuggestions(false); }}
                            className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-surface-hover text-surface-text-secondary hover:text-surface-text transition-colors flex items-center justify-between group"
                          >
                            <span className="text-sm">{suggestion}</span>
                            <ChevronRight className="w-4 h-4 text-surface-text-tertiary group-hover:text-primary transition-colors" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Recent & Trending */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-6 rounded-xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-surface-text">Recent Searches</h3>
                  </div>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => setTextQuery(search)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-surface-hover text-surface-text-secondary hover:text-surface-text transition-colors text-sm flex items-center justify-between group"
                      >
                        <span>{search}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="p-6 rounded-xl bg-surface-card border border-surface-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-surface-text">Trending Queries</h3>
                  </div>
                  <div className="space-y-2">
                    {trendingQueries.map((query, index) => (
                      <button
                        key={index}
                        onClick={() => setTextQuery(query)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-surface-hover text-surface-text-secondary hover:text-surface-text transition-colors text-sm flex items-center justify-between group"
                      >
                        <span>{query}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* How it works */}
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="p-6 rounded-xl bg-primary-muted border border-primary/15"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-surface-text mb-1">How it works</p>
                    <p className="text-sm text-surface-text-secondary">
                      Your query is converted into a high-dimensional vector embedding using state-of-the-art language models, then matched against indexed content using FAISS similarity search.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="image" className="space-y-6">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                className={`relative group transition-all ${isDragging ? "scale-[1.02]" : ""}`}
              >
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-all ${isDragging
                      ? "border-primary bg-primary-muted"
                      : "border-surface-border bg-surface-card hover:border-primary/40 hover:bg-surface-hover"
                    }`}
                >
                  {imagePreview ? (
                    <div className="relative w-full h-full p-4">
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white"
                        onClick={(e) => { e.preventDefault(); setSelectedImage(null); setImagePreview(null); setUploadProgress(0); }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3 py-8">
                      <div className="p-4 rounded-full bg-primary-muted">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-medium text-surface-text mb-1">
                          {isDragging ? "Drop image here" : "Upload an image"}
                        </p>
                        <p className="text-sm text-surface-text-secondary">Drag and drop or click to browse</p>
                        <p className="text-xs text-surface-text-tertiary mt-1">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-surface-text-secondary">Uploading...</span>
                    <span className="text-primary">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </motion.div>
              )}

              <Button
                onClick={handleImageSearch}
                disabled={isSearching || !selectedImage}
                className="w-full h-12 bg-primary hover:bg-primary-hover text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Searching...</>
                ) : (
                  <><Search className="w-5 h-5 mr-2" />Search by Image</>
                )}
              </Button>

              <motion.div whileHover={{ scale: 1.005 }} className="p-6 rounded-xl bg-primary-muted border border-primary/15">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <FileImage className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-surface-text mb-1">How it works</p>
                    <p className="text-sm text-surface-text-secondary">
                      Images are processed through advanced computer vision models to extract visual embeddings, which are then compared using cosine similarity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="audio" className="space-y-6">
              <div className="relative group">
                <input id="audio-upload" type="file" accept="audio/*" onChange={handleAudioUpload} className="hidden" />
                <label
                  htmlFor="audio-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-surface-border rounded-xl cursor-pointer bg-surface-card hover:border-primary/40 hover:bg-surface-hover transition-all"
                >
                  {selectedAudio ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-4 rounded-full bg-primary-muted">
                        <Volume2 className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-medium text-surface-text mb-1">{selectedAudio.name}</p>
                        <p className="text-sm text-surface-text-secondary">{(selectedAudio.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10"
                        onClick={(e) => { e.preventDefault(); setSelectedAudio(null); setUploadProgress(0); }}
                      >
                        <X className="w-4 h-4 mr-2" />Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3 py-8">
                      <div className="p-4 rounded-full bg-primary-muted">
                        <Mic className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-medium text-surface-text mb-1">Upload an audio file</p>
                        <p className="text-sm text-surface-text-secondary">Click to browse or drag and drop</p>
                        <p className="text-xs text-surface-text-tertiary mt-1">MP3, WAV, M4A up to 10MB</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && selectedAudio && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-surface-text-secondary">Uploading...</span>
                    <span className="text-primary">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </motion.div>
              )}

              <Button
                onClick={handleAudioSearch}
                disabled={isSearching || !selectedAudio}
                className="w-full h-12 bg-primary hover:bg-primary-hover text-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Searching...</>
                ) : (
                  <><Search className="w-5 h-5 mr-2" />Search by Audio</>
                )}
              </Button>

              <motion.div whileHover={{ scale: 1.005 }} className="p-6 rounded-xl bg-primary-muted border border-primary/15">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/15">
                    <Volume2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-surface-text mb-1">How it works</p>
                    <p className="text-sm text-surface-text-secondary">
                      Audio files are transcribed then converted to embeddings for similarity matching against the indexed audio database.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Loading Skeleton */}
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mt-12 space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
              <span className="text-surface-text-secondary">Searching through embeddings...</span>
            </div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-xl bg-surface-card border border-surface-border space-y-3">
                <Skeleton className="h-5 w-3/4 bg-surface-hover" />
                <Skeleton className="h-4 w-full bg-surface-hover" />
                <Skeleton className="h-4 w-2/3 bg-surface-hover" />
              </div>
            ))}
          </motion.div>
        )}
      </section>

      <SearchResults query={currentQuery} isVisible={showResults} onClose={() => setShowResults(false)} />
    </>
  );
}
