import React from "react";

export default function AboutReview() {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto items-center">
        {/* Happy Clients */}
        <div className="flex flex-col items-center border-r border-gray-300 h-20 last:border-r-0">
          <h1 className="font-bold text-4xl text-center">100</h1>
          <p className="text-gray-500 text-center">HAPPY CLIENTS</p>
        </div>
        {/* Completed Project */}
        <div className="flex flex-col items-center border-r border-gray-300 h-20 last:border-r-0">
          <h1 className="font-bold text-4xl text-center">109</h1>
          <p className="text-gray-500 text-center">COMPLETED PROJECT</p>
        </div>
        {/* Awesome Staff */}
        <div className="flex flex-col items-center border-r border-gray-300 h-20 last:border-r-0">
          <h1 className="font-bold text-4xl text-center">22</h1>
          <p className="text-gray-500 text-center">AWESOME STAFF</p>
        </div>
        {/* Winning Awards */}
        <div className="flex flex-col items-center h-20">
          <h1 className="font-bold text-4xl text-center">11</h1>
          <p className="text-gray-500 text-center">WINNING AWARDS</p>
        </div>
      </div>
    </section>
  );
}
