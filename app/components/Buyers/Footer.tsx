
'use client';
import { Instagram, Facebook, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerSections = [
  {
    title: 'Quick links',
    links: ['Home', '/Categories', '/search', 'Saved Items', 'My Profile'],
  },
  {
    title: 'Company Info',
    links: ['About us', 'FAQs', 'Terms of use', 'Privacy policy', 'Contact support'],
  },
  {
    title: 'Sell on Alaba Market',
    links: ['About us', 'FAQs', 'Terms of use', 'Privacy policy', 'Contact support'],
  },
];

const socialLinks = [
  {
    href: '/instagram',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: '/facebook',
    icon: Facebook,
    label: 'Facebook',
  },
  {
    href: '/twitter',
    icon: X,
    label: 'Twitter',
  },
];

const Footer = () => {
    const pathname = usePathname();

    const hideFooterRoutes = ["/buyer/chats","/auth/signup"];
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  return (
    <footer className={`bg-primary text-white container py-14 mt-10 ${shouldHideFooter?'hidden':'' } `}>
      {/* <div className="grid grid-cols-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className='col-span-1'>
          <div className=" rounded-md inline-flex  mb-4">
            <Image src='./ALABA LOGO.PNG' alt="alaba-market-logo" className='w-full' width={200} height={200}/> 
          </div>
          <p className="text-sm leading-relaxed">
            See what’s newly posted by verified sellers
          </p>

          <div className="flex gap-3 mt-4">
             <Image
              src="/Google play.png"
              alt="Google Play"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/apple.png"
              alt="App Store"
              width={120}
              height={40}
              className="object-contain"
            />
           
          </div>
        </div>

        {footerSections.map((section, idx) => (
          <div key={idx} className='md:ml-8'>
            <h3 className="font-bold text-white mb-3 text-lg">{section.title}</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-bold text-white text-lg mb-3">Social media</h3>
          <div className="flex gap-3 mb-4">
            {socialLinks.map(({ href, icon: Icon, label }, i) => (
              <Link
                key={i}
                href={href}
                aria-label={label}
                className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-yellow-600"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Alaba Market, <br />
            112303, <br />
            Lagos, Nigeria
          </p>
        </div>
      </div> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
  {/* First column (logo/info) - full width on mobile */}
  <div className="sm:col-span-2  lg:col-span-1">
    <div className="rounded-md inline-flex mb-4">
                        <Image src="/ALABALOGO.png" alt="alaba-market-logo" className="" width={140} height={140} />
      
    </div>
    <p className="text-sm leading-relaxed">
      See what’s newly posted by verified sellers
    </p>

    <div className="flex gap-3 mt-4">
      <Image
        src="/googleplay.png"
        alt="Google Play"
        width={120}
        height={40}
        className="object-contain"
      />
      <Image
        src="/apple.png"
        alt="App Store"
        width={120}
        height={40}
        className="object-contain"
      />
    </div>
  </div>

  <div className="sm:col-span-2 grid-cols-2 md:grid-cols-3 lg:col-span-4 grid lg:grid-cols-4 gap-6 lg:ml-20 lg:pl-14">
    {footerSections.map((section, idx) => (
      <div key={idx}>
        <h3 className="font-bold text-white mb-3 text-lg">{section.title}</h3>
        <ul className="space-y-2 text-sm text-white/80">
          {section.links.map((link, i) => (
            <li key={i}>
              <Link href="#" className="hover:underline">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}

    <div>
      <h3 className="font-bold text-white text-lg mb-3">Social media</h3>
      <div className="flex gap-3 mb-4">
        {socialLinks.map(({ href, icon: Icon, label }, i) => (
          <Link
            key={i}
            href={href}
            aria-label={label}
            className="bg-white w-9 h-9 rounded-full flex items-center justify-center text-yellow-600"
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>
      <p className="text-sm text-white/80 leading-relaxed">
        Alaba Market, <br />
        112303, <br />
        Lagos, Nigeria
      </p>
    </div>
  </div>
</div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70">
        © 2025 Alaba Market. Powered by <strong>Bluconvalley Limited</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
