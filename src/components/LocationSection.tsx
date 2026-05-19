"use client";

export default function LocationSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-display mb-4 text-center">Location</h4>

        <div className="rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps?q=Yoganarasimha+Swamy+Temple+Vijayanagar+Mysore&output=embed"
            className="w-full h-72"
            loading="lazy"
          />
        </div>

        <div className="text-center mt-4">
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-maroon text-ivory rounded-md">Open in Google Maps</a>
        </div>
      </div>
    </section>
  );
}
