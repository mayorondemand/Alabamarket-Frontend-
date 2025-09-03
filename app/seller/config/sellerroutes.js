import { Store,MessageSquareText,ChartSpline,Settings} from 'lucide-react';
import { FaQuestion } from "react-icons/fa";

export const User_Routes = [
  {
    path: "/seller",
    label: "Store & Listings",
    icon: (
      <Store />
    
    )
  },
  {
    path: "/seller/communication",
    label: "Communication",
    icon: (
      <MessageSquareText />
    )
  },
  
 
  {
    path: "/seller/insignts",
    label: "Insights & Analytics",
    icon: (
     <ChartSpline />
    )
  },
  {
    path: "/seller/settings",
    label: "Account Settings",
    icon: (
     <Settings />
    )
  },
  {
    path: "/seller/help",
    label: "Help & support",
    icon: (
     <FaQuestion />
    )
  }
];