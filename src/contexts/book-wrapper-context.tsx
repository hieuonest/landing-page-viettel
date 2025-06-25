"use client";
import React, { useState, createContext, useContext } from "react";
import BookWrapper from "@/app/components/book-wrapper";

interface BookWrapperContextType {
  isOpen: boolean;
  openBook: () => void;
  closeBook: () => void;
}

const BookWrapperContext = createContext<BookWrapperContextType>({
  isOpen: false,
  openBook: () => {},
  closeBook: () => {},
});

export const useBookWrapper = () => useContext(BookWrapperContext);

export function BookWrapperProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBook = () => setIsOpen(true);
  const closeBook = () => setIsOpen(false);

  return (
    <BookWrapperContext.Provider value={{ isOpen, openBook, closeBook }}>
      {children}
      {isOpen && <BookWrapper onClose={closeBook} />}
    </BookWrapperContext.Provider>
  );
}