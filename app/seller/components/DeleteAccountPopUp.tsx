
import { DeleteIcon,Delete } from 'lucide-react';

interface LogoutProps {
  showLogout: boolean;
  setShowLogout: (show: boolean) => void;
}

const DeleteAccount= ({showLogout, setShowLogout}: LogoutProps) => {

  return (
  <>
  
  
  <div
      className={`fixed font-Poppins inset-0 bg-[rgba(57,64,58,0.35)] backdrop-blur-[3.5px] flex items-end md:items-center justify-center z-50 transition-all duration-300 ease-in-out
      ${showLogout ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    `}
    >
      <div
        className="bg-white relative py-8 px-10 max-w-3xl rounded-tr-[16px] rounded-tl-[16px] md:rounded-[16px] shadow-lg w-fit  flex flex-col items-center text-center gap-6"
      >
        {/* Close Button */}
           <div className="flex items-center absolute top-8 right-10 justify-end ">
              <div className='cursor-pointer' onClick={() => {
        setShowLogout(false);
      }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <mask id="mask0_365_35066"maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M14.8289 9.17188L9.17188 14.8289M9.17188 9.17188L14.8289 14.8289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </mask>
  <g mask="url(#mask0_365_35066)">
    <path d="M0 0H24V24H0V0Z" fill="#E30808"/>
  </g>
</svg></div></div> 

        {/* Logout icon  */}
      
        <div className="my-20 flex flex-col gap-5">
            <div className="flex justify-center ">
         
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 6.66406C17.3478 6.66406 14.8043 7.71763 12.9289 9.59299C11.0536 11.4684 10 14.0119 10 16.6641V63.3307C10 65.9829 11.0536 68.5264 12.9289 70.4018C14.8043 72.2772 17.3478 73.3307 20 73.3307H40C42.6522 73.3307 45.1957 72.2772 47.0711 70.4018C48.9464 68.5264 50 65.9829 50 63.3307V16.6641C50 14.0119 48.9464 11.4684 47.0711 9.59299C45.1957 7.71763 42.6522 6.66406 40 6.66406H20ZM54.31 24.3074C54.9351 23.6825 55.7828 23.3314 56.6667 23.3314C57.5505 23.3314 58.3982 23.6825 59.0233 24.3074L72.3567 37.6407C72.9816 38.2658 73.3326 39.1135 73.3326 39.9974C73.3326 40.8813 72.9816 41.729 72.3567 42.3541L59.0233 55.6874C58.3947 56.2946 57.5527 56.6306 56.6787 56.623C55.8047 56.6154 54.9686 56.2648 54.3506 55.6468C53.7326 55.0288 53.382 54.1927 53.3744 53.3187C53.3668 52.4447 53.7028 51.6027 54.31 50.9741L61.9533 43.3307H33.3333C32.4493 43.3307 31.6014 42.9795 30.9763 42.3544C30.3512 41.7293 30 40.8815 30 39.9974C30 39.1133 30.3512 38.2655 30.9763 37.6404C31.6014 37.0153 32.4493 36.6641 33.3333 36.6641H61.9533L54.31 29.0207C53.6851 28.3956 53.334 27.5479 53.334 26.6641C53.334 25.7802 53.6851 24.9325 54.31 24.3074Z" fill="#E30808"/>
</svg>
        </div>

        {/* Title */}
        <h2 className="text-primary font-[700] text-[33px] md:text-[41px]">Delete account?</h2>

        {/* Description */}
        <p className="text-grey font-[400] text-[17px]  tex-center">
           This will permanently remove your store, all listings, messages, and reviews. You won’t be able to recover any data once deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-5 w-full md:flex-row mt-4 md:gap-8">
          <button
            className="flex-1 text-[17px] py-3 border border-primary rounded-md text-primary order-2 md:order-1"
            onClick={() => setShowLogout(false)}
          >
            No, cancel
          </button>
          <button
            className="flex-1 text-[17px] py-3 bg-red text-white rounded-md order-1 md:order-2"
          >
           Yes, Delete  
          </button>
        </div>
        </div>
      </div>
    </div> 
    
   
  </>
  );
};

export default DeleteAccount;
