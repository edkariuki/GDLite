import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

export const Dropdown = ({
    label,
    options = [],
    value,
    onChange,
    placeholder = "Select a service..."
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-content-body mb-1">
                    {label}
                </label>
            )}

            <Select.Root value={value} onValueChange={onChange}>
                {/* Trigger Box */}
                <Select.Trigger
                    className="w-full px-4 py-2.5 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary flex items-center justify-between cursor-pointer transition-colors"
                >
                    <Select.Value placeholder={placeholder} />
                    <Select.Icon>
                        <ChevronDown className="w-4 h-4 text-content-muted" />
                    </Select.Icon>
                </Select.Trigger>

                {/* Dropdown Popup */}
                <Select.Portal>
                    <Select.Content
                        side="bottom"
                        sideOffset={4}
                        position="popper"
                        className="overflow-hidden bg-surface-card border border-content-muted rounded-lg shadow-lg z-50 w-[var(--radix-select-trigger-width)]"
                    >
                        <Select.Viewport className="p-1">
                            {options.map((option) => {
                                const optValue = typeof option === 'string' ? option : option.value;
                                const optLabel = typeof option === 'string' ? option : option.label;

                                return (
                                    <Select.Item
                                        key={optValue}
                                        value={optValue}
                                        className="relative flex items-center px-8 py-2.5 text-sm text-content-primary rounded-md cursor-pointer outline-none transition-colors data-[highlighted]:bg-brand/10 data-[highlighted]:text-brand select-none"
                                    >
                                        <Select.ItemText>{optLabel}</Select.ItemText>

                                        <Select.ItemIndicator className="absolute left-2 inline-flex items-center text-brand">
                                            <Check className="w-4 h-4" />
                                        </Select.ItemIndicator>
                                    </Select.Item>
                                );
                            })}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};