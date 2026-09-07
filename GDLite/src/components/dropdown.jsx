import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';

export const Dropdown = ({ label, options, value, onChange }) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-content-body mb-1">
                    {label}
                </label>
            )}
            <Select.Root value={value} onValueChange={onChange}>
                <Select.Trigger className="w-full px-4 py-2.5 rounded-lg border border-content-muted focus:ring-2 focus:ring-brand outline-none bg-surface-card text-content-primary flex items-center justify-between">
                    <Select.Value />
                    <Select.Icon>
                        <ChevronDown className="w-4 h-4 text-content-muted" />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content className="overflow-hidden bg-surface-card border border-content-muted rounded-lg shadow-md z-50">
                        <Select.Viewport className="p-1">
                            {options.map((option) => (
                                <Select.Item
                                    key={option}
                                    value={option}
                                    className="relative flex items-center px-8 py-2 text-sm text-content-primary hover:bg-brand/10 hover:text-brand rounded cursor-pointer outline-none select-none"
                                >
                                    <Select.ItemText>{option}</Select.ItemText>
                                    <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                                        <Check className="w-4 h-4" />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};