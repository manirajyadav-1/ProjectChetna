import MarqueeItem from "./MarqueeItem";
import GoodLife from "../../assets/goodlife.png";
import HimalayanBank from "../../assets/himalayanbank.jpeg";
import AbsoluteInterior from "../../assets/absoluteinteriors.png";
import AsiaPublication from "../../assets/asiapublication.jpeg";
import AsmitaPublication from "../../assets/asmitapublication.jpeg";
import BooksOfJoy from "../../assets/booksofjoy.jpg";
import Cwin from "../../assets/cwin.jpeg";
import DirghayuBhava from "../../assets/dirghayubhava.png";
import EventiqueNepal from "../../assets/eventiquenepal.jpg";
import HamroAaramva from "../../assets/hamroaaramava.jpg";
import KathmanduMarketing from "../../assets/kathmandumarketing.jpeg";
import KayaSports from "../../assets/kayasports.jpg";
import KibuEnergy from "../../assets/kibuenergy.jpg";
import MambaSports from "../../assets/mambasports.jpg";
import NepalStock from "../../assets/nepalstockhouse.png";
import QuicklyFurnitech from "../../assets/quicklyfurnitech.jpg";
import RajshreeSavings from "../../assets/rajshreesavings.png";
import RotaractDharan from "../../assets/rotaract_dharan.jpg";
import Rotaract from "../../assets/rotaract.jpg";
import SabdarthaPrakashan from "../../assets/sabdarthaprakashan.jpeg";
import ShivashaktiEdumart from "../../assets/shivashaktiedumart.jpg";
import Sicily from "../../assets/sicily.jpg";
import Softy from "../../assets/softy.jpg";
import Triaex from "../../assets/triaex.jpg";
import TrueDerma from "../../assets/truederma.png";
import YouthForGood from "../../assets/youthforgood.jpg";

export const upperMarquee = [
  GoodLife,
  HimalayanBank,
  Softy,
  AsmitaPublication,
  AsiaPublication,
  Cwin,
  BooksOfJoy,
  DirghayuBhava,
  HamroAaramva,
  EventiqueNepal,
  AbsoluteInterior,
  NepalStock,
  RajshreeSavings,
  Rotaract,
  TrueDerma
];

export const lowerMarquee = [
  RotaractDharan,
  KathmanduMarketing,
  KayaSports,
  KibuEnergy,
  MambaSports,
  QuicklyFurnitech,
  SabdarthaPrakashan,
  ShivashaktiEdumart,
  Sicily,
  Triaex,
  YouthForGood
];


const Marquee = () => {
  return (
    <div className="container mx-auto mt-10 border-t-2 space-y-4 mb-20">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
