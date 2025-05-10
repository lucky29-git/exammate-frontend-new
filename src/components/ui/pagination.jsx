import React from 'react';

export const Pagination = ({ children }) => (
  <nav className="flex items-center gap-2">{children}</nav>
);

export const PaginationContent = ({ children }) => <div className="flex items-center gap-2">{children}</div>;

export const PaginationItem = ({ children }) => <div>{children}</div>;

export const PaginationPrevious = ({ onClick, disabled }) => (
  <button
    className="px-3 py-1 rounded border bg-muted text-muted-foreground disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}
  >
    Previous
  </button>
);

export const PaginationNext = ({ onClick, disabled }) => (
  <button
    className="px-3 py-1 rounded border bg-muted text-muted-foreground disabled:opacity-50"
    onClick={onClick}
    disabled={disabled}
  >
    See more
  </button>
);
