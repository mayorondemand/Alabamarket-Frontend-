
interface PageProps {
  title: string;
  description: string;
}

const Page = ({ title, description }: PageProps) => {
return <div>
   <div className="flex flex-col items-center justify-center">
    <div className=" flex flex-col py-8 items-center justify-center w-fit rounded-lg text-center font-Poppins p-6  md:w-5/6">
      {/* SVGs */}
      <div className="mb-8">
        {/* Desktop SVG */}
        <div className="hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="124" viewBox="0 0 125 124" fill="none">
  <path d="M105.745 46.0339L100.578 54.9722L37.9067 18.8055L43.0733 9.86719L58.78 18.9089L65.8067 16.9972L88.1783 29.9139L90.09 36.9922L105.745 46.0339ZM31.5 98.1655V36.1655H57.695L93.5 56.8322V98.1655C93.5 100.906 92.4113 103.534 90.4734 105.472C88.5356 107.41 85.9072 108.499 83.1667 108.499H41.8333C39.0928 108.499 36.4644 107.41 34.5266 105.472C32.5887 103.534 31.5 100.906 31.5 98.1655Z" fill="#A68200"/>
</svg>
        </div>
        {/* Mobile SVG */}
        <div className="md:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
  <path d="M68.4 29.7005L65.0667 35.4672L24.6333 12.1339L27.9667 6.36719L38.1 12.2005L42.6333 10.9672L57.0667 19.3005L58.3 23.8672L68.4 29.7005ZM20.5 63.3339V23.3339H37.4L60.5 36.6672V63.3339C60.5 65.102 59.7976 66.7977 58.5474 68.0479C57.2971 69.2981 55.6014 70.0005 53.8333 70.0005H27.1667C25.3986 70.0005 23.7029 69.2981 22.4526 68.0479C21.2024 66.7977 20.5 65.102 20.5 63.3339Z" fill="#A68200"/>
</svg>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-primary font-[700] text-[28px] md:text-[36px] mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-grey font-[400] text-[15px] md:text-[17px] max-w-md">
  {description}
      </p>

      
    </div>
</div>
</div>
}
export default Page