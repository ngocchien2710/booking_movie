import MenuItem from "./MenuItem";
import menuData from "./menuData.json";
const Navigation = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[120px]">
      <img
        src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
        className="w-[136px] h-[59px] z-10 left-10"
      />

      <div className="flex flex-row w-[35%] justify-center items-center h-[120px]">
        <nav>
          <ul className="flex space-x-4 w-full  justify-center items-center h-[120px]">
            {menuData.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      </div>
      <img
        src="https://www.cgv.vn/media/wysiwyg/2019/AUG/kenhcine.gif"
        className="w-25 h-25 mb-5  "
      />
      <img
        src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
        className="w-25 h-25 mb-5 "
      />
    </div>
  );
};

export default Navigation;
