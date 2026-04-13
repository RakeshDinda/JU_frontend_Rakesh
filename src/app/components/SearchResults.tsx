import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Image,
  FileText,
  Volume2,
  Eye,
  Bookmark,
  Share2,
  Info,
  TrendingUp,
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { ScrollArea } from "./ui/scroll-area";

interface SearchResult {
  id: string;
  type: "text" | "image" | "audio";
  title: string;
  description: string;
  similarity: number;
  preview?: string;
  metadata?: Record<string, string>;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    type: "text",
    title: "Introduction to Semantic Search",
    description: "A comprehensive guide on semantic search using vector embeddings and neural networks...",
    similarity: 0.95,
    metadata: { source: "research-papers", date: "2026-03-15" },
  },
  {
    id: "2",
    type: "image",
    title: "Neural Network Architecture",
    description: "Visualization of a transformer-based neural network architecture",
    similarity: 0.89,
    preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    metadata: { source: "diagrams", dimensions: "1920x1080" },
  },
  {
    id: "3",
    type: "audio",
    title: "AI Research Podcast Episode 42",
    description: "Discussion on the latest advances in multimodal learning and semantic retrieval",
    similarity: 0.87,
    metadata: { duration: "45:30", format: "MP3" },
  },
  {
    id: "4",
    type: "text",
    title: "FAISS Indexing Performance",
    description: "Benchmarking FAISS indexing performance across different vector dimensions and data sizes...",
    similarity: 0.84,
    metadata: { source: "technical-docs", date: "2026-04-01" },
  },
  {
    id: "5",
    type: "image",
    title: "Vector Space Representation",
    description: "3D visualization of semantic embeddings in vector space",
    similarity: 0.82,
    preview: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
    metadata: { source: "visualizations", dimensions: "1280x720" },
  },
];

interface SearchResultsProps {
  query: string;
  isVisible: boolean;
  onClose: () => void;
}

export function SearchResults({ query, isVisible, onClose }: SearchResultsProps) {
  const [results] = useState<SearchResult[]>(mockResults);
  const [filterType, setFilterType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("relevance");

  const filteredResults = results.filter(
    (result) => filterType === "all" || result.type === filterType
  );

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === "relevance") return b.similarity - a.similarity;
    return a.title.localeCompare(b.title);
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "text": return <FileText className="w-4 h-4" />;
      case "image": return <Image className="w-4 h-4" />;
      case "audio": return <Volume2 className="w-4 h-4" />;
      default: return null;
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute bottom-0 left-0 right-0 max-h-[90vh] bg-surface-bg border-t border-surface-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-surface-overlay backdrop-blur-xl border-b border-surface-border p-6 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-surface-text mb-1">Search Results</h2>
                  <p className="text-surface-text-secondary text-sm">
                    Found {filteredResults.length} results for "{query}"
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover"
                >
                  Close
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Tabs value={filterType} onValueChange={setFilterType} className="w-auto">
                  <TabsList className="bg-surface-card border border-surface-border">
                    <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      All Results
                    </TabsTrigger>
                    <TabsTrigger value="text" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      <FileText className="w-4 h-4 mr-2" />Text
                    </TabsTrigger>
                    <TabsTrigger value="image" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      <Image className="w-4 h-4 mr-2" />Images
                    </TabsTrigger>
                    <TabsTrigger value="audio" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                      <Volume2 className="w-4 h-4 mr-2" />Audio
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] bg-surface-card border-surface-border text-surface-text">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-surface-border">
                    <SelectItem value="relevance">Sort by Relevance</SelectItem>
                    <SelectItem value="alphabetical">Sort Alphabetically</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <ScrollArea className="h-[calc(90vh-180px)]">
            <div className="max-w-7xl mx-auto p-6 space-y-4">
              {sortedResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="bg-surface-card border-surface-border hover:border-primary/20 transition-all group">
                    <div className="p-6">
                      <div className="flex gap-4">
                        {result.preview && (
                          <div className="relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-surface-hover group-hover:scale-105 transition-transform">
                            <img src={result.preview} alt={result.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Eye className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        )}

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className="bg-primary-muted text-primary border-primary/20">
                                {getTypeIcon(result.type)}
                                <span className="ml-1">{result.type}</span>
                              </Badge>
                              <h3 className="text-lg font-semibold text-surface-text">{result.title}</h3>
                            </div>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover">
                                <Bookmark className="w-4 h-4" />
                              </Button>
                              <Button size="icon" variant="ghost" className="h-8 w-8 text-surface-text-secondary hover:text-surface-text hover:bg-surface-hover">
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-surface-text-secondary text-sm mb-3 line-clamp-2">{result.description}</p>

                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs text-surface-text-tertiary whitespace-nowrap">Similarity</span>
                            <div className="flex-1">
                              <Progress value={result.similarity * 100} className="h-2 bg-surface-hover" />
                            </div>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <Badge variant="outline" className="border-primary/30 bg-primary-muted text-primary cursor-help">
                                  {(result.similarity * 100).toFixed(1)}%
                                  <Info className="w-3 h-3 ml-1" />
                                </Badge>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80 bg-popover backdrop-blur-xl border-surface-border">
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold text-surface-text flex items-center gap-2">
                                    <Info className="w-4 h-4 text-primary" />
                                    Why this result?
                                  </h4>
                                  <p className="text-xs text-surface-text-secondary">
                                    Scored {(result.similarity * 100).toFixed(1)}% based on semantic vector distance.
                                  </p>
                                  <ul className="text-xs text-surface-text-tertiary space-y-1">
                                    <li>• Conceptual similarity: 96.2%</li>
                                    <li>• Contextual relevance: 94.8%</li>
                                    <li>• Topic alignment: 93.5%</li>
                                  </ul>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </div>

                          {result.metadata && (
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(result.metadata).map(([key, value]) => (
                                <span key={key} className="text-xs text-surface-text-tertiary px-2 py-1 bg-surface-card border border-surface-border rounded">
                                  {key}: {value}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {sortedResults.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-surface-text mb-2">No results found</h3>
                  <p className="text-surface-text-secondary">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
