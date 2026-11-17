/* ===== DỮ LIỆU SẢN PHẨM =====
   Thêm bánh mới: chép 1 dòng trong nhóm tương ứng theo dạng
   ["Tên bánh", giá (đơn vị nghìn đồng), màu 0-5, kiểu 0-2, "Mới" | "Bán chạy" | "", "nguyên liệu đặc trưng, cách nhau dấu phẩy"]
   Ảnh: đặt file vào thư mục images/ với tên theo file images/DANH-SACH-TEN-ANH.txt */

// Nguyên liệu nền dùng chung cho từng nhóm
const KT="bột mì, trứng gà, đường, sữa tươi, bơ lạt, kem tươi whipping";
const FD="bột mì, trứng gà, bơ, đường, fondant, kem bơ";
const SK="bột mì, trứng gà, bơ, sữa tươi, đường, kem custard";
const TA="bột mì, bơ, đường, trứng gà, kem custard";
const BL="trứng gà, bột mì, đường, dầu ăn, sữa tươi";
const CU="bột mì, trứng gà, bơ, đường, sữa tươi, kem bơ";
const MA="bột mì, men, bơ, sữa, muối, phô mai";
const MC="bột mì, bơ, trứng gà, sữa, muối, sốt kem";
const TI="mascarpone, kem tươi, trứng gà, đường, bánh ladyfinger";
const MO="kem tươi, gelatin, trứng gà, đường, sữa tươi";
const MR="bột hạnh nhân, lòng trắng trứng, đường, kem bơ";
const CH="cream cheese, trứng gà, kem tươi, đường, đế bánh quy bơ";
const BM="bột mì, men, muối, nước, bơ";
const CK="bột mì, bơ, đường, trứng gà, muối";
const KE="bột hạnh nhân, trứng gà, bơ, đường erythritol, kem tươi";
const KD="bột mì nguyên cám, yến mạch, trứng gà, đường stevia";
const TC="bột mì, sữa hạt, dầu dừa, đường mía";
const TT="bột mì, đường, dầu ăn, lòng đỏ trứng, nước đường";
const GS="bột mì, bơ, đường, trứng gà, quế";
const TE="bột mì, bơ, đường, trứng gà";
// Hướng dẫn bảo quản
const K1="Bảo quản 2–6°C, dùng trong 24 giờ";
const K2="Bảo quản 2–6°C, dùng trong 48 giờ";
const K3="Nơi khô thoáng, dùng trong 3–5 ngày";
const K4="Ngon nhất trong ngày, nướng lại 3 phút trước khi dùng";
const K5="Nơi khô thoáng, dùng trong 7–10 ngày";

// [id danh mục, tên, mô tả, [[id nhóm, tên nhóm, nguyên liệu nền, bảo quản, [sản phẩm...]]]]
const C=[
["sinh-nhat","Bánh sinh nhật","Kem tươi, fondant, bánh sự kiện và bánh in theo yêu cầu.",[
 ["kem-tuoi","Bánh kem tươi",KT,K1,[
  ["Bánh kem dâu tươi",385,0,0,"Mới","dâu tây Đà Lạt, mứt dâu"],
  ["Bánh kem kiwi tươi",375,5,0,"","kiwi xanh, kiwi vàng"],
  ["Bánh kem xoài tươi",360,4,0,"","xoài cát chín, sốt xoài"],
  ["Bánh kem socola tươi",340,1,0,"Bán chạy","socola đen 55%, ganache"],
  ["Bánh kem việt quất",390,0,0,"","việt quất tươi, mứt việt quất"],
  ["Bánh kem trái cây tổng hợp",395,2,0,"","dâu, kiwi, xoài, nho"]]],
 ["fondant","Bánh fondant",FD,K3,[
  ["Bánh fondant công chúa",750,0,0,"","fondant hồng, nhân kem bơ vani"],
  ["Bánh fondant siêu nhân",720,5,0,"Mới","fondant nhiều màu, nhân kem bơ socola"],
  ["Bánh fondant thú cưng",690,2,0,"","fondant tạo hình 3D, nhân kem bơ vani"],
  ["Bánh fondant hoa hồng",680,0,0,"","hoa fondant, nhân kem bơ dâu"]]],
 ["su-kien","Bánh sự kiện",KT,K2,[
  ["Bánh sự kiện 2 tầng",1250,3,0,"","kem tươi vani, trái cây tươi"],
  ["Bánh khai trương hoa hồng",980,0,0,"","kem bơ, hoa hồng kem"],
  ["Bánh cưới 3 tầng",2100,2,0,"","kem bơ vani, hoa ăn được"],
  ["Bánh tiệc công ty in logo",880,3,0,"","kem tươi, giấy gạo in logo"]]],
 ["in-hinh","Bánh in hình / in chữ",KT,K1,[
  ["Bánh in hình theo yêu cầu",450,2,0,"","giấy gạo in hình ăn được"],
  ["Bánh in chữ chúc mừng",390,3,0,"","sốt socola viết chữ"],
  ["Bánh in ảnh gia đình",420,2,0,"Mới","giấy gạo in ảnh, kem tươi vani"],
  ["Bánh in logo thương hiệu",520,3,0,"","giấy gạo in logo, kem tươi"]]]]],
["banh-ngot","Bánh ngọt","Su kem, tart, bông lan và cupcake cho bữa trà chiều.",[
 ["su-kem","Bánh su kem",SK,K1,[
  ["Su kem vani 6 cái",69,2,2,"Bán chạy","kem vani Madagascar"],
  ["Su kem socola 6 cái",79,1,2,"","kem socola, vỏ phủ socola"],
  ["Su kem matcha 6 cái",85,5,2,"Mới","bột matcha Nhật"],
  ["Su kem dâu 6 cái",82,0,2,"","kem dâu tươi"]]],
 ["tart","Bánh tart",TA,K2,[
  ["Tart trái cây tươi",65,0,2,"","dâu, kiwi, việt quất"],
  ["Tart chanh leo",58,4,2,"Mới","chanh dây, sốt chanh leo"],
  ["Tart trứng",32,4,2,"Bán chạy","kem trứng sữa, vani"],
  ["Tart socola hạt",62,1,2,"","socola đen, hạnh nhân lát"]]],
 ["bong-lan","Bánh bông lan",BL,K3,[
  ["Bông lan trứng muối",89,4,0,"Bán chạy","trứng muối, chà bông, sốt phô mai"],
  ["Bông lan cuộn lá dứa",75,5,0,"","nước cốt lá dứa, kem sữa"],
  ["Bông lan cuộn socola",80,1,0,"","bột cacao, kem socola"],
  ["Bông lan phô mai nướng",95,2,0,"","phô mai cream cheese"]]],
 ["cupcake","Cupcake",CU,K3,[
  ["Cupcake vani 6 cái",145,2,1,"","vani, kem bơ vani"],
  ["Cupcake red velvet 6 cái",165,0,1,"Mới","bột cacao đỏ, kem phô mai"],
  ["Cupcake socola 6 cái",155,1,1,"Bán chạy","cacao, kem bơ socola"],
  ["Cupcake matcha 6 cái",160,5,1,"","bột matcha, kem bơ matcha"]]]]],
["banh-man","Bánh mặn","Nướng mới mỗi sáng, ăn sáng hoặc ăn nhẹ đều hợp.",[
 ["mi-cha-bong","Bánh mì chà bông phô mai",MA,K4,[
  ["Bánh mì chà bông phô mai",32,4,2,"Bán chạy","chà bông heo, phô mai mozzarella"],
  ["Bánh mì chà bông trứng muối",35,4,2,"","chà bông, trứng muối, sốt mayonnaise"],
  ["Bánh mì chà bông bơ tỏi",34,4,2,"","chà bông, bơ tỏi, hành lá"],
  ["Bánh mì chà bông mayonnaise",30,4,2,"","chà bông, sốt mayonnaise"]]],
 ["sung-trau-man","Bánh sừng trâu mặn",MC,K4,[
  ["Sừng trâu nhân xúc xích",28,4,2,"","xúc xích Đức"],
  ["Sừng trâu phô mai",30,2,2,"","phô mai cheddar"],
  ["Sừng trâu thịt nguội",33,4,2,"","giăm bông, phô mai lát"],
  ["Sừng trâu gà phô mai",35,4,2,"Mới","gà xé, phô mai"]]],
 ["tart-man","Bánh tart mặn",TA,K1,[
  ["Tart mặn gà nấm",42,4,2,"","thịt gà, nấm, sốt kem"],
  ["Tart mặn thịt xông khói",45,1,2,"Mới","thịt xông khói, phô mai"],
  ["Tart mặn tôm phô mai",48,4,2,"","tôm, phô mai mozzarella"],
  ["Tart mặn rau củ phô mai",40,5,2,"","bông cải, cà rốt, phô mai"]]]]],
["banh-lanh","Bánh lạnh","Giữ lạnh trong hộp đá khi giao.",[
 ["tiramisu","Tiramisu",TI,K2,[
  ["Tiramisu cốc",55,3,0,"Bán chạy","cà phê espresso, bột cacao"],
  ["Tiramisu matcha",62,5,0,"","bột matcha, kem mascarpone"],
  ["Tiramisu dâu",60,0,0,"","dâu tây tươi, mứt dâu"],
  ["Tiramisu nguyên hộp",190,3,0,"","cà phê espresso, rượu rum, cacao"]]],
 ["mousse","Mousse",MO,K2,[
  ["Mousse socola",58,1,0,"","socola đen 60%"],
  ["Mousse xoài",56,4,0,"","xoài cát, sốt xoài"],
  ["Mousse chanh dây",56,4,0,"","chanh dây, nước cốt chanh"],
  ["Mousse dâu",58,0,0,"Mới","dâu tây tươi"]]],
 ["macaron","Macaron",MR,K2,[
  ["Hộp macaron 6 vị",210,5,2,"","matcha, dâu, socola, chanh dây, vani, hạt dẻ"],
  ["Hộp macaron 12 vị",395,0,2,"Mới","12 vị trái cây, socola và hạt"],
  ["Hộp macaron 3 cái",105,2,2,"","3 vị tùy chọn"],
  ["Macaron lẻ 1 cái",35,0,2,"","vị tùy chọn"]]],
 ["cheesecake","Cheesecake",CH,K2,[
  ["Cheesecake chanh dây",75,2,0,"Mới","chanh dây, sốt chanh leo"],
  ["Cheesecake dâu",78,0,0,"","dâu tây, mứt dâu"],
  ["Cheesecake oreo",80,1,0,"","bánh oreo nghiền, kem oreo"],
  ["Basque burnt cheesecake",85,4,0,"Bán chạy","cream cheese nướng cháy cạnh"]]]]],
["banh-mi","Bánh mì & Bánh nướng","Bột ủ chậm, nướng trong ngày.",[
 ["hoa-cuc","Bánh mì hoa cúc",BM,K4,[
  ["Bánh mì hoa cúc",45,3,2,"","bơ sữa, trứng gà"],
  ["Bánh mì hoa cúc nhân kem",52,3,2,"","kem sữa vani"],
  ["Bánh mì hoa cúc nho khô",48,3,2,"","nho khô, bơ sữa"],
  ["Bánh mì hoa cúc mè",46,3,2,"","mè trắng, bơ sữa"]]],
 ["baguette","Baguette",BM,K4,[
  ["Baguette truyền thống",22,4,2,"","bột mì ủ chậm"],
  ["Baguette nguyên cám",28,4,2,"","bột mì nguyên cám"],
  ["Baguette bơ tỏi",35,4,2,"Bán chạy","bơ lạt, tỏi, ngò tây"],
  ["Baguette phô mai",38,2,2,"","phô mai cheddar"]]],
 ["sung-trau","Bánh sừng trâu",CK,K4,[
  ["Sừng trâu bơ Pháp",32,4,2,"","bơ Pháp lên men"],
  ["Sừng trâu socola",36,1,2,"","socola đen"],
  ["Sừng trâu hạnh nhân",40,4,2,"Mới","hạnh nhân lát, kem hạnh nhân"],
  ["Sừng trâu nhân kem",38,2,2,"","kem custard vani"]]],
 ["cookies","Bánh quy / Cookies",CK,K5,[
  ["Cookies socola chip",85,1,1,"Bán chạy","socola chip, đường nâu"],
  ["Cookies bơ yến mạch",78,4,1,"","yến mạch, nho khô"],
  ["Cookies matcha",88,5,1,"","bột matcha, socola trắng"],
  ["Cookies hạnh nhân",90,4,1,"","hạnh nhân lát, bơ"]]]]],
["healthy","Bánh Healthy / Ăn kiêng","Ít đường, ít tinh bột, vẫn đủ vị.",[
 ["keto","Bánh Keto",KE,K2,[
  ["Bánh Keto hạnh nhân",98,5,0,"Mới","bột hạnh nhân, hạnh nhân lát"],
  ["Bánh Keto phô mai",110,2,0,"","cream cheese, bột hạnh nhân"],
  ["Bánh Keto socola",105,1,0,"","cacao nguyên chất"],
  ["Bánh Keto chanh",100,4,0,"","nước cốt chanh, vỏ chanh"]]],
 ["khong-duong","Bánh không đường",KD,K3,[
  ["Bông lan không đường",85,5,0,"","bột nguyên cám, đường stevia"],
  ["Cookies yến mạch không đường",72,4,1,"","yến mạch, chà là"],
  ["Brownie không đường",95,1,0,"","cacao, hạt óc chó"],
  ["Muffin chuối không đường",70,4,1,"","chuối chín, yến mạch"]]],
 ["thuan-chay","Bánh thuần chay",TC,K3,[
  ["Bánh chuối óc chó thuần chay",90,4,0,"","chuối chín, hạt óc chó"],
  ["Cupcake socola thuần chay",120,1,1,"Mới","cacao, sữa hạnh nhân"],
  ["Bánh matcha thuần chay",105,5,0,"","matcha, sữa dừa"],
  ["Cookies hạt thuần chay",80,4,1,"","hạt điều, hạt bí, dầu dừa"]]]]],
["khac","Các loại bánh khác","Bánh theo mùa và đặc sản.",[
 ["trung-thu","Bánh Trung Thu",TT,K5,[
  ["Bánh Trung Thu thập cẩm",95,4,2,"Bán chạy","hạt sen, lạp xưởng, hạt dưa, trứng muối"],
  ["Bánh Trung Thu trà xanh",105,5,2,"","đậu xanh, bột trà xanh"],
  ["Bánh Trung Thu đậu xanh sầu riêng",120,4,2,"","đậu xanh, sầu riêng Ri6"],
  ["Bánh Trung Thu trứng muối",110,4,2,"","đậu xanh, trứng muối"]]],
 ["giang-sinh","Bánh Giáng sinh",GS,K5,[
  ["Bánh khúc cây Giáng sinh",420,1,0,"Mới","socola, kem bơ, nấm meringue"],
  ["Bánh gừng Giáng sinh",120,4,1,"","gừng, mật ong, đinh hương"],
  ["Bánh trái cây khô",260,4,0,"","nho khô, cam sấy, hạt dẻ, rượu rum"],
  ["Panettone",280,2,0,"","nho khô, vỏ cam, bơ"]]],
 ["tet","Bánh Tết & đặc sản",TE,K5,[
  ["Bánh pía sầu riêng",68,4,2,"","sầu riêng, đậu xanh, trứng muối"],
  ["Bánh dừa nướng",55,2,2,"","cơm dừa, nước cốt dừa"],
  ["Bánh in đậu xanh",45,3,2,"","đậu xanh, đường cát"],
  ["Bánh quy bơ Tết",150,4,1,"Mới","bơ, mứt hạt sen, hạnh nhân"]]]]]];
