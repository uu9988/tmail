// src/components/EmailSelector.tsx

import React from 'react';

interface EmailSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const EmailSelector: React.FC<EmailSelectorProps> = ({ value, onChange }) => {
  const domains = ['isco.eu.org', 'sunix.eu.org', 'chato.eu.org'];

  return (
    <div className="email-selector">
      <input
        type="text"
        placeholder="Enter email prefix"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="email-prefix-input"
      />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="email-domain-select"
      >
        {domains.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmailSelector;
