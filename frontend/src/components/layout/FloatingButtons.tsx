'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X, MessagesSquare } from 'lucide-react';

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: 'Gọi điện',
      icon: Phone,
      href: 'tel:0937613354',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Zalo',
      icon: MessageCircle,
      href: 'https://zalo.me/0898070652',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'Messenger',
      icon: MessagesSquare,
      href: 'https://www.messenger.com/t/100077841324091',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <div
        className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contactOptions.map((option) => (
          <a
            key={option.name}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : undefined}
            rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transition-transform hover:scale-105 ${option.color}`}
          >
            <option.icon className="w-5 h-5" />
            <span className="text-sm font-medium whitespace-nowrap">{option.name}</span>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-secondary-600 rotate-180'
            : 'bg-primary-600 hover:bg-primary-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Ripple Effect */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-25" />
      )}
    </div>
  );
}
