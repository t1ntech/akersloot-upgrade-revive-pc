
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InfoPopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  variant?: 'default' | 'danger' | 'alert';
}

const InfoPopover = ({ children, content, variant = 'default' }: InfoPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center gap-1 border-b border-dashed border-current hover:text-babyblu transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-babyblu">
          {children}
          <Info className={cn(
            "h-3.5 w-3.5", 
            variant === 'danger' || variant === 'alert' ? 'text-red-500' : 'text-babyblu'
          )} />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className={cn(
          "max-w-sm", 
          variant === 'danger' || variant === 'alert' ? 'border-red-500' : 'border-babyblu/40'
        )}
        align="center"
      >
        <div className={cn(
          "text-sm", 
          variant === 'danger' || variant === 'alert' ? 'text-red-500' : ''
        )}>
          {content}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default InfoPopover;
