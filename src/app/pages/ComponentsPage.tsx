import SearchBarClick from "../../imports/SearchBarClick";
import SearchBar from "../components/SearchBar";
import NavGroup from "../components/NavGroup";
import Card from "../../imports/Card";
import Listings from "../components/Listings";
import Subscribe from "../components/Subscribe";
import InputFieldStates from "../components/InputFieldStates";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ComponentsPage() {
  const [searchBarOpen, setSearchBarOpen] = useState(true);

  const exploreItems = [
    { label: "Game Highlights", onClick: () => console.log("Game Highlights") },
    { label: "Player Profiles", onClick: () => console.log("Player Profiles") },
    { label: "Team News", onClick: () => console.log("Team News") },
    { label: "Schedule", onClick: () => console.log("Schedule") },
    { label: "Standings", onClick: () => console.log("Standings") }
  ];

  const mediaItems = [
    { label: "Podcasts", onClick: () => console.log("Podcasts") },
    { label: "Interviews", onClick: () => console.log("Interviews") },
    { label: "Press Conferences", onClick: () => console.log("Press Conferences") },
    { label: "Behind the Scenes", onClick: () => console.log("Behind the Scenes") }
  ];

  const lakingsItems = [
    { label: "Official Site", onClick: () => console.log("Official Site") },
    { label: "Tickets", onClick: () => console.log("Tickets") },
    { label: "Shop", onClick: () => console.log("Shop") }
  ];

  const listingItems = [
    {
      category: "FEATURED STORIES",
      headline: "Looking back on this date in LA Kings History",
      author: "Zach Dooley",
      date: "Feb 6, 2021",
      commentCount: 54,
      onClick: () => console.log("Featured story clicked")
    },
    {
      category: "OFF THE ICE",
      headline: "Kings Care Happenings - Fan Cutouts, Blood Drive, Royal Readers, Heros, O'Ree",
      author: "Zach Dooley",
      date: "Feb 6, 2021",
      commentCount: 54,
      onClick: () => console.log("Off the ice clicked")
    },
    {
      category: "OFF THE ICE",
      headline: "Kings Care Happenings - Fan Cutouts, Blood Drive, Royal Readers, Heros, O'Ree",
      author: "Zach Dooley",
      date: "Feb 6, 2021",
      commentCount: 54,
      onClick: () => console.log("Off the ice clicked")
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
      <h1 className="text-[24px] font-bold text-[#0f172b] mb-2">Components</h1>
      <p className="text-[#45556c] text-[14px] mb-12">Design system components will be displayed here.</p>
      
      {/* Search Bar Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start mb-16">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Search Bar
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            A search input field for site-wide content discovery and navigation. Click to expand and view trending searches.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import SearchBar from '../components/SearchBar';\n\n<SearchBar \n  isOpen={searchBarOpen} \n  onClose={() => setSearchBarOpen(false)} \n/>`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">isOpen</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">boolean</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Controls the open/closed state of the search bar</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">onClose</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">() =&gt; void</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Callback function to close the search bar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Interactive Example
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full overflow-hidden">
            {!searchBarOpen && (
              <button
                onClick={() => setSearchBarOpen(true)}
                className="w-full py-4 px-6 bg-[#111] text-white rounded-lg hover:bg-[#333] transition-colors"
              >
                Click to Open Search Bar
              </button>
            )}
            <SearchBar isOpen={searchBarOpen} onClose={() => setSearchBarOpen(false)} />
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>Click to expand and show search input</li>
              <li>Type to search (or select from trending suggestions)</li>
              <li>Click "CLEAR" or outside to close</li>
              <li>Fully responsive on mobile and desktop</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Dropdown Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start mb-16">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Navigation Dropdown
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            A dropdown menu for navigation bars. Appears on hover or click with smooth transitions and hover states.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import NavGroup from '../components/NavGroup';\n\n<NavGroup\n  sections={[\n    { label: "EXPLORE", items: exploreItems },\n    { label: "AUDIO & VIDEO", items: mediaItems },\n    { label: "LAKINGS.COM", items: lakingsItems }\n  ]}\n/>`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">sections</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">Array</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Array of section objects with label and items properties</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">sections[].label</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Section heading text (displayed in uppercase)</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">sections[].items</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">Array</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Array of menu item objects with label and onClick</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Interactive Example
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full">
            <div className="bg-[#111] px-8 py-6 rounded-lg">
              <div className="flex flex-wrap gap-6 md:gap-12 items-center justify-center">
                <NavGroup
                  sections={[
                    { label: "EXPLORE", items: exploreItems },
                    { label: "AUDIO & VIDEO", items: mediaItems },
                    { label: "LAKINGS.COM", items: lakingsItems }
                  ]}
                />
              </div>
            </div>
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>Hover or click to open dropdown menu</li>
              <li>Idle state: transparent background (no fill)</li>
              <li>Hover state: black background with white text</li>
              <li>Triangle arrow pointer at top of menu</li>
              <li>Auto-closes when mouse leaves or clicking outside</li>
              <li>Smooth transitions and animations</li>
              <li>Mobile: Hamburger icon opens full-screen overlay with collapsible sections</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start mb-16">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Card
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            Figma-imported content card with multiple size variants (Large, Small, Small Mobile). Displays category, headline, body text, and author metadata.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import Card from '../../imports/Card';\n\n<Card \n  states="Large" \n  imageUrl="https://example.com/image.jpg" \n/>`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">states</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">"Large" | "Small" | "Small Mobile"</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Determines the size and layout variant of the card</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">imageUrl</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">No</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">URL for the card image (defaults to placeholder)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Variant: Large */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Variant: Large
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full flex justify-center">
            <Card states="Large" imageUrl="https://images.unsplash.com/photo-1771938429358-09d2637c1eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9uJTIwaWNlfGVufDF8fHx8MTc3MzU0MTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
          </div>
        </div>

        {/* Variant: Small */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Variant: Small
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]\">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full flex justify-center">
            <Card states="Small" imageUrl="https://images.unsplash.com/photo-1771938429358-09d2637c1eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9uJTIwaWNlfGVufDF8fHx8MTc3MzU0MTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
          </div>
        </div>

        {/* Variant: Small Mobile */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Variant: Small Mobile
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]\">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full">
            <div className="max-w-[380px] w-full mx-auto">
              <Card states="Small Mobile" imageUrl="https://images.unsplash.com/photo-1771938429358-09d2637c1eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9uJTIwaWNlfGVufDF8fHx8MTc3MzU0MTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
            </div>
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>Three size variants: Large (790px vertical with 497px image), Small (380px vertical with 260px image), Small Mobile (horizontal layout with 120px square image)</li>
              <li>Small Mobile variant uses horizontal layout: image on left, content on right with compact spacing</li>
              <li>Category label in uppercase (13px Nunito Sans Black for Large/Small, 11px for Small Mobile)</li>
              <li>Headlines: Large uses 28px Flama Semibold, Small uses 19px, Small Mobile uses 14px</li>
              <li>Body text with 16px Nunito Sans and proper line height (Large and Small variants only)</li>
              <li>Author metadata with timestamp and comment count (13px Nunito Sans Medium)</li>
              <li>Image placeholder with rose background (#ab5b5b)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Listings Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start mb-16">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Listings
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            A list of content items with category, headline, author, date, comment count, and click functionality. Ideal for displaying multiple articles or news items.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import Listings from '../components/Listings';\n\n<Listings items={listingItems} />`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">Array</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Array of listing item objects</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].category</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Category label for the listing item</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].headline</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Headline text for the listing item</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].author</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Author name</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].date</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">string</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Publication date</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].commentCount</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">number</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Number of comments</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">items[].onClick</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">() =&gt; void</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">No</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Click handler for the listing item</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Interactive Example
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full flex justify-center">
            <Listings items={listingItems} />
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>378px max width with full responsiveness</li>
              <li>Section title "EDITOR'S PICKS" with double underline (gray base, black accent)</li>
              <li>Category labels in uppercase (13px Nunito Sans Black)</li>
              <li>Headlines using Body (Large) Bold typography (19px Flama Semibold)</li>
              <li>Author metadata with date and comment count (13px Nunito Sans Medium)</li>
              <li>Divider lines between listing items (0.25px stroke)</li>
              <li>Clickable items with hover effects on category and headline</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscribe Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start mb-16">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Subscribe Component
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            An email subscription form with input field states, validation, and privacy policy opt-in. Perfect for newsletter signups.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import Subscribe from '../components/Subscribe';\n\n<Subscribe \n  onSubmit={(email) => {\n    console.log("Subscribed:", email);\n  }}\n/>`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 font-mono text-[12px] text-[#0f172b]">onSubmit</td>
                  <td className="py-2 px-3 font-mono text-[12px] text-[#45556c]">(email: string) =&gt; void</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Yes</td>
                  <td className="py-2 px-3 text-[12px] text-[#45556c]">Callback function called when form is submitted with valid email</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Input Field States */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
            Input Field States
          </p>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full">
            <InputFieldStates />
          </div>
        </div>

        {/* Interactive Example */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Interactive Example
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] p-4 md:p-[25px] w-full flex justify-center">
            <Subscribe 
              onSubmit={(email) => {
                console.log("Subscribed with email:", email);
                alert(`Successfully subscribed with ${email}!`);
              }}
            />
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>585px max width with full responsiveness</li>
              <li>Title "GET THE INSIDER SCOOP" (23px Flama Semibold uppercase)</li>
              <li>Email input with four states: Default, Hover, Focused, Error</li>
              <li>Email validation with console logging</li>
              <li>Black "REGISTER" button (15px Flama Bold uppercase)</li>
              <li>Privacy policy opt-in messaging (13px Nunito Sans)</li>
              <li>Smooth state transitions and hover effects</li>
              <li>Form submission with validation (email required, valid format)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Component Documentation */}
      <div className="content-stretch flex flex-col gap-[24px] items-start">
        {/* Component Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <h3 className="font-bold text-[20px] text-[#0f172b] leading-[28px] tracking-[-0.4492px]">
            Footer
          </h3>
          <p className="font-normal text-[14px] text-[#45556c] leading-[20px] tracking-[-0.1504px]">
            A comprehensive site footer with logo, navigation links, social media icons, copyright information, and scroll-to-top functionality.
          </p>
        </div>

        {/* Usage Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Usage
          </p>
          <div className="bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] p-4 w-full font-mono text-[13px] overflow-x-auto">
            <code className="text-[#0f172b]">
              {`import Footer from '../components/Footer';\n\n<Footer />`}
            </code>
          </div>
        </div>

        {/* Props Section */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-semibold text-[16px] text-[#314158] leading-[24px] tracking-[-0.2px]">
            Props
          </p>
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Prop</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Type</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Required</th>
                  <th className="text-left py-2 px-3 font-semibold text-[13px] text-[#314158]">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 px-3 text-[12px] text-[#45556c]" colSpan={4}>This component does not accept any props.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
          <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
            <p className="font-semibold text-[14px] text-[#314158] leading-[20px] tracking-[-0.1504px]">
              Interactive Example
            </p>
            <button className="h-[26px] px-[13px] py-[5px] rounded-[4px] border border-[#e2e8f0] flex items-center justify-center">
              <span className="font-semibold text-[12px] text-[#90a1b9] leading-[16px]">Copy Code</span>
            </button>
          </div>
          
          <div className="bg-white rounded-[10px] border border-[#e2e8f0] overflow-hidden w-full">
            <Footer />
          </div>
          
          <div className="w-full mt-4">
            <p className="font-normal text-[13px] text-[#45556c] leading-[18px] mb-2">
              <strong>Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-[13px] text-[#45556c]">
              <li>Dark background (#111) with LA Kings Insider logo</li>
              <li>Three columns of navigation links</li>
              <li>Social media icons (Facebook, Instagram, Twitter, YouTube) with hover states</li>
              <li>Privacy Policy and Terms of Service links</li>
              <li>Copyright notice (© 2021 LA KINGS INSIDER)</li>
              <li>Back to Top button positioned in bottom right corner of footer</li>
              <li>Fully responsive layout (stacks vertically on mobile)</li>
              <li>Responsive padding adjusts from mobile (16px) to desktop (120px)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}