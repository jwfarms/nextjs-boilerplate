export default function VideoSection() {
return ( <section
   id="videos"
   className="mx-auto max-w-6xl px-6 py-16"
 > <div className="rounded-3xl bg-purple-50 p-8 shadow-sm"> <h2 className="text-3xl font-serif text-purple-900 text-center">
Garden & Farm Videos </h2>

```
    <p className="mt-3 max-w-3xl mx-auto text-center text-gray-700">
      Follow along with gardening lessons, lavender growing, seasonal farm
      updates, harvests, and simple ways to use lavender at home.
    </p>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {/* Video 1 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="aspect-video overflow-hidden rounded-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YcKcHXQuXjo"
            title="Gardening Recap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <h3 className="mt-4 font-serif text-xl text-purple-900">
          Gardening Recap
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          A look back at the garden season, lessons learned, and what is
          growing here at JW Farms.
        </p>
      </div>

      {/* Video 2 */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="aspect-video rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
          Next Video Coming Soon
        </div>

        <h3 className="mt-4 font-serif text-xl text-purple-900">
          Lavender on the Farm
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          Future videos will include lavender harvests, drying techniques,
          planting tips, and life on the farm in Tennessee.
        </p>
      </div>
    </div>
  </div>
</section>
```

);
}
