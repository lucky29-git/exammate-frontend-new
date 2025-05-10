import * as React from 'react';

export const Select = ({ value, onValueChange, children, disabled }) => (
  <select
    className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-muted"
    value={value}
    onChange={e => onValueChange(e.target.value)}
    disabled={disabled}
  >
    {children}
  </select>
);

export const SelectTrigger = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const SelectValue = ({ placeholder }) => (
  <option value="" disabled hidden>{placeholder}</option>
);

export const SelectContent = ({ children }) => <>{children}</>;

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
