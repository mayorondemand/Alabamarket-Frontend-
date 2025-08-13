
'use client';

import Image from 'next/image';
import Link from 'next/link';
import SearchPage from '../components/Buyers/Search';
const categories = [
  {
    name: 'Computer Accessories',
    products: [
      { title: 'Keyboards & Mice', image: '/images/keyboard-mouse.png' },
      { title: 'External Hard Drives', image: '/images/external-drive.png' },
      { title: 'USB Hubs', image: '/images/usb-hub.png' },
      { title: 'Laptop Cooling Pads', image: '/images/cooling-pad.png' },
      { title: 'Webcams', image: '/images/webcam.png' },
      { title: 'Headsets & Microphones', image: '/images/headset.png' },
      { title: 'Monitors', image: '/images/monitor.png' },
    ],
  },
  {
    name: 'Cable Trays',
    products: [
      { title: 'Perforated Cable Trays', image: '/images/perforated-tray.png' },
      { title: 'Ladder Cable Trays', image: '/images/ladder-tray.png' },
      { title: 'Wire Mesh Trays', image: '/images/wire-mesh-tray.png' },
      { title: 'Solid Bottom Trays', image: '/images/solid-bottom-tray.png' },
      { title: 'Channel Cable Trays', image: '/images/channel-tray.png' },
    ],
  },
  {
    name: 'Switches & Sockets',
    products: [
      { title: 'Light Switches', image: '/images/light-switch.png' },
      { title: 'Power Sockets', image: '/images/power-socket.png' },
      { title: 'Smart Plugs', image: '/images/smart-plug.png' },
      { title: 'Dimmer Switches', image: '/images/dimmer-switch.png' },
      { title: 'USB Wall Sockets', image: '/images/usb-wall-socket.png' },
    ],
  },
  {
    name: 'Refrigerators',
    products: [
      { title: 'Single Door', image: '/images/single-door-fridge.png' },
      { title: 'Double Door', image: '/images/double-door-fridge.png' },
      { title: 'Side-by-Side', image: '/images/side-by-side-fridge.png' },
      { title: 'Mini Fridges', image: '/images/mini-fridge.png' },
      { title: 'French Door', image: '/images/french-door-fridge.png' },
    ],
  },
  {
    name: 'Mixer Grinders',
    products: [
      { title: 'Table Top Grinders', image: '/images/table-top-grinder.png' },
      { title: 'Juicer Mixer Grinders', image: '/images/juicer-mixer.png' },
      { title: 'Heavy Duty Grinders', image: '/images/heavy-duty-grinder.png' },
      { title: 'Mini Mixers', image: '/images/mini-mixer.png' },
    ],
  },
  {
    name: 'Fuse & Accessories',
    products: [
      { title: 'Glass Tube Fuses', image: '/images/glass-fuse.png' },
      { title: 'Cartridge Fuses', image: '/images/cartridge-fuse.png' },
      { title: 'Fuse Holders', image: '/images/fuse-holder.png' },
      { title: 'Resettable Fuses', image: '/images/resettable-fuse.png' },
      { title: 'High Voltage Fuses', image: '/images/high-voltage-fuse.png' },
    ],
  },
  {
    name: 'Switchboards & Panels',
    products: [
      { title: 'Distribution Boards', image: '/images/distribution-board.png' },
      { title: 'Control Panels', image: '/images/control-panel.png' },
      { title: 'Meter Boards', image: '/images/meter-board.png' },
      { title: 'Industrial Panels', image: '/images/industrial-panel.png' },
      { title: 'Weatherproof Boards', image: '/images/weatherproof-board.png' },
    ],
  },
];

export default function Categories() {
  return (
    <main className="container flex flex-col gap-4 md:py-10">
        <div className="flex items-center gap-4 mb-4">
           <Link href={`/`}> <h6 className="font-[400]  text-prevPage text-[14px] md:text-[21px]">Home</h6></Link>
            <p
              className="text-primary text-[14px]  font-[500] underline md:text-[17px]"
            >
              All categories 
            </p>
          </div>
        <SearchPage />

      {categories.map((cat, index) => (
        <section key={index} className={`  ${index==0?`mt-5`:`mt-5`}`}>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-primary font-[600] text-[21px] md:text-[27px]">{cat.name}</h6>
            <Link
              href={`/categories/${encodeURIComponent(cat.name)}`}
              className="text-primary text-[11px]  font-semibold underline md:text-[17px]"
            >
              View all
            </Link>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {cat.products.map((product: { title: string; image: string }, pIdx: number) => (
              <Link
                key={pIdx}
                href={`/search?name=${encodeURIComponent(product.title)}`}
                className="                      rounded-lg     flex flex-col  rounded-lg items-center  p-2 text-center text-center bg-categoryBg md:mb-0 md:p-4
 "
              >

                <div className="rounded-full overflow-hidden">
                  <Image
                    src={`/categories.png`}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-cover h-[55px] w-[55px] md:h-[100px] md:w-[100px]"
                  />
                </div>
                <p className="mt-2 text-sm text-primary font-medium">{product.title}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
