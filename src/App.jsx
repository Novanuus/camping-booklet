export default function VintageCampingChecklist() {
  const section = (title, items) => (
    <div className="mb-8 break-inside-avoid page-break-inside-avoid print:mb-5">
      <div className="border-b-2 border-emerald-900 mb-3 pb-2 flex items-center gap-3 print:mb-2 print:pb-1">
        <div className="w-3 h-3 rounded-full bg-emerald-900 print:w-2 print:h-2" />
        <h2 className="text-2xl font-serif tracking-wide text-emerald-950 uppercase print:text-lg">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 print:gap-y-1">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 text-stone-800 text-sm print:text-[12px]"
          >
            <div className="w-5 h-5 border-2 border-stone-700 mt-0.5 flex-shrink-0 print:w-4 print:h-4" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f6f1e7] min-h-screen text-stone-900 font-serif p-8 md:p-14 print:p-0 print:bg-white">
      <div className="max-w-[1000px] mx-auto bg-[#f8f4ea] border-[10px] border-emerald-950 rounded-3xl shadow-2xl overflow-hidden print:border-none print:rounded-none print:shadow-none">

        {/* HEADER */}
        <div className="border-b-[12px] border-emerald-950 px-10 py-14 bg-[linear-gradient(to_bottom,#f6f1e7,#efe6d3)] print:px-6 print:py-6 print:border-b-2 print:bg-white">
          <div className="text-center">
            <div className="text-sm tracking-[0.35em] uppercase text-stone-700 mb-4 print:mb-2">
              Family Field Guide Series
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-emerald-950 mb-4 print:text-3xl print:mb-2">
              CAMP CHECKLIST
            </h1>

            <div className="text-xl italic text-stone-700 mb-6 print:text-base print:mb-3">
              Early Trips Edition
            </div>

            <div className="w-40 h-[2px] bg-stone-500 mx-auto mb-6 print:mb-3" />

            <p className="max-w-2xl mx-auto text-stone-700 leading-relaxed text-lg print:text-sm">
              Designed for simple, comfortable campground camping with young kids.
              Focus on warm beds, easy meals, campfire memories, and stress-free packing.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="px-10 py-10 print:px-6 print:py-6">

          {/* TOP INFO BOXES */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 print:mb-6">

            <div className="border-2 border-stone-400 rounded-2xl p-5 bg-[#fcfaf4] print:p-3 print:bg-white">
              <h3 className="text-xl uppercase tracking-wide mb-3 text-emerald-950 print:text-base print:mb-2">
                Trip Overview
              </h3>

              <div className="space-y-3 text-sm print:text-xs">
                {["Campground", "Dates", "Weather Forecast", "Campsite #"].map((label, i) => (
                  <div key={i}>
                    <div className="mb-1 text-stone-600 print:mb-0">{label}</div>
                    <div className="border-b border-stone-500 h-5 print:h-4" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 border-stone-400 rounded-2xl p-5 bg-[#fcfaf4] print:p-3 print:bg-white">
              <h3 className="text-xl uppercase tracking-wide mb-3 text-emerald-950 print:text-base print:mb-2">
                Golden Rules
              </h3>

              <div className="space-y-2 text-stone-800 text-sm print:text-xs">
                <div>• Keep meals simple</div>
                <div>• One guaranteed kid-safe meal</div>
                <div>• Coffee packed first</div>
                <div>• Warm layers before sunset</div>
                <div>• More snacks than expected</div>
                <div>• Happy kids = successful trip</div>
              </div>
            </div>

          </div>

          {section("Critical Items", [
            "Tent + stakes",
            "Sleeping setup for everyone",
            "Cooler + food",
            "Coleman stove + propane",
            "Coffee setup",
            "Water jug + bottles",
            "Toiletries + medications",
            "Phone + charger",
            "Wallet / ID / Keys",
            "Reservation information",
          ])}

          {section("Sleep System Bin", [
            "Tent",
            "Sleeping bags / blankets",
            "Sleeping pads or air mattress",
            "Pillows",
            "Extra blanket",
            "Pajamas",
            "Warm layers",
            "Stuffed animals / comfort items",
            "Headlamps",
            "Lantern",
            "Power bank / batteries",
          ])}

          {section("Camp Setup Bin", [
            "Camp chairs",
            "Trash bags",
            "Paper towels",
            "Bug spray",
            "Sunscreen",
            "Baby wipes",
            "Hand sanitizer",
            "Multi-tool",
            "Firestarter",
            "Backup lighter",
            "Roasting sticks",
          ])}

          {section("Kitchen & Coffee Bin", [
            "Coleman stove",
            "Propane fuel",
            "Pot or kettle",
            "Pan / skillet",
            "Spatula + tongs",
            "Knife + cutting board",
            "Plates / bowls / utensils",
            "Dish soap + sponge",
            "Pour-over cone",
            "Coffee filters",
            "Ground coffee",
            "Creamer + sugar",
            "Coffee mugs",
          ])}

          {section("Food & Cooler", [
            "Ice",
            "Milk / creamer",
            "Breakfast food",
            "Easy lunches",
            "Kid-safe dinners",
            "Hot dogs / burgers",
            "Marshmallows",
            "Chocolate + graham crackers",
            "Fruit",
            "Backup snacks",
            "Drinks",
          ])}

          {section("Kids Activity Bin", [
            "Glow sticks",
            "Coloring books",
            "Crayons / markers",
            "Small toys",
            "Bubbles",
            "Books",
            "Card games",
            "Bikes / scooters",
            "Helmets",
            "Kid emergency bag",
            "Extra clothes",
          ])}

          {section("Clothing", [
            "2 outfits per kid",
            "Warm nighttime clothes",
            "Jackets / hoodies",
            "Extra socks",
            "Sleepwear",
            "Camp shoes",
            "Rain jackets",
            "Beanies if cold",
          ])}

          {section("Before Leaving Campsite", [
            "Tent emptied completely",
            "Lanterns packed",
            "Stakes removed",
            "Trash removed",
            "Food packed",
            "Toys collected",
            "Fire fully extinguished",
            "Final campsite walkaround",
          ])}

          {/* LESSONS */}
          <div className="mt-10 border-2 border-stone-400 rounded-xl p-6 bg-[#fcfaf4] print:mt-6 print:bg-white">
            <h2 className="text-3xl text-center uppercase tracking-wide text-emerald-950 mb-5 print:text-xl print:mb-3">
              Lessons Learned
            </h2>

            <div className="space-y-4">
              <div className="font-semibold mb-1 text-stone-700 print:text-xs">
                Notes
              </div>

              <div className="space-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-stone-400 h-6"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-stone-600 italic text-sm print:text-xs">
            “The goal is not perfect camping. The goal is camping that gets repeated.”
          </div>

        </div>
      </div>
    </div>
  );
}