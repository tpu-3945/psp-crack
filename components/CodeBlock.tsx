
import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <code className="px-1.5 py-0.5 rounded bg-[#0a0c10] border border-cyan-900/30 text-cyan-300 font-mono text-[0.9em] shadow-sm">
      {children}
    </code>
  );
};
