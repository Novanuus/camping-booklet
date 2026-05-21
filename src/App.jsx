export default function VintageCampingChecklist() {

  // =====================================================
  // SHARED SECTION RENDERER
  // =====================================================

  const section = (title, items, compact = false) => (
    <div
      className={`
        ${compact ? "mb-2" : "mb-8"}
        break-inside-avoid
      `}
    >
      <div className="border-b-2 border-emerald-900 mb-2 pb-1 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-900 flex-shrink-0" />

        <h2
          className={`
            uppercase tracking-wide text-emerald-950
            ${compact ? "text-[11px] font-bold" : "text-2xl font-serif"}
          `}
        >
          {title}
        </h2>
      </div>

      <div
        className={`
          grid
          ${compact ? "grid-cols-2 gap-y-[2px]" : "grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2"}
        `}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex items-start gap-2 text-stone-800
              ${compact ? "text-[8px]" : "text-sm"}
            `}
          >
            <div
              className={`
                border-2 border-stone-700 mt-[2px] flex-shrink-0
                ${compact ? "w-2 h-2" : "w-5 h-5"}
              `}
            />

            <span className="leading-tight break-words">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );



  // =====================================================
  // DATA
  // =====================================================

  const criticalItemsSection = {
    title: "Critical Items",
    items: [
      "Tent System (Tent, stakes, footprint)",
      "Sleeping setup for everyone",
      "Cooler + food",
      "Coleman stove + propane",
      "Coffee setup",
      "Water jug + bottles",
      "Toiletries / Medications / Supplements",
      "Phone + charger",
      "Wallet / ID / Keys",
      "Reservation information",
    ],
  };

  const beforeLeavingSection = {
    title: "Before Leaving Campsite",
    items: [
      "Tent emptied completely",
      "Lanterns packed",
      "Stakes removed",
      "Trash removed",
      "Food packed",
      "Toys collected",
      "Fire fully extinguished",
      "Final campsite walkaround",
    ],
  };

  const leftSections = [
    {
      title: "Sleep System Bin",
      items: [
        "Tent",
        "Sleep System (▢ Dad, ▢ Luke, ▢ Emma)",
        "Extra blanket",
        "Pajamas",
        "Warm layers",
        "Stuffed animals / comfort items",
        "Headlamps / Lanterns",
        "Power bank / batteries",
        "Hammock + Paracord",
      ],
    },

    {
      title: "Camp Setup Bin",
      items: [
        "Camp chairs",
        "Trash bags",
        "Paper towels",
        "Bug spray / Sunscreen",
        "Baby wipes",
        "Hand sanitizer",
        "Multi-tool",
        "Firestarter",
        "Backup lighter",
        "Roasting sticks",
        "Mosquito Repellant Lights",
        "Music Speaker",
      ],
    },

    {
      title: "Clothing",
      items: [
        "2 outfits per kid",
        "Warm nighttime clothes",
        "Jackets / hoodies",
        "Extra socks",
        "Sleepwear",
        "Camp shoes",
        "Rain jackets",
        "Beanies if cold",
      ],
    },
  ];



  const rightSections = [
    {
      title: "Kitchen & Coffee Bin",
      items: [
        "Coleman stove + Fuel",
        "Cookware + Tools",
        "Knife + cutting board",
        "Plates / bowls / utensils",
        "Dish soap + sponge",
        "Coffee Setup (Mugs, Creamer, Grounds)",
        "Aeropress, Moka Pot, Filters",
        "Backup Instant Coffee",
      ],
    },

    {
      title: "Food & Cooler",
      items: [
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
        "Drinks (Water / OJ / Camp drinks)",
        "S'MORES / Banana boats / Special Camp treats",
      ],
    },

    {
      title: "Kids Activity Bin",
      items: [
        "Glow sticks",
        "Coloring books / crayons / markers",
        "Bubbles",
        "Books",
        "Card games",
        "Bikes / scooters / helmets",
        "Kid emergency bag",
        "Extra clothes",
      ],
    },
  ];



  // =====================================================
  // WEB VIEW
  // =====================================================

  const webView = (
    <div className="print:hidden bg-[#f6f1e7] min-h-screen text-stone-900 font-serif p-8 md:p-14">

      <div className="max-w-[1000px] mx-auto bg-[#f8f4ea] border-[10px] border-emerald-950 rounded-3xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="border-b-[12px] border-emerald-950 px-10 py-14 bg-[linear-gradient(to_bottom,#f6f1e7,#efe6d3)]">

          <div className="text-center">

            <div className="text-sm tracking-[0.35em] uppercase text-stone-700 mb-4">
              Family Field Guide Series
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-emerald-950 mb-4">
              CAMP CHECKLIST
            </h1>

            <div className="text-xl italic text-stone-700 mb-6">
              Early Trips Edition
            </div>

            <div className="w-40 h-[2px] bg-stone-500 mx-auto mb-6" />

            <p className="max-w-2xl mx-auto text-stone-700 leading-relaxed text-lg">
              Designed for simple, comfortable campground camping with young kids.
              Focus on warm beds, easy meals, campfire memories, and stress-free packing.
            </p>

          </div>
        </div>

        {/* BODY */}
        <div className="px-10 py-10">

          {/* TOP BOXES */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <div className="border-2 border-stone-400 rounded-2xl p-5 bg-[#fcfaf4]">

              <h3 className="text-xl uppercase tracking-wide mb-3 text-emerald-950">
                Trip Overview
              </h3>

              <div className="space-y-3 text-sm">
                {["Campground", "Dates", "Weather Forecast", "Campsite #"].map((label, i) => (
                  <div key={i}>
                    <div className="mb-1 text-stone-600">
                      {label}
                    </div>

                    <div className="border-b border-stone-500 h-5" />
                  </div>
                ))}
              </div>
            </div>


            <div className="border-2 border-stone-400 rounded-2xl p-5 bg-[#fcfaf4]">

              <h3 className="text-xl uppercase tracking-wide mb-3 text-emerald-950">
                Golden Rules
              </h3>

              <div className="space-y-2 text-stone-800 text-sm">
                <div>• Keep meals simple</div>
                <div>• One guaranteed kid-safe meal</div>
                <div>• Coffee packed first</div>
                <div>• Warm layers before sunset</div>
                <div>• More snacks than expected</div>
                <div>• Happy kids = successful trip</div>
                <div>• Teach kids responsibility</div>
              </div>

            </div>

          </div>

          {/* ALL SECTIONS */}
          {[criticalItemsSection, ...leftSections, ...rightSections, beforeLeavingSection].map((sectionData, idx) => (
            <div key={idx}>
              {section(sectionData.title, sectionData.items)}
            </div>
          ))}

          {/* NOTES */}
          <div className="mt-10 border-2 border-stone-400 rounded-xl p-6 bg-[#fcfaf4]">

            <h2 className="text-3xl text-center uppercase tracking-wide text-emerald-950 mb-5">
              Lessons Learned
            </h2>

            <div className="space-y-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-stone-400 h-6"
                />
              ))}
            </div>

          </div>

          <div className="mt-10 text-center text-stone-600 italic text-sm">
            “The goal is not perfect camping. The goal is camping that gets repeated.”
          </div>

        </div>
      </div>
    </div>
  );



  // =====================================================
  // PRINT BOOKLET VIEW
  // =====================================================

  const printView = (
    <div className="hidden print:grid booklet-sheet">

      {/* BACK PAGE */}
      <div className="booklet-panel bg-[#fcfaf4]">

        <div className="h-full flex flex-col">

          {/* ===================== */}
          {/* BEFORE LEAVING */}
          {/* ===================== */}

          <div className="space-y-[2px] text-[8px] leading-tight mb-5">

            {section(
              beforeLeavingSection.title,
              beforeLeavingSection.items,
              true
            )}

          </div>


          {/* LESSONS LEARNED */}
          <div className="border-2 border-stone-400 rounded-xl p-3 bg-[#fcfaf4]">

            <h2 className="text-[10px] text-center uppercase tracking-wide text-emerald-950 mb-2 font-bold">
              Lessons Learned
            </h2>

            <div className="space-y-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="border-b border-stone-400 h-4"
                />
              ))}
            </div>

          </div>


          {/* FOOTER QUOTE */}
          <div className="mt-2 text-center text-[7px] text-stone-600 italic">
            “The goal is not perfect camping. The goal is camping that gets repeated.”
          </div>

        </div>
      </div>



      {/* COVER */}
      <div className="booklet-panel bg-[#efe6d3]">

        <div className="h-full flex flex-col">

          {/* ================================================= */}
          {/* TOP */}
          {/* ================================================= */}

          <div className="text-center mb-2 leading-none">

            <div className="text-[9px] uppercase tracking-[0.3em] text-stone-700 mb-1">
              Family Field Guide Series
            </div>

            <h1 className="text-xl font-bold tracking-wide text-emerald-950 mb-2 leading-tight">
              CAMP CHECKLIST
            </h1>

            <div className="italic text-[8px] text-stone-700 mb-2">
              Early Trips Edition
            </div>

            <div className="w-12 h-[1px] bg-stone-500 mx-auto mb-2" />

            <div className="text-[7px] text-stone-700 leading-snug px-2 mb-4">
              Stress-free camping with young kids.
            </div>

          </div>



          {/* ================================================= */}
          {/* MIDDLE */}
          {/* ================================================= */}

          <div className="grid grid-cols-2 gap-1 mb-4">

            {/* TRIP INFO */}
            <div className="border border-stone-400 rounded-md p-1 bg-[#fcfaf4]">

              <h3 className="text-[9px] uppercase tracking-wide mb-2 text-emerald-950 font-bold">
                Trip Info
              </h3>

              <div className="space-y-[1px] text-[10px] leading-tight text-left">

                {["Campground", "Dates", "Weather", "Site #"].map((label, i) => (
                  <div key={i}>

                    <div className="text-stone-600 mb-[1px]">
                      {label}
                    </div>

                    <div className="border-b border-stone-400 h-3" />

                  </div>
                ))}

              </div>
            </div>



            {/* GOLDEN RULES */}
            <div className="border border-stone-400 rounded-md p-1 bg-[#fcfaf4]">

              <h3 className="text-[12px] uppercase tracking-wide mb-2 text-emerald-950 font-bold">
                Golden Rules
              </h3>

              <div className="space-y-[3px] text-[10px] text-stone-800 leading-tight">

                <div>• Keep meals simple</div>
                <div>• Kid-safe backup meals</div>
                <div>• Coffee packed first</div>
                <div>• Warm layers before sunset</div>
                <div>• More snacks than expected</div>
                <div>• Happy kids = successful trip</div>

              </div>

            </div>

          </div>



          {/* ================================================= */}
          {/* BOTTOM */}
          {/* ================================================= */}

          <div className="flex-1 overflow-hidden">

            {section(
              criticalItemsSection.title,
              criticalItemsSection.items,
              true
            )}

          </div>

        </div>
      </div>



      {/* INSIDE LEFT */}
      <div className="booklet-panel rotate-180">

        {leftSections.map((sectionData, idx) => (
          <div key={idx}>
            {section(sectionData.title, sectionData.items, true)}
          </div>
        ))}

      </div>



      {/* INSIDE RIGHT */}
      <div className="booklet-panel rotate-180">

        {rightSections.map((sectionData, idx) => (
          <div key={idx}>
            {section(sectionData.title, sectionData.items, true)}
          </div>
        ))}

      </div>

    </div>
  );



  // =====================================================
  // RETURN
  // =====================================================

  return (
    <>
      {webView}
      {printView}
    </>
  );
}