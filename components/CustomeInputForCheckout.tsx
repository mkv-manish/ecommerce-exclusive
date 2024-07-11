import React from 'react';
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface CustomeInputForCheckoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const CustomeInputForCheckout = React.forwardRef<HTMLInputElement, CustomeInputForCheckoutProps>(
    ({ label, error, ...props }, ref) => {
        return (
            <div className='space-y-1.5'>
                <Label className="text-base font-normal opacity-50 font-poppins">
                    {label}<span className='text-red-500'>{props.required && "*"}</span>
                </Label>
                <Input ref={ref} {...props} className='bg-[var(--secondary)] px-2 border-none rounded-sm' />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        )
    }
)

CustomeInputForCheckout.displayName = 'CustomeInputForCheckout';

export default CustomeInputForCheckout;