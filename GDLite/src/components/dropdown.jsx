import { ChevronDown } from 'lucide-react';
import React from 'react';

export const Dropdown = ({
    label,
    options = [],
    className = '',
    id,
    ...props
}) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={selectId} className="block text-sm font-medium text-content-body mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    id={selectId}
                    className={`w-full appearance-none px-4 py-2.5 pr-10 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary transition-colors cursor-pointer ${className}`}
                    {...props}
                >
                    {options.map((option) => {
                        const value = typeof option === 'string' ? option : option.value;
                        const optionLabel = typeof option === 'string' ? option : option.label;
                        return (
                            <option key={value} value={value} className="bg-surface-card text-content-primary">
                                {optionLabel}
                            </option>
                        );
                    })}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-content-muted">
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};