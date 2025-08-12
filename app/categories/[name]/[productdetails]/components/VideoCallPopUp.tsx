

interface VideoCallPopUpProps {
  showPopUp: boolean;
  setShowPopUp: (show: boolean) => void;
}

const VideoCallPopUp = ({showPopUp, setShowPopUp}: VideoCallPopUpProps) => {
const user=false

  return (
  <>
  {user?  <div
      className={`fixed font-Poppins inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px] flex items-end md:items-center justify-center z-50 transition-all duration-300 ease-in-out
      ${showPopUp ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}
    >
      <div
        className="bg-white relative py-8 px-10 max-w-3xl rounded-tr-[16px] rounded-tl-[16px] md:rounded-[16px] shadow-lg w-fit  flex flex-col items-center text-center gap-6"
      >
        {/* Close Button */}
           <div className="flex items-center absolute top-8 right-10 justify-end ">
              <div className='cursor-pointer' onClick={() => {
        setShowPopUp(false);
      }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_35066"maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_35066)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg></div></div> 

        {/* Video Icon */}
        <div className="my-20 flex flex-col gap-5">
            <div className="flex justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 115 114" fill="none">
  <g clip-path="url(#clip0_627_22759)">
    <path d="M46.8125 85.501C46.8125 90.5313 47.7601 95.3335 49.4844 99.751H0.500002C0.497391 89.2482 3.81045 79.0126 9.9669 70.5034C16.1233 61.9941 24.8089 55.6455 34.7855 52.3627C30.0146 49.2455 26.2878 44.7695 24.0864 39.5129C21.885 34.2562 21.3101 28.4603 22.436 22.8736C23.5618 17.287 26.3367 12.1661 30.4023 8.17242C34.4679 4.17873 39.6374 1.49563 45.2433 0.469609C50.8492 -0.55641 56.6339 0.121783 61.8504 2.4166C67.067 4.71143 71.4757 8.51747 74.5073 13.3432C77.5389 18.169 79.0541 23.7928 78.8573 29.4884C78.6604 35.184 76.7606 40.6897 73.403 45.2947C71.3866 48.052 68.5437 49.9758 65.7009 51.8995C64.7176 52.5503 63.7534 53.22 62.8081 53.9088C57.8493 57.5496 53.8173 62.3067 51.0384 67.7951C48.2595 73.2836 46.8118 79.3492 46.8125 85.501Z" fill="#A68200"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M114.5 85.5C114.5 93.0587 111.497 100.308 106.153 105.653C100.808 110.997 93.5587 114 86 114C78.4413 114 71.1922 110.997 65.8475 105.653C60.5027 100.308 57.5 93.0587 57.5 85.5C57.5 77.9413 60.5027 70.6922 65.8475 65.3475C71.1922 60.0027 78.4413 57 86 57C93.5587 57 100.808 60.0027 106.153 65.3475C111.497 70.6922 114.5 77.9413 114.5 85.5ZM80.6562 71.25V80.1562H71.75V90.8438H80.6562V99.75H91.3438V90.8438H100.25V80.1562H91.3438V71.25H80.6562Z" fill="#A68200"/>
  </g>
  <defs>
    <clipPath id="clip0_627_22759">
      <rect width="114" height="114" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>
        </div>

        {/* Title */}
        <h2 className="text-primary font-[700] text-[33px] md:text-[41px]">Sign Up to Contact This Seller</h2>

        {/* Description */}
        <p className="text-grey font-[400] text-[17px]  tex-center">
            To protect our sellers and give you a safer shopping experience, you'll need to create a free account before starting a call or video chat. It only takes a few seconds!
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-5 w-full md:flex-row mt-4 md:gap-8">
          <button
            className="flex-1 text-[17px] py-3 border border-primary rounded-md text-primary order-2 md:order-1"
            onClick={() => setShowPopUp(false)}
          >
            Not yet
          </button>
          <button
            className="flex-1 text-[17px] py-3 bg-primary text-white rounded-md order-1 md:order-2"
          >
            Create free account
          </button>
        </div>
        </div>
      </div>
    </div>:  <div
      className={`fixed font-Poppins inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px] flex items-end md:items-center justify-center z-50 transition-all duration-300 ease-in-out
      ${showPopUp ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}
    >
      <div
        className="bg-white relative py-8 px-10 rounded-tr-[16px] rounded-tl-[16px] md:rounded-[16px] shadow-lg max-w-3xl  w-fit md:flex flex-col items-center text-center gap-6"
      >
        {/* Close Button */}
           <div className="flex items-center absolute top-8 right-10 justify-end ">
              <div className='cursor-pointer' onClick={() => {
        setShowPopUp(false);
      }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_35066"maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_35066)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg></div></div> 

        {/* Video Icon */}
        <div className="my-20 flex flex-col gap-5">
            <div className="flex justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#A68200]"
            width="80"
            height="80"
            viewBox="0 0 114 114"
            fill="none"
          >
            <path d="M95.5558 36.2228C94.6355 36.1165 93.7043 36.2816 92.8767 36.6978L71.25 47.504V66.504L92.8767 77.3103C93.6 77.6717 94.4036 77.8425 95.2113 77.8065C96.0191 77.7706 96.8043 77.529 97.4926 77.1047C98.1809 76.6804 98.7495 76.0874 99.1445 75.382C99.5395 74.6765 99.748 73.8818 99.75 73.0733V40.9348C99.7487 39.7722 99.321 38.6504 98.548 37.782C97.775 36.9136 96.7104 36.3588 95.5558 36.2228Z" fill="#A68200"/>
            <path d="M23.75 23.75C15.9363 23.75 9.5 30.1863 9.5 38V76C9.5 83.8138 15.9363 90.25 23.75 90.25H61.75C69.5638 90.25 76 83.8138 76 76V38C76 30.1863 69.5638 23.75 61.75 23.75H23.75Z" fill="#A68200"/>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-primary font-[700] text-[33px] md:text-[41px]">Start Video Call?</h2>

        {/* Description */}
        <p className="text-grey font-[400] text-[17px]  tex-center">
          You're about to request a live video call with the seller to view this product. Please make sure you have a stable internet connection.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-5 w-full md:flex-row mt-4 md:gap-8">
          <button
            className="flex-1 text-[17px] py-3 border border-primary rounded-md text-primary"
            onClick={() => setShowPopUp(false)}
          >
            Cancel
          </button>
          <button
            className="flex-1 text-[17px] py-3 bg-primary text-white rounded-md"
          >
            Start call
          </button>
        </div>
        </div>
      </div>
    </div>}
  </>
  );
};

export default VideoCallPopUp;
