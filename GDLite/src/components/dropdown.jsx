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

                {/* Custom Dropdown Chevron Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-content-muted">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};