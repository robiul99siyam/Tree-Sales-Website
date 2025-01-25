import React from "react";
import { SupportData } from "../../utils/data";
export default function Support() {
  return (
    <>
      {" "}
      <section className="container mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SupportData.map((item) => (
            <div
              key={item.id}
              className="border rounded-full shadow-sm flex items-center p-1"
            >
              <div className="flex-shrink-0">
                <img
                  className="w-24 rounded-full"
                  src={item.imgSrc}
                  alt={item.title}
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
