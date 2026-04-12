"use client";

import React from "react";

interface ChunkLoadErrorBoundaryProps {
  children: React.ReactNode;
}

interface ChunkLoadErrorBoundaryState {
  hasError: boolean;
}

class ChunkLoadErrorBoundary extends React.Component<
  ChunkLoadErrorBoundaryProps,
  ChunkLoadErrorBoundaryState
> {
  constructor(props: ChunkLoadErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): ChunkLoadErrorBoundaryState {
    // Check if the error is a ChunkLoadError
    if (error.name === "ChunkLoadError") {
      console.error("ChunkLoadError detected, attempting to refresh page.");
      // Force a full page reload to get the latest chunks
      window.location.reload();
      return { hasError: true }; // This state will likely be reset by the reload
    }
    // For other errors, let React handle them normally
    return { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error("Uncaught error in ChunkLoadErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You could render a more user-friendly message here if the reload
      // takes a moment or if the reload doesn't happen instantly.
      return <div>Loading the latest version...</div>;
    }
    return this.props.children;
  }
}

export function WithChunkLoadProtection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChunkLoadErrorBoundary>{children}</ChunkLoadErrorBoundary>;
}
