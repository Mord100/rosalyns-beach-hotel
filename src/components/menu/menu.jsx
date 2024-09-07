import React from "react";
import cafeMenuImage from "../../assets/CAFE menu (1)-1.jpg";
import cafeMenuImage2 from "../../assets/CAFE menu (1)-2.jpg";
import foodMenuImage from "../../assets/Rosalyns Menu_Final_08082024-1.jpg";
import foodMenuImage1 from "../../assets/Rosalyns Menu_Final_08082024-2.jpg";
import foodMenuImage2 from "../../assets/Rosalyns Menu_Final_08082024-3.jpg";
import foodMenuImage3 from "../../assets/Rosalyns Menu_Final_08082024-4.jpg";
import foodMenuImage4 from "../../assets/Rosalyns Menu_Final_08082024-5.jpg";
import foodMenuImage5 from "../../assets/Rosalyns Menu_Final_08082024-6.jpg";
import foodMenuImage6 from "../../assets/Rosalyns Menu_Final_08082024-7.jpg";









const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-full max-w-3xl">
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                (openTab === 1
                  ? "text-[#E0B973] bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#food"
              role="tablist"
            >
              Food Menu
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                (openTab === 2
                  ? "text-[#E0B973] bg-" + color + "-600"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#drinks"
              role="tablist"
            >
              Drinks Menu
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-sm rounded">
          <div className=" py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="food">
                <img src={foodMenuImage} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage1} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage2} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage3} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage4} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage5} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={foodMenuImage6} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />


              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="drinks">

                <img src={cafeMenuImage} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />
                <img src={cafeMenuImage2} alt="Drinks Menu" className="mt-4 max-w-full h-auto rounded-md shadow-md" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TabsRender() {
  return <Tabs color="pink" />;
}
