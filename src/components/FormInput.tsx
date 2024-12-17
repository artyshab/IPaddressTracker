import React, { useState } from 'react';
import '../design/Form-design/Form.scss';
import Button from './Button';

type InputProps = {
    name: string;
    id: string;
    onSearch: (ip: string) => void; 
}

export default function FormInput({ id, name, onSearch }: InputProps) {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(inputValue); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name={name}
                id={id}
                placeholder="Search for an IP address or domain..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" title=">" />
        </form>
    );
}
