"use client";
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-36 pt-24">
      {children}
    </div>
  );
};

export default Container;
