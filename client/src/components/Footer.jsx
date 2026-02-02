import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black py-8 text-center text-gray-500 text-sm border-t border-gray-900">
            <p>&copy; {new Date().getFullYear()} Emiyelan. All rights reserved.</p>
        </footer>
    );
}
