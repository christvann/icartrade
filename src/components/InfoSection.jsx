import React from "react";

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias doloribus impedit.</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/US-local/2024/1.-JAN/2024112_Porsche_reports_US_retail_sales_for_2023/RubyStarNeo911.jpeg/jcr:content/RubyStarNeo911.jpeg"
              className="absolute inset-0 h-full w-full object-cover rounded-md hover:scale-105 transition-all"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 text-black items-center bg-gray-100 rounded-md p-5">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.</p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa dignissimos possimus, perferendis consectetur odit
                accusantium dolorem amet voluptates aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
